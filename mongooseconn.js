const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ecommerce', {useNewUrlParser: true});

console.log("connection establish")