import React, { Component } from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import Login from './components/login/login';
import RegisterCourse from './components/course/register/register_course';
import CourseList from './components/course/list/course_list';
import PreEnrollmentList from './components/pre_enrollment/list/pre_enrollment_list'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Login}   />
        <Route exact path="/course" component={CourseList}   />
        <Route exact path="/course/register" component={RegisterCourse}   />
        <Route exact path="/test" component={PreEnrollmentList}   />
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
