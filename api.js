var express=require('express');
var bodyParser=require('body-Parser');
var app=express();
require('./mongooseconn.js')
require('./dbconnection.js')
var routes=require('./routes/routemethod.js');
var routers=require('./routes/userroutes.js')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use(bodyParser.json())
// app.use(express.static(__dirname + '/upload'));

//...................................................

app.use("/", routes);
{
    console.log("done done")
}

//..................................

app.use("/", routers);
{
    console.log("done done")
}

//..............................

app.listen(2321)
console.log("server runnin on port number 3333")