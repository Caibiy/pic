const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const { exec } = require('child_process')
const port = 8001


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname,'')))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./index.html'))
})

//接口设置
app.post('/api/pic',(req,res)=>{
   exec('bash ./bash/pic.sh',(err,stdout,stderr)=>{
   	if(err){
		res.json({"err":err})
	}
	var re2Json=eval('('+stdout+')'); 
        console.log(re2Json["piclists"].split(","))	
       res.json({"data":re2Json["piclists"].split(",")})
   })    
})

//端口监听
app.listen(port,()=>{
    console.log("Server run at:"+port);
})
