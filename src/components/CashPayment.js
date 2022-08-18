import React from "react";

function CashPayment({ ingredients }) {
  var samaya = new Date(new Date().getTime());
  var ghanta = samaya.getHours();
  var milet = samaya.getMinutes();
  console.log(ingredients);
  return (
    <div style={{ marginBottom: "20vh" }}>
      <h1>Thank you for your order. </h1>
      <h2>We have received your order and will be processed from now.</h2>
      <h3> Your order number is #{Math.round(Math.random() * 100000)}. </h3>
      <h4>Please tell us the order number.</h4>
      <p>- Management</p>
      <p>Below is the invoice for your order</p>

      <div
        style={{
          width: "90vw",
          height: "50vh",
          border: "1px solid black",
          margin: "4%",
          marginBottom: "2px",
          marginLeft: "4vh",
          backgroundColor: "#F2F3F4",
          paddingBottom: "30%",
        }}
      >
        <h3 style={{ color: "orange" }}>Pizza place</h3>
        <p>1103 Main Street, Houston, Texas </p>
        <p>Phone no: 9859562308</p>
        {ghanta} : {milet} {ghanta > 11 ? "PM" : "AM"}
        <h5 style={{}}>Description</h5>
        <p>
          Veggie pizza with
          {Object.keys(ingredients).reduce((acc, ing) => {
            return acc + ingredients[ing] ? 1 : 0;
          }, 0) === 0 && <p>No ingredients Selected</p>}
          {Object.keys(ingredients).map((ingredient) => {
            return (
              ingredients[ingredient] && (
                <b>
                  {ingredient[0].toUpperCase()}
                  {ingredient.substr(1)},
                </b>
              )
            );
          })}
        </p>
        <h5>Price total is ${5 + Object.keys(ingredients).length}</h5>
      </div>
    </div>
  );
}

export default CashPayment;
