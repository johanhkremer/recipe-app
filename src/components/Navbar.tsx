import './Navbar.css'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

const Navbar = () => {
    return (
        <div className='navbar'>
            <nav>
                <Link to='/' className='brand'>
                    <h1>Johan´s Recipes</h1>
                </Link>
                <SearchBar />
                <Link to='/create'>Create Recipe</Link>

            </nav>
        </div>
    )
}

export default Navbar