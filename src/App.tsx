import React from 'react';
import logo from './logo.svg';
import {Routes, Route, Link} from "react-router-dom"
import './App.css';
import Jedi from './components/Jedi';
import Empire from './components/Empire';
import Rebel from './components/Rebel';

const App : React.FC = ()=>{
  return (
  <>

  <div>
    <Link to="jedi">
      <p>jedi page


      </p>
    </Link>
  </div>
  <Routes>
    <Route path="jedi" element={<Jedi  />} />
    <Route path="empire" element={<Empire  />} />
    <Route path="empire" element={<Rebel  />} />
  </Routes>
  </>
  );
}

export default App;
