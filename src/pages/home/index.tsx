import styles from './styles.module.scss'

import { Form } from '@/components/form'
import { Logo } from '@/components/logo'
import { Requests } from '@/components/requests'

export function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Logo />

        <main>
          <Form />
          <Requests />
        </main>
      </div>
    </div>
  )
}
