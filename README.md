Forked from [@rikvanhaaren/ah_shop_api](https://github.com/RikVanHaaren/ah_shop_api) using axios for react-native suppport

# <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Albert_Heijn_Logo.svg/1200px-Albert_Heijn_Logo.svg.png" alt="AH Logo" width="25"/> AH Shop Api

'_Unofficial_' Albert Heijn shop api wrapper for Node.js

This is a node.js application that is connected to the Albert Heijn shop api. This api has the purpose to get product information by id.

# Installation

```sh
npm i ah-api
```

then

```jsx
const { AHShopClient } = require("ah-api");
const client = new AHShopClient();
```

or

```jsx
import { AHShopClient } from "ah-api";
const client = new AHShopClient();
```

# Getting Started

## Get products by id:

```jsx
client
  .product()
  .getProductByID(4117)
  .then((result) => {
    console.log(JSON.stringify(result));
  });
```

---

# License

> You can check out the full license [here](https://github.com/RikVanHaaren/ah_shop_api/blob/main/LICENSE)

This project is licensed under the terms of the **MIT** license.
