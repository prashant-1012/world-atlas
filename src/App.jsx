// React Router DOM ka use multiple pages banane ke liye hota hai bina page reload ke.
// createBrowserRouter() ek function hai jo routes ka structure batata hai.↧
// RouterProvider ek component hai jo poore app ko routing feature deta hai.


import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Country from './pages/Country'
import Contact from './pages/Contact'
import AppLayout from './components/layout/AppLayout'
import ErrorPage from './pages/ErrorPage'
import CountryDetails from './components/layout/CountryDetails'


// router object banaya jisme har ek route (path + component) define kiya gaya hai.
// path: "/" -> jab URL me slash ho, to Home component show ho.
// element: <ComponentName /> -> yeh batata hai kis component ko render karna hai.
// children: nested routing ke liye hota hai (matlab AppLayout ke andar ye sab pages render honge).


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <ErrorPage/>,
    children: [

      // note: for using router we need to create a array. inside array we have objects. inside object we define the proerties like path, element, etc.
// AppLayout ek parent layout hai jisme Header & Footer fix hai. (see AppLayout.jsx)
// children array me sabhi pages isliye daale kyunki hum chahte hain 
// ki yeh sabhi <Outlet /> ke andar render ho, jahan Header/Footer already lage hain,
//Outlet ka kaam hai: "Jis page ka path match karega, usi page ko yahan render karo." (see AppLayout.jsx)

// path means url ke baad jo likha hota hai, 
// eg. worldatlas.com/country path pe jaane se <country> component render (open) hoga.
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "about",
    element: <About/>,
  },
  {
    path: "country",
    element: <Country/>,
  },
   {
    path: "country/:id",
    element: <CountryDetails />,
  },
  {
    path: "contact",
    element: <Contact/>,
  },
    ]
  }
]
);

const App = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App

// RouterProvider component ko router pass kiya gaya hai
// Yeh batata hai ki app kis routing config ko follow kare
// RouterProvider component k andar humne ek attribute pass kia hai jiska naam hai router,
// aur router attribute me humne router object pass kia h, jo upar create kia h.

// after path name when we use colon(:) it means we are using dynamic routing.
//eg.  path: "country/:id", - id is dynamic here.