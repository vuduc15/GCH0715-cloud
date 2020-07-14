// const { sumN, gtN } = require("./myLib");
//const myLib = require("./myLib");
//console.log(sumN(10))
//console.log(gtN(10)) 

function display(res){
    
    let d = new Date();
    let msg = `Hello ${d.getDate()}/${d.getMonth() +1}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    res.write(msg);
}
var http = require('http'); // 1 - Import Node.js core module

var server = http.createServer(function (req, res) {   // 2 - creating server

    if(req.url =='/'){
         // set response header
    res.writeHead(200, { 'Content-Type': 'text/html' }); 
        
    // set response content    
    res.write('<html><body><p style ="color:red">This is home Page.</p>');
    res.write('<a href="https://www.youtube.com/watch?v=3AAHMU4-o4A">CCYLA</a><br>');
    display(res);
    res.write('</body></html>')
    res.end();

    }
    else if (req.url == "/login") {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body style ="background-color:Green"><p >Login Page</p></body></html>');
        res.write('<br><a href="../">Click link to login</a><br>');
        res.end();
    
    }
    else {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body style ="background-color:Yellow"><p>Register</p></body></html>');
        res.write('<a href="../">Click link to register</a><br>');
        res.end();
    
    }
   
});

server.listen(3000); //3 - listen for any incoming requests

