// Put this in your global types.ts

import { FC, PropsWithChildren } from 'react'

// Custom Type for a React functional component with props AND CHILDREN
export type FCC<P = Record<string, unknown>> = FC<PropsWithChildren<P>>
