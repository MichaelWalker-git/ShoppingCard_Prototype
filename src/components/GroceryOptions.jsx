import React from 'react';
import {GroceryCard} from "./GroceryCard";
import {Col, Row} from "react-bootstrap";

export const GroceryOptions = ({groceries, addToCart}) => {
	return (
		<Row>
			{groceries.length && groceries.map((product, idx) => (
				<Col key={product.id + idx}>
					<GroceryCard
						product={product}
						addToCart={addToCart}
					/>
				</Col>
			))}
		</Row>
	)
}
