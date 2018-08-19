const request = require('superagent')

const apiUrl = 'http://localhost:5000'

const patchData = {
  firstName: 'foo'
}

const patch = [
  { 'op': 'replace', 'path': '/firstName', 'value': 'bar' }
]

it('checks that all routes are working', async () => {
  const username = 'itaditya'
  const loginRes = await request
    .post(`${apiUrl}/login`)
    .set('Content-Type', 'application/json')
    .send({
      username,
      password: 'adi'
    })
  const loginBody = loginRes.body
  expect(loginBody.message).toBe('success')
  const loginData = loginBody.data
  expect(loginData.username).toBe(username)

  const token = loginData.token
  request
    .patch(`${apiUrl}/protected/patch`)
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${token}`)
    .send({
      data: patchData,
      patch
    }).then(patchRes => {
      const patchBody = patchRes.body
      expect(patchBody.message).toBe('success')
      expect(patchBody.data.firstName).toBe('bar')
    })

  request
    .post(`${apiUrl}/protected/thumbnail`)
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${token}`)
    .send({
      imageUrl: 'https://avatars0.githubusercontent.com/u/30328362?s=200&v=4'
    }).then(thumbnailRes => {
      const thumbnailBody = thumbnailRes.body
      expect(thumbnailBody.message).toBe('success')
      expect(thumbnailBody.data.thumbnailBinary.type).toBe('Buffer')
    })
})
