const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/demoTask", {
  useNewUrlParser: true,
});

const User = mongoose.model("User", {
  name: String,
  email: String,
  password: String,
  place: String,
});

const Product = mongoose.model("Product", {
  name: String,
  price: Number,
  quantity: Number,
  category:String
});

module.exports = {
  User,
  Product
};
