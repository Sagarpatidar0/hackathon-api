const Mdoner = require("../Models/Mdoner")
const router = require("express").Router();

router.get("/", async (req, res) => {
    try {
        const allBdoner = await Mdoner.find();
        res.status(200).json(allBdoner);

    } catch (err) {
        res.status(500).json(err)

    }
})
router.get("/limited", async (req, res) => {
    try {
        const allBdoner = await Mdoner.find().sort([["createdAt",-1]]).limit(5)
        res.status(200).json(allBdoner);

    } catch (err) {
        res.status(500).json(err)

    }
})

router.post("/", async (req, res) => {
    const newMdoner = new Mdoner(req.body);
    try {
        const doner = await newMdoner.save();
        res.status(200).json(doner);
    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router;
