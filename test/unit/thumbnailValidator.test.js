const thumbnailValidator = require('../../validators/thumbnail');

describe('that thumbnailValidator works correctly', () => {
  it('checks if body is not defined', () => {
    const isValid = thumbnailValidator(undefined)
    expect(isValid).toBe(false);
  })

  it('checks if imageUrl is valid', () => {
    expect(thumbnailValidator({ imageUrl: 'http://xyz.com/image.jpg' })).toBe(true);
    expect(thumbnailValidator({ imageUrl: 'https://xyz.com/image?s=300' })).toBe(true);
    expect(thumbnailValidator({ imageUrl: 'xyz.com/image.jpg' })).toBe(false);
  })

  it('checks if body is empty', () => {
    const body = {}
    const isValid = thumbnailValidator(body)
    expect(isValid).toBe(false);
  })
})
