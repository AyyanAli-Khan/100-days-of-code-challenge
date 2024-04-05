"use strict";
function SandwichIngredients(...ingredients) {
    return `Ingredients you want in sandwich are ${ingredients.join(", ")}.`;
}
console.log(SandwichIngredients("mayonnaise", "grilled chicken"));
console.log(SandwichIngredients("cheese", "tomatoes", "lettuce"));
console.log(SandwichIngredients("cucumber", "mustard", "turkey", "cheese"));
