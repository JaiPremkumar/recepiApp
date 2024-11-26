const Product = require('./productModel');


// creatRecipe = http://localhost:5000/api/v1/product/
exports.createProduct=async (req,res,next)=>{
    const product = await Product.create(req.body)
    res.status(200).json({
        success:true,
        product
    })
}


// getRecipe = 
exports.getProduct=async (req,res,next) => {
  const product = await  Product.find()
  res.status(200).json({
    success:true,
    product
  })
}

exports.updateProduct=async (req,res,next) => {
    let product =await Product.findById(req.params.id);

    if(!product){
        return res.status(404).json({
            success:false,
            message:'product not Found'
        })
    }
    product =await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
    })
    res.status(201).json({
        success:true,
        product
    })
}



//getSingleRecipe = http://localhost:5000/api/v1/product/673f83922bb2e0e951012eb7
exports.getSingleProduct=async (req,res,next) => {
    const product = await Product.findById(req.params.id);
    if(!product){
       return res.status(400).json({
            success:false,
            message:'product not Found'
        })
    }
    res.status(200).json({
        success:true,
        product
    })
}



//deleteRecipe = http://localhost:5000/api/v1/product/673f82d22bb2e0e951012eb2
exports.deleteProduct=async (req,res,next) => {
    let product =await Product.findByIdAndDelete(req.params.id)
    if(!product){
       return res.status(400).json({
            success:false,
            message:'product not found'
        })
    }

    res.status(200).json({
        success:true,
        message:'deleted'
    })
}