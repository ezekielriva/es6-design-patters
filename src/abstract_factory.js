"use strict";

var _ = require("./utils.js");

let Button = {
  paint :function () {
    throw "Undefined Method";
  }
}

let GUIFactory = {
  createButton :() => new Button()
}

let WinFactory = function () {
  factory = Object.create(GUIFactory);

  return _.extends(factory, {
    createButton :() => new WinButton()
  });
}

let OSXFactory = function () {
  factory = Object.create(GUIFactory);

  return _.extends(factory, {
    createButton :() => new OSXButton()
  });
}

let WinButton = function () {
  return _.extends(Button, {
    paint :() => console.log('Win button')
  });
}

let OSXButton = function () {
  return _.extends(Button, {
    paint :() => console.log('OSX button')
  });
}

let App = function (factory) {
  let button = factory.createButton();
  button.paint();
  return this;
}

let args    = process.argv.slice(2),
    factory
;

if (args[0] === 'Windows') {
  factory = new WinFactory();
} else {
  factory = new OSXFactory();
}

let app = new App(factory);
