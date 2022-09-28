const router = require('express').Router()
const {ProductData}=require('../../config/connection')


router.get('/add',(req,res) => {
    res.send('Right End Point')
})
router.post('/add',(req,res) => {
    console.log(req.body.input);

        let data = new ProductData({
            ProductName:req.body.input.ProductName,
            ProductID:req.body.input.ProductID,
            ExpiryDate:req.body.input.ExpiryDate,
            Price:req.body.input.Price,
            Status:req.body.input.Status

        })
        data.save((err)=>{
            if(err) throw err
            else{
        
                console.log("Data Inserted");
            }
        })
})
router.get('/list',(req,res) =>{

    ProductData.find().then((items)=>{
        res.json(items)

    })
} )

router.post('/update/:id',(req,res) => {
    let i = req.params.id
    ProductData.findOneAndUpdate({ProductID:req.body.input.ProductID},{
        ProductName:req.body.input.ProductName,
        ProductID:req.body.input.ProductID,
        ExpiryDate:req.body.input.ExpiryDate,
        Price:req.body.input.Price,
        Status:req.body.input.Status

    }).then((data) => {
        console.log("update",data);
    }) 

})

router.post('/delete/:id',(req,res)  => {
    let i = req.params.id
    console.log(i);
    ProductData.findOneAndDelete({ProductID:req.params.id}).then((data) => {
        console.log(data);
    })

})
module.exports=router