import { classNames } from '#utils/classNames'
import { FCC } from '#utils/FCC'
import { useState } from 'react'
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid'
import { variantToClassName, actionsVariants } from './variants'
import { ISplitButton, IAction, ISection } from './interface'
// import { generateChildrenElement } from '#utils/generateChidrenElement'


 const SplitButton: FCC<ISplitButton> = ({
    children,
    variant = 'filled-primary',
    size = 'base',
    text='Button',
    ...rest
}) => {
    const [active, setActive] = useState(false)
    const [listPosition, setListPosition] = useState(0)

    const handleClick = () => {
        setActive(prevVal => !prevVal)
    }

    return (
        <div className='relative'>
            <div
                {...rest}
                className={classNames(
                    'flex font-bold rounded overflow-hidden text-white cursor-pointer group select-none outline-none shadow-sm-3 hover:shadow-sm-4',
                    variantToClassName[variant].parent,
                    rest.className && rest.className
                )}
                onClick={ handleClick }
            >
                <div className={classNames(
                        'px-6 mr-px',
                        size === "base" ? 'py-3' : 'py-2',
                        variantToClassName[variant].child
                    )}
                >{ text }</div>
                <div className={classNames(
                        "px-3 py-3 flex items-center",
                        size === "base" ? 'py-3' : 'py-2',
                        variantToClassName[variant].child
                    )}
                >
                    { 
                        active ? <ChevronUpIcon className="h-4 w-4"/>
                            : <ChevronDownIcon className="h-4 w-4"/>
                    }
                </div>
            </div>

            {
                active && 
                    <div 
                        { ...rest }
                        className={classNames(
                            `bg-white 
                                w-full 
                                absolute 
                                shadow-md-1 
                                rounded-sm z-20 
                                left-0 
                                border-[1px] 
                                ${window.innerHeight - listPosition  > 500 ? 'top-[120%]' : 'bottom-[120%]'}
                            `
                        )}
                        ref={el => {
                            if(!el) return ;
                            if(listPosition === 0) setListPosition(el.getBoundingClientRect().top)
                        }}
                        onBlur={() => setActive(false)}
                        onBlurCapture={() => setActive(false)}
                        // onBlur={setActive(false)}
                    >
                        {/* { generateChildrenElement(children, {onClick}) } */}
                        { children }
                </div>
            }
        </div>
    )
}

export const Section: FCC<ISection> = ({
    children,
    sectionTitle='',
    ...rest
}) => {
    return (
        <div 
            { ...rest }
            className={classNames(
                "w-full"
            )}
        >
            { sectionTitle && (
                <div className="text-xs m-0 border-b-[1px] ">
                    <p className="my-1 mx-3 font-bold">{ sectionTitle }</p>
                </div>
            )}
            <div className="py-3">
                { children }
            </div>
        </div>
    )
}

export const Action: FCC<IAction> = ({
    children,
    onClick,
    text,
    variant="primary",
    ...rest
}) => {
    return (
        <div 
            { ...rest }
            className={classNames(
                "flex py-3 px-4 items-center cursor-pointer text-sm transition-all",
                actionsVariants[variant]
            )}
            onClick={onClick}
        >
            <div className="mr-2">{ children }</div>
            <p>{ text }</p>
        </div>
    )
}

export default Object.assign(SplitButton, { Section, Action })