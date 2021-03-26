//Include unit testing libs.
const health = require('../../../src/server/controller/health');
const service = require('../../../src/services/healthService');

jest.mock('../../../src/services/healthService');
describe('health controller - test', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('health controller', async () => {
    const jsonStub = jest.fn();
    const used = process.memoryUsage().heapTotal / 1024 / 1024;
    const messageCompare = { status: 'OK', memoryUsage: used };

    const res = {
      status: () => ({
        json: jsonStub,
      }),
    };

    service.getHealth.mockReturnValue(messageCompare)
    await health({}, res);
   
    expect(jsonStub.mock.calls[0][0]).toStrictEqual(messageCompare);
  });
});
