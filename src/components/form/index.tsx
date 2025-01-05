import { Button } from '../button'
import { Card } from '../card'
import { Input } from '../input'
import { Select } from '../select'

import styles from './styles.module.scss'

import { useAppDispatch } from '@/store'
import { refoundActions } from '@/store/slices/refound'
import { categories } from '@/utils/categories'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

const newRequestFormSchema = z.object({
  title: z.string().trim().min(1),
  categoryId: z.string().trim().min(1),
  value: z.number().gt(0),
})

type NewRequestFormData = z.infer<typeof newRequestFormSchema>

export function Form() {
  const {
    control,
    formState: { errors },
    reset,
    register,
    handleSubmit,
  } = useForm<NewRequestFormData>({
    resolver: zodResolver(newRequestFormSchema),
    defaultValues: {
      title: '',
      categoryId: '',
      value: 0,
    },
  })

  const dispatch = useAppDispatch()

  function handleAddNewRequest(data: NewRequestFormData) {
    dispatch(refoundActions.addRequest(data))

    reset()
  }

  return (
    <Card className={styles.card}>
      <header>
        <h1>Solicitação de reembolso</h1>

        <p>
          Informe os dados da despesa para solicitar reembolso. A despesa será
          analisada e reembolsada em até 30 dias.
        </p>
      </header>

      <form onSubmit={handleSubmit(handleAddNewRequest)}>
        <Input isDanger={!!errors.title}>
          <Input.Label htmlFor="title">Título da despesa</Input.Label>
          <Input.Field id="title" {...register('title')} />
        </Input>

        <div className={styles.group}>
          <Select isDanger={!!errors.categoryId}>
            <Select.Label htmlFor="category">Categoria</Select.Label>

            <Controller
              control={control}
              name="categoryId"
              render={({ field: { name, value, onChange } }) => (
                <Select.Field
                  id="category"
                  options={categories}
                  name={name}
                  value={value}
                  onChange={onChange}
                />
              )}
            />
          </Select>

          <Input isDanger={!!errors.value}>
            <Input.Label htmlFor="value">Valor</Input.Label>

            <Controller
              control={control}
              name="value"
              render={({ field: { name, value, onChange } }) => (
                <Input.PriceField
                  id="value"
                  placeholder="0,00"
                  name={name}
                  value={value}
                  onChange={onChange}
                />
              )}
            />
          </Input>
        </div>

        <Button type="submit">Adicionar despesa</Button>
      </form>
    </Card>
  )
}
