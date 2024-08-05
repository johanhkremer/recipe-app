import './Home.css'
import { useFetch } from '../../hooks/useFetch'
import { Recipe } from '../../types/recipe.type'
import RecipeList from '../../components/RecipeList';

const Home = () => {
    const { data, isPending, error } = useFetch<Recipe[]>('http://localhost:3001/recipes');

    return (
        <div className='home'>
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>Loading...</p>}
            {data && <RecipeList recipes={data} />}
        </div>
    );
}

export default Home;
