import React from 'react';
import Dashboard from './pages/dashboard/dashboard'
import Deploy from './pages/deploy/deploy'
import DHeader from './components/Header/DHeader'
import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App" >
       
          <DHeader></DHeader>
          <div >
            <Switch>
              <Route component={Deploy} path="/deploy"></Route>
              <Route component={Dashboard} exact path="/"></Route>
            </Switch>
          </div>
        
      </div>
    </Router>

  );
}

export default App;
