const express = require('express');
const app = express();
const path = require('path');

app.use('/', express.static('dist/front-todo-list'));

app.listen(process.env.PORT || 8000, function() {
    // display which port is used for the user
    if (process.env.PORT != undefined)
        console.log("listening on " + process.env.PORT);
    else
        console.log("listening on 3000");
})

//Path Location Strategy

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/front-todo-list/index.html'));
})


console.log(__dirname + '/dist/front-todo-list/index.html');
console.log('Console listening!');