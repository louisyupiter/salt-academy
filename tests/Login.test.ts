import app from '../src/server';
import request from 'supertest';
import * as jwt from "jsonwebtoken";

describe('login', () => {
  it('should be success login', async done => {
    request(app.app)
      .post(`/login`)
      .send({ email: 'kiky.adryan@salt.co.id', password: '12345' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body).toMatchObject(
          {
            'success': true,
            'message': "Success login",
          }
        )
        const token = res.body.data;
        const jwtPayload = <any>jwt.verify(token, '123');
        expect(jwtPayload.id).toEqual(1);
        done()
      })
  });

  it('should be failed login when wrong password', async done => {
    request(app.app)
      .post('/login')
      .send({ email: 'kiky.adryan@salt.co.id', password: '123456' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(401)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body).toMatchObject(
          {
            'success': false,
            'message': "Email or password is not valid",
          }
        )
        done();
      })
  });

  it('should be failed login when wrong email', async done => {
    request(app.app)
      .post('/login')
      .send({ email: 'kiky.adryan@salt.co.id2', password: '12345' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(401)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body).toMatchObject(
          {
            'success': false,
            'message': "Email or password is not valid",
          }
        )
        done();
      })
  });

});
