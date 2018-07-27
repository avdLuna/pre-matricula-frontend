import React, {Component} from 'react'
import './navbar.css'

class AdminNavbar extends Component {

  constructor(props){
    super(props);
  }

  render () {
    return (
        <div>
          <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Sistema Pré Matrícula</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item active" >
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                  </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                 <li className="nav-item">
                     <a className="nav-link" href="" data-target="#myModal" data-toggle="modal">Logout</a>
                 </li>
             </ul>
              </div>
            </nav>
          </div>
          <div id="sidebar-wrapper">
            <ul className="sidebar-nav">
                <li className="sidebar-brand">
                    <a href="#">
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
        </div>
);
  }
}

export default AdminNavbar;
