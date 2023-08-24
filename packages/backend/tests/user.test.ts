import request from 'supertest';
import express from 'express';
import { createExpressMiddleware } from '@trpc/server/adapters/express';
import { appRouter } from "../src/api/routers";

jest.mock('../src/utils/data-source', () => ({
  createConnection: jest.fn(),
}));

const app = express();
app.use(
  "/api",
  createExpressMiddleware({
    router: appRouter,
    createContext: () => ({}),
  })
);

describe('API Endpoints', () => {
  it('should fetch all users', async () => {
    const res = await request(app).get('/api/users/all');
    expect(res.statusCode).toEqual(200);
    // Further expectations based on response content can be added here
  });

  it('should add a new user', async () => {
    const newUser = {
      firstName: "John",
      lastName: "Doe",
      age: 30
    };
    const res = await request(app).post('/api/users/add').send(newUser);
    expect(res.statusCode).toEqual(200);
    // Further expectations based on response content can be added here
  });

  it('should delete a user', async () => {
    const userIdToDelete = 1; // This ID should match an existing user
    const res = await request(app).delete(`/api/users/delete`);
    expect(res.statusCode).toEqual(200);
    // Further expectations based on response content can be added here
  });
});

