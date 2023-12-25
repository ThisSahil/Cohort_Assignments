/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryList = {};
  transactions.forEach((item) => {
    const { category, price } = item;

    if (categoryList.hasOwnProperty(category)) {
      categoryList[category] += price;
    } else {
      categoryList[category] = price;
    }
  });

  const ans = [];
  for (const key in categoryList) {
    if (categoryList.hasOwnProperty(key)) {
      const obj = {
        category: key,
        totalSpent: categoryList[key],
      };

      ans.push(obj);
    }
  }

  return ans;
}

module.exports = calculateTotalSpentByCategory;
