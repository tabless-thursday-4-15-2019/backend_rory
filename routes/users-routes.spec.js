const server = require('../api/server.js');
const request = require('supertest');

describe('users-routes', () => {
    describe('GET /:id', () => {
        it('should respond with 200 OK', () => {
            return request(server)
                .get('/users/1')
                .then(response => {
                    expect(response.status).toBe(200);
            });
        });  

        it('should respond with 401 OK at users/id/tabs', () => {
            return request(server)
                .get('/users/1/tabs')
                .then(response => {
                    expect(response.status).toBe(401);
            });
        });
    });

});