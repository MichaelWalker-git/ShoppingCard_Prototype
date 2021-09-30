import React, {useEffect, useState} from 'react';
import {calculateTotal, discountCalc} from "../utilities";
import {Row} from "react-bootstrap";
import {SideBarHeader} from "./CheckoutSideBarHeader";
import {TotalSummary} from "./CheckoutSideBarTotal";
import {CheckoutSideBarTable} from "./CheckoutSideBarTable";
import {DEFAULT_DISCOUNTED_ITEM} from "../App";

export const CheckoutSideBar = ({cart, specialAppleOffer}) => {
	const [checkoutItems, changeCheckoutItems] = useState([]);
	const [itemTotal, changeCheckOutTotal] = useState(0);
	const [specialDiscountTotal, changeDiscountedTotal] = useState(0);
	const [discountAmt, changeDiscountAmt] = useState(0);

	useEffect(() => {
			changeCheckoutItems(cart);
			if (specialAppleOffer) {
				const {discountTotal, newTotal} = discountCalc(cart, DEFAULT_DISCOUNTED_ITEM);
				changeDiscountAmt(discountTotal);
				changeDiscountedTotal(newTotal);
			}
			changeCheckOutTotal(calculateTotal(cart));
		}, [cart, specialAppleOffer]
	)

	return (
		<>
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
		</>
	)
}
