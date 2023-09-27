import { Route, Routes } from 'react-router';
import Main from './view/Main';
import Update from './components/Update';

function App() {
  return (

    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/author/edit/:id" element={<Update />} />
    </Routes>

  );
}

export default App;
