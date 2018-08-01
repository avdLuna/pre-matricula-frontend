import React, {Component} from 'react';
import UserSidenav from '../../menu/sidenav/user/user_sidenav'
import Navbar from '../../menu/navbar/navbar'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './pre_enrollment.css';

class PreEnrollmentList extends Component {
 constructor(props) {
   super(props);

   this.state = {
     newPPCCourses: [],
     oldPPCCourses: [],
     pre_enrollment: [],
     value: 0,
    };
 }

 onSubmit(obj){
 console.log(this.pre_enrollment);
}
 componentDidMount(){
   this.fetchNewPPC();
   this.fetchOldPPC();
 }

 componentWillMount(){
   this.coursesSelected = new Set();
 }

 fetchNewPPC(){
   fetch('http://analytics.ufcg.edu.br/pre/ciencia_da_computacao_i_cg/disciplinas')
   .then( courses => courses.json() )
   .then( parsedJSON => {
     this.setState({ newPPCCourses: parsedJSON })
   })
   .catch(err => console.log("Could not fetch API ",err))
 }

 fetchOldPPC(){
   fetch('http://analytics.ufcg.edu.br/pre/ciencia_da_computacao_d_cg/disciplinas')
   .then( courses => courses.json() )
   .then( parsedJSON => {
     this.setState({ oldPPCCourses: parsedJSON })
   })
   .catch(err => console.log("Could not fetch API ",err))
 }

 handleTabChange = (event, value) => {
   this.setState({ value });
   this.coursesSelected = new Set();
 };

 handleCheckboxes(course){
   if(this.coursesSelected.has(course)){
     this.coursesSelected.delete(course);
   } else {
     this.coursesSelected.add(course);
   }
   console.log(this.teste);
   this.setState({pre_enrollment:this.teste})
 }

 render() {
   const newPPCList = this.state.newPPCCourses.map((course) => {
     if(course.disciplina !== "Optativa Geral" && course.disciplina !== "Optativa Específica") {
       return(  <li className="list-group-item" key={course.codigo_disciplina}>
                 <input className="form-check-input" type="checkbox" value={course.disciplina} onChange = {
                     (event) => this.handleCheckboxes(event.target.value)
                   } />
                   <label className="form-check-label">
                     {course.disciplina}
                   </label>
               </li>
             );
       }
   });

  const oldPPCList = this.state.oldPPCCourses.map((course) => {
     if(course.disciplina !== "Optativa Geral" && course.disciplina !== "Optativa Específica") {
       return(  <li className="list-group-item" key={course.codigo_disciplina}>
                 <input className="form-check-input" type="checkbox" value={course.disciplina} onChange = {
                     (event) => this.handleCheckboxes(event.target.value)
                   } />
                   <label className="form-check-label">
                     {course.disciplina}
                   </label>
               </li>
             );
       }
   });

   return (
     <div>
     <div>
       <Navbar />
       <UserSidenav />
     </div>
     <div id="pre_enrollment_component">
       <br />
       <br />
       <br />
         <h1>Pré matrícula</h1>
         <br/>
         <Paper>
           <Tabs value={this.state.value} onChange={this.handleTabChange} indicatorColor="primary" textColor="primary">
             <Tab label="PPC Novo" />
             <Tab label="PPC Antigo"/>
           </Tabs>
         </Paper>
         {this.state.value === 0 && <ul className="list-group list-group-flush">{newPPCList}</ul>}
         {this.state.value === 1 && <ul className="list-group list-group-flush">{oldPPCList}</ul>}
         <button type="button" className="btn btn-primary" onClick={() => this.onSubmit(this.pre_enrollment = this.coursesSelected)}>Enviar</button>


     </div>
   </div>
   );
 }
}

export default PreEnrollmentList;

