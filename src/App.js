import './App.css';
import {Nav} from "./components/Nav";
import {GroceryOptions} from "./components/GroceryOptions";
import {CheckoutSideBar} from "./components/CheckoutSideBar";
import {useEffect, useState} from "react";
import {SpecialOfferToaster} from "./components/SpecialOfferToaster";
import {getAllGroceries} from "./service/groceryService";
import {Col, Container} from "react-bootstrap";

export const DEFAULT_DISCOUNTED_ITEM = "Apple";

function App() {
	const [cart, changeCart] = useState([]);
	const [isOfferActive, setSpecialOffer] = useState(false);
	const [isShowingOffer, showOffer] = useState(false);
	const [allGroceries, updateGroceries] = useState([]);

	useEffect(() => {
		updateGroceries(getAllGroceries());
	}, [getAllGroceries]);

	const handleAddToCart = (groceryObj) => {
		const {id, name, price} = groceryObj;
		const defaultCartObj = {id, name, price};
		const newCart = [...cart];
		let groceryObjIndex;
		for (let i = 0; i < newCart.length; i++) {
			if (newCart[i].id === id) {
				groceryObjIndex = i;
			}
		}
		if (groceryObjIndex >= 0) {
			newCart[groceryObjIndex] = {
				...defaultCartObj,
				count: newCart[groceryObjIndex].count + 1,
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
		if (!isOfferActive) {
			setSpecialOffer(true);
			showOffer(false);
		}
	};

	const closeSpecialOffer = () => {
		showOffer(false);
	}

	return (
		<div className="App">
			<Nav/>
			<Container className={"groceryBody"}>
				<Col xs={9}>
					<GroceryOptions groceries={allGroceries}
													addToCart={handleAddToCart}/>
				</Col>
				<Col>
					<CheckoutSideBar
						specialAppleOffer={isOfferActive}
						cart={cart}/>
				</Col>
			</Container>
			{isShowingOffer && <SpecialOfferToaster handleSpecialOffer={handleSpecialOffer}
																							closeOffer={closeSpecialOffer}/>}
		</div>
	);
}

export default App;
