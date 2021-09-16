import './App.css';
import {Nav} from "./components/Nav";
import {GroceryOptions} from "./components/GroceryOptions";
import {CheckoutSideBar} from "./components/CheckoutSideBar";
import {useState} from "react";
import {SpecialOfferToaster} from "./components/SpecialOfferToaster";

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
  const [isOfferActive, setSpecialOffer] = useState(false);
  const [isShowingOffer, showOffer] = useState(false);

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
        ...defaultCartObj,
        count: cartObj.count+1,
      })

      // Show special offer after 2nd item is added.
      showOffer(true);

    } else {
      newMapCart.set(id, {
        count: 1,
        ...defaultCartObj
      })
    }
    changeCart(newMapCart);
  }


  const handleSpecialOffer = () => {
    setSpecialOffer(true);
  };

  return (
    <div className="App">
      <Nav/>
      <div className={"groceryBody"}>
        <GroceryOptions groceries={GroceryPossibilities}
                        addToCart={handleAddToCart}/>
        <CheckoutSideBar
          specialAppleOffer={isOfferActive}
          cart={cart}/>
      </div>
      {isShowingOffer && <SpecialOfferToaster handleSpecialOffer={handleSpecialOffer}/>}
    </div>
  );
}

export default App;
