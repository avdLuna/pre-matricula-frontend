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
                    <a href="/user/new/enrollment">Home</a>
                </li>
                <li>
                    <a href="/user/new/enrollment">Realizar pré matrícula</a>
                </li>
                <li>
                    <a href="/user/view/enrollment">Visualizar pré matrícula</a>
                </li>
            </ul>
          </div>
);
  }
}

export default UserSidenav;
