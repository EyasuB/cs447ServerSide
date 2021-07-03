const { response } = require('express');
const express = require('express');
const { request } = require('http');
const path = require('path');
const options = {
    "caseSensitive": false,
    "strict": false
}
const router = require(express.Router(options));

router.get('/', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'user.html'));
});

module.exports = router; 