import {Table} from "react-bootstrap";
import {convertToReadableDollars} from "../utilities";
import React from "react";

export const CheckoutSideBarTable = ({checkoutItems}) => {
	return (
		<Table striped hover>
			<thead>
			<tr>
				<th>Name x Quantity</th>
				<th>Price</th>
			</tr>
			</thead>
			<tbody>
			{checkoutItems?.length === 0 && <tr>
				No items
			</tr>}

			{checkoutItems?.length > 0 && checkoutItems.map((item) => (
				<tr key={item.id}>
					<td>{item.name} x {item.count}</td>
					<td>${convertToReadableDollars(item.price)}</td>
				</tr>
			))}
			</tbody>
		</Table>)
}
