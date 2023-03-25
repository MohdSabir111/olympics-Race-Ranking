const MensRanking = require('../models/mens');
const mongoose = require('mongoose');


// creating and inserting the record 
module.exports.createMens= async (req,res)=>{
    try {
        const createMens = await new MensRanking(req.body);
        const men = await createMens.save();
        return res.send(men);
           } catch (error) {
        return res.send(error);    
    }
}


// getting the record 

module.exports.getAllMens = async (req, res )=>{

try {
    const getAllMens =await MensRanking.find({}).sort({"ranking" : 1});
    return res.send(getAllMens);

} catch (error) {
        return res.send(error);  
}
}

// get one man by the id 

module.exports.getOneMan = async (req, res)=>{
try {
    
    const _id= req.params.id;
    const getOneMan = await MensRanking.findById({ _id : _id });
     return res.send(getOneMan);


} catch (error) {
 return res.send(error);  
}

}

// update by id 
module.exports.updateOneMan = async (req, res)=>{
    try {
        
        const _id= req.params.id;
        const updateOneMan = await MensRanking.findByIdAndUpdate( _id , req.body, {new : true});
         return res.send(updateOneMan);
    
    
    } catch (error) {
     return res.send(error);  
    }   
    }