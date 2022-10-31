import React from 'react'
import { useParams } from 'react-router-dom'
const Luke = () => {

  const params = useParams();
  console.log(params)
  return (

    // instead of url data you can call it whatever you want but it must be the same as on the app page on the :urldata 
    <div>This is the Luke {params.urldata} pages</div>
  )
}

export default Luke