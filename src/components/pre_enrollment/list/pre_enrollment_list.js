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

  componentDidMount(){
    this.fetchNewPPC();
    this.fetchOldPPC();
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

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const newPPCList = this.state.newPPCCourses.map((course) => {
      if(course.disciplina !== "Optativa Geral" && course.disciplina !== "Optativa Específica") {
        return(  <li className="list-group-item" key={course.codigo_disciplina}>
                  <input className="form-check-input" type="checkbox" value={course.disciplina} />
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
                  <input className="form-check-input" type="checkbox" value={course.disciplina} />
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
            <Tabs value={this.state.value} onChange={this.handleChange} indicatorColor="primary" textColor="primary">
              <Tab label="PPC Novo" />
              <Tab label="PPC Antigo"/>
            </Tabs>
          </Paper>
          {this.state.value === 0 && <ul className="list-group list-group-flush">{newPPCList}</ul>}
          {this.state.value === 1 && <ul className="list-group list-group-flush">{oldPPCList}</ul>}
      </div>
    </div>
    );
  }
}

export default PreEnrollmentList;
