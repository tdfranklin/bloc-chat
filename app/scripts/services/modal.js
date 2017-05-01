(function() {
    function Modal($uibModal) {

        Modal.open = function(size) {
            $uibModal.open({
                animation: false,
                templateUrl: '../templates/modal.html',
                size: size,
                controller: 'ModalCtrl',
                controllerAs: 'modal'
            });
        };

        return {
            open: Modal.open
        };

    }

    angular
        .module('blocChat')
        .factory('Modal', ['$uibModal', Modal]);
})();