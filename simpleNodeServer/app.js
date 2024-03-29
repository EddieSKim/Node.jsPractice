const http = require('http');
// file handling
const fs = require('fs');
const port = 3000;

const server = http.createServer(function (req, res) {
    // status code, headers
    res.writeHead(200, { 'Content-Type': "text/html" });
    fs.readFile("index.html", function (error, data) {
        if (error) {
            res.writeHead(404);
            res.write("Error: file not found");
        } else {
            res.write(data);
        }
        res.end();
    })

});

server.listen(port, function (error) {
    if (error) {
        console.error(error);
    } else {
        console.log(`Server is listening on port ${port}`);
    }
});