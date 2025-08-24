import React from 'react'
import Footer from '../UI/Footer';
import Header from '../UI/header';
import { Outlet } from 'react-router-dom';


const AppLayout = () => {
  return (
    <div>
        <Header/>
        <Outlet/> 
        <Footer/>
    </div>
  )
}

export default AppLayout;

// <Header /> sabhi pages ke upar dikh raha hai
// <Footer /> sabhi pages ke neeche dikh raha hai

// <Outlet/> = ek placeholder hai jahan current route ka page load hota hai
// Example: Agar /about path hai to <About /> yahin <Outlet /> ke jagah render hoga
// <Outlet/> ke children "App.jsx" me define kiye gaye hai.
