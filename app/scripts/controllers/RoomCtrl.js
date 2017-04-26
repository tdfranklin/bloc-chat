(function() {
    function RoomCtrl(Room) {
        this.roomlist = Room.all;
    }

    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', RoomCtrl]);
})();