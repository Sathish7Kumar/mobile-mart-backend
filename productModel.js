const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  brand: String,
  desc: String,
  price: Number,
  image: String,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
