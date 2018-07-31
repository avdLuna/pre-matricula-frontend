import React, { Component } from 'react';
import { BrowserRouter,Route,Redirect } from 'react-router-dom';
import decode from 'jwt-decode';
import Login from './components/login/login';
import RegisterCourse from './components/course/register/register_course';
import CourseList from './components/course/list/course_list';
import PreEnrollmentList from './components/pre_enrollment/list/pre_enrollment_list'

const checkAuth = () =>{
  console.log(localStorage.getItem('token'));
  const token = localStorage.getItem('token');
  const refreshToken = localStorage.getItem('refreshToken');
  if(!token || !refreshToken){
    return false;
  }

  try {
    console.log(decode(refreshToken));
    const payload = decode(refreshToken);
    console.log(payload);
  } catch(err) {
    return false;
  }

  return true;
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest} render={props => checkAuth() ? (
        <Component {...props} /> ) : ( <Redirect to={{ pathname: "/login" }} /> )
    }
  />
);

class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Route exact path="/login" component={Login}   />
        <Route exact path="/admin/course" component={CourseList}   />
        <Route exact path="/admin/course/register" component={RegisterCourse}   />
        <Route exact path="/user/new/enrollment" component={PreEnrollmentList}   />
        <PrivateRoute path="/" />
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
