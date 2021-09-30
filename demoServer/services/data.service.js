const db = require("./db");

const register = (name, email, password, place) => {
  return db.User.findOne({ email }).then((user) => {
    if (user) {
      return {
        statusCode: 400,
        status: false,
        message: "user already exists",
      };
    } else {
      const newUser = new db.User({
        name,
        email,
        password,
        place,
      });
      newUser.save();
      return {
        statusCode: 200,
        status: true,
        message: "user created",
      };
    }
  });
};

const login = (email, password) => {
  return db.User.findOne({ email, password }).then((user) => {
    if (user) {
      return {
        statusCode: 200,
        status: true,
        message: "login successfully",
      };
    } else {
      return {
        statusCode: 400,
        status: false,
        message: "Invalid Credentials",
      };
    }
  });
};

const productAdd = (name, price, quantity, category) => {
  return db.Product.findOne({ name }).then((product) => {
    if (product) {
      return {
        statusCode: 400,
        status: false,
        message: "product already exists",
      };
    } else {
      const newProduct = new db.Product({
        name,
        price,
        quantity,
        category,
      });
      newProduct.save();
      return {
        statusCode: 200,
        status: true,
        message: "product added",
      };
    }
  });
  
};

const viewProducts=()=>{
  return db.Product.find().then((result)=>{
    if(result){
      return {
          statusCode: 200,
          status: true,
          message: "Getting data succesfully",
          productData:result
        };
    }
    else{
      return {
        statusCode: 400,
        status: false,
        message: "No data found"
      };

    }

  })

}

module.exports = {
  register,
  login,
  productAdd,
  viewProducts
};
