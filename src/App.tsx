import Search from './pages/search/Search'
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import RecipeSingel from './pages/recipe/Recipe';

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/recipe/:id' element={<RecipeSingel />} />
          <Route path='/create' element={<Create />} />
          <Route path='/*' element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
