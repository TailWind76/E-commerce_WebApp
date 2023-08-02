import { useState } from "react";
import { useSelector } from 'react-redux';

function Basket() {
    const [savedData, setSavedData] = useState(useSelector(state => state.data));

    const handleDecrease = (index) => {
        if (savedData[index].quantity > 1) {
            const updatedData = [...savedData];
            updatedData[index].quantity -= 1;
            setSavedData(updatedData);
        }
    };

    const handleIncrease = (index) => {
        const updatedData = [...savedData];
        updatedData[index].quantity += 1;
        setSavedData(updatedData);
    };

    function calculateSubtotal() {
        let subtotal = 0;
        for (const item of savedData) {
            subtotal += item.product.price * item.quantity;
        }
        return subtotal;
    }

    return (
        <section className="Cart">
            <div className="Cart_main">
                <h2>Your shopping cart</h2>
               
                {savedData.map((item, index) => (
                    <div className="Cart_main__item" key={index}>
                        <img src={item.product.image} alt={item.product.name} />

                        <div className="Cart_main__item_text">
                            <h3>{item.product.name}</h3>
                            <p>{item.product.description}</p>
                            <p>£{item.product.price}</p>

                            <div className="Cart_main__quantity">
                            <button onClick={() => handleDecrease(index)}>-</button>
                            <p className="quantity_value">{item.quantity}</p>
                            <button onClick={() => handleIncrease(index)}>+</button>
                        </div>

                        </div>


                        <div className="Cart_main__total">
                            <p>£{item.product.price * item.quantity}</p>
                        </div>
                    </div>
                ))}

                <div className="Cart_main__subtotal">
                    <h3>Subtotal: £{calculateSubtotal()}</h3>
                    <p>Taxes and shipping are calculated at checkout</p>
                    <button>Go to checkout</button>
                </div>
            </div>
        </section>
    );
}

export default Basket;
