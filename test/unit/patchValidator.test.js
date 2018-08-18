const patchValidator = require('../../validators/patch');

describe('that patchValidator works correctly', () => {
  it('checks if body is not defined', () => {
    const isValid = patchValidator(undefined)
    expect(isValid).toBe(false);
  })

  it('checks if data is not present', () => {
    const body = {
      patch: {}
    }
    const isValid = patchValidator(body)
    expect(isValid).toBe(false);
  })

  it('checks if patch is not present', () => {
    const body = {
      data: {}
    }
    const isValid = patchValidator(body)
    expect(isValid).toBe(false);
  })

  it('checks if body is empty', () => {
    const body = {}
    const isValid = patchValidator(body)
    expect(isValid).toBe(false);
  })
})
