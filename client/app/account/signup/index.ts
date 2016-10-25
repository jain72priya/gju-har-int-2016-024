'use strict';
const angular = require('angular');
import SignupController from './signup.controller';

export default angular.module('gjuHarInt2016024App.signup', [])
    .controller('SignupController', SignupController)
    .name;
