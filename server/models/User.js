const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    
    firstName:{
        type:String,
        required:true,
        trim:true,
    },
    lastName:{
        type:String,
        required:true,
        trim:true,       
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
    },
    contacts: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
        },
      ],

    token:{
        type:String,
    },
},
{timestamps:true} // 	// Add timestamps for when the document is created and last modified
);

module.exports = mongoose.model("User",userSchema);