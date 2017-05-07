(function() {
    function ModalCtrl(Room, Modal, $uibModalInstance, $firebaseArray, $cookies) {
        this.items = Room;

        this.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };

        this.addRoom = function(newRoom) {
            $uibModalInstance.close(this.items.add(newRoom));
        };

        this.setUsername = function(name) {
            if (name && name !== '') {
                $cookies.put('blocChatCurrentUser', name);
                $uibModalInstance.dismiss('cancel');
            }
        };

    }
    

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', 'Modal', '$uibModalInstance', '$firebaseArray', '$cookies', ModalCtrl]);
})();