(function() {
    function RoomCtrl(Room, Modal) {
        this.roomlist = Room.all;
        this.room = Room;
        this.openModal = function(){
            Modal.open();
        };
        
        this.deleteRoom = function(id) {            
            this.room.remove(id);
        };

    }

    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', 'Modal', RoomCtrl]);
})();