
const users = ['User one','User two', 'User three']
const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  
  console.log(users);
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Bienvenido</title><head>');    
    res.write('<body><h1>Hello from my Node.js Server!</h1>');
    res.write(
      '<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Create</button></form>'
    );
    res.write('</body></html>');
    return res.end();
  }
  if (url === '/users') {
    res.write('<html>');
    res.write('<head><title>Users</title><head>');
    res.write('<body><li>');
    for(let user of users){
        res.write(`<ul>${user}</ul>`);
    }
    res.write('</li></body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data', chunk => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const newUser = parsedBody.split('=')[1];
      users.push(newUser)
      console.log(users);
    });
    res.statusCode=302;
    res.setHeader('Location','/users')
    res.end();
  }
  
};

module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler,
//     someText: 'Some hard coded text'
// };

// module.exports.handler = requestHandler;
// module.exports.someText = 'Some text';

// exports.handler = requestHandler;
// exports.someText = 'Some hard coded text';