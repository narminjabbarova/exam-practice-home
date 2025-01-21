const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CozaSchema = new Schema({
    title: {type: String, required: true},
    image: {type: String, required: true},
    price: {type: Number, required: true}
  },
{timestamps: true}
);

  const CozaModel = mongoose.model('Product', CozaSchema);

  module.exports = CozaModel
