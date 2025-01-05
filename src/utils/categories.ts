import {
  Bed,
  ForkKnife,
  type Icon,
  PoliceCar,
  Receipt,
  Wrench,
} from '@phosphor-icons/react'

export const categories = [
  {
    value: '1',
    text: 'Alimentação',
  },
  {
    value: '2',
    text: 'Hospedagem',
  },
  {
    value: '3',
    text: 'Transporte',
  },
  {
    value: '4',
    text: 'Serviços',
  },
  {
    value: '5',
    text: 'Outros',
  },
]

export const categoryIconMapping: Record<string, Icon> = {
  '1': ForkKnife,
  '2': Bed,
  '3': PoliceCar,
  '4': Wrench,
  '5': Receipt,
}

export const categoryTextMapping: Record<string, string> = {
  '1': 'Alimentação',
  '2': 'Hospedagem',
  '3': 'Transporte',
  '4': 'Serviços',
  '5': 'Outros',
}
