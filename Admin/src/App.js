// import logo from './logo.svg';
// import './App.css';
import Home from './pages/home/Home';
import{BrowserRouter,Routes,Route, Navigate} from 'react-router-dom';
import List from './pages/list/List';
import Login from './pages/login/Login';
import Single from './pages/single/Single';
import New from './pages/new/New';
import { productInputs, userInputs } from './formSource';
import "./style/Dark.css";
import { useContext, useState } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import { AuthContext } from './context/AuthContext';
import { hotelsColumns, userColumns,roomColumns } from './datatablesource';
import NewHotel from './pages/newHotel/NewHotel';

import Payment from './pages/Payment/Payment';



function App() {
  const {darkMode} = useContext(DarkModeContext);
  const ProtectedRoute = ({children}) =>{
    const {user} = useContext(AuthContext)
    if (!user) {
      return <Navigate to="/login"/>;
    }
    return children;
  };
  return (
    <div className = {darkMode ?"app dark": "app"}>
     
      <BrowserRouter>
      <Routes>
      <Route path='/'>
        
               <Route index element={
             
                 <Home />
      
               
              
              }/>
              <Route path='login' element ={<Login />}/>
              <Route path='users'>
                <Route index element ={
                
                  <List columns={userColumns}/>
               
                
                }/>
                <Route path=':usersId' element ={
                  
                     <Single/>
                 
               
                }/>
                <Route path='new' element ={<New  inputs={userInputs}  title= "Add New user" />}/>

              </Route>

              <Route path='hotels'>
                <Route index element ={<List columns={hotelsColumns} />}/>
                <Route path='hotelsId' element ={<Single/>}/>
                <Route path='new' element ={<New inputs={productInputs} title= "Add New Product"/>}/>

              </Route>
              <Route path=':rooms' element ={<List columns={roomColumns}/>}>
                
                <Route 
                index element ={ 
                
                  <Login/>
                  }/>
                <Route path='roomsId' element ={<Single />}/>
                <Route path='new' element ={<NewHotel
                  inputs={userInputs} title= "Add New Product"
                />
              }/>

              </Route>

              <Route>
              <Route path='productsId' element ={<Single />}/>
              <Route path='new' element ={<New
                  inputs={productInputs} title= "Add New Product"
                />
              }/>
               
              </Route>
              <Route>
              <Route path='Payment' element ={<Payment />}/>
              <Route path='new' element ={<New
                  inputs={productInputs} title= "Add New Product"
                />
              }/>
               
              </Route>

      </Route>
      

              
      </Routes>
      </BrowserRouter>
       
     
     
    </div>
  );
}

export default App;
