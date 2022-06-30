import React, { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {
  
   const[inputValue,setInputValue] = useState('');
   const handleInputChange = ({target}) => {
       setInputValue(target.value);
   } 
   const handleSubmit = (event) =>{
           
        event.preventDefault();
        //console.log('Submit Hecho'); 
        const trimInput = inputValue.trim();
        if(trimInput.length>2)
        {
            //setCategories(cat =>[...cat,inputValue]);
            onNewCategory(trimInput);
            setInputValue('');
        }
        
   }
   return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            placeholder='Buscar gifs'
            value={inputValue}
            onChange={ handleInputChange}
            
        />
    </form>
  )
}
