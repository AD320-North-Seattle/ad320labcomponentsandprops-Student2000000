import { recipes } from "./data.js";
import Recipe from "./Recipe.jsx";
import "./RecipeContainer.css";

function RecipeContainer() {
  return (
    <div className="recipeContainer">
{/* Had to break up the stmt, I was having a hard time reading it when it was all together. */}
      {recipes.map(recipe => 
        <Recipe 
            key={recipe.name}
            recipe={recipe}
        />
        )}

    </div>
  );
  
}

export default RecipeContainer;