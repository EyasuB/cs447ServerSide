const express = require('express');
const app = express();
//const productRouter = require('./routes/product');
//const userRouter = require('./routes/users');
const path = require('path');

app.set('port', process.env.PORT || 3000);
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
})
//app.use('/users', userRouter);
//app.use('/products', productRouter);
app.use((req, res,next) => {
    res.status(404).sendFile(__dirname, 'views','404.html');
})
app.use((req, res, next) => {
        res.status(500).send('There are issues with your connection');
    });
app.listen(3000, () => console.log(' Server Lisrening at 3000'));