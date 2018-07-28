import React, {Component} from 'react'
import './sidenav.css'

class AdminSidenav extends Component {

  constructor(props){
    super(props);
  }

  render () {
    return (
          <div id="sidebar-wrapper">
            <ul className="sidebar-nav">
                <li className="sidebar-brand">
                    <a>
                        Coordenador
                    </a>
                </li>
                <li>
                    <a href="/pre-enrollments">Visualizar pré matrículas</a>
                </li>
                <li>
                    <a href="/course">Visualizar disciplinas</a>
                </li>
                <li>
                    <a href="/course/register">Cadastrar Disciplina</a>
                </li>
            </ul>
          </div>
);
  }
}

export default AdminSidenav;
