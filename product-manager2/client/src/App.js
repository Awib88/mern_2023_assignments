import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './view/Main';
import DisplayOne from './components/DisplayOne';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/products/:id" element={<DisplayOne/>} /> 
        </Routes>

    </div>
  );
}

export default App;
