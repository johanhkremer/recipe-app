import { useState } from 'react'
import './SearchBar.css'
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const [term, setTerm] = useState<string>('')

    const navigate = useNavigate();

    const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        navigate(`/search?q=${term}`)
    }

    return (
        <div className='searchbar'>
            <form onSubmit={handelSubmit}>
                <label htmlFor='search'>Search:</label>
                <input
                    type='text'
                    id='search'
                    onChange={(e) => setTerm(e.target.value)}
                    required
                />

            </form>
        </div>
    )
}

export default SearchBar