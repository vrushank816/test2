const express = require("express");
const path = require('path');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index1.html'));
});

app.get('/api/users', (req, res)=>{
    const users = [{
        id: '123',
        name: 'vrushank',
    },{
        id: '234',
        name: 'vraj',
    },{
        id: '345',
        name: 'dev',
    }]
    res.json(users);
})


app.listen(port, () => {
    console.log('server is listening on port ${port}');
});
