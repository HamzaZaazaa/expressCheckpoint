const express = require('express');
const app = express();
const port = 9001;

function workingdays(req, res, next){
    const date = new Date();
    if(date.getDay() == 0 && date.getDay() == 6) {
        res.sendFile(__dirname + '/views/displaynone.html')
    }
    next()
};
function workinghours(req, res, next) {
    const hours = new Date();
    if(hours.getHours()< 9 && hours.getHours > 17) {
        res.sendFile(__dirname + '/views/displaynone.html')
    }
    next()
}
app.use(workingdays, workinghours);

app.get('/', (req,  res)=> {
    res.sendFile(__dirname + '/views/home.html')
})

app.get('/ourservices', (req, res) => {
    res.sendFile(__dirname + '/views/ourServices.html')
})

app.get('/contact', (req, res)=> {
    res.sendFile(__dirname + '/views/contact.html')
})
app.listen(port, ()=>{console.log(`app on port ${port}`)})