import './App.css';
import Login from './components/Login';
import Nomatchpage from './components/Nomatchpage';
import Register from './components/Register';

import { BrowserRouter } from 'react-router-dom';
import { Route , Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className='container-fluid'>
        <Routes>
          <Route path='/' exact element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='*' element={<Nomatchpage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
