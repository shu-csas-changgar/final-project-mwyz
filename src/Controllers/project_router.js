const express = requre('express');
const path = require('path');

const app = express();

app.get('/' , (req, res)  =>{
    var list = [1,2,3];
    res.json(list);
});

const port = provess.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
