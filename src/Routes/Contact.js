const Contact = require("../Models/Contact")
const router = require("express").Router();

router.get("/",async (req,res)=>{
    try {
        const allContact = await Contact.find();
        res.status(200).json(allContact);
        
    } catch (err) {
        res.status(500).json(err)
        
    }
})

router.post("/",async (req,res)=>{
    const newContact = new Contact(req.body);
    try {
        const contact = await newContact.save();
        res.status(200).json(contact);
    } catch (err) {
        res.status(500).json(err)
    }
})

router.put("/:id",async (req,res)=>{
    try {
        const updatedContact = await Contact.findByIdAndUpdate(req.params.id,
            {
                $set: req.body,
            },{new: true}
            );
        res.status(200).json(updatedContact)
    } catch (err) {
        res.status(500).json(err)
    }
})




module.exports = router;
