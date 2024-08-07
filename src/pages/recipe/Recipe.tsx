import { useParams } from 'react-router-dom'
import './Recipe.css'
import { Recipe } from '../../types/recipe.type'
import { useFetch } from '../../hooks/useFetch'

const RecipeSingel = () => {
    const { id } = useParams<{ id: string }>()
    const { data: recipe, isPending, error } = useFetch<Recipe>(`http://localhost:3001/recipes/${id}`);

    console.log('recipe:', recipe)

    return (
        <div className='recipe'>
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>Loading...</p>}
            {recipe && (
                <>
                    <h2 className='page-title'>{recipe.title}</h2>
                    <p>Takes {recipe.cookingTime} to cook.</p>
                    <ul>
                        {recipe.ingredients.map((ingredient) => (
                            <li key={ingredient}>{ingredient}</li>
                        ))}
                    </ul>
                    <p className='method'>{recipe.method}</p>
                </>
            )}

        </div>
    )
}

export default RecipeSingel