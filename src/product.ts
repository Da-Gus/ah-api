import { AHShopClient } from "./client";

export class Product {
  constructor(protected readonly AHShopClient: AHShopClient) {}

  public async getProductByID(id: number): Promise<any> {
    try {
      const response: any = await this.AHShopClient.get(
        `mobile-services/product/detail/v4/fir/${id}`
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }
}
