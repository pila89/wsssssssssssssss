const express =require ('express')
const app=express()
const port=5000 

const cors =require('cors')
const multer =require('multer')

app.use(express.static ('public'))
app.use(express.json())
app.use('/api/users' , require('./routes/users'))
app.use('/api/books' , require('./routes/books'))

const middleExp = (req, res, next)=>{
next()
}

/* app.get('/', (req,res)=>{
    res.send("hello from express")

})
 */
app.use (middleExp)
app.get('/',middleExp,  (req,res)=>{
    res.sendFile(__dirname+'/public/home.html')

})
app.get('/about',(req,res)=>{
    res.sendFile(__dirname+'/public/about.html')

})


app.listen(port,(err)=>{
    err?console.log(err):
    console.log ( `on port ${port}`)
})