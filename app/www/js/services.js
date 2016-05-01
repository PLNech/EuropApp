angular.module('europapp.services', [])

    .factory('Events', function() {
        var events = [{
            id: 1,
            type: "break",
            speakers: [],
            name: "Welcoming and Exposition",
            description: "Have a breakfast while discovering all the stands.",
            place: "Main hall",
            date: "Saturday",
            time: "09:00",
            duration: 240
        }, {
            id: 2,
            type: "food",
            speakers: [],
            name: "Lunch Break",
            description: "Take a break at one of the nearby restaurants.",
            place: "Main hall",
            date: "Saturday",
            time: "12:00",
            duration: 120
        }, {
            id: 3,
            type: "roundtable",
            speakers: [{
                name:"Randy",
                img:"img/randy.jpg",
                title:"iGEM Founder",
                category:"star"
            },{
                name:"John Doe",
                img:"img/ben.png",
                title:"Bacteria lover"
            },{
                name:"Kevin Stew",
                img:"img/max.png",
                title:"Yogurt industry leader"
            },{
                name:"Pierre Curie",
                img:"img/perry.png",
                title:"Chemist, Nobel prize winner"
            },{
                name:"Adam First",
                img:"img/adam.jpg",
                title:"First living human clone"
            }],
            name: "Roundtable #1: the future of Biotech",
            description: "Listen to an expert's debate on actual topics.",
            place: "Amphitheater 1",
            date: "Saturday",
            time: "14:00",
            duration: 90
        }, {
            id: 3,
            type: "break",
            speakers: [],
            name: "Coffee Break",
            description: "Take a break before the second roundtable.",
            place: "Amphitheater 1",
            date: "Saturday",
            time: "15:30",
            duration: 30
        }, {
            id: 4,
            type: "roundtable",
            speakers: [],
            name: "Roundtable #2: CRISPR/Cas9: now what?",
            description: "Listen to an expert's debate on actual topics.",
            place: "Amphitheater 1",
            date: "Saturday",
            time: "16:00",
            duration: 90
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
