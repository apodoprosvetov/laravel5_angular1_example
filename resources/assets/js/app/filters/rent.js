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
