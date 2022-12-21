import { ApolloProviderClient } from './ApolloProviderClient'
import { AppRouter } from './AppRouter'

function App() {
  return (
    <ApolloProviderClient>
      <AppRouter />
    </ApolloProviderClient>
  )
}

export default App
