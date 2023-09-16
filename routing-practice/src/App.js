import './App.css';
import {Routes,Route} from "react-router-dom";
import Home from './components/Home';
import Header from './components/Header';
import NumForm from './components/NumForm';
import TextForm from './components/TextForm';
import StyledText from './components/StyledText';
import Display from './components/Display';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/num/form' element={<NumForm/>}/>
        <Route path='/text/form' element={<TextForm/>}/>
        <Route path='/styledtext/form' element={<StyledText/>}/>
        <Route path='/num/form/:num' element={<Display/>}/>
        <Route path='/text/form/:string' element={<Display/>}/>
        <Route path='/styledtext/form/:text/:color/:bgcolor' element={<Display/>}/>
      </Routes>
    </div>
  );
}

export default App;
