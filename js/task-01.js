const items = document.querySelectorAll('#categories .item');

console.log(`Numărul total de categorii este: ${items.length}`);

items.forEach(item => {
    const title = item.querySelector('h2').textContent;
    const subItems = item.querySelectorAll('li');
    console.log(`Categorie: ${title}`);
    console.log(`Numărul de elemente: ${subItems.length}`);
    console.log('-------------------------');
});


