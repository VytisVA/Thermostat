"use strict";

function Thermostat() {
    this.temperature = 20;
}

Thermostat.prototype.getCurrentTemperature = function() {
    return this.temperature;
  };

Thermostat.prototype.up = function() {
    return this.temperature += 1;
  };

var thermostat = new Thermostat();
 
console.log(thermostat.temperature);

var thermostat = new Thermostat();
 
console.log(thermostat.up());