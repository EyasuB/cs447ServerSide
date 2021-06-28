/*
Create a http or https server which is listen to 3000 port.
The home page “/” which displays an html page with one input to enter any text message
User enter some message, then click “Submit” button
The user’s inputs are stored in a local file on the server side.
User will be redirect to home page after saving successfully.

*/


const fs = require('fs');
let options = {
    key: fs.readFileSync('./privateKey.key'),
    cert: fs.readFileSync('./certificate.crt')
}
const myserver = require('https')
    .createServer(options);



myserver.on('request', (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url ==='/') {
        res.write('<html>');
        res.write('<head><title>Your Message</title></head>');
        res.write('<body><form action="/message" method="POST"> Your Message: <input name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end(); // to avoid the coninues function 
    }
    if (url === 'message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            fs.writeFileSync('message.txt', parsedBody.split('=')[1]);

        });
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title> First Page </title></head>');
    res.write('<body><h1>This is Brilliant Node.js</h1></body>');
    res.write('</html>')
    res.end();
})
myserver.listen(8443, () => ('Listening at 8443'));

//Test 
/*
const fs = require('fs');
const https = require('https');
const options = {
    key: fs.readFileSync('./privateKey.key'),
    cert: fs.readFileSync('./certificate.crt')
};
https.createServer(options, (req, res) => {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end('hello from my HTTPS Web server!!\n');

}).listen(8443, () => console.log('listening on 8443'));
*/