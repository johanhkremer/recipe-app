import { Recipe } from '../types/recipe.type'
import { Link } from 'react-router-dom'
import './RecipeList.css'

type RecipeListProps = {
    recipes: Recipe[]
}

const RecipeList = ({ recipes }: RecipeListProps) => {
    return (
        <div className='recipe-list'>
            {recipes.map(recipe => (
                <div key={recipe.id} className='card'>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.cookingTime} to make.</p>
                    <p>{recipe.method.substring(0, 100)}...</p>
                    <Link to={`/recipe/${recipe.id}`}>Cook This!</Link>

                </div>
            ))}
        </div>
    )
}

export default RecipeList