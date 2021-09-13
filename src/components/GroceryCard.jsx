import React from 'react'
import {Button, Card} from "react-bootstrap";
import apple from './../static/apple.webp';
import orange from './../static/orange.webp';
import {convertToReadableDollars} from "../utilities";

export const GroceryCard = ({product, addToCart}) => {
	const {name, price, description} = product;
	const imageDir = name === "Apple" ? apple : orange;

	return (
		<div className={"groceryCard"}>
			<Card style={{ width: '18rem' }}>
				<Card.Img variant="top" src={imageDir} />
				<Card.Body>
					<Card.Title>{name} - ${convertToReadableDollars(price)}</Card.Title>
					<Card.Text>
						{description}
					</Card.Text>
					<Button
						onClick={() => addToCart(product)}
						variant="primary">Add To Cart</Button>
				</Card.Body>
			</Card>
		</div>

	)
}
