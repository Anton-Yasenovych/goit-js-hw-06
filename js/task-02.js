const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

const makeNewsItemsList = (elementList)=>{
return elementList.map((ingred) => {
    const newItemList = document.createElement("li");
    newItemList.textContent = ingred;
    newItemList.classList.add("item");
   return newItemList;
    })
};

const ingredientsList = makeNewsItemsList(ingredients);
list.append(...ingredientsList);


  

  





    

      