import {Row} from "react-bootstrap";
import {convertToReadableDollars} from "../utilities";
import React from "react";

export const TotalSummary = ({specialDiscountTotal,discountAmt, specialAppleOffer, calculatedTotal }) =>
	(<>
		<hr/>
		<Row>
			{<div>Total Value: ${convertToReadableDollars(calculatedTotal)}</div>
			}

		</Row>
		<hr/>
		<Row/>
		<Row>
			{specialAppleOffer &&
			<div>Discount applied
				<Row>
					<span>Saved: ${convertToReadableDollars(discountAmt)}</span>

				</Row>
				<hr/>
				<Row>
					<div> New Total: ${convertToReadableDollars(specialDiscountTotal)}
					</div>
				</Row>
			</div>}
		</Row>
	</>);
