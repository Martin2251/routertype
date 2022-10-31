import React from 'react';

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
    <Link to="empire">
      <p>empire


      </p>
    </Link>
    <Link to="rebel">
      <p>rebel 


      </p>
    </Link>
  </div>
  {/* A JSX comment  astrix is needed for nested routes*/}
  <Routes>
    <Route path="jedi/*" element={<Jedi  />} />
    <Route path="empire" element={<Empire  />} />
    <Route path="rebel " element={<Rebel  />} />
  </Routes>
  </>
  );
}

export default App;
