import CatProduct from "../Pages/CatProduct/CatProduct";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Product from "../Pages/Product/Product";

export const routes = [
    {
       path : '/',
       element : <Home/>
    },
    {
        path : '/products',
        element : <Product/>
     },
     {
        path : '/contact',
        element : <Contact/>
     },
     {
      path: '/catProduct/:name', // Assuming you want to use the category id in the URL
      element: <CatProduct />
  }
  
]