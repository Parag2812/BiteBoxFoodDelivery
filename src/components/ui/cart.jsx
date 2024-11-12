import React from "react";
import "./cart.css";
import { Link } from "react-router-dom";

const Cart = ({ cartItems }) => {
    // Calculate the total price of items in the cart
    const totalAmount = cartItems.reduce(
        (acc, item) => acc + item.card.info.price / 100, 
        0
    );

    return (
        <div className="cart-container">
            <h2>Shopping Cart</h2>
            {cartItems.length > 0 ? (
                <>
                    {cartItems.map((item, index) => (
                        <div key={index} className="cart-item">
                            <h3>{item.card.info.name}</h3>
                            <p>Price: ₹{item.card.info.price / 100}</p>
                        </div>
                    ))}
                    
                    {/* Display the total and proceed button */}
                    <div className="cart-total">
                        <h3>Total: ₹{totalAmount.toFixed(2)}</h3>
                    </div>
                 <Link to="/underDevelopment">   <button className="proceed-button">Proceed to Pay</button>  </Link>  
                </>
            ) : (
                <p>Your cart is empty</p>
            )}
        </div>
    );
};

export default Cart;


