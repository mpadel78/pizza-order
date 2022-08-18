import React from 'react'
import Cheese from "../assets/BaseCheese.png";
import Base from "../assets/PizzaBase.png";
import Olive from "../assets/Olive.png";
import Pineapple from "../assets/Pineapple.png";
import Mushroom from "../assets/Mushroom.png";
import Basil from "../assets/Basil.png";
import Tomato from "../assets/Tomato.png";
import {motion} from 'framer-motion';
import {useHistory} from 'react-router-dom';


export default function Customize({ingredients, setIngredients}) {

    let history = useHistory();
    const ChangeIngredients =(event, name) =>{
        let newIngredients = JSON.parse(JSON.stringify(ingredients));
newIngredients[name] = event;
setIngredients(newIngredients);
    }

    console.log(ingredients);
    return (
        <div style ={{display: "flex"}}>
        
            <div style ={{border: '2px solid black', flex: 1}}>
<div style ={{maxHeight: 500, maxWidth: 500, position: "relative"}}>
<motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: ingredients["Basil"] ? 100 : -100,
              opacity: ingredients["Basil"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients z4"
          >
            <img src={Basil} alt="Pizza Base" height="100%" width="100%" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: ingredients["Olive"] ? 100 : -100,
              opacity: ingredients["Olive"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients z4"
          >
            <img src={Olive} alt="Pizza Base" height="100%" width="100%" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: ingredients["Pineapple"] ? 100 : -100,
              opacity: ingredients["Pineapple"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients z3"
          >
            <img src={Pineapple} alt="Pizza Base" height="100%" width="100%" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: ingredients["Tomato"] ? 100 : -100,
              opacity: ingredients["Tomato"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients z4"
          >
            <img src={Tomato} alt="Tomato" height="100%" width="100%" />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{
              // y: ingredients["cheese"] ? 100 : -100,
              // opacity: ingredients["cheese"] ? 1 : 0,
              scale: ingredients["Cheese"] ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="cheese z1"
          >
            <img src={Cheese} alt="Cheese" height="100%" width="100%" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: ingredients["Mushroom"] ? 100 : -100,
              opacity: ingredients["Mushroom"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients z4"
          >
            <img src={Mushroom} alt="Pizza Base" height="100%" width="100%" />
          </motion.div>

          <motion.div transition={{ duration: 1 }} className="">
            <img src={Base} alt="Pizza Base" height="100%" width="100%" />
          </motion.div>
</div>
            </div>
            <div style ={{border: '2px solid black', flex: 2}}>
                <label class = "container-checkbox">
                    Pineapple
<input type ="checkbox" checked = {ingredients["Pineapple"]} onChange = {(event)=>ChangeIngredients(event.currentTarget.checked, 'Pineapple')}/>
<span class ="checkmark"></span> 
</label>
<label class = "container-checkbox">
                    Basil
<input type ="checkbox" checked = {ingredients["Basil"]} onChange = {(event)=>ChangeIngredients(event.currentTarget.checked, 'Basil')}/>
<span class ="checkmark"></span> 
</label>
<label class = "container-checkbox">
                    Cheese
<input type ="checkbox" checked = {ingredients["Cheese"]} onChange = {(event)=>ChangeIngredients(event.currentTarget.checked, 'Cheese')}/>
<span class ="checkmark"></span> 
</label>
<label class = "container-checkbox">
                   Mushroom
<input type ="checkbox" checked = {ingredients["Mushroom"]} onChange = {(event)=>ChangeIngredients(event.currentTarget.checked, 'Mushroom')}/>
<span class ="checkmark"></span> 
</label>
<label class = "container-checkbox">
                    Olive
<input type ="checkbox" checked = {ingredients["Olive"]} onChange = {(event)=>ChangeIngredients(event.currentTarget.checked, 'Olive')}/>
<span class ="checkmark"></span> 
</label>
<label class = "container-checkbox">
                    Tomato
<input type ="checkbox" checked = {ingredients["Tomato"]} onChange = {(event)=>ChangeIngredients(event.currentTarget.checked, 'Tomato')}/>
<span class ="checkmark"></span> 
</label>

<button style ={{background: "orange", borderRadius: '20px', marginTop: '100px', fontSize: '20px', fontWeight: 600, cursor: 'pointer', padding: '20px 20px'}} onClick = {() =>history.push("/checkout")}>
    Proceed to Checkout
</button>
           </div>
           
        </div>
    )
}
