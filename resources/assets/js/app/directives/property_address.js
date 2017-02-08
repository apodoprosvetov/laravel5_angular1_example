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