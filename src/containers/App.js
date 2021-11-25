import {Component } from 'react';
import './App.css';
import robots from '../robots';
import Card from '../components/Card';
import Navigation from '../components/Navigation';
import Scrollable from '../components/Scrollable';
import ErrorCatch from '../components/Error';

class App extends Component{
  constructor() {
    super();
    this.state = {
      robots: [],
      search:''
    };
  }

  onSearch = (event) => {
    const filtered = robots.filter((robot) => {
      return robot.name.includes(event.target.value);
    });
    this.setState({
      robots: filtered,
    });
  };

  render() {
    return (
      <div>
        <Navigation search={this.onSearch}></Navigation>
        <Scrollable>
          <ErrorCatch>
            <Card robots={this.state.robots}></Card>
          </ErrorCatch>
        </Scrollable>
      </div>
    );
  }
}

export default App;
