import './App.css';
import Person from './components/person';

function App() {
  return (
    <div className="App d-flex">
      <Person firstName="Jane" lastName="Doe" age={45} hairColor="Black" />
      <Person firstName="John" lastName="Smith" age={88} hairColor="Brown" />
      <Person firstName="Millard" lastName="Fillmore" age={50} hairColor="Brown" />
    </div>
  );
}

export default App;
