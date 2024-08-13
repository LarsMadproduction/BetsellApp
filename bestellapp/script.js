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
        contentRef.innerHTML += dishesTemplate(name, ingredients, price, dishindex) 
    }
}

function addBasket(basketindex){
    let dishItem = dishes[basketindex];
    shoppingBasket.push(dishItem);
    let contentBasketRef = document.getElementById('contentBasket');
    let name = dishes[basketindex].name;
    let price = dishes[basketindex].price;
    contentBasketRef.innerHTML += basketTemplate(price, name, basketindex);
}