import React, {useEffect, useState} from 'react';
import {calculateTotal, convertToReadableDollars, discountCalc, findAndReplaceOld} from "../utilities";
import {Col, Container, Row, Table} from "react-bootstrap";
import {SideBarHeader} from "./CheckoutSideBarHeader";
import {TotalSummary} from "./CheckoutSideBarTotal";
import {CheckoutSideBarTable} from "./CheckoutSideBarTable";

export const CheckoutSideBar = ({cart, specialAppleOffer}) => {
	const [checkoutItems, changeCheckoutItems] = useState([]);
	const [checkOutItemSet, changeSet] = useState(new Set());
	const [itemTotal, changeCheckOutTotal] = useState(0);
	const [specialDiscountTotal, changeDiscountedTotal] = useState(0);
	const [discountAmt, changeDiscountAmt] = useState(0);

	useEffect(() => {
			changeCheckoutItems(cart);
			if (specialAppleOffer) {
				const {discountTotal, newTotal} = discountCalc(cart);
				changeDiscountAmt(discountTotal);
				changeDiscountedTotal(newTotal);
			}
			//Calculate total
			console.log(checkoutItems, "!!")

			changeCheckOutTotal(calculateTotal(cart));
		}, [cart, specialAppleOffer]
	)


	return (
		<div>
			<Row>
				<SideBarHeader/>
			</Row>
			<Row>
				<CheckoutSideBarTable
					checkoutItems={checkoutItems}
				/>
			</Row>
			<TotalSummary
				specialDiscountTotal={specialDiscountTotal}
				discountAmt={discountAmt}
				specialAppleOffer={specialAppleOffer}
				calculatedTotal={itemTotal}
			/>
		</div>
	)
}
