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
(function() {
    angular
        .module('app.main')
        .controller('PropertiesCtrl', PropertiesCtrl);

    PropertiesCtrl.$inject = ['$scope', '$state', 'Property'];

    function PropertiesCtrl($scope, $state, Property) {
        $scope.filter_property_name = '';
        $scope.properties = [];

        $scope.init = function () {
            Property.query().$promise.then(function (res) {
                $scope.properties = res;
            })
        };

        $scope.init();

    }
})();

(function() {
    angular
        .module('app.main')
        .controller('PropertyCtrl', PropertyCtrl);

    PropertyCtrl.$inject = ['$scope', '$state', '$stateParams', 'Property'];

    function PropertyCtrl($scope, $state, $stateParams ,Property) {
        $scope.propertyId = $stateParams.propertyId;
        $scope.property = {};

        $scope.init = function () {
            Property.get({id: $scope.propertyId}).$promise.then(function (res) {
                $scope.property = res;
            })
        };

        $scope.init();

    }
})();

(function () {
    angular
        .module('app.main')
        .factory("Property", Property);

    Property.$inject = ['$resource'];

    function Property($resource) {
        return $resource("/api/property/:id", {}, {
            'get': {method: 'GET'},
            'query': {method: 'GET', isArray: true}
        });
    }
})();
(function(){

    angular
        .module('app.main')
        .filter('sqfeet', ['$sce',function($sce) {
            return function(sqfeet) {
                if (typeof sqfeet !== "undefined") {
                    return $sce.trustAsHtml(sqfeet + ' ft&#178;');
                }else{
                    return 'N/A';
                }
            }
        }]);

})();

(function(){

    angular
        .module('app.main')
        .filter('rent', ['$filter', function($filter) {
            return function(amount, type) {
                if (typeof amount !== "undefined") {
                    return $filter('currency')(amount, '$', 2) + ' / ' + type;
                }else{
                    return 'N/A';
                }
            }
        }]);

})();

(function(){

    angular
        .module('app.main')
        .filter('highlight', ['$sce', function($sce) {
            return function(text, phrase) {
                if (phrase) text = text.replace(new RegExp('(' + phrase + ')', 'gi'),
                    '<mark>$1</mark>')

                return $sce.trustAsHtml(text)
            }
        }]);

})();

(function () {
    angular
        .module('app.main')
        .directive('propertyAddress', propertyAddressDirective);

    function propertyAddressDirective() {
        return {
            restrict: 'E',
            scope: {
                property: '=',
            },
            templateUrl:'/app/property/address.html',
            link: function (scope, element) {

            }
        }
    }
})();
//# sourceMappingURL=angular-main-app.js.map
