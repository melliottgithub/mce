const ShoppingCart = require('../models/shoppingCartModel');

exports.createShoppingCart = (req , res) => {
    // res.status(200).json({message : 'create shopping cart'})

    ShoppingCart.create(req.body).then((shoppingCart) => {
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

exports.deleteShoppingCart = async ( req , res ) => {
    await ShoppingCart.findByIdAndDelete(req.params.id);

    res.status(204).json({
        status: 'success',
        message : 'Deleted'
    })
}

exports.getShoppingCartById = async ( req , res ) => {
    const shoppingCart = await ShoppingCart.findById(req.params.id);

    res.status(200).json({
        status: 'success',
        data : shoppingCart
    })
}

exports.getAllShoppingCarts = async ( req , res ) => {
    const shoppingCarts = await ShoppingCart.find({});

    res.status(200).json({
        status: 'success',
        data : shoppingCarts
    })
}