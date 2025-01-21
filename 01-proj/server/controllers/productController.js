const CozaModel = require('../models/productModel')

const getProducts = async(req,res)=>{
    try {
        const products = await CozaModel.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

const getProductById = async(req,res)=>{
    const id = req.params.id
    try {
        const product = await CozaModel.findById(id)
        if(!product){
            res.status(404).json({message: 'product not found'})
        }
        res.status(200).json(product)
    } catch (error) {
        res.status(500).send({message:error.message})
    }
}

const deleteProduct = async(req,res)=>{
    const id = req.params.id
    try {
        const product = await CozaModel.findByIdAndDelete(id)
        if(!product){
            res.status(404).json({message: 'product not found'})
        }
        res.status(200).json({
            message: 'product deleted succesfully',
            deletedProduct: product
        })
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

const addNewProduct = async(req,res)=>{
    try {
        const newProduct = CozaModel(req.body)
        await newProduct.save()
        res.status(200).json({
            message:'product added successfully',
            newProduct: newProduct
        })
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

module.exports = {getProducts, getProductById, deleteProduct, addNewProduct}