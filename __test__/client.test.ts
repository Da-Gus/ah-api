import { jest, describe, expect, test } from '@jest/globals';
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

    test('getProductByURL', async () => {
		const client = new AHShopClient();

		const getMock = jest.spyOn(client, 'get');
		getMock.mockImplementation(() => Promise.resolve({}));
		await client.getByURL('/zoeken/api/products/search');

		expect(getMock).toHaveBeenCalledWith('/zoeken/api/products/search');
	});
})