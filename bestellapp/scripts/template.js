function dishesTemplate(img, headline, info){
    return `<div class="genre_tilte">
                <img class="genre_img" id="${headline}" src="${img}"/>
                <h2>${headline}</h2>
                <p>${info}</p>
            </div>`
}

function menuTemplate(name, ingredients, price, basketindex){
    return  `<div class="menu_content">
                <div class="meal_order">
                    <h2 class="meal_title">${name}</h2>
                    <button onclick="addBasket(${basketindex})" class="add_meal">+</button>
                </div>
                <div class="meal_ingrediants"><h3>${ingredients}</h3></div>
                <div class="meal_price"><h2>${price}</h2>
                </div>
            </div>`
}

// .toLocaleString('de-DE', { style: 'currency', currency: 'EUR'})

function basketTemplate(name, basketindex){
    return `<div id="eachBasket${basketindex}">
                <div class="dish_basket">
                    <div><span class="counter" id="clicks${basketindex}"></span>&nbsp;<span>${name}</span></div>
                    <span class="add_price" id="addPrice${basketindex}"></span>
                </div>
                <div class="count_basket">
                    <button onclick="delAmount(${basketindex})" class="minus_button">-</button>
                    <span class="second_counter" id="secondclicks${basketindex}"></span>
                 <button onclick="addAmount(${basketindex})" class="plus_button">+</button>
                </div>
            </div>`
}

/* <div class="menu_content">
<div class="meal_order">
    <h2 class="meal_title">${name[1].name}</h2>
    <button onclick="addBasket(${basketindex})" class="add_meal">+</button>
</div>
<div class="meal_ingrediants"><h3>${ingredients[1].ingredients}</h3></div>
<div class="meal_price"><h2>${price[1].price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR'})}</h2></div>
</div>
<div class="menu_content">
<div class="meal_order">
    <h2 class="meal_title">${name[2].name}</h2>
    <button onclick="addBasket(${basketindex})" class="add_meal">+</button>
</div>
<div class="meal_ingrediants"><h3>${ingredients[2].ingredients}</h3></div>
<div class="meal_price"><h2>${price[2].price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR'})}</h2></div>
</div>
<div class="menu_content">
<div class="meal_order">
    <h2 class="meal_title">${name[3].name}</h2>
    <button onclick="addBasket(${basketindex})" class="add_meal">+</button>
</div>
<div class="meal_ingrediants"><h3>${ingredients[3].ingredients}</h3></div>
<div class="meal_price"><h2>${price[3].price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR'})}</h2></div>
</div>
<div class="menu_content">
<div class="meal_order">
    <h2 class="meal_title">${name[4].name}</h2>
    <button onclick="addBasket(${basketindex})" class="add_meal">+</button>
</div>
<div class="meal_ingrediants"><h3>${ingredients[4].ingredients}</h3></div>
<div class="meal_price"><h2>${price[4].price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR'})}</h2></div>
</div> */