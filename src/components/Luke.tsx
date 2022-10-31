import React from 'react'
import { useParams } from 'react-router-dom'
const Luke = () => {

  const params = useParams();
  return (
    <div>This is the Luke {params.urldata} pages</div>
  )
}

export default Luke