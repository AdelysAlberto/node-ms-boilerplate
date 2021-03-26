//Include unit testing libs.
const { decode } = require('../../src/lib/token');
const jwt = require('jsonwebtoken');

//Mock functions
jest.mock('jsonwebtoken');

describe('token:', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('- Check wrapper', async () => {
    const mock = 'hash...........';
    jwt.decode.mockReturnValue(mock);

    const result = await decode('xxxxx');

    expect(result).toStrictEqual(mock);
  });
});
