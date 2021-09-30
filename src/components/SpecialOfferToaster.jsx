import React from 'react'
import {Button, Container, Row, Toast, ToastContainer} from "react-bootstrap";

export const SpecialOfferToaster = ({handleSpecialOffer, closeOffer}) => {
	return (
		<ToastContainer position={'bottom-center'}>
			<Toast onClose={() => closeOffer()}>
				<Toast.Header>
					<strong className="me-auto">Special Offer</strong>
				</Toast.Header>
				<Toast.Body>Buy one, get one free on apples.
					<Container>
						<Row>
						</Row>
						<Row>
							<Button onClick={handleSpecialOffer}>Click here to Activate</Button>
						</Row>
					</Container>
				</Toast.Body>
			</Toast>
		</ToastContainer>
		)
}
