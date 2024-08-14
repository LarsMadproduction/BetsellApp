let clicks = 0;
let secondclicks = 0;
let addPrice = 0;

function init(){
    renderDishes();
}

function renderDishes(){
    let dishesRef = document.getElementById('content');
    dishesRef.innerHTML = "";
    for (let dishindex = 0; dishindex < dishes.length; dishindex++) {
        let img = dishes[dishindex].img;
        let headline = dishes[dishindex].headline;
        let info = dishes[dishindex].info;
        dishesRef.innerHTML += dishesTemplate(img, headline, info, dishindex)
        for (let menuindex = 0; menuindex < dishes[dishindex]['menu'].length; menuindex++) {
            let name = dishes[dishindex]['menu'][menuindex].name;
            let ingredients = dishes[dishindex]['menu'][menuindex].ingredients;
            let price = dishes[dishindex]['menu'][menuindex].price;
            dishesRef.innerHTML += menuTemplate(name, ingredients, price, dishindex, menuindex) 
        } 
    }
}