import React, {Component} from 'react'
import './sidenav.css'

class UserSidenav extends Component {

  render () {
    return (
          <div id="sidebar-wrapper">
            <ul className="sidebar-nav">
                <li className="sidebar-brand">
                    <a>
                        Aluno
                    </a>
                </li>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/pre-enrollments">Realizar pré matrícula</a>
                </li>
                <li>
                    <a href="/course">Visualizar pré matrícula</a>
                </li>
            </ul>
          </div>
);
  }
}

export default UserSidenav;
