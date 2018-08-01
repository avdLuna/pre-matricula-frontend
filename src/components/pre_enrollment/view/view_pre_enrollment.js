import React, {Component} from 'react';
import UserSidenav from '../../menu/sidenav/user/user_sidenav'
import Navbar from '../../menu/navbar/navbar'
import CourseListItem from '../../course/list/course_list_item'

class ViewPreEnrollment extends Component {
   constructor(props) {
   super(props);

   this.state = {
     courses: []
    };
 }

 componentDidMount(){
   this.fetchPreEnrollments();
 }

 fetchPreEnrollments(){
   let myHeaders = new Headers();
   myHeaders.append("X-Auth-Token", localStorage.getItem("userToken"));
   myHeaders.append("Content-Type", "application/json;charset=UTF-8");
   const api_url = "http://localhost:8080/preenrollment/student/";
   console.log(api_url);
   fetch(api_url,  {method:"GET", headers: myHeaders})
   .then( courses => courses.json() )
   .then( parsedJSON => {
     this.setState({ courses: parsedJSON })
   })
   .catch(err => console.log("Could not fetch API ",err))
 }

 render() {
     const courses = this.state.courses.map((course) => {
     return( <CourseListItem course={course} /> );
    });
    return ( 
        <div>
            <div>
                <Navbar />
                <UserSidenav />
            </div>
            {courses}
        </div>

    );
 }

}

export default ViewPreEnrollment;
 