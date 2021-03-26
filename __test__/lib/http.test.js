//Include unit testing libs.

describe('http lib - test', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('isHttpError - 200', () => {
    const { isHttpError } = require('../../src/lib/http.js');

    expect(isHttpError(200)).toBeFalsy();
  });

  it('isHttpError - 400', () => {
    const { isHttpError } = require('../../src/lib/http.js');

    expect(isHttpError(400)).toBeTruthy();
  });

  it('isHttpError - 500', () => {
    const { isHttpError } = require('../../src/lib/http.js');

    expect(isHttpError(500)).toBeTruthy();
  });

  it('isHttpError - null', () => {
    const { isHttpError } = require('../../src/lib/http.js');

    expect(isHttpError(null)).toBeFalsy();
  });

  it('isHttpError - text', () => {
    const { isHttpError } = require('../../src/lib/http.js');

    expect(isHttpError('abcdef')).toBeFalsy();
  });
});
