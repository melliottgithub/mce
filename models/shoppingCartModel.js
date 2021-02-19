const mongoose = require('mongoose')

const shoppingCartSchema = new mongoose.Schema({
    name:{
      type : String,
      required: [true , 'please enter your name']
    },
    email: {
      type: String,
      required: [true, 'please enter your email'],
      unique: true
    },
    password: {
      type: String,
      required: [true, 'please enter your password'],
      select : false
    },
    phone: String,
    address:
        {
            line1 : String,
            line2 : String,
            city: String,
            state : String,
            zipCode: String,
        },
    creditCard :String,
    expiryDate: String,
    cvv: Number,
    billingZipCode: String
});

const ShoppingCart = mongoose.model('ShoppingCart', shoppingCartSchema)

module.exports = ShoppingCart