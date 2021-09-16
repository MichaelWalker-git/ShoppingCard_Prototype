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
		changeCheckoutItems(cart);
		if(specialAppleOffer){
			const { discountTotal, newTotal} = discountCalc(cart);
			changeDiscountAmt(discountTotal);
			changeDiscountedTotal(newTotal);
		}
		//Calculate total
		console.log(checkoutItems,"!!")

		changeCheckOutTotal(calculateTotal(cart));
		}, [cart, specialAppleOffer]
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
					specialAppleOffer={specialAppleOffer}
					calculatedTotal={itemTotal}
				/>
			</Container>
		</div>
	)
}
