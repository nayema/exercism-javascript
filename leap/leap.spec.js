const Year = require('./leap');

describe('Leap year', function () {
  it('is not very common', function () {
    const year = new Year(2015);
    expect(year.isLeap()).toBe(false);
  });

  it('is introduced every 4 years to adjust about a day', function () {
    const year = new Year(2016);
    expect(year.isLeap()).toBe(true);
  });

  it('is skipped every 100 years to remove an extra day', function () {
    const year = new Year(1900);
    expect(year.isLeap()).toBe(false);
  });

  it('is reintroduced every 400 years to adjust another day', function () {
    const year = new Year(2000);
    expect(year.isLeap()).toBe(true);
  });

  describe('Additional example of a leap year that', function () {
    it('is not a leap year', function () {
      const year = new Year(1978);
      expect(year.isLeap()).toBe(false);
    });

    it('is a common leap year', function () {
      const year = new Year(1992);
      expect(year.isLeap()).toBe(true);
    });

    it('is skipped every 100 years', function () {
      const year = new Year(2100);
      expect(year.isLeap()).toBe(false);
    });

    it('is reintroduced every 400 years', function () {
      const year = new Year(2400);
      expect(year.isLeap()).toBe(true);
    });
  });
});
