'use strict';
const angular = require('angular');
import LoginController from './login.controller';

export default angular.module('gjuHarInt2016024App.login', [])
  .controller('LoginController', LoginController)
  .name;
