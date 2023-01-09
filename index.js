import {menuArray} from './data.js';

function getFeedHtml(){
    
    let feedHtml = ``

menuArray.forEach(function (order){

    feedHtml +=  `
<div class="order">
    <img src="${order.img}" alt="" class="order-img">

    <div class="order-info">
        <h1>${order.name}</h1>
        <p>${order.ingredients}</p>
        <h2>${order.price}</h2>
    </div>

    <img src="images/add-btn.svg" alt="" class="order-icon">
</div>
    `
    
})
    return feedHtml
}

function render(){
    document.querySelector('.orders').innerHTML = getFeedHtml()
}

render()


/* function render(){
    
}

render() */