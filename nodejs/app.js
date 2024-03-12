const student = require('./student');
const http = require('http');

const PORT = 3000;

const server = http.createServer(requestListener);

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

function requestListener(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.write(`<html><head><title>About student</title></head><body><p>My name is ${student.getStudentFullName()}. My student ID is ${student.getStudentId()}</p></body></html>`);
    res.end();
}