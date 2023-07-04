import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('')

  const onInputChange = ({target}) => {
    
    //NOTE: La función setInputValue se utiliza para actualizar el valor de la variable de estado inputValue del elemento <input>
    setInputValue(target.value); 
  }

  const onSubmit = (event) => {
    event.preventDefault();

    if(inputValue.trim().length <= 1) return; // Valida si inputValue tiene al menos 2 caracteres.

    onNewCategory(inputValue.trim());
    setInputValue('');
  }

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input 
        type="text"
        placeholder="Buscar gifs"
        value={ inputValue }
        onChange={ onInputChange }
      />
    </form>
  )
}
