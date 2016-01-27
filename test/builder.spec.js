import StreetMap from "../src/builder.js"

describe("Builder", function() {
  var App;

  beforeAll(function() {
    App = new StreetMap.Builder({x: 50, y: 50}, {x: 100, y: 100})
                         .setLandColor("#CCCCCC")
                         .setWaterColor("#000FFF")
                         .build();
  });

  it("sets required origin value", function () {
    expect(App.origin).toEqual({ x: 50, y: 50 });
  });

  it("sets required destination value", function () {
    expect(App.destination).toEqual({ x: 100, y: 100 });
  });

  it("sets expected land color", function () {
    expect(App.landColor).toEqual("#CCCCCC");
  });

  it("sets expected water color", function () {
    expect(App.waterColor).toEqual("#000FFF");
  });

  it("does not change any extra default value", function () {
    expect(App.highTrafficColor).toEqual("#FF0000");
    expect(App.mediumTrafficColor).toEqual("#FFFF00");
    expect(App.lowTrafficColor).toEqual("#00FF00");
  });

});
