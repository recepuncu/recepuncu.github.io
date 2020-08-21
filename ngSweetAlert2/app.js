'use strict';

angular.module('myApp', [
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'recepuncu.ngSweetAlert2'
]).
    config(['$routeProvider', '$locationProvider', '$compileProvider', function ($routeProvider, $locationProvider, $compileProvider) {

        $locationProvider.html5Mode(false);

        var staticPath;

        staticPath = './';
        var appPathRoute = '/';
        var pagesPath = staticPath + 'pages/';

        $routeProvider.when(appPathRoute + 'home', { templateUrl: pagesPath + 'home/home.html' });

        $routeProvider.otherwise({ redirectTo: appPathRoute + 'home' });

    }]);