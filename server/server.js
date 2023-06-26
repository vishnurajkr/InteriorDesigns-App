const  express = require('express');
const app =express();
const mysql =require('mysql');
const cor = require('cors')
const multer=require('multer');
app.use(cor());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const path = require('path');
app.use(express.static('./uploads'));

const db = mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:'',
    database:'abhees_db'
});

db.connect((err)=>{
    if (err) throw err;
    console.log('connected')
});

app.post('/create',(req,res)=>{
 var email = req.body.email;
 var password = req.body.password;
 var username = req.body.username;
 db.query('insert into reg_tb values (?,?,?,?)', 
       [0,email,password,username],(err,result)=>{
    if (err) throw err;
    res.send({'msg':'Registered succesfully'})
 })
});

app.post('/log',(req,res)=>{
    var loguser=req.body.username;
    var logpassword=req.body.password;

    db.query('select * from reg_tb where username=? and password=?',
    [loguser,logpassword],(err,result)=>{
        if(err) throw err;
        if(result.length > 0){
            res.send({'msg':true});
        }else{
            res.send({'msg':false});
        
        }
    })
})

app.post('/admin',(req,res)=>{
    var loguser=req.body.username;
    var logpassword=req.body.password;

    db.query('select * from admin_tb where username=? and password=?',
    [loguser,logpassword],(err,result)=>{
        if(err) throw err;
        if(result.length > 0){
            res.send({'msg':true});
        }else{
            res.send({'msg':false});
        
        }
    })
})
// const FileStorageEngine=multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,'./images')
//     },
//     filename:(req,file,cb)=>{
//         cb(null,Date.now()+"--"+file.originalname)
//     }
// })
// const upload = multer({storage:FileStorageEngine})
// app.post('/upload',upload.single('image'),(req,res)=>{
//     console.log(req.file)
//     res.send('uploaded')
// })
const storageEngine =multer.diskStorage({
//     destination:(req,file,callback)=>{
//         callback(null,'./images')
//     },
// filename:(req,file,callback)=>{
//     callback(null,Date.now()+"--"+file.originalname)
// }
// })
    destination:'uploads',
    filename:(req,file,callback)=>{
        callback(null, `image${Date.now()}--${file.originalname}`);
    },
});

const checkFileType=function (file,callback){
    //const fileTypes= /jpeg|jpg|png|gif|svg/;

    //const extName=fileTypes.test(path.extname(file.originalname).toLowerCase());
    //const mimeType=fileTypes.test(file.mimeType);
   // if (mimeType && extName){
        return callback(null, true);
    //}else{
        //callback("error");
   // }
    };

    const upload=multer({
        storage:storageEngine,
        limits:{fileSize:10000000},
        fileFilter:(req,file,callback)=>{
            checkFileType(file,callback);
        },
    })
    app.post('/upload',upload.single('photo'),(req,res)=>{
        const fileUploaded =req.file.filename
        db.query('insert into upload_tb values(?,?)',[0,fileUploaded],(err,result)=>{
            if (err) throw err;
            res.send({'msg': 'uploaded successfully'})
        })
    })

    app.get('/viewuploads',(req,res)=>{
        db.query('select * from upload_tb',(err,result)=>{
            if (err) throw err
            res.send({'imgData':result})
        })
    })







app.listen('9001',()=>{
    console.log('server started at http://localhost:9001')
});