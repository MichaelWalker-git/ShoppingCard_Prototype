/**
 * @typedef groceryItem {{
 *   id: number,
 *   name: string,
 *   price: number,
 *   count: number,
 * }}
 *
 */

/**
 *  Converts floated numbers to a fixed number.
 * @param num number
 * @returns {string}
 */
export const convertToReadableDollars = (num) => {
  if(Number(num) > 0){
    return (num).toFixed(2);
  }
}

/**
 * Calculates the total amount of an array of groceryItems
 * @param checkoutItemsArr groceryItem[]
 * @returns {number}
 */
export const calculateTotal = (checkoutItemsArr) => {
  let sum = 0;
  if(checkoutItemsArr.length > 0 ){
    checkoutItemsArr?.forEach(item => {
      sum += (item.price * item.count);
    })
  }

  return sum;
}

/**
 * Returns an object containing the discount amount and the new total bill.
 * @param checkoutItemsArr groceryItem[]
 * @param discountedItem String
 * @returns {{discountTotal: number, newTotal: number}}
 */
export const discountCalc = (checkoutItemsArr, discountedItem) => {
  const appleObj = checkoutItemsArr.filter((item) => item.name === discountedItem);

  if(appleObj?.length){
    const discountTotal = (Math.floor(appleObj[0].count/2) * appleObj[0].price);
    const newTotal = calculateTotal(checkoutItemsArr) - discountTotal;
    if(newTotal > 0){
      return {
        discountTotal, newTotal
      }
    }
  }
}
