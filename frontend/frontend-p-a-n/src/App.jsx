import vistaCajero from './views/vistaCajero'
import Login from './views/Login'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Route, Switch} from 'wouter'
import { Toaster } from 'sonner'
import vistaAdmin from './views/vistaAdmin'


const queryClient = new QueryClient()
 
function App() {

  return (
     <>          
      <div>
        <QueryClientProvider client={queryClient}>
          <Toaster />
          <Switch>
            <Route path="/" component={Login} />
            <Route path="/home" component={vistaCajero}/>
            <Route path="/adminHome" component={vistaAdmin} />
          </Switch>
        </QueryClientProvider>
      </div>
    </>
  )
}

export default App