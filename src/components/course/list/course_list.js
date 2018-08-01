import React, {Component} from 'react';
import {CollapsibleComponent} from 'react-collapsible-component'
import CourseListItem from './course_list_item'
import AdminSidenav from '../../menu/sidenav/admin/admin_sidenav'
import Navbar from '../../menu/navbar/navbar'
import './course_list.css'

class CourseList extends Component {

 constructor(props){
     super(props);

     this.state = {
       newPPCCourses: [],
       oldPPCCourses: []
      };
 }

 componentDidMount(){
   this.fetchNewPPC();
   this.fetchOldPPC();
 }

 fetchNewPPC(){
   fetch('http://analytics.ufcg.edu.br/pre/ciencia_da_computacao_i_cg/disciplinas')
   .then( courses => courses.json() )
   .then( parsedJSON => {
     this.setState({ newPPCCourses: parsedJSON })
     console.log(this.state.newPPCCourses);
   })
   .catch(err => console.log("Could not fetch API ",err))
 }

 fetchOldPPC(){
   fetch('http://analytics.ufcg.edu.br/pre/ciencia_da_computacao_d_cg/disciplinas')
   .then( courses => courses.json() )
   .then( parsedJSON => {
     this.setState({ oldPPCCourses: parsedJSON })
     console.log(this.state.oldPPCCourses);
   })
   .catch(err => console.log("Could not fetch API ",err))
 }
//
 render(){
   const listNewItems = this.state.newPPCCourses.map((course) => {
     if(course.disciplina !== "Optativa Geral" && course.disciplina !== "Optativa Específica") {
       return( <CourseListItem key={course.codigo_disciplina} course={course} /> );
     }
   });

    const listOldItems = this.state.newPPCCourses.map((course) => {
     if(course.disciplina !== "Optativa Geral" && course.disciplina !== "Optativa Específica") {
       return( <CourseListItem key={course.codigo_disciplina} course={course} /> );
     }
   });

   return (
     <div>
       <Navbar />
       <AdminSidenav />
       <div id="course_list">
         <br />
         <br />
           <h3>Lista de disciplinas</h3>
           <br />
             <ul className="list-group list-group-flush">
               <li className="list-group-item">Nome da disciplina</li>
             </ul>
             <br />
           <CollapsibleComponent >
           {listNewItems}
           </CollapsibleComponent>
           <CollapsibleComponent >
           {listOldItems}
           </CollapsibleComponent>
         </div>
       </div>
   );
 };
};

export default CourseList;