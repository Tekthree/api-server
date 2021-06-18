"use strict";

const express = require("express");

const data = require("../models/index.js");
const router = express.Router();

//-------------------------- routes --------------------------------- //

router.get("/receipts", getAll);
router.get("/receipts/:receiptsId", getOne);
router.post("/receipts", create);
router.put("/receipts/:receiptsId", update);
router.delete("/receipts/:receiptsId", remove);

//-------------------------- handlers --------------------------------- //

//---------get all-------//
async function getAll(req, res) {
    const allreceipts = await data.receipts.findAll();
    res.status(200).send(allreceipts);
}

//---------get one-------//
async function getOne(req, res) {
    const receiptsId = req.params.receiptsId;
    const receipts = await data.receipts.findOne({
        where: {
            id: receiptsId,
        },
    });
    res.status(200).send(receipts);
}

//---------create-------//
async function create(req, res) {
    const receiptsObject = req.body;
    const receiptsData = await data.receipts.create(receiptsObject);
    res.status(200).send(receiptsData);
}

//---------update-------//
async function update(req, res) {
    const receiptsId = req.params.receiptsId;
    const receiptsObject = req.body;
    const receiptsData = await data.receipts.findOne({ where: { id: receiptsId } });
    await receiptsData.update(receiptsObject);
    res.status(200).send(receiptsData);
}

//---------delete-------//
async function remove(req, res) {
    const receiptsId = req.params.receiptsId;
    await data.receipts.destroy({ where: { id: receiptsId } });
    res.status(204).send("Success");
}

module.exports = router;
