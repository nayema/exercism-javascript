const HelloWorld = require('./hello-world')

describe('Hello World', function () {
  const helloWorld = new HelloWorld()

  it('says hello world', function () {
    expect(helloWorld.hello()).toEqual('Hello, World!');
  });
});
