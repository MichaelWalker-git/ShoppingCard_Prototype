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
		<Row>
			{specialAppleOffer && <div>Discount applied
				<div> New Total: ${convertToReadableDollars(specialDiscountTotal)}
					<br/>
					<span>Saved: ${convertToReadableDollars(discountAmt)}</span>
				</div>
			</div>}
		</Row>
	</>);
