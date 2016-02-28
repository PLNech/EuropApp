angular.module('europapp.services', [])

    .factory('Events', function() {
        var events = [{
            id: 1,
            img: "img/randy.jpg",
            speaker: "Randy Rettberg",
            name: "Welcome!",
            description: "Welcome speech to remind the objectives of iGEM and celebrate the sharing of science.",
            place: "Amphi 1",
            duration: 90,
            date: new Date().toJSON()
        }, {
            id: 2,
            img: "img/igem-ionis.png",
            speaker: "iGEM IONIS",
            name: "A drone against pollution",
            description: "The iGEM IONIS team introduces its 2016 project.",
            place: "Amphi 2",
            duration: 60,
            date: new Date().toJSON()
        }, {
            id: 3,
            img: "img/max.png",
            speaker: "Max Y",
            name: "Ipsum",
            description: "Max gives us his opinion on future.",
            place: "Amphi 3",
            duration: 30,
            date: new Date().toJSON()
        }, {
            id: 4,
            img: "img/mike.png",
            speaker: "Mike Z",
            name: "Amet",
            description: "Mike's amazing story.",
            place: "Amphi 4",
            duration: 45,
            date: new Date().toJSON()
        }];

        return {
            all: function() {
                return events;
            },
            remove: function(event) {
                events.splice(events.indexOf(event), 1);
            },
            get: function(eventId) {
                for (var i = 0; i < events.length; i++) {
                    if (events[i].id === parseInt(eventId)) {
                        return events[i];
                    }
                }
                return null;
            }
        };
    });
