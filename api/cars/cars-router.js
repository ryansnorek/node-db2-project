const express = require("express");

const Car = require("./cars-model");

const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const cars = await Car.getAll()
        res.json(cars)
    } catch (e) {
        next(e)
    }
})

router.get("/:id", (req, res, next) => {
    res.json("check")
})

router.post("/", (req, res, next) => {
    res.json("check")
})

module.exports = router;