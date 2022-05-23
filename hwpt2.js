/* in the in class example we needed to break each time 
would it not make sense to do this here because we would continue
to need to add things to our cart?*/


let item= {

}

let cart= []

function Cart(item, cart){
    let startShopping=cart.slice() //this is copying the cart list 
                                //I"m not sure why we are doing this though. 
    //add to Cart

    switch(addToCart){ //is switch just similar to a loop that it will go through and check all of the elements?
        case "add": //case is running my function? or it's running the switch
            startShopping.push(item) //push is java for append 
            return startShopping; 
   //remove one item

        case "removeOne":
            for(let itemInCart of startShopping){
                if (itemInCart ===item){ //three equal signs in java tests for false values two equal signs checks if the type is the same?
                    startShopping.pop(item) //pop will remove the item 
                    return startShopping;
                }
            }
            return startShopping;
  //remove all items
        case "removeAll": 
            for (let itemInCart of startShopping){
                if (itemInCart===item){  //I'm not sure how to differentiate between one item and multiple items
                    startShopping.pop(item)
                }
            }
            return startShopping;

              //clear cart  
        case "clearCart":
            for (itemInCart of startShopping){
                startShopping.pop(item)
            }
            return startShopping; //returning the empty cart for clearing the cart
    }
}

console.log(Cart(startShopping))