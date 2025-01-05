import {
  type HTMLAttributes,
  type InputHTMLAttributes,
  type LabelHTMLAttributes,
  forwardRef,
} from 'react'

import styles from './styles.module.scss'

const priceInputFormatter = Intl.NumberFormat('pt-BR', {
  currency: 'BRL',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

interface InputProps extends HTMLAttributes<HTMLDivElement> {
  isDanger?: boolean
}

function Input({ isDanger = false, ...props }: InputProps) {
  return <div data-danger={isDanger} className={styles.container} {...props} />
}

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor: string
}

function Label({ htmlFor, children, ...props }: LabelProps) {
  return (
    <label htmlFor={htmlFor} {...props}>
      {children}
    </label>
  )
}

type FieldProps = InputHTMLAttributes<HTMLInputElement>

const Field = forwardRef<HTMLInputElement, FieldProps>((props, ref) => {
  return <input ref={ref} {...props} />
})

interface PriceFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  value?: number
  onChange?: (price: number) => void
}

function PriceField({ value = 0, onChange, ...props }: PriceFieldProps) {
  function handleFormat(price: string) {
    const cleanValue = price.replace(/\D/g, '')
    const priceValue = Number(cleanValue) / 100

    onChange?.(priceValue)
  }

  const priceValue = priceInputFormatter.format(value)

  return (
    <input
      {...props}
      type="text"
      value={priceValue}
      onChange={event => handleFormat(event.target.value)}
    />
  )
}

Input.Label = Label
Input.Field = Field
Input.PriceField = PriceField

export { Input }
