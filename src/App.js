import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Customize from "./components/Customize";
import Checkout from "./components/Checkout";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import Payment from "./components/Payment";
import CashPayment from "./components/CashPayment";
import CardPayment from "./components/CardPayment";

export const UserContext = React.createContext({
  user: "hehe",
  setUser: () => {},
});

function App() {
  const [ingredients, setIngredients] = useState({
    Basil: false,
    Cheese: false,
    Mushroom: false,
    Olive: false,
    Pineapple: false,
    Tomato: false,
  });

  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/customize">
            <Customize
              ingredients={ingredients}
              setIngredients={setIngredients}
            />
          </Route>
          <Route exact path="/checkout">
            <Checkout ingredients={ingredients} />
          </Route>
          <Route exact path="/payment">
            <Payment ingredients={ingredients} />
          </Route>
          <Route exact path="/CashPayment">
            <CashPayment ingredients={ingredients} />
          </Route>
          <Route exact path="/CardPayment">
            <CardPayment ingredients={ingredients} />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
