import './App.css';
import {Nav} from "./components/Nav";
import {GroceryOptions} from "./components/GroceryOptions";
import {CheckoutSideBar} from "./components/CheckoutSideBar";
import {useState} from "react";

//TODO(miketran): Replace with API in the future.
const GroceryPossibilities = [
  {
    id: 1,
    name: "Apple",
    price: 0.60,
    description: "This is an Apple",
  },
  {
    id: 2,
    name: "Orange",
    price: 0.25,
    description: "This is an Orange",
  },
];

function App() {
  // Cart hashmap <id, {count: number, name: string, price: number, id: number}>
  const [cart, changeCart] = useState(new Map());

  const handleAddToCart = (groceryObj) => {
    const {id, name, price} = groceryObj;
    const newMapCart = new Map([...cart]);
    const defaultCartObj = {
      name: name,
      price: price,
      id: id
    }

    if(newMapCart.has(id)){
      const cartObj = newMapCart.get(id);
      newMapCart.set(id, {
        count: cartObj.count++,
        ...defaultCartObj
      })

    } else {
      newMapCart.set(id, {
        count: 0,
        ...defaultCartObj
      })
    }

    changeCart(newMapCart);
  }

  const handleRemoveFromCart = (groceryObjId) => {
  //   const newMapCart = new Map([...cart]);
  //   // const defaultCartObj = {
  //   //   name: name,
  //   //   price: price,
  //   //   id: id
  //   // }
  //   //
  //   //   const cartObj = newMapCart.get(id);
  //   //   newMapCart.set(id, {
  //   //     ...defaultCartObj
  //
  //   //     count: cartObj.count--,
  //   //   })
  //
  //
  //   changeCart(newMapCart);
  }

  return (
    <div className="App">
      <Nav/>
      <div className={"groceryBody"}>
        <GroceryOptions groceries={GroceryPossibilities}
                        addToCart={handleAddToCart}/>
        <CheckoutSideBar
          cart={cart}
          removeFromCart={handleRemoveFromCart}/>
      </div>
    </div>
  );
}

export default App;
