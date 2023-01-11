import {menuArray} from './data.js';

function addToPayment(orderPayment){

    /* ADICIONAR A STRING DE HTML DAS ORDENS DE PAGAMENTO AQUI */
        
    console.log( menuArray.filter(function(price){
         return  orderPayment == price.id
        })[0]
        )

        let paymentSection = ``

        paymentSection = `

        <div class="Sum-orders">

            <div class="required">
                <h1>PIZZA</h1>
                <p>remove</p>
            </div>
            

            <div class="price">
                <h2>$14</h2>
            </div>
            
            
        </div>
        `

        document.querySelector(".listOfPayment").innerHTML += paymentSection
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