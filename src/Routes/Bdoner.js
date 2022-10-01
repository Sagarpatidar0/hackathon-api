const Bdoner = require("../Models/Bdoner")
const router = require("express").Router();
const FindDoner = require("../Helper/ToFindDoner")

router.get("/", async (req, res) => {
    try {
        const allBdoner = await Bdoner.find();
        res.status(200).json(allBdoner);

    } catch (err) {
        res.status(500).json(err)

    }
})

router.get("/city/:city/:pin/:bg", async (req, res) => {
    const tofind = FindDoner(req.params.bg)
    try {
        const allBdoner = await Bdoner.find({$and:[{$or:[{ city: req.params.city},{pincode:req.params.pin}]},{bloodgroup:{"$in":tofind}}]});
        res.status(200).json(allBdoner);

    } catch (err) {
        res.status(500).json(err)
    }
})

router.post("/", async (req, res) => {
    const newBdoner = new Bdoner(req.body);
    try {
        const doner = await newBdoner.save();
        res.status(200).json(doner);
    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router;
