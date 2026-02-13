var http=require('http');
http.createServer(function(req,res){
  res.write("<h1>welcome to javascript with node.js</h1>");
  res.end();
}).listen(3000);
console.log("server responded");