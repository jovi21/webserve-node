const http = require('http');

http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        // res.write('Hola Jovi');
        let out = {
            name: 'Jovi',
            age: 24,
            url: req.url
        };
        res.write(JSON.stringify(out));
        res.end();
    })
    .listen(8080);


console.log('listen in port 8080');