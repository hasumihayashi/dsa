/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
    if(prices.length <= 1) return 0; //edge cases
    let minPrice = Number.MAX_SAFE_INTEGER;
    let maxProfit = 0;
    for(let i = 0; i < prices.length; i++) {
        if(prices[i] < minPrice) {
            minPrice = prices[i];
        } else if(prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }
    return maxProfit;
};