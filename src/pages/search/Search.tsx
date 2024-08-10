import { useLocation } from 'react-router-dom'
import './Search.css'
import { useFetch } from '../../hooks/useFetch';
import RecipeList from '../../components/RecipeList';
import { Recipe } from '../../types/recipe.type';


const Search = () => {
    const queryString = useLocation().search
    const queryParams = new URLSearchParams(queryString)
    const query: string | null = queryParams.get('q')

    const url: string = 'http://localhost:3001/recipes?q=' + query
    const { error, isPending, data } = useFetch<Recipe[]>(url)

    // Filtrera data baserat på sökfrågan (om nödvändigt)
    const filteredData = data?.filter(recipe =>
        recipe.title.toLowerCase().includes(query?.toLowerCase() || '')
    );

    return (
        <div className='page-title'>
            <h2>Recipes including '{query}'</h2>
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>Loading...</p>}
            {filteredData && <RecipeList recipes={filteredData} />}

        </div>
    )
}

export default Search