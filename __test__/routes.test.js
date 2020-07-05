/* eslint-disable no-undef */
import request from 'supertest';
import app from '../server/app';

describe('app routes test', () => {
  it('should get all movies', async (done) => {
    const res = await request(app).get('/movies');
    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty('data');
    done();
  });
  it('get all characters', async (done) => {
    const res = await request(app).get('/characters');
    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty('data');
    done();
  });

  it('should not get characters with wrong order', async (done) => {
    const res = await request(app).get('/characters?order=ascnding');
    expect(res.status).toEqual(400);
    expect(res.body).toHaveProperty('error');
    done();
  });
  it('should not get characters with wrong sort', async (done) => {
    const res = await request(app).get('/characters?sort=namee');
    expect(res.status).toEqual(400);
    expect(res.body).toHaveProperty('error');
    done();
  });
  it('should get all comments', async (done) => {
    const res = await request(app).get('/comments');
    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty('data');
    done();
  });
  it('should post comments', async (done) => {
    const res = await request(app).get('/comments').send({
      movie: 'movie title',
      comment: 'movie comment',
    });
    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty('data');
    done();
  });
  it('should not post comments without movie or comment', async (done) => {
    const res = await request(app).post('/comments');
    expect(res.status).toEqual(400);
    expect(res.body).toHaveProperty('error');
    done();
  });
  it('should not get comments if comment is more than 500 characters', async (done) => {
    const res = await request(app).post('/comments').send({
      movie: 'a movie title',
      comment:
        'It is a dark time for the Rebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their hidden\r\nbase and pursued them across\r\nthe galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\nthousands of remote probes into\r\nthe far reaches of space....',
    });
    expect(res.status).toEqual(400);
    expect(res.body).toHaveProperty('error');
    done();
  });
});
