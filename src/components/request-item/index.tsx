import { X } from '@phosphor-icons/react'

import styles from './styles.module.scss'

import type { Request } from '@/store/slices/refound'
import { categoryIconMapping, categoryTextMapping } from '@/utils/categories'
import { priceFormatter } from '@/utils/price-formatter'

interface RequestItemProps {
  data: Request
  onRemove: (requestId: string) => void
}

export function RequestItem({ data, onRemove }: RequestItemProps) {
  const CategoryIcon = categoryIconMapping[data.categoryId]
  const categoryText = categoryTextMapping[data.categoryId]

  return (
    <li className={styles.container}>
      <div className={styles.info}>
        <div className={styles.icon}>
          <CategoryIcon size={18} weight="fill" />
        </div>

        <div className={styles.text}>
          <span className={styles.title}>{data.title}</span>
          <span className={styles.category}>{categoryText}</span>
        </div>
      </div>

      <div className={styles.action}>
        <span className={styles.price}>
          <span>R$</span> {priceFormatter.format(data.value)}
        </span>

        <button type="button" onClick={() => onRemove(data.id)}>
          <X size={12} weight="bold" />
        </button>
      </div>
    </li>
  )
}
