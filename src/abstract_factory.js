var Button = function () { }
Button.prototype.paint = () => { return "[Button .paint]" };

var GUIFactory = function () {}
GUIFactory.prototype.createButton = () => { return new Button() };

var WinFactory = function () { }
WinFactory.prototype = Object.create(GUIFactory);
WinFactory.prototype.createButton = () => { return new WinButton() };

var OSXFactory = function () { }
OSXFactory.prototype = Object.create(GUIFactory);
OSXFactory.prototype.createButton = () => { return new OSXButton() };

var WinButton = function () { }
WinButton.prototype = Object.create(Button);
WinButton.prototype.paint = () => { return "[WinButton .paint]" };

var OSXButton = function () { }
OSXButton.prototype = Object.create(Button);
OSXButton.prototype.paint = () => { return "[OSXButton .paint]" };

module.exports = {
  WinFactory: WinFactory,
  OSXFactory: OSXFactory
}
