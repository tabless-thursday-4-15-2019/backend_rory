const server = require('../api/server.js');
const request = require('supertest');

describe('tabs-routes', () => {
    describe('GET /:id', () => {
        it('should respond with 401', () => {
            return request(server)
                .get('/tabs/1')
                .then(response => {
                    expect(response.status).toBe(401);
            });
        });   
    });

    describe("DELETE /:id", () => {
        it("should return a status code of 401", async () => {
            const response = await request(server).delete("/tabs/1");
            expect(response.status).toEqual(401);
        });

    describe("PUT /:id", () => {
        it("should return a status code of 401", async () => {
            const response = await request(server).put("/tabs/1");
            expect(response.status).toEqual(401);
        });
    });
});
});