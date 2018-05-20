
const express = require('express');
//const fileUpload= require('express-fileupload');

const router=express.Router();

//app.use(fileUpload());
//const path = require('path');
//const http=require('http');
const app=express();
const MongoClient=require('mongodb').MongoClient;
const ObjectID=require('mongodb').ObjectID;
//const api= require('./server/routes/api');
//require('mongoose');
//var multer = require('multer');
var path=require('path');
var db;

const connection=(closure) => {
    return MongoClient.connect('mongodb://localhost:27017', (err, client)=>{
        if (err) return console.log(err);
        db=client.db('angulardb');
        closure(db);

    });
};


const sendError =(err, res)=>{
    response.status=501;
    response.message=typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

let response={
    status:200,
    data:[],
    message: null
};

router.post('/getProducts',(req, res) => {

  connection((db) => {
    db.collection('products')
      .find()
      .toArray()
      .catch((err)=>{
        sendError(err, res);
        response.message ={ success:"Se obtuvieron los registros correctamente", error:""};
        res.send({response});
      })
      .then((result)=>{

        response.data= result;
        res.send({response});
      });
  });
});


router.post('/getProduct',(req, res) => {

  connection((db) => {
    db.collection('products')
      .find({_id:new ObjectID(req.query.id)})
      .toArray()
      .catch((err)=>{
        sendError(err, res);
        response.message ={ success:"Se obtuvieron los registros correctamente", error:""};
        res.send({response});
      })
      .then((result)=>{

        response.data= result;
        res.send({response});
      });
  });
});
module.exports=router;
