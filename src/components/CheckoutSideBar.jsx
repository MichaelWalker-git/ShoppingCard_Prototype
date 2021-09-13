import React, {useEffect, useState} from 'react';
import {convertToReadableDollars} from "../utilities";

export const CheckoutSideBar = ({cart, specialAppleOffer}) => {
	const [checkoutItems, changeCheckoutItems] = useState([]);
	const [checkOutItemSet, changeSet] = useState(new Set());
	const [itemTotal, changeCheckOutTotal ] = useState(0);
	const [specialDiscountTotal, changeDiscountedTotal] = useState(0);
	const [discountAmt, changeDiscountAmt] = useState(0);

	useEffect(() => {
			const groceryList = cart[Symbol.iterator]();


			for (const item of groceryList) {
				const groceryItem = item[1];
				let newCheckoutItems = [...checkoutItems];

				if(!checkOutItemSet.has(groceryItem.id)){
					checkOutItemSet.add(groceryItem.id);
					newCheckoutItems.push(groceryItem);
				} else {
						newCheckoutItems = findAndReplaceOld(newCheckoutItems, groceryItem);
				}
				//Calculate total
				console.log(itemTotal, groceryItem.price)
				changeCheckOutTotal(itemTotal+groceryItem.price);
				changeCheckoutItems(newCheckoutItems);

				if(specialAppleOffer){
					discountCalc(newCheckoutItems);
				}
			}

		}, [cart, specialAppleOffer]
	)

	const discountCalc = (checkoutItems ) => {
		const appleObj = checkoutItems.filter((item) => item.name === 'Apple');
		if(appleObj.length){
			const totalDiscount = (Math.floor(appleObj[0].count/2) * appleObj[0].price);
			const newTotal = itemTotal - totalDiscount;
			changeDiscountAmt(totalDiscount)
			if(newTotal >  0){
				changeDiscountedTotal(newTotal);
			}
		}

	}

	//Use a for loop instead of map for early exit
	const findAndReplaceOld = (checkoutItems, groceryItem) => {
		for (let i = 0; i < checkoutItems.length; i++) {
			if(checkoutItems[i].name === groceryItem.name){
				checkoutItems[i] = groceryItem;
				return checkoutItems;
			}
		}
	}


	//TODO(miketran): Not part of initial requirements
	const removeFromCart = (id) => {
		const newGrocerySet = new Set(...checkOutItemSet);
		newGrocerySet.delete(id);
		changeSet(newGrocerySet);
		// Neeed to check if there is zero items left to do this op
	}

	return (
		<div className={"checkoutSideBar"}>
			<div className={"checkoutSideBarTitle"}>
				<h1>Checkout</h1>
			</div>
			<div  className={"sideBarColumnHeaders underline"}>
				<div>
					<div>Name</div>
				</div>
				<div>
					<div>Price</div>
				</div>
			</div>
			{checkoutItems.length && checkoutItems.map((item) => (
				<div key={item.id} className={"sideBarColumnHeaders"}>
					<div>
						<div>{item.name} x {item.count}</div>
					</div>
					<div>
						<div>${convertToReadableDollars(item.price)}</div>
					</div>
				</div>
			))}

			<div>-------</div>
			{!specialAppleOffer && <div>Total Value: ${convertToReadableDollars(itemTotal)}</div>
			}
			<br/><br/><br/>
			{specialAppleOffer && <div>Discount applied
				<div> New Total: ${convertToReadableDollars(specialDiscountTotal)}
					<br/>
					<span>Saved: ${convertToReadableDollars(discountAmt)}</span>
				</div>
			</div>}
		</div>
	)
}
