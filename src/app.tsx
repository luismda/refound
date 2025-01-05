import { Provider as ReduxProvider } from 'react-redux'

import { Home } from './pages/home'
import { store } from './store'

export function App() {
  return (
    <ReduxProvider store={store}>
      <Home />
    </ReduxProvider>
  )
}
