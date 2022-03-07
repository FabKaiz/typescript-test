import React from 'react'
import './InputField.css'

const InputField = () => {
  return (
    <form className="input">
      <input type="input" placeholder="Enter a task" className="input__box" />
      <button className="input__submit" type="submit">Add</button>
    </form>
  )
}

export default InputField