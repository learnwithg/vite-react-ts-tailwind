import { ButtonVariant, ClassInterface, ActionType } from './interface'

export const variantToClassName: Record<ButtonVariant, ClassInterface> = {
    'filled-primary': {
        parent: 'text-white',
        child: 'bg-interactive-primary-neutral group-hover:bg-interactive-primary-hovered group-active:bg-interactive-primary-pressed',
    },
      
    'filled-secondary': {
            parent: 'text-main-body hover:text-main-text active:text-main-heading',
            child: 'bg-interactive-secondary-neutral group-hover:bg-interactive-secondary-hovered group-active:bg-interactive-secondary-pressed ',
        },
      
    'filled-success': {
            parent: 'text-white',
            child: 'bg-interactive-success-neutral group-hover:bg-interactive-success-hovered group-active:bg-interactive-success-pressed',
        },
      
    'filled-warning': {
            parent: 'text-white',
            child: 'bg-interactive-warning-neutral group-hover:bg-interactive-warning-hovered group-active:bg-interactive-warning-pressed',
        },
      
    'filled-danger': {
            parent: 'text-white',
            child: 'bg-interactive-danger-neutral group-hover:bg-interactive-danger-hovered group-active:bg-interactive-danger-pressed',
        },
      
    'filled-info': {
            parent: 'text-white',
            child: 'bg-interactive-info-neutral group-hover:bg-interactive-info-hovered group-active:bg-interactive-info-pressed',
        },
      
    'outlined-primary': {
            parent: 'text-interactive-primary-neutral hover:text-interactive-primary-hovered active:text-interactive-primary-pressed',
            child: 'border border-interactive-primary-neutral group-hover:bg-surface-primary-hovered box-border first-of-type:rounded-l last-of-type:rounded-r',
        },
      
    'outlined-secondary': {
            parent: 'text-white',
            child: 'border border-gray-800 text-gray-800 group-hover:bg-surface-secondary-hovered',
        },
      
    'outlined-success': {
            parent: 'text-white',
            child: 'border border-interactive-success-neutral text-interactive-success-neutral group-hover:text-interactive-success-hovered group-active:text-interactive-success-pressed group-hover:bg-surface-success-hovered',
        },
      
    'outlined-warning': {
            parent: 'text-white',
            child: 'border border-interactive-warning-neutral text-interactive-warning-neutral group-hover:text-interactive-warning-hovered group-active:text-interactive-warning-pressed group-hover:bg-surface-warning-hovered',
        },
      
    'outlined-danger': {
            parent: 'text-white',
            child: 'border border-interactive-danger-neutral text-interactive-danger-neutral group-hover:text-interactive-danger-hovered group-active:text-interactive-danger-pressed group-hover:bg-surface-danger-hovered',
        },
      
    'outlined-info': {
            parent: 'text-white',
            child: 'border border-interactive-info-neutral text-interactive-info-neutral group-hover:text-interactive-info-hovered group-active:text-interactive-info-pressed group-hover:bg-surface-info-hovered'
        }
      
}

export const actionsVariants: Record<ActionType, string> = {
    'primary' : 'text-main-body hover:bg-surface-primary-hovered hover:text-interactive-primary-neutral',
    'success' : 'text-main-body hover:bg-surface-success-hovered hover:text-interactive-success-hovered',
    'danger' : 'text-main-danger hover:bg-surface-danger-hovered hover:text-interactive-danger-hovered'
}

