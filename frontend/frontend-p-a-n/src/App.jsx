import HomeCheckOut from './Home';
import Login from './Login';


import { Route, Switch} from 'wouter';
 
function App() {

  return (
     <>          
      <div>
        <Switch>
          <Route path="/" component={Login} />
          <Route path="/home" component={HomeCheckOut}/>
        </Switch>
      </div>
    </>
  )
}

export default App