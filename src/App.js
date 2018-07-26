import React, { Component } from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import Login from './components/login/login';
import RegisterCourse from './components/course/register/register_course';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Login}   />
        <Route exact path="/course/register" component={RegisterCourse}   />
        
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
