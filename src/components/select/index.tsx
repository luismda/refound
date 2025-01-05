import { CaretDown, Check } from '@phosphor-icons/react'
import * as SelectPrimitive from '@radix-ui/react-select'
import type { HTMLAttributes, LabelHTMLAttributes } from 'react'
import styles from './styles.module.scss'

interface SelectProps extends HTMLAttributes<HTMLDivElement> {
  isDanger?: boolean
}

function Select({ isDanger = false, ...props }: SelectProps) {
  return <div data-danger={isDanger} className={styles.container} {...props} />
}

interface FieldProps {
  options: Record<'value' | 'text', string>[]
  id?: string
  name?: string
  value?: string
  onChange?: (value: string) => void
}

function Field({ options, id, name, value, onChange }: FieldProps) {
  return (
    <SelectPrimitive.Root name={name} value={value} onValueChange={onChange}>
      <SelectPrimitive.Trigger id={id} className={styles.trigger}>
        <SelectPrimitive.Value placeholder="Selecione" />

        <SelectPrimitive.Icon>
          <CaretDown size={20} />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content position="popper" className={styles.content}>
          <SelectPrimitive.Viewport className={styles.viewport}>
            {options.map(option => {
              return (
                <SelectPrimitive.Item
                  key={option.value}
                  value={option.value}
                  className={styles.item}
                >
                  <span className={styles.itemIndicator}>
                    <SelectPrimitive.ItemIndicator>
                      <Check size={20} />
                    </SelectPrimitive.ItemIndicator>
                  </span>

                  <SelectPrimitive.ItemText>
                    {option.text}
                  </SelectPrimitive.ItemText>
                </SelectPrimitive.Item>
              )
            })}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
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

Select.Label = Label
Select.Field = Field

export { Select }
