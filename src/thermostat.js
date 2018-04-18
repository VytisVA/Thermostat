"use strict";

function Thermostat() {
    this.MINIMUM_TEMPERATURE = 10;
    this.MAX_LIMIT_PSM_ON = 25;
    this.MAX_LIMIT_PSM_OFF = 32;
    this.temperature = 20;
    this.powerSavingMode = true;
}

Thermostat.prototype.getCurrentTemperature = function() {
    return this.temperature;
  };

Thermostat.prototype.up = function() {
    return this.temperature += 1;
  };

Thermostat.prototype.isMinimumTemperature = function() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  };  

Thermostat.prototype.down = function() {
    if (this.isMinimumTemperature()) {
        return this.MINIMUM_TEMPERATURE;
    }
    return this.temperature -= 1;
  };

Thermostat.prototype.isPowerSavingMode = function() {
    return this.powerSavingMode === true;
  };

Thermostat.prototype.PSMoff = function() {
    this.powerSavingMode = false;
  };
  
Thermostat.prototype.PSMon = function() {
    this.powerSavingMode = true;
  };
  
Thermostat.prototype.isMaximumTemperature = function() {
    if (this.PSMon() === false) {
        return this.temperature === this.MAX_LIMIT_PSM_OFF;
    }
    return this.temperature === this.MAX_LIMIT_PSM_ON;
  };
  
Thermostat.prototype.up = function() {
    if (this.isMaximumTemperature()) {
      return;
    }
    return this.temperature += 1;
  }  

var thermostat = new Thermostat();
 
console.log(thermostat.PSMoff());