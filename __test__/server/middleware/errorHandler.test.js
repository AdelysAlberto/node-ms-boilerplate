//Include unit testing libs.
const { errorHandler } = require('../../../src/server/middleware/errorHandler');

describe('errorHandler:', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('- Other error code', async () => {
    const error = {
      details: "",
      statusCode: 502,
      message: 'Mocked error',
    };

    const jsonStub = jest.fn();
    const res = {
      status: () => ({
        json: jsonStub,
      }),
    };

    await errorHandler(error, {}, res, {});

    const errorCompare = {
      details: "",
      status: 502,
      message: 'Mocked error',
    };

    expect(jsonStub.mock.calls[0][0]).toStrictEqual(errorCompare);
  });

  it('- Error code 500', async () => {
    const error = {
      details: "",
      message: 'Mocked error',
    };

    const jsonStub = jest.fn();
    const res = {
      status: () => ({
        json: jsonStub,
      }),
    };

    await errorHandler(error, {}, res, {});

    const errorCompare = {
      details: "",
      status: 500,
      message: 'Mocked error',
    };

    expect(jsonStub.mock.calls[0][0]).toStrictEqual(errorCompare);
  });

  it('- Error no message', async () => {
    const error = {};

    const jsonStub = jest.fn();
    const res = {
      status: () => ({
        json: jsonStub,
      }),
    };

    await errorHandler(error, {}, res, {});

    const errorCompare = { details: "", status: 500, message: 'Internal server Error' };

    expect(jsonStub.mock.calls[0][0]).toStrictEqual(errorCompare);
  });
});
