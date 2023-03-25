const express = require('express');
const router = express.Router();
const Controller =require('../controllers/mensController')

// inserting or creating a new record 
 router.post("/mens",Controller.createMens);


 // getting alll the records
 router.get("/mens",Controller.getAllMens);

 // getting one record by id
router.get("/mens/:id",Controller.getOneMan);

 // updating the records by id 
 router.patch("/mens/:id",Controller.updateOneMan);


 // deleting the records by id 

 //router.delete();


 module.exports = router;