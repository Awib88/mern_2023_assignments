import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './view/Main';
import DisplayOne from './components/DisplayOne';
import EditOne from './components/EditOne';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/products/:id" element={<DisplayOne/>} />
          <Route path='product/edit/:id'  element={<EditOne/>} />
        </Routes>

    </div>
  );
}

export default App;
