const server = require('./server.js');
const request = require('supertest');

describe('server.js', () => {
      describe('GET /', () => {
          it('should respond with 200 OK', () => {
              return request(server)
                  .get('/')
                  .then(response => {
                      expect(response.status).toBe(200);
              });
          });  

      describe('POST /register', () => {
          it.skip('should respond with 201 OK', () => {
              return request(server)
                  .post('/register')
                  .send({ username: "admin4", password:""}) //this needs a new username in order to pass
                  .then(response => {
                      expect(response.status).toBe(201);
              });
          });
          it('should respond with 500', () => { //will fail bc admin3 is already registered as username
            return request(server)
                .post('/register')
                .send({ username: "admin3", password:""})
                .then(response => {
                    expect(response.status).toBe(500);
            });
        });  
        });

    describe("POST to /login", () => {
        it("should return a status code of 200", async () => {
            const response = await request(server)
                .post("/login")
                .send({ username: "admin", password: "" });
                    expect(response.status).toEqual(200);
            });
            it("should return a status code of 401", async () => {
              const response = await request(server)
                .post("/login")
                .send({ username:""  }); //fails bc there is no name
              expect(response.status).toEqual(401);
            });
          });
        
    });
  });