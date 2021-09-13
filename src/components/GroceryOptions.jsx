import React from 'react';
import {GroceryCard} from "./GroceryCard";

export const GroceryOptions = ({groceries, addToCart}) => {
	return (
		<div className={"groceryFlex"}>
			{groceries.length && groceries.map((product, idx) =>(
				<GroceryCard
					key={product.id + idx}
					product={product}
					addToCart={addToCart}
				/>
			))}
		</div>
	)
}
