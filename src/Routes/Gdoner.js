const Gdoner = require("../Models/Gdoner")
const routes = require("express").Router();

routes.post("/",async (req,res)=>{
    const newGdoner = new Gdoner(req.body);

    try {
        const doner = await newGdoner.save();
        res.status(200).json(doner)
    } catch (err) {
        res.status(500).json(err)
    }
})

routes.get("/",async (req,res)=>{
    try {
        const Gdoners = await Gdoner.find();
        res.status(200).json(Gdoners)
    } catch (err) {
        res.status(500).json(err)
    }
})
routes.get("/limited",async (req,res)=>{
    try {
        const Gdoners = await Gdoner.find().sort([["createdAt",-1]]).limit(5);
        res.status(200).json(Gdoners)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = routes;