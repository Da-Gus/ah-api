import { Product } from "./product";
import axios, * as others from "axios";

export class AHShopClient {
  private readonly hostname = "www.ah.nl";
  private readonly ahProduct: Product;

  constructor() {
    this.ahProduct = new Product(this);
  }

  product() {
    return this.ahProduct;
  }

  public async getByURL(uri: string) {
    return await this.get(uri);
  }

  async get(path: string) {
    return this.request(path, requestMethod.get);
  }

  async request(path: string, method: requestMethod) {
    let tokenData: any;
    let token: string;

    try {
      const tokenOptions = {
        method: "POST",
        url: "https://api.ah.nl/mobile-auth/v1/auth/token/anonymous",
        headers: { "content-type": "application/json" },
        data: JSON.stringify({
          clientId: "appie",
        }),
      };

      tokenData = await axios.request(tokenOptions);
      token = tokenData.data.access_token;
    } catch (error) {
      return error;
    }

    const options = {
      method: method,
      url: "https://api.ah.nl/" + path,
      headers: {
        Authorization: `Bearer ${token}`,
        "X-Application": "AHWEBSHOP",
      },
    };

    return axios.request(options);
  }
}

export enum requestMethod {
  get = "GET",
}
