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
