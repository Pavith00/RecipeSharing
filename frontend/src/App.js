import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Acc from './pages/Acc';
import Home from './pages/Home';
import { UserContextProvider } from './context/userContext';
import { RecipesContextProvider } from './context/RecipesContext';
import RecipeDetails from './components/RecipeDetails';
import Login from './components/Login';
import { AuthContextProvider } from './context/AuthContext';
import RecipeForm from './components/RecipeForm';
import RecipieAdd from './pages/RecipieAdd';



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
                <AuthContextProvider>
                  <Home />
                </AuthContextProvider>
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
              path="/addRec"
              element={
                <RecipesContextProvider>
                  <RecipeForm/>
                </RecipesContextProvider>
              }
            />
            <Route
              path="/login"
              element={
                <AuthContextProvider>
                  <Acc />
                </AuthContextProvider>
              }
            />
            <Route
              path="/add"
              element={
                <AuthContextProvider>
                  <RecipieAdd />
                </AuthContextProvider>
              }
            />
            
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
