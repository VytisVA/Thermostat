"use strict";

//Thermostat starts at 20 degrees

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  //You can increase the temperature with an up function

  it('increases temperature with up()', function() {
    expect(thermostat.up()).toEqual(21);
  });

//You can decrease the temperature with a down function

  it('decreases temperature with down()', function() {
    expect(thermostat.down()).toEqual(19);
  });

//The minimum temperature is 10 degrees

  it('has a minimum of 10 degrees', function() {
    for (var i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });
  
//Power saving mode is on by default

  it('has a power saving mode by default', function(){
    expect(thermostat.isPowerSavingMode()).toBe(true);
  });

//Switch PSM off

  it('can switch power saving mode off', function(){
    thermostat.PSMoff();
    expect(thermostat.isPowerSavingMode()).toBe(false);
  });
  
// Switch PSM on

  it('can switch power saving mode off', function(){
    thermostat.PSMoff();
    expect(thermostat.isPowerSavingMode()).toBe(false);
    thermostat.PSMon();
    expect(thermostat.isPowerSavingMode()).toBe(true);
  });

// If power saving mode is on, the maximum temperature is 25 degrees

  describe('when power saving mode is on', function() {
    it('has a maximum temperature of 25 degrees', function() {
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.temperature).toEqual(25);
    });
  });

// If power saving mode is off, the maximum temperature is 32 degrees
  
  describe('when power saving mode is off', function() {
    it('has a maximum temperature of 32 degrees', function() {
      thermostat.PSMoff();
      for (var i = 0; i < 13; i++) {
        thermostat.up();
      }
      expect(thermostat.temperature).toEqual(32);
    });

//Power saving mode is on by default
    it('can be reset to the default temperature', function() {
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      }
      thermostat.resetTemperature();
      expect(thermostat.temperature).toEqual(20);
    });    
  });

//thermostat's current energy usage

  describe('displaying usage levels', function() {
    describe('when the temperature is below 18 degrees', function() {
      it('it is considered low-usage', function() {
        for (var i = 0; i < 3; i++) {
          thermostat.down();
        }
        expect(thermostat.energyUsage()).toEqual('low-usage');
      });
    });

    describe('when the temperature is between 18 and 25 degrees', function() {
      it('it is considered medium-usage', function() {
        expect(thermostat.energyUsage()).toEqual('medium-usage');
      });
    });

    describe('when the temperature is anything else', function() {
      it('it is considered high-usage', function() {
        thermostat.powerSavingMode = false;
        for (var i = 0; i < 6; i++) {
          thermostat.up();
        }
        expect(thermostat.energyUsage()).toEqual('high-usage');
      });
    });
  });
});

