
import {useState} from 'react'
import { AddCategory,GifGrid } from './components'
export const GifExperApp = () => {
    const [categories, setCategories] = useState(['Boku No Hero'])
    const onAddCategory=(newCategory)=>{
        if(categories.includes(newCategory))return
        setCategories([...categories,newCategory])

    }
  return (
    <>
    <h1>GifExpertApp</h1>
    <AddCategory
     //setCategories={setCategories}
     onNewCategory={(value)=>onAddCategory(value)}
     />
   
    {
        categories.map(category=>
            (
                <GifGrid 
                key={category}
                category={category}/>
            )
        )
    }
    
    </>
  )
}
