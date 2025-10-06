// src/App.jsx
import { useState } from "react";
import "./components/IngredientList/IngredientList.jsx";
import "./components/BurgerStack/BurgerStack.jsx";
import "./App.css";

    const availableIngredients = [
      { name: "Kaiser Bun", color: "saddlebrown" },
      { name: "Sesame Bun", color: "sandybrown" },
      { name: "Gluten Free Bun", color: "peru" },
      { name: "Lettuce Wrap", color: "olivedrab" },
      { name: "Beef Patty", color: "#3F250B" },
      { name: "Soy Patty", color: "#3F250B" },
      { name: "Black Bean Patty", color: "#3F250B" },
      { name: "Chicken Patty", color: "burlywood" },
      { name: "Lettuce", color: "lawngreen" },
      { name: "Tomato", color: "tomato" },
      { name: "Bacon", color: "maroon" },
      { name: "Onion", color: "lightyellow" },
      { name: "Cheddar Cheese", color: "#FDE18B" },
      { name: "Swiss Cheese", color: "#F1E1A8" },
    ];
    const App = () => {
    const [stack, setSack] = useState([]);

    const addToBurger = (ingredient) => {
      setStack([...stack, ingredient]);
    };

    const removeFromBurger = (ingredientToRemove) => {
      const newStack = stack.filter(
        (ingredient, index) => index !== ingredientToRemove
      );
      setStack(newStack);
    };

    return (
      <main>
        <h1>Burger Stacker</h1>
        <section>
          <IngredientList
            availableIngredeints={availableIngredients}
            addToBurger={addToBurger}
          />
          <BurgerStack stack={stack} removeFromBurger={removeFromBurger} />
        </section>
      </main>
    );
  };
};

export default App;
