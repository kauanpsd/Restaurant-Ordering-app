
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
import {menuArray} from './data.js';



let itemsArray = []
let sumItems = []


function addToPayment(orderPayment){    
   let id = menuArray.filter(function(identif){
         return  orderPayment == identif.id
        })[0]


        var sum = 0

        sumItems.push(
            id.price
        )

        for (let i = 0; i < sumItems.length; i++){
            sum += sumItems[i] 
      }
    
        document.querySelector(".total-price").innerHTML = `
        <h1>Total Price:</h1>
        <h2>$${sum}</h2> 
        `

        console.log(sumItems)

        if(sumItems.length === 1){
            document.querySelector('.payment-title').classList.add('show')
            document.querySelector('.total-price').classList.add('show-flex')
            document.querySelector('.complete-order').classList.add('show')
        }

        

 }

document.addEventListener('click', function(e){
    if (e.target.dataset.order){
        addToPayment(e.target.dataset.order)
        totalPrice(e.target.dataset.order)
        }
    })

    document.addEventListener('click', function(e){
        if(e.target.dataset.itemid){
            

            let itemString = `"${e.target.dataset.itemid}"`
           console.log( document.getElementById(itemString))
        }

      
        
        
    })
/* ADD THE SUM, AND UUID */

function totalPrice (choicedItem){
    let id = menuArray.filter(function(item){
        return  choicedItem == item.id
       })[0]

       let randomUuid = uuidv4()

    itemsArray.push(
        {   
            name:id.name,
            price:id.price,
            uuid:randomUuid
        },
    )

   
    let paymentSection = ``

        
    paymentSection = `
    <div class="Sum-orders"  id:"${randomUuid}"}>

        <div class="required">
            <h1>${id.name}</h1>
           <a> <p data-itemid="${randomUuid}">remove</p> </a> 
        </div>
        

        <div class="price">
            <h2>$${id.price}</h2>
        </div>
        
    </div>
    `
    document.querySelector(".listOfPayment").innerHTML += paymentSection

    console.log(itemsArray) 
   
}


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