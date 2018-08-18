const loginValidator = require('../../validators/login');

describe('that loginValidator works correctly', () => {
  it('checks if body is not defined', () => {
    const isValid = loginValidator(undefined)
    expect(isValid).toBe(false);
  })

  it('checks if username is not present', () => {
    const body = {
      password: 'xxxxxxx'
    }
    const isValid = loginValidator(body)
    expect(isValid).toBe(false);
  })

  it('checks if password is not present', () => {
    const body = {
      username: 'xxxxxxx'
    }
    const isValid = loginValidator(body)
    expect(isValid).toBe(false);
  })

  it('checks if body is empty', () => {
    const body = {}
    const isValid = loginValidator(body)
    expect(isValid).toBe(false);
  })
})
