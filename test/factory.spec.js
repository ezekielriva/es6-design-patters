import SedanFactory from "../src/factory.js"

describe("Factory", function() {
  var factory;

  beforeAll(function() {
    factory = new SedanFactory();
  });

  it('allows us to create a car', function () {
    let car = factory.makeCar();
    expect(car).toBeDefined();
  });

  it('allows us to ask the car type', function () {
    let car = factory.makeCar();
    expect(car.getType()).toEqual('Sedan');
  })

});
