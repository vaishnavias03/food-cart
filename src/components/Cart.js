import { useContext, useState } from "react";
import "../StyleSheets/Cart.css";
import { CartItemsContext } from "../CartItemsContext";
import Bill from "./Bill";
import Button from "../UI/Button"



const Cart= () =>{
    //const [count, setCount] = useState(1);
    const {cartItems, setCartItems} = useContext(CartItemsContext);

    const AddOrDecreaseCount =(items, operation)=>
    {
        
        setCartItems(cartItems.map((element) =>{
            
            if(element.item.id === items.item.id ){
                console.log(items.count)
                if(operation === "add"){
                    var count = items.count+1;
                }if(operation === "sub" && items.count !== 1){
                    var count = items.count-1;
                }if(items.count === 1 && operation != "add"){
                    var count = 1
                }
                    return(
                        {
                            ...element,  
                            count: count
                            
                        }
                    );
            }
        return element;
    }
    
   
    ))

};
const DeleteItem =(items) =>
{
    items.isInCart = false
    console.log(items.isInCart) 
    var thatItems = (cartItems.filter((element) => element.item.id !== items.item.id))
    setCartItems(thatItems)

}
    if(cartItems.length > 0){    
    return(
        <div className="container">
            <div>
                <div  className="cart-container">
                {cartItems.map((items)=>{
                return(
                <div className="content-wrapper">
                    <div>
                        <div className="cart-wrapper">
                            <div id="cart-image-wrapper">
                                <img className="cart-item-img" src={items.item.src}></img>
                            </div>
                            <div id="cart-name-wrapper">
                                <span className="cart-item-name">{items.item.name}</span>
                            </div>
                            <div id="cart-cost-wrapper">
                                <span className="cart-item-cost">${items.item.cost}</span>
                            </div>
                            <div id="delete-button">
                                <div>
                                    <Button id="delete" buttonName={"Delete"} onClick={() =>DeleteItem(items)} style={"right"}/>
                                </div>
                                <div id="item-count-wrapper">
                                    <button className="add-count" onClick={()=>AddOrDecreaseCount(items, "add")}>+</button>
                                    <button className="item-count">{items.count}</button>
                                    <button className="sub-count" onClick={()=>AddOrDecreaseCount(items, "sub")}>-</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            );
        })}
            </div>
       </div>
       <div>
           <Bill/>
       </div>
       </div>
    );
    }else{
        return(
            <center><p>No items in your cart :(</p></center>
        )
    }
}
export default Cart;

/*
                    <span >
                        

                    </span>
                    <span className="name-cost-wrapper">
                        <span>

                        </span>
        
                        <span>
                            <span className="count-button-wrapper">

                            </span>
                            
                        </span>
                    </span>
                    */