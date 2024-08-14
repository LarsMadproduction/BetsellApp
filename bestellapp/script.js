function init(){
    addDishes();
}

function addDishes(){
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";
    for (let dishindex = 0; dishindex < dishes.length; dishindex++) {
        let name = dishes[dishindex].title[0].menu;
        let ingredients = dishes[dishindex].title[0].menu;
        let price = dishes[dishindex].title[0].menu;
        let img = dishes[dishindex].title[0].img;
        let headline = dishes[dishindex].title[0].headline;
        let info = dishes[dishindex].title[0].info;
        contentRef.innerHTML += dishesTemplate(name, ingredients, price, img, headline, info, dishindex) 
    }
}

function addBasket(basketindex){
    let dishItem = dishes[basketindex];
    shoppingBasket.push(dishItem);
    let contentBasketRef = document.getElementById('contentBasket');
    let name = dishes[basketindex].title[0].menu;
    let price = dishes[basketindex].title[0].menu;
    contentBasketRef.innerHTML += basketTemplate(price, name, basketindex);
}