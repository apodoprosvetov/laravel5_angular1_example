(function () {
    'use strict';
    angular
        .module('app.main', [
            // Injections
            'ui.router',
            'ui.bootstrap',
            'ngResource'
        ], Main);


    Main.$inject = ['$stateProvider', '$urlRouterProvider', '$provide', '$httpProvider'];

    function Main($stateProvider, $urlRouterProvider, $provide, $httpProvider) {

        function handleErrors($q, $injector) {

            return {

                responseError: function (rejection) {

                    // Need to use $injector.get to bring in $state or else we get
                    // a circular dependency error
                    var $state = $injector.get('$state');
                    if(rejection.status === 404) {
                        $state.go('404');
                    }

                    return $q.reject(rejection);
                }
            }
        }

        $provide.factory('handleErrors', handleErrors);
        $httpProvider.interceptors.push('handleErrors');

        $urlRouterProvider
            .otherwise('/properties');

        $stateProvider
            .state('404', {
                url: '/not-found',
                templateUrl: '/app/errors/404.html'
            })
            .state('properties', {
                url: '/properties',
                templateUrl: "/app/property/index.html",
                controller: "PropertiesCtrl"
            })
            .state('property', {
                    url: "/property/{propertyId:[0-9]{1,8}}",
                    templateUrl: "/app/property/property.html",
                    controller: "PropertyCtrl"
                })
            }

})();