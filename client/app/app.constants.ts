'use strict';
const angular = require('angular');

export default angular.module('gjuHarInt2016024App.constants', [])
  .constant('appConfig', require('../../server/config/environment/shared'))
  .name;
