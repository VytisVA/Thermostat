"use strict";

function Thermostat() {
    this.temperature = 20;
}

Thermostat.prototype.getCurrentTemperature = function() {
    return temperature;
  };

var thermostat = new Thermostat();
 
console.log(thermostat.temperature);