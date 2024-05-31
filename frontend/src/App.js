import { BrowserRouter, Routes, Route } from 'react-router-dom' //install to create diff pages.BrowserRouter-wraps everywherewe want to use the router, Routes-wraps all our individual routes, Route-create a single route.2 prop-path & element

// pages & components
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Acc from './pages/Acc';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
       
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={<Acc/>} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
