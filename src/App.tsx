import Search from './pages/search/Search'
import Recipe from './pages/recipe/Recipe'
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/recipes/:id' element={<Recipe />} />
          <Route path='/create' element={<Create />} />
          <Route path='/*' element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
