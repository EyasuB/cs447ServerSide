const express = require('express');
const { request } = require('http');
const path = require('path');
const options = {
    "caseSensitive": false,
    "strict": false
}
const router = express.Router(options);
router.get('/', (request, respose, next) => {
    respose.sendFile(path.join(__dirname,'..','views','add-product.html'))
})
router.post('/', (request, response, next) => {
    console.log(request.body);
    response.redirect('/admin/add-product');
})
module.exports = router;