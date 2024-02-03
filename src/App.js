import React from 'react';
import './App.scss';
import Home from "./pages/home/Home";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import User from './pages/user/User'
import Product from './pages/product/Product'
import Users from './pages/users/Users';
import Products from './pages/products/Products';
import Navbar from './components/navbar/Navbar.tsx';
import Footer from './components/footer/Footer.tsx';
import Menu from './components/menu/Menu';
import Login from './pages/login/Login';
import './styles/global.scss';
import Profile from './pages/profile/Profile';
import Search from './pages/search/Search.tsx';
import { Protector, userData } from './Helper';





function App() {
  
  const {jwt} = userData()
 
  const Layout = () => {

    return(
    
      <div className='main'>
        <Navbar className='navbar'/>
        <div className='container'>
          <div className='menuContainer'>
            <Menu/>
          </div>
          <div className='contentContainer'>
            <Outlet/>
          </div>
        </div>
        <Footer/>

      </div>
   
    )
  }
  
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },
    {
      path:"/search",
      element:<Search/>
    },
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/home",
          element:<Home/>
        },
        {
          path:"/profile",
          element:<Protector Component={<Profile profile={jwt}/>}/>
        },
        {
          path:"/users",
          element:<Users/>
        },
        {
          path:"/products/:id",
          element:<Products/>
        },
        {
          path:"/user/:id",
          element:<User/>
        },
        {
          path:"/product/:id",
          element:<Product/>
        },
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;

}

export default App;
