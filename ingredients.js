const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients: let i = 0; while (i < ingredients.length) {
let i = 0
while (i < ingredients.length){
console.log(ingredients[i]);
i++
}
// Write a for loop that prints out the contents of ingredients:
for (let x = 0; x < ingredients.length; x++) {
  console.log(ingredients[x]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
let ingredientsToIterate = ingredients.slice(0).reverse();

for (let y = 0; y < ingredientsToIterate.length; y++){
  console.log(ingredientsToIterate[y]);
}