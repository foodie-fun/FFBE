const request = require('supertest'); 
const server = require('./server');

// General Get Request Testing

describe('GET ("/") for Server ', () => {
    it('success: status code 200 for get /', async () => {
        let response = await request(server).get('/');
        expect(response.status).toBe(200);
    });

    it('gets the right response type', async () => {
        let response = await request(server).get('/');
        expect(response.type).toBe('text/html');
    });

    it('gets the right message', async () => {
        let response = await request(server).get('/');
        expect(response.text).toBe('<h2>Welcome to the FoodieFun Server!</h2>');
    });
});
