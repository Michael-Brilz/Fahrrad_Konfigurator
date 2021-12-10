const mongoose = require('mongoose');

//Schema
const Mountainbike = new mongoose.Schema(
  {
    name: { type: String},
    typ: {type: String},
    size: {type: Array} 
  }
    );
module.exports = mongoose.model('Category', Mountainbike);






