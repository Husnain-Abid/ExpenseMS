const express = require("express");
const { addTransectionController, getTransectionController, editTransectionController, deleteTransectionController } = require("../controller/transectionController");

const router = express.Router();

// login route 
router.post("/addTransection", addTransectionController )

// register route 
router.post("/getTransection", getTransectionController )


module.exports = router 
