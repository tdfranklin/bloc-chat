(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5mode({
                enabled: true,
                requireBase: false
            });

        $stateProvider
            .state('', {
                url: '/',
                controller: 'XCtrl as X',
                templateUrl: '/path'
            });
    }

    angular
        .module('blocChat', ['ui.router', 'firebase'])
        .config(config);
})();