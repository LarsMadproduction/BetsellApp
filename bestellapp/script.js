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
        for (let menuindex = 0; menuindex < dishes[dishindex].length; menuindex++) {
            let name = dishes[dishindex][menuindex].menu[menuindex].name;
            let ingredients = dishes[menuindex].menu[menuindex].ingredients;
            let price = dishes[menuindex].menu[menuindex].price;
            dishesRef.innerHTML += menuTemplate(name, ingredients, price, menuindex) 
        } 
    }
    // renderMenus();
}

// function renderMenus(){
//     let menuRef = document.getElementById('content');
    
// }