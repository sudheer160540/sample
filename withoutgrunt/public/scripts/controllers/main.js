'use strict';

/**
 * @ngdoc function
 * @name newAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the newAppApp
 */
angular.module('newAppApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    console.log('enter to login');
     $(function() {

            $('#da-slider').cslider({
                autoplay	: true,
                bgincrement	: 450
            });

        });
  });
