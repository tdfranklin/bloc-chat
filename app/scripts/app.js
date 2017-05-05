(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });

        $stateProvider
            .state('home', {
                url: '/',
                controller: 'RoomCtrl as room',
                templateUrl: '/templates/home.html'
            })
            .state('messages', {
                url: '/messages',
                controller: 'RoomCtrl as room',
                templateUrl: '/templates/messages.html'
            });
    }

    angular
        .module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap'])
        .config(config);
})();