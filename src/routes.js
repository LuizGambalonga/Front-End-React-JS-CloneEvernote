import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/home';
import Register from './screens/auth/register';
import Login from './screens/auth/login';
import NotesIndex from './screens/notes/index';
import UserEdit from './screens/users/edit';
import PrivateRoute from './components/auth/private_router';
const Routess = () => (
  <BrowserRouter>
    <Routes>
     <Route exact path='/' element={<Home/>}  />
     <Route exact path='/register' element={<Register/>}  />
     <Route exact path='/login' element={<Login/>}  />
     <Route exact path='/notes' element={
                <PrivateRoute>
                   <NotesIndex/>
                </PrivateRoute>            
    }  />
     <Route exact path='/users/edit' element={
    <PrivateRoute>
      <UserEdit/>
    </PrivateRoute>   
    }  />
    </Routes>
  </BrowserRouter>
)

export default Routess;