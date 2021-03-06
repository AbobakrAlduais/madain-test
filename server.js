var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var staticFiles = require ('serve-static');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// log all api traffic to console
app.use('api/*',req=>{
    console.log(req);
    next();
});



app.post('/api/login', function (req, res) {

    if(req.body && req.body.email && req.body.password){
        if(req.body.email == '123@123.123'){

            if(req.body.password == '123123') {
              console.log( req.body.gender) 
                var user ={
                    name:req.body.username
                    , email:req.body.email
                    , password:req.body.password
                    , profilePic:"http://lorempixel.com/500/500/people/"
                    , gender:req.body.gender
                };
                res.send(200, user);
            }
        elseif(user.gender == 'female')
             { res.send(400,{message:'hey lady, you sent me the wrong password.'});}

        }else if(user.gender == 'male')
            {res.send(400,{message:'hey man, you sent me the wrong email.'});}

    }
    else
        res.send(422,{message:'yo! you miss`n some stuff!'});
});


var serve = staticFiles('public/', {'index': ['index.html']});
app.use(serve);


app.listen(3000);
console.log("running on http://localhost:3000");