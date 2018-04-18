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

  it('increases in temperature with up()', function() {
    expect(thermostat.up()).toEqual(21);
  });
});

