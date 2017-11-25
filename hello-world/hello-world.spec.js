const HelloWorld = require('./hello-world')

describe('Hello World', function () {
  it('returns Hello, World!', function () {
    const helloWorld = new HelloWorld()

    const result = helloWorld.hello()

    expect(result).toEqual('Hello, World!')
  })
})
