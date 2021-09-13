import React, {useEffect, useState} from 'react';

export const CheckoutSideBar = ({cart}) => {
	const [checkoutItems, changeCheckoutItems] = useState([]);
	const [checkOutItemSet, changeSet] = useState(new Set());

	const [itemTotal, changeCheckOutTotal ] = useState(0);

	useEffect(() => {
			const groceryList = cart[Symbol.iterator]();
			for (const item of groceryList) {
				const groceryItem = item[1];
				const newCheckoutItems = [...checkoutItems];

				if(!checkOutItemSet.has(groceryItem.id)){
					checkOutItemSet.add(groceryItem.id);
					newCheckoutItems.push(groceryItem);
				}
				changeCheckOutTotal(itemTotal+groceryItem.price);
				changeCheckoutItems(newCheckoutItems);
			}
		}, [cart]
	)

	const removeFromCart = (id) => {
		const newGrocerySet = new Set(...checkOutItemSet);
		newGrocerySet.delete(id);
		changeSet(newGrocerySet);
	}

	return (
		<div className={"checkoutSideBar"}>
			<div className={"checkoutSideBarTitle"}>
				<h1>Checkout</h1>
			</div>
			{checkoutItems.length && checkoutItems.map((item) => (
				<div key={item.id}>
					<div>
						<div>Name</div>
						<div>{item.name}</div>
					</div>
					<div>
						<div>Price</div>
						<div>{item.price}</div>
					</div>
				</div>
			))}

			<div>-------</div>
			<div>Total Value: {itemTotal}</div>

		</div>
	)
}
