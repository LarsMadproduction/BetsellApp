function dishesTemplate(name, ingredients, price, basketindex){
    return `<div class="menu_content">
            <div class="meal_order">
              <h2 class="meal_title">${name}</h2>
              <button onclick="addBasket(${basketindex})" class="add_meal">+</button>
            </div>
            <div class="meal_ingrediants"><h3>${ingredients}</h3></div>
            <div class="meal_price"><h2>${price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR'})}</h2></div>
          </div>`
}

function basketTemplate(price, name){
    return `<div class="dish_basket">
            <div><span>1</span><span>${name}</span></div>
            <span>${price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR'})}</span>
          </div>
          <div class="count_basket">
            <button class="minus_button">-</button>
            <span>1</span>
            <button class="plus_button">+</button>
          </div>`
}