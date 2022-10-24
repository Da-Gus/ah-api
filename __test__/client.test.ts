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
})