(function() {
    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
            $uibModal.open({
                animation: false,
                templateUrl: '../templates/cookies.html',
                controller: 'ModalCtrl',
                controllerAs: 'modal',
                size: 'lg',
                backdrop: 'static',
                keyboard: false
            });
        }
    }

    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();