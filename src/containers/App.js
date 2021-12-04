import { useState } from 'react';
import './App.css';
import robots from '../robots';
import Card from '../components/Card';
import Navigation from '../components/Navigation';
import Scrollable from '../components/Scrollable';
import ErrorCatch from '../components/Error';

function App() {
  
  // react hooks
  const [robotList, setRobots] = useState([]);
  // const [search, setSearch] = useState('');

  const onSearch = (event) => {
    const filtered = robots.filter((robot) => {
      return robot.name.includes(event.target.value);
    });
    setRobots(filtered);
  };


  return (
    <div>
      <Navigation search={onSearch}></Navigation>
      <Scrollable>
        <ErrorCatch>
          <Card robots={robotList}></Card>
        </ErrorCatch>
      </Scrollable>
    </div>
  );
}

export default App;
