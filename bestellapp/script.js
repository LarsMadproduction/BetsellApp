function init(){
    addDishes();
}

function addDishes(){
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";
    for (let dishindex = 0; dishindex < dishes.length; dishindex++) {
        let name = dishes[dishindex].name;
        let ingredients = dishes[dishindex].ingredients;
        let price = dishes[dishindex].price;
        contentRef.innerHTML += dishesTemplate(name, ingredients, price)
    }
}