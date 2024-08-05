import './Navbar.css'
import { Link } from 'react-router-dom'

type Props = {}

const Navbar = (props: Props) => {
    return (
        <div className='navbar'>
            <nav>
                <Link to='/' className='brand'>
                    <h1>Johan´s Recipes</h1>
                </Link>
                <Link to='/create'>Create Recipe</Link>

            </nav>
        </div>
    )
}

export default Navbar