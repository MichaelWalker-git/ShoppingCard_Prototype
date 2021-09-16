import {calculateTotal, convertToReadableDollars, discountCalc, findAndReplaceOld} from "./utilities";

test('convertToReadableDollars', () => {
	expect(convertToReadableDollars(7.3333333)).toBe("7")
});

test('calculateTotal', () => {
	const itemArr = [{price: 4.22, count: 4}];
	expect(calculateTotal(itemArr)).toBe(15);
});

test('discountCalc', () => {
	expect(discountCalc('Apple')).toBe({
		discountTotal: 10,
		newTotal: 40,
	})
});
