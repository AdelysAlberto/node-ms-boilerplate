const { authRestrict } = require('../../../src/server/middleware/authRestrict');

describe('axios lib - test', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('bad Auth - 200', async () => {
    const headers = {};
    const next = () => nextCalled = true

    const jsonStub = jest.fn();
    const res = {
      status: jest.fn(),
    };
    res.status.mockImplementation(() => ({ json: jsonStub }))

    const req = {
      url: 'mock.com',
      method: 'GET',
      headers,
    };

    const errorCompare = { message: 'Access denied' };

    await authRestrict(req, res, next);

    expect(res.status).toHaveBeenCalledWith(403)
    expect(jsonStub).toHaveBeenCalledWith(errorCompare);
  });

  it('get Request - 200', async () => {
    const mockURL = "mock.com";
    const headers = { "authorization": '123' };

    const res = {
      status: () => ({
        json: jsonStub,
      }),
    };
    const next = jest.fn();

    const req = {
      url: 'mock.com',
      method: 'GET',
      headers: headers,
    };

    await authRestrict(req, res, next);
    expect(next).toHaveBeenCalledTimes(1);
  });

});
