import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import Pizzaman from "../assets/PizzaMan.png";

export default function Checkout({ingredients}) {

    const history = useHistory();
    const [success, setSuccess] = useState(false);
   var[date, setdate] = useState(new Date());


   

  var samaya = new Date(new Date().getTime()+(30*60000));
  var ghanta = samaya.getHours();
  var milet = samaya.getMinutes();

    return (
        <div style = {{padding: 50, display: "flex"}}>
        <div style={{ flex: 1 }}>
            <div>
                <h1 style={{ fontFamily: "Comfortaa" }}>
                    My Ingredients
                </h1>
                {Object.keys(ingredients).reduce((acc, ing) => {
            return acc + ingredients[ing] ? 1 : 0;
          }, 0) === 0 && <p>No ingredients Selected</p>}
          {Object.keys(ingredients).map((ingredient) => {
            return (
              ingredients[ingredient] && (
                <p>
                  {ingredient[0].toUpperCase()}
                  {ingredient.substr(1)}
                </p>
              )
            );
          })}
                <button className="proceedToCheckout"
            style={{ marginLeft: 10 }}onClick = {() =>setSuccess(true), ()=>history.push("/Payment") }>Confirm</button>
                <button className="proceedToCheckout" onClick = {()=>history.push("/")} >Go back</button>
            </div>
            
        </div>
        <div style={{ flex: 1 }}>
        {success && (
          <div style={{ textAlign: "center" }}>
            <img src={Pizzaman} alt="pizzaman" height="300px" />
            <div style={{ fontFamily: "Open Sans Condensed", fontSize: 35 }}>
              We have received your order, Thank you
            </div>
            <div style={{ fontFamily: "Comfortaa" }}>
              Order #{Math.round(Math.random() * 100000)}
            </div>
            <div style={{ color: 'green', fontFamily: "Indie Flower", fontSize: 20 }}>
              Your order will be ready by  {ghanta} : {milet} {(ghanta>11)? "PM": "AM"}
            </div>
          </div>
        )}
        </div>
        </div>
    );
}
