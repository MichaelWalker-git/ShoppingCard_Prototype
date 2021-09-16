import './App.css';
import {Nav} from "./components/Nav";
import {GroceryOptions} from "./components/GroceryOptions";
import {CheckoutSideBar} from "./components/CheckoutSideBar";
import {useEffect, useState} from "react";
import {SpecialOfferToaster} from "./components/SpecialOfferToaster";
import {getAllGroceries} from "./service/groceryService";

function App() {
  const [cart, changeCart] = useState([]);
  const [isOfferActive, setSpecialOffer] = useState(false);
  const [isShowingOffer, showOffer] = useState(false);
  const [allGroceries, updateGroceries] = useState([]);
  //Change map to array

  useEffect(() => {
    updateGroceries(getAllGroceries());
  }, [getAllGroceries]);

  const handleAddToCart = (groceryObj) => {
    const {id, name, price} = groceryObj;
    const defaultCartObj = { id, name, price};
    const newCart = [...cart];
    let groceryObjIndex;
    for (let i = 0; i < newCart.length; i++) {
      if(newCart[i].id === id){
        groceryObjIndex = i;
      }
    }
    if(groceryObjIndex >= 0){
      newCart[groceryObjIndex] = {
        ...defaultCartObj,
        count: newCart[groceryObjIndex].count+1,
      };
      showOffer(true);
    } else {
      newCart.push({
        count: 1,
        ...defaultCartObj
      });
    }
    changeCart(newCart);
  }

  const handleSpecialOffer = () => {
    if(!isOfferActive){
      setSpecialOffer(true);
      showOffer(false);
    }
  };

  return (
    <div className="App">
      <Nav/>
      <div className={"groceryBody"}>
        <GroceryOptions groceries={allGroceries}
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
