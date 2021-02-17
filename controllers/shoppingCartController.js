const ShoppingCart = require('../models/shoppingCartModel');

exports.createShoppingCart = (req , res) => {
    // res.status(200).json({message : 'create shopping cart'})

    ShoppingCart.create(req.body ).then((shoppingCart) => {
        res.status(201)
        .json({
            status : 'success',
            data : {
                data : shoppingCart
            }
        })
    }).catch((err) => {
        res.status(500)
        .json({
            status : 'fail',
            message : err
        })
    })
}

exports.modifyShoppingCart =  async (req , res) => {
    //res.status(200).json({message : 'modify shopping cart'})
    const shoppingCart = await ShoppingCart.findByIdAndUpdate(req.params.id , req.body , {
        new : true
    } );

    if(!shoppingCart){
        res.status(404)
        .json({
            status : 'fail',
            message : 'no shopping cart found with the provided ID'
        })
    }

    res.status(200)
        .json({
            status : 'success',
            data : {
                data : shoppingCart
            }
        })
}