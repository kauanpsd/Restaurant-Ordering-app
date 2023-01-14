
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
import {menuArray} from './data.js';




let sumItems = []

function soma() { var sum = 0

    for (let i = 0; i < sumItems.length; i++){
        sum += sumItems[i] 

  }

    let result = sum

    document.querySelector(".total-price").innerHTML = `
    <h1>Total Price:</h1>
    <h2>$${result}</h2> 
    `
    console.log(sumItems)

    if(sumItems.length == 1){
        document.querySelector('.payment-title').classList.add('show')
        document.querySelector('.total-price').classList.add('show-flex')
        document.querySelector('.complete-order').classList.add('show')
    
    } if(sumItems.length == 0){
        document.querySelector('.payment-title').classList.remove('show')
        document.querySelector('.total-price').classList.remove('show-flex')
        document.querySelector('.complete-order').classList.remove('show')
    }
}


function addToPayment(orderPayment){    
   let id = menuArray.filter(function(identif){
         return  orderPayment == identif.id
        })[0]

        sumItems.push(
            id.price
        )

    
       }

 

 function removeItem(idItemPrice){
    const indexElement = document.getElementById(`${idItemPrice}`)
    let index = Array.from(indexElement.parentElement.children).indexOf(indexElement)
    indexElement.remove()
    
    
        sumItems.splice(index, 1)
        console.log(sumItems)


 }

document.addEventListener('click', function(e){
    if (e.target.dataset.order){
        addToPayment(e.target.dataset.order)
        totalPrice(e.target.dataset.order)
        }
       if(e.target.dataset.order){
        soma()
       } 
    })

    document.addEventListener('click', function(e){
        if(e.target.dataset.itemid){
            removeItem(e.target.id)
            soma()
            /* CREATE A REMOVE FUNCTION TO TAKE THE SUM NUMBERS OF THE ARRAY */
     
        } 

    })
/* ADD THE SUM, AND UUID */

function totalPrice (choicedItem){
    let id = menuArray.filter(function(item){
        return  choicedItem == item.id
       })[0]

       let randomUuid = uuidv4()


   
    let paymentSection = ``

        
    paymentSection = `
    <div class="Sum-orders"  id="${randomUuid}"}>

        <div class="required">
            <h1>${id.name}</h1>
           <a> <p data-itemid="${randomUuid}" id="${randomUuid}">remove</p> </a> 
        </div>
        

        <div class="price">
            <h2>$${id.price}</h2>
        </div>
        
    </div>
    `
    document.querySelector(".listOfPayment").innerHTML += paymentSection


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

/* MODAL */

document.querySelector(".complete-order").addEventListener('click',function(){
    document.querySelector(".modal").classList.add('show')
})



const formInputs = document.querySelector("#form-inputs")
formInputs.addEventListener('submit', function(e){
    e.preventDefault()

    let formInputs=document.querySelector("#form-inputs")
    const cardData = new FormData(formInputs)

    const name = cardData.get('client')
    

    document.querySelector('.payment-title').classList.remove('show')
    document.querySelector('.total-price').classList.remove('show-flex')
    document.querySelector('.complete-order').classList.remove('show') 
    document.querySelector('.listOfPayment').classList.add('hide')
    document.querySelector(".modal").classList.remove('show')
    document.querySelector(".thanks-screen").classList.add('show-flex')
    document.querySelector(".thanks-screen").innerHTML = `<h1>Thanks, ${name}! Your order is on its way!</h1>`
})

render()


/* function render(){
    
}

render() */