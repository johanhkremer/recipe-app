import './Create.css'
import { useState } from 'react'

const Create = () => {

  const [title, setTitle] = useState<string>('')
  const [method, setMethod] = useState<string>('')
  const [cookingTime, setCookingTime] = useState<string>('')

  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log(title, method, cookingTime)
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
      <form onSubmit={handelSubmit}>
        <label>
          <span>Recipe title:</span>
          <input
            type='text'
            onChange={handleTitleChange}
            value={title}
            required
          />
        </label>

        {/* Ingredients go here! */}

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
      </form>
    </div>
  )
}

export default Create