/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

export const generateChildrenElement = (
  children: React.ReactNode,
  props: Record<any, any>
) => {
  return Array.isArray(children)
    ? children.map((child: React.ReactNode, idx) => {
        return React.cloneElement(child as any, {
          key: idx,
          ...props
        })
      })
    : React.cloneElement(children as any, props)
}
