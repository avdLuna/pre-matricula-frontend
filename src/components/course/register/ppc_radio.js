import React, {Component} from 'react'

class PPCRadio extends Component {

  constructor(props){
    super(props);
    this.state={ selectedPPC:'' }
  }

  render () {
    return (
        <form>
        <div className="radio">
          <label className="form-check-label">
            <input type="radio" value="antigo" checked={this.state.selectedPPC === 'antigo'}
              onChange={(event) => this.updatePPC(event.target.value)}/>
            &nbsp; PPC Antigo
          </label>
          <br/>
          <label className="form-check-label">
            <input type="radio" value="novo" checked={this.state.selectedPPC === 'novo'}
              onChange={(event) => this.updatePPC(event.target.value)}/>
            &nbsp; PPC Novo
          </label>
        </div>
      </form>
    );
  }

  updatePPC(option){
    this.setState({ selectedPPC:option })
    this.props.updatePPC(option);
  }

}

export default PPCRadio;
