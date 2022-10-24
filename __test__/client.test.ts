import { describe, expect, test } from '@jest/globals';
import { AHShopClient } from '../src';

describe('Product', () => {
    test('should create a Client object', () => {
        const client = new AHShopClient();
        expect(client).toBeDefined();
    });

    test('should create a client object', async () => {
        const client = new AHShopClient();
        const response = await client.get('/');

        expect(String(response).length).toBeGreaterThan(100)
    });

    test('should reject when status is 400', async () => {
        const client = new AHShopClient();
        const response = client.get('/zoeken/api/products/search?size=10000');
        console.log(response);

        expect(response).rejects.toEqual('error')
    });
})