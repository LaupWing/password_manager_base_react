import {Switch, Route} from 'react-router-dom'
import AllItems from './routes/AllItems'
import Favorites from './routes/Favorites'


function App() {
   const routes = (
      <Switch>
         <Route 
            path="/" 
            exact
            component={()=>(
               <AllItems/>
            )}
         />
         <Route 
            path="/favorites" 
            exact
            component={()=>(
               <Favorites
               />
            )}
         />
      </Switch>
   )

   return (
      <div className="App w-screen h-screen bg-black-default flex">
         {routes}
      </div>
   );
}

export default App;
