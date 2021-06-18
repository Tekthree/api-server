"use strict";

const server = require("../src/server.js");
const data = require("../src/models/index.js");
const supertest = require("supertest");

const request = supertest(server.app);

beforeAll(async () => {
    await data.db.sync();
});
afterAll(async () => {
    await data.db.drop();
});

describe("testing the server", () => {

    
     //----------------------- customers routes test --------------------------//

    // test("testing a 200 for GET `/customers`", async () => {
    //     const response = await request.get("/customers");
    //     expect(response.status).toEqual(200);
    //     expect(response.body).toEqual([]);
    // });

    test("testing a 200 for POST `/customers`", async () => {
        const response = await request.post("/customers").send({
            name: "test"
        });

        expect(response.status).toEqual(200);
        expect(response.body.name).toEqual("test");
    });

    // test("testing a 200 for GET `/customers/:customersId`", async () => {
    //     const response = await request.get(`/customers/1`);

    //     expect(response.status).toEqual(200);
    //     expect(response.body.name).toEqual("test");
    // });

    // test("testing a 200 for PUT `/customers/:customersId`", async () => {
    //     const response = await request.put("/customers/1").send({
    //         name: "new test",
    //     });

    //     expect(response.status).toEqual(200);
    //     expect(response.body.name).toEqual("new test");
    // });

    // test("testing a 200 for DELETE `/customers/:customersId`", async () => {
    //     const response = await request.delete("/customers/1");
    //     expect(response.status).toEqual(204);
    // });


    // //----------------------- receipts routes test --------------------------//

    // test("testing a 200 for GET `/receipts`", async () => {
    //     const response = await request.get("/receipts");
    //     expect(response.status).toEqual(200);
    //     expect(response.body).toEqual([]);
    // });

    // test("testing a 200 for POST `/receipts`", async () => {
    //     const response = await request.post("/receipts").send({
    //         name: "test",
    
    //     });

    //     expect(response.status).toEqual(200);
    //     expect(response.body.name).toEqual("test");
    // });

    // test("testing a 200 for GET `/receipts/:receiptsId`", async () => {
    //     const response = await request.get(`/receipts/1`);

    //     expect(response.status).toEqual(200);
    //     expect(response.body.name).toEqual("test");
    // });

    // test("testing a 200 for PUT `/receipts/:receiptsId`", async () => {
    //     const response = await request.put("/receipts/1").send({
    //         name: "new test",
    //     });

    //     expect(response.status).toEqual(200);
    //     expect(response.body.name).toEqual("new test");
    // });

    // test("testing a 200 for DELETE `/receipts/:receiptsId`", async () => {
    //     const response = await request.delete("/receipts/1");
    //     expect(response.status).toEqual(204);
    // });
});
