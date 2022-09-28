const mongoose=require('mongoose')
let password=process.env.MONGO_PASSWORD
const url=`mongodb+srv://alizahir:${password}@database.xe2spri.mongodb.net/EnfinMachineTest?retryWrites=true&w=majority`

mongoose.connect(url,()=>{
console.log('database connected');
})

const ProductSchema=mongoose.Schema({
    ProductID:String,
    ProductName:String,
    ExpiryDate:Date,
    Price:Number,
    Status:String
})




const ProductData=mongoose.model("ProductDetails",ProductSchema)


module.exports={ProductData}