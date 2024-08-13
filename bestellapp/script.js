function init(){
    addDishes();
    addTitles();
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

function addTitles(){
    let contentTitleRef = document.getElementById('contentTitle')
    contentTitleRef.innerHTML = "";
    for (let titleindex = 0; titleindex < titles.length; titleindex++) {
        let img = titles[titleindex].img;
        let title = titles[titleindex].title;
        let info = titles[titleindex].info;
        contentTitleRef.innerHTML += titleTemplate(img, title, info, titleindex)
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