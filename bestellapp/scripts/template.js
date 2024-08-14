function dishesTemplate(name, ingredients, price, img, headline, info, basketindex){
    return `<div class="genre_tilte">
                <img class="genre_img" src="${img}"/>
                <h2>${headline}</h2>
                <p>${info}</p>
            </div>
            <div class="menu_content">
                <div class="meal_order">
                    <h2 class="meal_title">${name[0].name}</h2>
                    <button onclick="addBasket(${basketindex[0]})" class="add_meal">+</button>
                </div>
                <div class="meal_ingrediants"><h3>${ingredients[0].ingredients}</h3></div>
                <div class="meal_price"><h2>${price[0].price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR'})}</h2></div>
            </div>
            <div class="menu_content">
                <div class="meal_order">
                    <h2 class="meal_title">${name[1].name}</h2>
                    <button onclick="addBasket(${basketindex[1]})" class="add_meal">+</button>
                </div>
                <div class="meal_ingrediants"><h3>${ingredients[1].ingredients}</h3></div>
                <div class="meal_price"><h2>${price[1].price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR'})}</h2></div>
            </div>
            <div class="menu_content">
                <div class="meal_order">
                    <h2 class="meal_title">${name[2].name}</h2>
                    <button onclick="addBasket(${basketindex[2]})" class="add_meal">+</button>
                </div>
                <div class="meal_ingrediants"><h3>${ingredients[2].ingredients}</h3></div>
                <div class="meal_price"><h2>${price[2].price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR'})}</h2></div>
            </div>
            <div class="menu_content">
                <div class="meal_order">
                    <h2 class="meal_title">${name[3].name}</h2>
                    <button onclick="addBasket(${basketindex[3]})" class="add_meal">+</button>
                </div>
                <div class="meal_ingrediants"><h3>${ingredients[3].ingredients}</h3></div>
                <div class="meal_price"><h2>${price[3].price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR'})}</h2></div>
            </div>
            <div class="menu_content">
                <div class="meal_order">
                    <h2 class="meal_title">${name[4].name}</h2>
                    <button onclick="addBasket(${basketindex[4]})" class="add_meal">+</button>
                </div>
                <div class="meal_ingrediants"><h3>${ingredients[4].ingredients}</h3></div>
                <div class="meal_price"><h2>${price[4].price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR'})}</h2></div>
            </div>`
}

function basketTemplate(price, name){
    return `<div class="dish_basket">
                <div><span>1</span>&nbsp;<span>${name[1].name}</span></div>
                    <span>${price[1].price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR'})}</span>
                </div>
            <div class="count_basket">
                <button class="minus_button">-</button>
                <span>1</span>
                <button class="plus_button">+</button>
            </div>`
}