(function() {
    function Message($firebaseArray) {
        var Message = {};
        var ref = firebase.database().ref().child('message');
        var data = ref.orderByChild('roomId');

        Message.getByRoomId = function(roomId) {
            var messages = $firebaseArray(data.equalTo(roomId));
                return messages;
        };

        Message.send = function(newMessage) {
            var list = $firebaseArray(ref);
            list.$add(newMessage);
        };

        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();