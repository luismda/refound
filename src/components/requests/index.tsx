import { refoundActions } from '@/store/slices/refound'
import { Card } from '../card'
import { RequestItem } from '../request-item'

import styles from './styles.module.scss'

import { useAppDispatch, useAppSelector } from '@/store'
import { priceFormatter } from '@/utils/price-formatter'

export function Requests() {
  const dispatch = useAppDispatch()
  const requests = useAppSelector(state => state.refound.requests)

  function handleDeleteRequest(requestId: string) {
    dispatch(refoundActions.deleteRequest(requestId))
  }

  const amount = requests.length
  const sum = requests.reduce((sum, request) => sum + request.value, 0)

  return (
    <Card className={styles.card}>
      <div className={styles.summary}>
        <div className={styles.info}>
          <h2>Minhas solicitações</h2>
          <span className={styles.point} />

          <span className={styles.counter}>
            {amount} {amount === 1 ? 'despesa' : 'despesas'}
          </span>
        </div>

        <strong>
          <span>R$</span> {priceFormatter.format(sum)}
        </strong>
      </div>

      <ul>
        {requests.length > 0 ? (
          requests.map(request => {
            return (
              <RequestItem
                key={request.id}
                data={request}
                onRemove={handleDeleteRequest}
              />
            )
          })
        ) : (
          <p>Nenhuma despesa adicionada.</p>
        )}
      </ul>
    </Card>
  )
}
