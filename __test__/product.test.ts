import { jest, describe, expect, test } from '@jest/globals';
import { AHShopClient, Product, productFilter, sortByOption, AfdelingOption } from '../src';

describe('Product', () => {
	test('should return a Product object', () => {
		const client = new AHShopClient();
		expect(client.product()).toBeDefined();
		expect(client.product()).toBeInstanceOf(Product);
	});

	test('should create properly formatted Parameters from filter', () => {
		const client = new AHShopClient();
		const filter: productFilter = {
			sortBy: sortByOption.nutriscore,
			property: [AfdelingOption.nonFood, AfdelingOption.diepvries],
		}

		// @ts-ignore
		const url = client.product().productFilterToQuery(filter);
		expect(url).toBe(`sortBy=nutriscore&kenmerk=store_department:non-food&kenmerk=store_department:diepvries`);
	});

	test('getProductByID', async () => {
		const client = new AHShopClient();

		const getMock = jest.spyOn(client, 'get');
		getMock.mockImplementation(() => Promise.resolve({}));
		await client.product().getProductByID(1);

		expect(getMock).toHaveBeenCalledWith('/producten/product/wi1');
	});

	test('getProductByName', async () => {
		const client = new AHShopClient();

		const getMock = jest.spyOn(client, 'get');
		getMock.mockImplementation(() => Promise.resolve({}));
		await client.product().getProductByName('red bull');

		expect(getMock).toHaveBeenCalledWith('/zoeken/api/products/search?query=red+bull');
	});

	test('getProductByName filter', async () => {
		const client = new AHShopClient();

		const getMock = jest.spyOn(client, 'get');
		getMock.mockImplementation(() => Promise.resolve({}));

		const filter: productFilter = {
			sortBy: sortByOption.nutriscore,
			property: [AfdelingOption.nonFood, AfdelingOption.diepvries],
		 	page: 1,
    	 	size: 10,
		}
		await client.product().getProductByName('red bull', filter);

		expect(getMock).toHaveBeenCalledWith('/zoeken/api/products/search?query=red+bull&sortBy=nutriscore&page=1&size=10&filters=sortBy%3Dnutriscore%26kenmerk%3Dstore_department%3Anon-food%26kenmerk%3Dstore_department%3Adiepvries');
	});
})