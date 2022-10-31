import React from 'react'
import {Link, Outlet, Routes, Route} from "react-router-dom"
import Luke from './Luke'
import Yoda from './Yoda'

const Jedi = () => {
  return (
    <div><p>this is jedi page</p>
    <Link to="yoda">
        <p>Yoda</p>
    </Link>
    <Link to="luke">
        <p>Luke</p>
    </Link>
    <Routes>
        <Route path="yoda" element={<Yoda  />} />
        <Route path="luke" element={<Luke  />} />
    </Routes>
    
    
    </div>
  )
}

export default Jedi