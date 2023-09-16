import './App.css';
import { useState } from 'react';
import Task from './components/Task';
import DisplayTask from './components/DisplayTask';


function App() {
  const [tasklist, setTaskList] = useState([])





 
  return (
    <div className="App container w-75 h-100 p-3">
      <h1>My to-do-list ✍ </h1>
      <Task tasklist={tasklist} setTaskList={setTaskList} />
      <DisplayTask tasklist={tasklist} setTaskList={setTaskList} />
    </div>
  );
}

export default App;
