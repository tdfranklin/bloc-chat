(function() {
    function RoomCtrl(Room, Modal, Message, $scope, $cookies, $filter) {
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

        room.sendMessage = function(newMessage) {
            var currentUser = $cookies.get('blocChatCurrentUser');
            var currentRoom = $scope.currentRoom.$id;
            var newData = {
                content: newMessage,
                roomId: currentRoom,
                sentAt: $filter('date')(new Date(), 'short'),
                username: currentUser                
            };            
            Message.send(newData);
            $scope.newMessage = '';
        };
    }

    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', 'Modal', 'Message', '$scope', '$cookies', '$filter', RoomCtrl]);
})();