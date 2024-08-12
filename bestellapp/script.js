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
        let addToBasketRef = document.getElementsByClassName('dish_basket');
        for (let basketindex = 0; basketindex < dishes[dishindex].length; basketindex++) {
            addToBasketRef[dishindex].innerHTML += basketTemplate()
        }
    }
}

function addBasket(index){
    const itemName = dishes[index];
    let addToBasket = document.getElementById(`content${index}`)
    basketTemplate().push(addToBasket)
    init();
}