const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
    res.json("check")
})

router.get("/:id", (req, res, next) => {
    res.json("check")
})

router.post("/", (req, res, next) => {
    res.json("check")
})

module.exports = router;