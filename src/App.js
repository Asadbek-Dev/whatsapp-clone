import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; import './App.css';
import Chat from './components/Chat';
import Sidebar from './components/Sidebar';
function App() {
  const [user, setUser] = useState(null)
  return (
    <div className="app">
      {!user ? (
        <h1>Login</h1>
      ) : (
        <div className="app__body">

          <Router>

            <Sidebar />
            <Switch>
              <Route path='/rooms/:roomId'>
                <Chat />
              </Route>
              <Route path='/'>
                <Chat />
              </Route>
            </Switch>
          </Router>
        </div>
      )}

    </div>
  );
}

export default App;
