import {AHShopClient} from "./client";

export class Product {

    constructor(protected readonly AHShopClient: AHShopClient) {

    }

    public async getProductByURL(uri:string){
        return await this.AHShopClient.get(uri);
    }

    public async getProductByID(id:number){
        return await this.AHShopClient.get(`/producten/product/wi${id}`);
    }

    public async getProductByName(productName:string, filter?: productFilter){
        const totalQuery: any = {
            query: productName,
            sortBy: filter?.sortBy,
            page: filter?.page,
            size: filter?.size
        };

        // Remove undifined objects
        Object.keys(totalQuery).forEach(key => totalQuery[key] === undefined ? delete totalQuery[key] : {});
        
        if(filter)
            totalQuery['filters'] = this.productFilterToQuery(filter);

        return await this.AHShopClient.get(`/zoeken/api/products/search?${new URLSearchParams(totalQuery)}`);
    }

    private productFilterToQuery(filter: productFilter) {
        const out: string[] = [];
        
        if(filter.sortBy) {
            out.push(`sortBy=${filter.sortBy}`);
        }
        
        if(filter.property) {
            filter.property.forEach(prop => {
                out.push(`kenmerk=${prop}`)
            });
        }

        return out.join('&');
    }
}

export interface productFilter extends PaginationOptions {
    sortBy?: sortByOption;
    property?: (nutriScoreOption | AfdelingOption)[];
}

export interface PaginationOptions {
    page?: number;
    size?: number;
}

export const enum sortByOption {
    priceLowToHigh = 'price',
    priceHighToLow = '-price',
    nutriscore = 'nutriscore'
}

export const enum nutriScoreOption {
    nutriscore_A = 'nutriscore:a',
    nutriscore_B = 'nutriscore:b',
    nutriscore_C = 'nutriscore:c',
    nutriscore_D = 'nutriscore:d',
    nutriscore_E = 'nutriscore:e',
    nutriscore_F = 'nutriscore'
}

export const enum AfdelingOption {
    houdbaar = 'store_department:houdbaar',
    vers = 'store_department:vers',
    diepvries = 'store_department:diepvries',
    nearFood = 'store_department:near-food',
    nonFood = 'store_department:non-food'
}