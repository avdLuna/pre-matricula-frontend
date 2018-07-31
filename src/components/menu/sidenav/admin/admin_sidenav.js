import React, {Component} from 'react'
import './sidenav.css'

class AdminSidenav extends Component {

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
                    <a href="/admin/course">Home</a>
                </li>
                <li>
                    <a href="/admin/pre-enrollments">Visualizar pré matrículas</a>
                </li>
                <li>
                    <a href="/admin/course">Visualizar disciplinas</a>
                </li>
                <li>
                    <a href="/admin/course/register">Cadastrar Disciplina</a>
                </li>
            </ul>
          </div>
);
  }
}

export default AdminSidenav;
