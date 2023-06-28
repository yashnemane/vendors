const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    vendorName:{
        type: String
    },
    bankAccount:{
        type:String
    },
    bankName:{
        type:String
    },
    addressLineOne:{
        type:String
    },
    addressLineTwo:{
        type:String
    },
    city:{
        type:String
    },
    country:{
        type:String
    },
    zipCode:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    }
})

mongoose.models = {}
module.exports = mongoose.model('Todos',todoSchema);