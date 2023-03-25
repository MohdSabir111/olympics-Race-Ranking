const mongoose = require('mongoose');

const mensSchema= new mongoose.Schema({
  ranking : {
    type : Number,
    required : 'ranking is required',
    unique : true,
  },
  name:{
    type : String,
    required : "name is required",
  },
  dob:{
    type : Date,
    required : "date  required",
  },
  country:{
    type : String,
    required : "country is required",
  },
  score:{
    type : Number,
    required : "score is required",
  },
  event:{
    type : String,
   default : "100 meter"
  },

});

const MensRanking = new mongoose.model('MensRanking',mensSchema);
module.exports= MensRanking;