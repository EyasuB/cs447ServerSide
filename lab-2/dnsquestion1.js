const dns = require('dns') 
dns.resolve4('miu.edu', (err, address) => 
    console.log('data: %j', address));
    
//Create a web server that's going to send a response of big image (bigger then 3MB) to any client that sends a request 
//to your specified server: port.Use the best way for performance. 
//(Try to solve this in many different ways and inspect the loading time in the browser and send many requests to see the performance differences)

//Using Node Stream API, create a script to unzip a file(after you zip it). (Use zlib.createGunzip() stream)

