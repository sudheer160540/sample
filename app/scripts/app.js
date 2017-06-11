'use strict';

/**
 * @ngdoc overview
 * @name newAppApp
 * @description
 * # newAppApp
 *
 * Main module of the application.
 */
angular
  .module('newAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/courses', {
        templateUrl: 'views/courses.html',
        controller: 'CoursesCtrl',
        controllerAs: 'courses'
      })
       .when('/achieverAdvice', {
        templateUrl: 'views/achieveradvice.html',
        controller: 'AchieverCtrl',
        controllerAs: 'achiever'
      }) .when('/bestColleges', {
        templateUrl: 'views/bestcolleges.html',
        controller: 'BestcollegesCtrl',
        controllerAs: 'bestcolleges'
      }).when('/comptuerCoaching', {
        templateUrl: 'views/comptuercoaching.html',
        controller: 'ComptuercoachingCtrl',
        controllerAs: 'comptuercoaching'
      }).when('/english', {
        templateUrl: 'views/english.html',
        controller: 'englishCtrl',
        controllerAs: 'english'
      }).when('/notifications', {
        templateUrl: 'views/notifications.html',
        controller: 'notificationsCtrl',
        controllerAs: 'notifications'
      }).when('/generAlawareness', {
        templateUrl: 'views/generalawareness.html',
        controller: 'generalawarenessCtrl',
        controllerAs: 'generalawareness'
      }).when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'contactCtrl',
        controllerAs: 'contact'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
