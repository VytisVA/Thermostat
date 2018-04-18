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
});

