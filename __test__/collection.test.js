'use strict';

const {db, customersCollection, receiptsCollection} = require('../src/models/index');
const server = require('../src/server.js');
const supertest = require('supertest');
const { expect } = require('@jest/globals');

const request = supertest(server.app);

beforeAll( async () => {
  await db.sync();
});

afterAll( async () => {
  await db.drop();
});

describe('testing collections', () => {

    // ------------- 404 on a bad route ------------- //
    test('Testing 404 on a bad route', async () => {
      const response = await request.get('/badroute');
      expect(response.status).toEqual(404);
    });
  
  
    // -------- 404 on a bad method ------------ //
    test('Testing 404 on a bad method', async () => {
      const response = await request.put('/customer');
      expect(response.status).toEqual(404);
    });


  // test('Create a record', async () => {
  //   const newCustomers = await customersCollection.create({name: 'tek'});

  //   expect(newCustomers.id).toEqual(1);
  //   expect(newCustomers.name).toEqual('tek');

  //   const newReceipts = await receiptsCollection.create({name:'test', customersId: newCustomers.id});

  //   expect(newReceipts.name).toEqual('test');
  //   expect(newReceipts.customersId).toEqual(1);
  // });

  test('Read a list of records', async () => {
    const customers = await customersCollection.read();
    expect(customers[0].name).toEqual('tek');

    const receipts = await receiptsCollection.read();

    expect(receipts[0].name).toEqual('test');
  });

  test('Update a record', async () => {
    const customers = await customersCollection.read(1);
    const receipts = await receiptsCollection.read(1);

    expect(customers.name).toEqual('tek');
    expect(receipts.name).toEqual('test');
  });

  test('Delete a record', async () => {
    await customersCollection.delete(1);
    await receiptsCollection.delete(1);

    const customers = await customersCollection.read(1);
    const receipts = await receiptsCollection.read(1);

    expect(receipts).toBeFalsy();
    expect(customers).toBeFalsy();
  });
});