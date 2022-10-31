# <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Albert_Heijn_Logo.svg/1200px-Albert_Heijn_Logo.svg.png" alt="AH Logo" width="25"/> AH Shop Api
'*Unofficial*' Albert Heijn shop api wrapper for Node.js

<a href="https://www.npmjs.com/package/ah_shop_api"><img src="https://img.shields.io/npm/v/ah_shop-api" alt="NPM version" /></a>
<a href="https://github.com/RikVanHaaren/ah_shop_api"><img src="https://img.shields.io/npm/l/ah_shop-api" alt="NPM license" /></a>

This is a node.js application that is connected to the Albert Heijn shop api. This api has the purpose to search products inside the webshop by a search term. The result of this will be: Cards (products), page, aggregation, taxonomies, querySuggestions.

---

# Installation
```sh
npm install ah_shop_api
```

then
```jsx
  const AHShopClient = require("@rikvanhaaren/ah_shop_api");
  const client = new AHShopClient();
```

# Getting Started
Get products by name:
```jsx
client.product().getProductByName('Red Bull').then((result) => {
  console.log(JSON.stringify(result));
});
```

Get products by name with filter:
```jsx
const filter: productFilter = {
  //sortBy: sortByOption.nutriscore,
  //property: [AfdelingOption.nonFood, AfdelingOption.diepvries],
  sortBy: "nutriscore",
  property: ["store_department:non-food", "store_department:diepvries"],
  page: 1,
  size: 10,
}
    
client.product().getProductByName('Red Bull', filter).then((result) => {
  console.log(JSON.stringify(result));
});
```

Get products by id:
```jsx
client.product().getProductByID(4117).then((result) => {
  console.log(JSON.stringify(result));
});
```

Get url:
```jsx
client.getURL("/zoeken/api/products/search").then((result) => {
  console.log(JSON.stringify(result));
});
```

---

## License
>You can check out the full license [here](https://github.com/IgorAntun/node-chat/blob/master/LICENSE)

This project is licensed under the terms of the **MIT** license.
