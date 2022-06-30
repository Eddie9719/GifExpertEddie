import React, { useState } from 'react'
import { AddCategory,GifGrid } from './components';


export const GifExpertApp = () => {
  
    //const categories = ['One Punch', 'Dragon Ball','One Piece'];
    const [categories,setCategories] = useState(['One Punch']);
    
    // const handleAdd = ()=>{
    //     //setCategories([...categories,'Marvel']);
    //     setCategories(cat =>[...cat,'Marvel']);
    
    // }

    const onAddCategory = (newCategory) =>{
        const capitalize = newCategory.toLowerCase().replace(/(^|\s)([a-z])/g, function(m, p1, p2) { 
            return p1 + p2.toUpperCase(); });
        if(categories.includes(capitalize) ) return;
        setCategories([capitalize,...categories,]);
    }
    return (
    <>
        <h2>GifExpertApp</h2>
        <AddCategory 
        //setCategories ={setCategories}
            onNewCategory={ (event) => onAddCategory (event)}
            
        />
        <hr/>
        {/* <button onClick={ handleAdd }>Agregar</button> */}
            {
                categories.map( (category) =>
                    (
                        <GifGrid 
                        key={category} 
                        category={category} />
                    ))
            }
    </>
  )
}

