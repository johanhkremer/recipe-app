import { useNavigate } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import './Create.css'
import { useEffect, useRef, useState } from 'react'

const Create = () => {

  const [title, setTitle] = useState<string>('')
  const [method, setMethod] = useState<string>('')
  const [cookingTime, setCookingTime] = useState<string>('')
  const [newIngredient, setNewIngrediet] = useState<string>('')
  const [ingredients, setIngrediets] = useState<string[]>([])
  const ingredientInput = useRef<HTMLInputElement>(null)

  const { postData, data, error } = useFetch('http://localhost:3001/recipes', 'POST')

  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      navigate('/home');
    }
  }, [data, navigate]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    postData({ title, ingredients, method, cookingTime: cookingTime + ' minutes' })
  }

  const handleAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const ing = newIngredient.trim()

    if (ing && !ingredients.includes(ing)) {
      setIngrediets(prevIngrediants => [...prevIngrediants, newIngredient])

    }
    setNewIngrediet('')
    if (ingredientInput.current) {
      ingredientInput.current.focus();
    }
  }

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleMethodChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMethod(e.target.value);
  };

  const handlecookingTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCookingTime(e.target.value);
  };

  return (
    <div className='create'>
      <h2 className='page-title'>Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe title:</span>
          <input
            type='text'
            onChange={handleTitleChange}
            value={title}
            required
          />
        </label>

        <label>
          <span>Recipe ingredients:</span>
          <div className="ingredients">
            <input
              type="text"
              onChange={(e) => setNewIngrediet(e.target.value)}
              value={newIngredient}
              ref={ingredientInput}
            />
            <button className='btn' onClick={handleAdd}>add</button>

          </div>
        </label>
        <p>Current ingredients: {ingredients.map(ingredient => <em key={ingredient}>{ingredient}, </em>)}</p>
        <label>
          <span>Recipe method:</span>
          <textarea
            onChange={handleMethodChange}
            value={method}
            required
          />
        </label>

        <label>
          <span>Cooking time (minutes):</span>
          <input
            type='number'
            onChange={handlecookingTimeChange}
            value={cookingTime}
            required
          />
        </label>
        <button className='btn'>submit</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  )
}

export default Create