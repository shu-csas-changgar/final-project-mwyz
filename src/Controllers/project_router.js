const express = requre('express');
const path = require('path');

const app = express();

app.get('/' , (req, res)  =>{
    var list = [1,2,3];
    res.json(list)
});