import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './components/Authentication/Register';
import Login from './components/Authentication/Login';
// import { history } from '../helpers/History';
import Home from './components/Home/Home';
import Start from './components/Authentication/Start';
import Missing from './components/Missing';
import RequiredAuth from './components/RequireAuth'
import AddRecipeInfo from './components/AddRecipes/AddRecipeInfo';
import RecipeBody from './components/ShowRecipes/RecipesBody';
import FullCalender from './components/Calender/FullCalender';

export default function Routess() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* public pages */}
          <Route path='/login'  element={<Login/>} />
          <Route path='/register' element={<Register/>}  />
          <Route path='/' element={<Start/>}  />

          {/* protected */}
          <Route element={<RequiredAuth />}>
            <Route path='/home' element={<Home/>}  />
            <Route path='/addrecipe' element={<AddRecipeInfo/>}  />
            <Route path='/recipes' element={<RecipeBody/>}  />
            <Route path='/calendar' element={<FullCalender/>}  />
           
           
          </Route>
          {/* catch all */}

          {/* <Route path='/*' element={<Missing/>}  /> */}

        </Routes>
       
      </BrowserRouter>
     
    </div>
  );
}

