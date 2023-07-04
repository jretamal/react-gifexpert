import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) =>{
    //NOTE: Valida si newCategory esta incluido dentro de categories, si ya existe no hace nada.
    if(categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories])
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory 
        onNewCategory={ value => onAddCategory(value)}
      />

      {
        categories.map((category) => (
          <GifGrid 
            key={ category } 
            category={ category }
          />
        ))
      }
    </>
  );
};
