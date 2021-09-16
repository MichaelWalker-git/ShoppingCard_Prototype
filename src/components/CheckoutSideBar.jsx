import React, {useEffect, useState} from 'react';
import {calculateTotal, convertToReadableDollars, discountCalc, findAndReplaceOld} from "../utilities";
import {Container, Row} from "react-bootstrap";
import {SideBarHeader} from "./CheckoutSideBarHeader";
import {TotalSummary} from "./CheckoutSideBarTotal";

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
					// exists in our system. We want to update the count in the objects.
						newCheckoutItems = findAndReplaceOld(newCheckoutItems, groceryItem);
						changeCheckoutItems(newCheckoutItems);
				}

				changeCheckoutItems(newCheckoutItems);
			}
		if(specialAppleOffer){
			const { discountTotal, newTotal} = discountCalc(checkoutItems);
			changeDiscountAmt(discountTotal);
			changeDiscountedTotal(newTotal);
		}
		//Calculate total
		changeCheckOutTotal(calculateTotal(checkoutItems));

		}, [cart, specialAppleOffer, calculateTotal, checkOutItemSet, checkoutItems, discountCalc]
	)


	return (
		<div className={"checkoutSideBar"}>
			<Container>
				<Row>
					<SideBarHeader/>
				</Row>
				<Row>
					{checkoutItems?.length > 0 && checkoutItems.map((item) => (
						<div key={item.id} className={"sideBarColumnHeaders"}>
							<div>
								<div>{item.name} x {item.count}</div>
							</div>
							<div>
								<div>${convertToReadableDollars(item.price)}</div>
							</div>
						</div>
					))}
				</Row>
				<TotalSummary
					specialDiscountTotal={specialDiscountTotal}
					discountAmt={discountAmt}
					specialAppleOffer={specialDiscountTotal}
					calculatedTotal={itemTotal}
				/>
			</Container>
		</div>
	)
}
