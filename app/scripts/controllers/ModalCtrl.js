(function() {
    function ModalCtrl(Room, Modal, $uibModalInstance, $firebaseArray) {
        this.items = Room;

        this.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };

        this.addRoom = function(newRoom) {
            $uibModalInstance.close(this.items.add(newRoom));
        };

    }
    

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', 'Modal', '$uibModalInstance', '$firebaseArray', ModalCtrl]);
})();