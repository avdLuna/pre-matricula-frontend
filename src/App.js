import React, { Component } from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import Login from './components/login/login';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <div className="App">
          <Route path="/" exact render={
              () => {
                return(<Login />);
              }
            }  />
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
