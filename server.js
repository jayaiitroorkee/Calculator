const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.listen(3000,function(){

    console.log("the server has started");
});
app.get("/", function(request,response){

    response.sendFile(__dirname + "/idex.html");

});
app.get("/bmi", function(request,response){
    response.sendFile(__dirname + "/bmi.html");
});
app.post("/",function(request,response){
    var number1 = Number(request.body.num1);
    var number2 = Number(request.body.num2);
    var result =number1 + number2;

    console.log(request.body.num1 + request.body.num2 );
    response.send("the sum is = " + result );
});