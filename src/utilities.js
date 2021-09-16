/**
 *
 * @param num
 * @returns {string}
 */
export const convertToReadableDollars = (num) => {
  return (num).toFixed(2);
}

/**
 *
 * @param checkoutItemsArr
 * @returns {number}
 */
export const calculateTotal = (checkoutItemsArr) => {
  let sum = 0;
  checkoutItemsArr.forEach(item => {
    sum += (item.price * item.count);
  })

  return sum;
}

/**
 *
 * @param checkoutItemsArr
 * @returns {{discountTotal: number, newTotal: number}}
 */
export const discountCalc = (checkoutItemsArr) => {
  const appleObj = checkoutItemsArr.filter((item) => item.name === 'Apple');

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

/**
 *
 * @param checkoutItems
 * @param groceryItem
 * @returns {*[]}
 */
export const findAndReplaceOld = (checkoutItems, groceryItem) => {
  const copy = [...checkoutItems];

  for (let i = 0; i < copy.length; i++) {
    if(copy[i].name === groceryItem.name && groceryItem.count >= copy[i].count){
      copy[i] = groceryItem;
      return copy;
    }
  }
  return copy;
}
