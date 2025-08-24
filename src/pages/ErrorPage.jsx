import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError();  
    console.log(error);
    
    return (
    <div>
        <h1> Oops! An error occured.  </h1>
        {error && <p>{error.data}</p>}
        <NavLink to ="/"> 
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Go Home
        </button>
        </NavLink>
    </div>
  )
}

export default ErrorPage

// errorElement tab kaam aata hai jab koi path match nahi hota
// jaise user ne /wrong-url type kiya ho, tab yeh <ErrorPage /> render hota hai

