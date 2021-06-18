"use strict";

const express = require("express");

const data = require("../models/index.js");
const router = express.Router();

//-------------------------- routes --------------------------------- //

router.get("/customers", getAll);
router.get("/customers/:customersId", getOne);
router.post("/customers", create);
router.put("/customers/:customersId", update);
router.delete("/customers/:customersId", remove);

//-------------------------- handlers --------------------------------- //

//---------get all-------//
async function getAll(req, res) {
    const allcustomers = await data.customers.findAll();
    res.status(200).send(allcustomers);
}

//---------get one-------//
async function getOne(req, res) {
    const customersId = req.params.customersId;
    const customers = await data.customers.findOne({
        where: {
            id: customersId,
        },
    });
    res.status(200).send(customers);
}

//---------create-------//
async function create(req, res) {
    const customersObject = req.body;
    const customersData = await data.customers.create(customersObject);
    res.status(200).send(customersData);
}

//---------update-------//
async function update(req, res) {
    const customersId = req.params.customersId;
    const customersObject = req.body;
    const customersData = await data.customers.findOne({ where: { id: customersId } });
    await customersData.update(customersObject);
    res.status(200).send(customersData);
}

//---------delete-------//
async function remove(req, res) {
    const customersId = req.params.customersId;
    await data.customers.destroy({ where: { id: customersId } });
    res.status(204).send("Success");
}

module.exports = router;
