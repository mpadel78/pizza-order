import React from 'react';
import {useHistory} from 'react-router-dom';

function Payment() {
    const history = useHistory();
    return (
        <div>
            <h1>Please choose the payment type</h1>
            <button className="proceedToCheckout"
            style={{ marginLeft: 10 }} onClick = {() =>history.push("/CashPayment")}>Cash</button>
            <button className="proceedToCheckout"
            style={{ marginLeft: 10 }}
            onClick = {() =>history.push("/CardPayment")}
            >Card</button>
                
        </div>
    )
}

export default Payment
