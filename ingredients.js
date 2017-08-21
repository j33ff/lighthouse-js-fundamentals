var ingredients = ["eggs", "milk","flour", "sugar", "baking soda", "baking powder", "chocolate chips","bananas"];
var repeat = 0;

// Write a while loop that prints out the contents of ingredients:

while (repeat < ingredients.length) {
  console.log("While"+repeat ,ingredients[repeat]);
  repeat++;
}

// Write a for loop that prints out the contents of ingredients:

for (var i = 0; i < ingredients.length; i++) {
  console.log('For'+i, ingredients[i]);
}


// Write any loop (while or for) that prints out the contents of ingredients backwards:


  console.log(ingredients.reverse());
