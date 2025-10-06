// src/components/IngredientList/IngredientList.jsx
import React from "react";

const IngredientList = ({ ingredients, addToBurger }) => {
  return (
    <div className="ingredient-list">
      <h2>Available Ingredients</h2>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index} style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
            <button onClick={() => addToBurger(ingredient)}>+</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default IngredientList;
