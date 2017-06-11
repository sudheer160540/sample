'use strict';

/**
 * @ngdoc function
 * @name myProjectApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the myProjectApp
 */
angular.module('newAppApp')
  .controller('LoginCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    console.log("enter");
$scope.userLogin=function(){
  console.log("sdsds");
    window.location.href = "./userlogin.html";
}
    
  });
