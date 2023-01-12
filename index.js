import {menuArray} from './data.js';

let sumArray = []




function addToPayment(orderPayment){    
   let id = menuArray.filter(function(identif){
         return  orderPayment == identif.id
        })[0]

        let paymentSection = ``

        
        paymentSection = `
            
        <div class="Sum-orders">

            <div class="required">
                <h1>${id.name}</h1>
               <a> <p>remove</p> </a> 
            </div>
            

            <div class="price">
                <h2>$${id.price}</h2>
            </div>
            
        </div>
        `
        /* document.querySelector(".total-price").innerHTML =  */
        document.querySelector(".listOfPayment").innerHTML += paymentSection
        
        sumArray.push(id.price)
        console.log(sumArray)

 }

document.addEventListener('click', function(e){
    if (e.target.dataset.order){
        addToPayment(e.target.dataset.order)
    }


    })

function getFeedHtml(){
    
    let feedHtml = ``

menuArray.forEach(function (order){
    feedHtml +=  `
        <div class="order">
            <img src="${order.img}" alt="" class="order-img">

            <div class="order-info">
                <h1>${order.name}</h1>
                <p>${order.ingredients}</p>
                <h2>$${order.price}</h2>
            </div>

        <a> <img src="images/add-btn.svg" alt="" class="order-icon" data-order="${order.id}"> </a>
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