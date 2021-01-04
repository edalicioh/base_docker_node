import request from 'supertest';
import app from '../../src/App';

const req = request(app);

describe('API', () => {
  it('should validate the API route', async () => {
    const res = await req.get('/api/');
    console.log(res.status);
    expect(res.status).toBe(200);
  });
});
