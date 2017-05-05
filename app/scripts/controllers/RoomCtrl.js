(function() {
    function RoomCtrl(Room, Modal, Message, $scope) {
        var room = this;
        room.roomlist = Room.all;
        room.room = Room;
        room.currentRoom = $scope.currentRoom;        

        room.activateRoom = function(room) {
            $scope.currentRoom = room;
            $scope.messages = Message.getByRoomId(room.$id);
        };
        

        room.openModal = function(){
            Modal.open();
        };
        
        room.deleteRoom = function(id) {            
            room.room.remove(id);
        };
    }

    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', 'Modal', 'Message', '$scope', RoomCtrl]);
})();