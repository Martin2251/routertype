import React from 'react'
import { useParams,useLocation,useNavigate,Navigate } from 'react-router-dom'
const Luke = () => {

  const params = useParams();
  const location = useLocation();
  // keeps track to see what page the user was on previously 
  const naviagte = useNavigate();
  // can do to do the redirect
  console.log(params);
  console.log(location);
  return (

    // instead of url data you can call it whatever you want but it must be the same as on the app page on the :urldata 
    <div>This is the Luke {params.urldata} pages</div>
  )
}

export default Luke