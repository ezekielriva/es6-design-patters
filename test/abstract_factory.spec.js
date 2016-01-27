import { WinFactory, OSXFactory } from "../src/abstract_factory.js"

describe("Abstract Factory", function() {
  var App;

  beforeAll(function() {
    App = function (factory) {
      let button = factory.createButton();
      return button.paint();
    };
  });

  it("returns WinButton when I use WinFactory", function() {
    let factory = new WinFactory();
    let app     = App(factory);
    expect(app).toBe("[WinButton .paint]");
  });

  it("returns OSXButton when I use OSXFactory", function() {
    let factory = new OSXFactory();
    let app     = App(factory);
    expect(app).toBe("[OSXButton .paint]");
  })
});
