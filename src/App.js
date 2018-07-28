import React, { Component } from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import Login from './components/login/login';
import RegisterCourse from './components/course/register/register_course';
import ListCourse from './components/course/list/course_list';
import AdminSidenav from './components/menu/sidenav/admin/admin_sidenav';
import Navbar from './components/menu/navbar/navbar';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Login}   />
        <Route exact path="/course" component={ListCourse}   />
        <Route exact path="/course/register" component={RegisterCourse}   />
        <Route exact path="/menu" component={AdminSidenav}   />
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
