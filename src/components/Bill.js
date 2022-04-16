import "../StyleSheets/Bill.css"
import {useContext, useState} from 'react'
import { CartItemsContext } from "../CartItemsContext"

function Bill(){
    const {cartItems, setCartItems} = useContext(CartItemsContext);
    var totalCost = 0;
    return(
    <div className="bill-wrapper">
        <div id="table">
            <div id="row">
                <span>Items({cartItems.length})</span>
                <span></span>
                <span></span>
            </div>
            {cartItems.map((element) =>
            {
                totalCost = totalCost + ((element.item.cost) * (element.count))
                return(
                    <div>
                        <div id="row">
                            <span>{element.item.name}</span>    
                            <span></span>
                            <span>${element.item.cost * element.count}</span>
                        </div>
                    </div>
                    
                );
            })}
            {/* To draw a line  */}
            <div id="line">-</div>
            <div id="row">
                <span id="subtotal">SubTotal</span>
                <span></span>
                <span id="subtotal">${totalCost}</span>
            </div>
        </div>
    </div>
);
}

export default Bill;