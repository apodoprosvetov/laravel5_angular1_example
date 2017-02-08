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