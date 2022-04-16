import { useState,  useContext } from "react";
import { CartItemsContext } from "../CartItemsContext";
import { Data } from "../Data/Data"
import "../StyleSheets/ListData.css"
import Button from "../UI/Button"


function ListData() {
  const [visible, setVisible] = useState(false)
  const [itemName, setItemName] = useState('');
  const [offerDisplay, setOfferDisplay] = useState(false);
  const [isInCart, setIsInCart ] = useState(false)
  const {cartItems, setCartItems} = useContext(CartItemsContext);


  const isAlreadyInCart = (items)=>
  {
    var item = cartItems.filter(ele => ele.item.id === items.id)
    if(item.isInCart === undefined && item.length <= 0)
    {
      return false
    }
    else if(item.length >= 1)
    {
      return true
    }
    
    }

    const AddToCart = (item) =>
    {
      setItemName(item.name);
      if(!isAlreadyInCart(item))
      {
        setCartItems([
          ...cartItems, {
            item, 
            count: 1,
            isInCart: true
          }
        ]);
        
        setVisible(true);
        setIsInCart(true)
        setTimeout(() => setVisible(false), 1500);
    }
    else
    {
      console.log(item)
      setVisible(true);
      setIsInCart(false)
      setTimeout(() => setVisible(false), 1500);

    }
    
    
  } 
  
  const ShowOffer=(props)=>
    {
      if(props.Offer !== 0)
      {
        setOfferDisplay(true);
        return(
          <p className="item-offer-text">{`Off ${props.Offer}`}%</p>
        );
      }
      
    }
  
     return (
       
      <div className="total-wrapper">
        <div className="message">
          <p style={{display : visible ? 'block' : 'none'}}>
            {isInCart ? itemName+" is added to Cart!": itemName+" is already in Cart!"}
          </p>
        </div>
        <div className="List-container">
            {Data.map((item)=>
            {
              return(
              <div className="list-wrapper">
                <div className="image-wrapper">
                    <img className="item-image" src={item.src} ></img>
                    <p className="item-offer" style={{display : offerDisplay ? 'block' : 'none'}}> 
                      <ShowOffer Offer={item.Offer}/>
                    </p>
                </div>

                <div>
                  <div className="list-wrapper2">
                      <div id="name">
                          <span className="item-name">{item.name}</span>
                      </div>
                      <div id="cost">
                        <span className="item-cost">${item.cost}</span>
                      </div>
                  </div>
                </div>

                <div className="button-rating-wrapper">
                    <div className="add-button">
                        <Button props1={item} buttonName={"Add to cart"} onClick={() =>AddToCart(item)}/>
                    </div>
                    <div id="rating">
                        <span className="item-rating">{item.rating}⭐</span>
                      </div>
                  </div>
                </div>
              );
            })}
          </div>
      </div>
    );
  }
  
  export default ListData;
  