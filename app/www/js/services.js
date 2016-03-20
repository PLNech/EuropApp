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
    })
    .factory('Around', function() {
        /**
         * EAT/DRINK/CULTURE/FUN-TOURISM/TRANSPORTATION
         * Name/Photo/Description/Address/Phone/Website
         *
         * @type {*[]}
         */
        var around = [{
            name: "Eat", items: [
                {
                    id: 1,
                    img: "img/around/tea.png",
                    name: "Sesame et sel",
                    description: "Korean restaurant.",
                    address: "123 rue des Poireaux",
                    phone: "023123123",
                    website: "sesameetsel.com"
                },
                {
                    id: 2,
                    img: "img/around/cafet.png",
                    name: "La Cafet",
                    description: "School Cafeteria.",
                    address: "Cour Pasteur",
                    phone: "023123123",
                    website: "cafecrocus.fr"
                }
            ]
        },
            {
                name: "Drink", items: [
                {
                    id: 1,
                    img: "img/around/tea.png",
                    name: "Salon de thé",
                    description: "Tea and scones near the venue.",
                    address: "25 Rue des Fleurs",
                    phone: "023123123",
                    website: "http://teaplace.fr"
                },
                {
                    id: 2,
                    img: "img/around/disk.png",
                    name: "La Diskotek",
                    description: "Drink and meet other drunk people.",
                    address: "321 Place rouge",
                    phone: "023123123",
                    website: "disko.com"
                }
            ]
            },
            {
                name: "Culture", items: []
            },
            {
                name: "Fun/Tourism", items: [
                {
                    id: 2,
                    img: "img/around/disk.png",
                    name: "La Diskotek",
                    description: "Drink and meet other drunk people.",
                    address: "321 Place rouge",
                    phone: "023123123",
                    website: "disko.com"
                }
            ]
            },
            {
                name: "Transportation", items: []
            }];

        return {
            all: function() {
                return around;
            },
            remove: function(around) {
                around.splice(around.indexOf(around), 1);
            },
            get: function(aroundId) {
                for (var i = 0; i < around.length; i++) {
                    if (around[i].id === parseInt(aroundId)) {
                        return around[i];
                    }
                }
                return null;
            }
        };
    });
