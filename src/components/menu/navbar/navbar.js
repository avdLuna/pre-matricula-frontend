import React, {Component} from 'react'

class Navbar extends Component {

  render () {
    return (
          <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="" >Sistema Pré Matrícula</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item active" >
                  </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                 <li className="nav-item">
                     <a className="nav-link" href="/" data-target="#myModal" data-toggle="modal">Logout</a>
                 </li>
             </ul>
              </div>
            </nav>
          </div>
);
  }
}

export default Navbar;
