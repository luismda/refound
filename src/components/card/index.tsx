import { Slot } from '@radix-ui/react-slot'
import type { ReactNode } from 'react'

import styles from './styles.module.scss'

interface CardProps {
  children: ReactNode
  asChild?: boolean
  className?: string
}

export function Card({ children, asChild = false, className = '' }: CardProps) {
  const Element = asChild ? Slot : 'div'

  return (
    <Element className={`${styles.container} ${className}`}>{children}</Element>
  )
}
