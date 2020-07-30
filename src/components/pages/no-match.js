import React from 'react'
import { Link } from 'react-router-dom'

export default function() {
  return (
    <div>
      <h1>404 ERROR <br/> The things have not been found</h1>
      <div><Link to="/">Go back home</Link></div>
      
    </div>
  );
}