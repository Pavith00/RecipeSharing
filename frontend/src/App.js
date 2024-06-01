import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Acc from './pages/Acc';
import Home from './pages/Home';
import { UserContextProvider } from './context/userContext';
import { RecipesContextProvider } from './context/RecipesContext';
import RecipeDetails from './components/RecipeDetails';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <UserContextProvider>
                  <Home />
                </UserContextProvider>
              }
            />
            <Route 
              path="/recipe/:id" 
              element={
                <RecipesContextProvider>
                  <RecipeDetails/>
                </RecipesContextProvider>
                
              } 
            />
            <Route
              path="/acc"
              element={
                <UserContextProvider>
                  <Acc />
                </UserContextProvider>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
