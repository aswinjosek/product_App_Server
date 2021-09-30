const express= require('express')

const app= express()

app.use(express.json())

const cors=require('cors')

app.use(cors({
    origin:'http://localhost:4200',
    Credentials:true
}))


const dataService=require('./services/data.service')

app.post('/register',(req,res)=>{

    dataService.register(req.body.name,req.body.email,req.body.password,req.body.place).then(result=>{
        res.json(result)
    })
})

app.post('/login',(req,res)=>{
    dataService.login(req.body.email,req.body.password).then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.post('/addproduct',(req,res)=>{
    dataService.productAdd(req.body.name,req.body.price,req.body.quantity,req.body.category).then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.get('/viewproducts',(req,res)=>{
    dataService.viewProducts().then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.listen((5000),()=>{
    console.log("server starts 5000");
})