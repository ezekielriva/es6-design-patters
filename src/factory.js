var CarFactory = function () { }
CarFactory.prototype.makeCar = () => { throw 'Method not defined' };

var Car = function () { }
Car.prototype.getType = () => { throw 'Method not defined' };

var SedanFactory = function () { }
SedanFactory.prototype = Object.create(CarFactory);
SedanFactory.prototype.makeCar = () => new Sedan();

var Sedan = function () { }
Sedan.prototype = Object.create(Car);
Sedan.prototype.getType = () => 'Sedan';

module.exports = SedanFactory;
