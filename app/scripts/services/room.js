(function() {
    function Room($firebaseArray, $firebaseObject) {
        var ref = firebase.database().ref().child('rooms');
        var rooms = $firebaseArray(ref); 

        var remove = function(id){
            var removalTarget = $firebaseObject(ref.child(id));
            removalTarget.$remove().then(function() {
                console.log("removed");
            });

        };

        var add = function(newRoom) {
            rooms.$add({roomName: newRoom});
        };

        return {
            all: rooms,
            remove: remove,
            add: add
        };       
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', '$firebaseObject', Room]);
})();