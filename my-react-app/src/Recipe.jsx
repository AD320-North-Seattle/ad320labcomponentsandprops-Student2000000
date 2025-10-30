import "./Recipe.css";

function Recipe(props) {
    return (
    <div className="recipe">
      <h2 class = "nameForm">{props.recipe.name}</h2>
      <h3 class = "listForm">What you'll need...</h3>
      <ul class = "listForm">{props.recipe.ingredients.map((item, index) => (
        <li key={index}>{item}</li>
      ))}</ul>
      <h3>Instructions: </h3>
      <ol style={{ listStyleType: 'upper-roman' }} class = "instForm">{props.recipe.instructions.map((step, index) => (
        <li key={index}>{step}</li>
      ))}</ol>
    </div>
  );
}

export default Recipe;