const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulIngredients = document.getElementById ('ingredients');

ingredients.forEach (function (ingredient) {
  const li = document.createElement('li');
  li.textContent = ingredient;

  li.classList.add ('item');

  ulIngredients.appendChild(li);
});
