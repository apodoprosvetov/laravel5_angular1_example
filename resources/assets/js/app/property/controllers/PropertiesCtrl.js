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
