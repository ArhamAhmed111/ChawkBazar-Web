import React from 'react'
import Home from './Pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import  { routes } from './Routes/index'
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div>
      
      <Routes>
        {
          routes.map((item,index)=>{
            return(
              <Route key={index} path={item.path} element={item.element}/>
            )
          })
        }
      </Routes>
    </div>
  )
}

export default App