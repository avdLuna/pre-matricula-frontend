import React, {Component} from 'react';
import UserSidenav from '../../menu/sidenav/user/user_sidenav'
import Navbar from '../../menu/navbar/navbar'
import PPCTabs from './ppc_tabs'
import './pre_enrollment.css';

class PreEnrollmentList extends Component {
  constructor(props) {
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

  render() {
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
        <PPCTabs />
      </div>
    </div>
    );
  }
}

export default PreEnrollmentList;
