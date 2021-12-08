const express = require("express");

const Car = require("./cars-model");

const {
    checkCarId,
    checkCarPayload,
    checkVinNumberValid,
    checkVinNumberUnique
} = require("./cars-middleware");

const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const cars = await Car.getAll()
        res.json(cars)
    } catch (e) {
        next(e)
    }
})
router.get("/:id", checkCarId, async (req, res, next) => {
    res.json(req.car)
})
router.post("/",
    checkCarPayload,
    checkVinNumberValid,
    checkVinNumberUnique,
    async (req, res, next) => {
        try {
            const car = await Car.getAll()
            res.json(car)
        } catch (e) {
            next(e)
        }
})

module.exports = router;