var StreetMap = function (builder = {}) {
  // Required parameters
  this.origin             = builder.origin;
  this.destination        = builder.destination;

  // Optional parameters
  this.waterColor         = builder.waterColor          || "#0000FF";
  this.landColor          = builder.landColor           || "#333333";
  this.highTrafficColor   = builder.highTrafficColor    || "#FF0000";
  this.mediumTrafficColor = builder.mediumTrafficColor  || "#FFFF00";
  this.lowTrafficColor    = builder.lowTrafficColor     || "#00FF00";
};

StreetMap.Builder = function (origin, destination) {
  this.origin      = origin;
  this.destination = destination;
};

StreetMap.Builder.prototype.setWaterColor= function (color) {
  this.waterColor = color;
  return this;
};

StreetMap.Builder.prototype.setLandColor = function (color) {
  this.landColor = color;
  return this;
};

StreetMap.Builder.prototype.setHighTrafficColor = function(color) {
  this.highTrafficColor = color;
  return this;
};

StreetMap.Builder.prototype.setMediumTrafficColor = function (color) {
  this.mediumTrafficColor = color;
  return this;
};

StreetMap.Builder.prototype.setLowTrafficColor = function (color) {
  lowTrafficColor = color;
  return this;
};

StreetMap.Builder.prototype.build = function () {
  return new StreetMap(this);
};

module.exports = StreetMap;
