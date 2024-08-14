function dishesTemplate(img, headline, info){
    return `<div class="genre_tilte">
                <img class="genre_img" id="${headline}" src="${img}"/>
                <h2>${headline}</h2>
                <p>${info}</p>
            </div>`
}

function menuTemplate(name, ingredients, price, basketindex, menuindex){
    return  `<div class="menu_content">
                <div class="meal_order">
                    <h2 class="meal_title">${name}</h2>
                    <button onclick="addBasket(${basketindex},${menuindex})" class="add_meal">+</button>
                </div>
                <div class="meal_ingrediants"><h3>${ingredients}</h3></div>
                <div class="meal_price"><h2>${price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR'})}</h2>
                </div>
            </div>`
}

function basketTemplate(name, basketindex, menuindex){
    return `<div id="eachBasket${basketindex},${menuindex}">
                <div class="dish_basket">
                    <div><span class="counter" id="clicks${menuindex}"></span>&nbsp;<span>${name}</span></div>
                    <span class="add_price" id="addPrice${basketindex}"></span>
                </div>
                <div class="count_basket">
                    <button onclick="delAmount(${basketindex})" class="minus_button">-</button>
                    <span class="second_counter" id="secondclicks${basketindex}"></span>
                 <button onclick="addAmount(${basketindex})" class="plus_button">+</button>
                </div>
            </div>`
}