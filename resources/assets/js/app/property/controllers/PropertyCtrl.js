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
