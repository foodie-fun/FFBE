const request = require('supertest');
const server = require('../../api/server');
const db = require('../dbconfig');


describe('NEW_USER ROUTES', () => {

    beforeEach(() => {
        return db('users').truncate();
    });

    it('true to be true', async () => {
        expect(true).toBe(true);
    });

    describe('REGISTER USER', () => {
        it('success: status code 200 for post /register', async () => {
            const user = {
                "username": "Nguyen31",
                "password": "pawsword"
            }

            let response = await request(server).post('/api/new/register').send(user);
            expect(response.status).toBe(200);
        });

        it('Credentials Check', async () => {
            const user = {
                "username": "Nguyen32"
            }

            let response = await request(server).post('/api/new/register').send(user);
            expect(response.status).toBe(500);
        });

        it('Credentials Message Check', async () => {
            const user = {
                "username": "Nguyen32"
            }

            let response = await request(server).post('/api/new/register').send(user);
            expect(response.body.message).toBe("Please provide credentials!");
        });

        it('Check type is json', async () => {
            const user = {
                "username": "Nguyen31",
                "password": "pawsword"
            }

            let response = await request(server).post('/api/new/register').send(user);
            expect(response.type).toBe("application/json");
        });
    });

    describe('LOGIN USER', () => {
        it('success: status code 200 for post /login', async () => {
            const user = {
                "username": "Nguyen31",
                "password": "pawsword"
            }

            let register = await request(server).post('/api/new/register').send(user);
            expect(register.status).toBe(200);

            let login = await request(server).post('/api/new/login').send(user);
            expect(login.status).toBe(200);
        });

        it('Credentials Check', async () => {
            const user = {
                "username": "Nguyen32"
            }

            let response = await request(server).post('/api/new/login').send(user);
            expect(response.status).toBe(404);
        });

        it('Credentials Message Check', async () => {
            const user = {
                "username": "Nguyen32"
            }

            let response = await request(server).post('/api/new/login').send(user);
            expect(response.body.message).toBe("Please provide all of the required fields!");
        });

        it('Check type is json', async () => {
            const user = {
                "username": "Nguyen31",
                "password": "pawsword"
            }

            let response = await request(server).post('/api/new/login').send(user);
            expect(response.type).toBe("application/json");
        });

        it('Check for Token', async () => {
            const user = {
                "username": "Nguyen31",
                "password": "pawsword"
            }

            let register = await request(server).post('/api/new/register').send(user);
            expect(register.status).toBe(200);

            let login = await request(server).post('/api/new/login').send(user);
            expect(login.body.message).toBe("Success, have a token!");

        });

        it('Wrong Login info', async () => {
            const user = {
                "username": "Nguyen31",
                "password": "pawsword"
            }

            let register = await request(server).post('/api/new/register').send(user);
            expect(register.status).toBe(200);

            let login = await request(server).post('/api/new/login').send(user);
            expect(login.status).toBe(200);

            const userII = {
                "username": "Nguyen31",
                "password": "wrongPassword"
            }

            let loginAgain = await request(server).post('/api/new/login').send(userII);
            expect(loginAgain.body.message).toBe("Invalid Credentials.");
        });

    });

});
