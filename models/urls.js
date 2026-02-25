const mongoose = require("mongoose");



const { Schema } = mongoose;
const urlSchema = new mongoose.Schema(
  {
    shortId: { type: String, required: true, unique: true },
    redirectURL: { type: String, required: true },
    visitHistory: [{ timestamp: { type: Date, default: Date.now } }],
    createdby:{
      type: mongoose.Schema.Types.ObjectId,
      ref:"User",   // make sure this matches model name
      required: true
    
      // this field stores that who createad that url
    },
  },
  { timestamps: true }
);

const URL = mongoose.model("URL", urlSchema);
module.exports = URL;
 