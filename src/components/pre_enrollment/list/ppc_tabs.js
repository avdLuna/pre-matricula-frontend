import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class PPCTabs extends Component {
  state = {
      value: 0,
    };

    handleChange = (event, value) => {
      this.setState({ value });
    };

    render() {
      const { classes } = this.props;
      const { value } = this.state;

      return (
        <div className="teste">
          <h1>Pré matrícula</h1>
          <br/>
          <Paper>
            <Tabs value={value} onChange={this.handleChange} indicatorColor="primary" textColor="primary">
              <Tab label="PPC Novo" />
              <Tab label="PPC Antigo" textColor="orange" />
            </Tabs>
          </Paper>
          {value === 0 && <h1>Batata</h1>}
          {value === 1 && <h1>Item Two</h1>}
        </div>
      );
    }
  }

export default PPCTabs;
