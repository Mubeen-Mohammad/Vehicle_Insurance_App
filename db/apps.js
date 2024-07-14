const mongoose = require('mongoose');

mongoose
    .connect('mongodb://127.0.0.1:27017/Mubeendb')
    .then(() => console.log("Connected"))
    .catch(() => console.log("Error"))

// Claim schema and model
const claimSchema = new mongoose.Schema({

    email : { type: String , required : true },
    insuranceType: {type:String , required : true}
   
});

const claim = mongoose.model('Claim', claimSchema);

module.exports = claim;