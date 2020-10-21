import app from '../src/server';
import request from 'supertest';

describe('account', () => {
  afterEach(() => {
    app.
  });

  it('should be success retrieve user', async done => {
    request(app.app)
      .get(`/account`)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body).toMatchObject(
          {
            'success': true,
            'message': "Success retrieve user"
          }
        )
        done()
      })
  });

});
