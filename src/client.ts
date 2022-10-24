import {Product} from "./product";
import https from "https";

export class AHShopClient{
    private readonly hostname = "www.ah.nl";
    private readonly ahProduct: Product;

    constructor() {
        this.ahProduct = new Product(this);
    }

    product() {
        return this.ahProduct;
    }

    async get (path: string) {
        return this.request(path, requestMethod.get);
    }

    async request (path:string, method:requestMethod) {
        var options = {
            method,
            hostname: this.hostname,
            path,
            headers: {
                "Content-Type": "application/json",
            },
        };
    
        return new Promise((resolve, reject) => {
            var req = https.request(options, function (res) {
                var chunks:any = [];
    
                res.on("data", function (chunk) {
                    chunks.push(chunk);
                });
    
                res.on("end", function (chunk:any) {
                    var body:any = Buffer.concat(chunks);
                    
                    try {
                        try {
                            return resolve(JSON.parse(body));
                        }catch(err:any) {
                            return resolve(body.toString());
                        }
                    } catch (error) {
                        return reject(error);
                    }
                });
    
                res.on("error", function (error) {
                    return reject(error);
                });
            });
    
            req.end();
        });
    }
}

export enum requestMethod {
    get = "GET",
}