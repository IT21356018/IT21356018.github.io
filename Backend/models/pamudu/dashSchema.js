const mongoose = require('mongoose');

const dashSchema = new mongoose.Schema({

    firstName:{

        type: String,
        required: true
    },
    lastName:{

        type:String,
        required:true
    },
    address:{

        type:String,
        required:true
    },
    email:{

        type:String,
        required:true
    }

});

module.exports = mongoose.model('Dash',dashSchema);