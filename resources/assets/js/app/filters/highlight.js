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
