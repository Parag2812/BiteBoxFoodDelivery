// App.js
import React from 'react';
// import ReactDOM from 'react-dom/client';
import Header from './components/ui/Header';
import Body from './components/ui/Body';
import Footer from './components/ui/Footer';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import About from './components/ui/About';
import Error from './components/ui/Error';
import Contact from './components/ui/ContactUs';
import RestaurantMenu from './components/ui/RestaurantMenu';
import Cart from './components/ui/cart';
import Login from './components/ui/Login';
import UnderDevelopment from './components/ui/DevelopmentCard';



const App = () => {
    return (
      <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    );
};


export const appRouter = createBrowserRouter([
  {
    path :"/",
    element :<App/>,
    errorElement : <Error/>,
    children :[
      {
        path :"/",
        element :<Body/>
      },
      {
        path :"/about",
        element :<About/>
      },
      {
        path :"/contact",
        element :<Contact/>
      },
      {
        path :"/restaurant/:id",
        element :<RestaurantMenu/>
      },
      {
        path :"/Cart",
        element :<Cart/>
      },
      {
        path :"/Login",
        element :<Login/>
      },
      {
        path :"/underDevelopment",
        element :<UnderDevelopment/>  
      },

    ]
  }
])


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     // <RouterProvider router={appRouter}/>
// );


export default App;
