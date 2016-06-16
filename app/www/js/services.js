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
            description: "Take a break at one of the nearby restaurants (see the tab Around Me).",
            place: "Main hall",
            date: "Saturday",
            time: "12:00",
            duration: 120
        }, {
            id: 3,
            type: "roundtable",
            speakers: [{
                name: "Randy",
                img: "img/randy.jpg",
                title: "iGEM Founder",
                category: "star"
            }, {
                name: "John Doe",
                img: "img/ben.png",
                title: "Bacteria lover"
            }, {
                name: "Kevin Stew",
                img: "img/max.png",
                title: "Yogurt industry leader"
            }, {
                name: "Pierre Curie",
                img: "img/perry.png",
                title: "Chemist, Nobel prize winner"
            }, {
                name: "Adam First",
                img: "img/adam.jpg",
                title: "First living human clone"
            }],
            name: "Roundtable #1: the future of Biotech",
            description: "Biotechnologies have seen groundbreaking discoveries in the last decade. What should we expect from the next one?.",
            place: "Amphitheater 1",
            date: "Saturday",
            time: "14:00",
            duration: 90
        }, {
            id: 4,
            type: "break",
            type: "break",
            speakers: [],
            name: "Coffee Break",
            description: "Take a break before the second roundtable.",
            place: "Amphitheater 1",
            date: "Saturday",
            time: "15:30",
            duration: 30
        }, {
            id: 5,
            type: "roundtable",
            speakers: [],
            name: "Roundtable #2: CRISPR/Cas9: now what?",
            description: "With CRISPR/Cas9, it is a whole new word that opens to us. What are the limits of our new powers? What ethical concerns do they bring up?",
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
        //noinspection SpellCheckingInspection
        /**
         * EAT/DRINK/CULTURE/FUN-TOURISM/TRANSPORTATION
         * Name/Photo/Description/Address/Phone/Website
         *
         * @type {*[]}
         */
        var around = [
            {
                name: "Restaurants", categories: [
                {
                    name: "Low Price (<10€)", items: [
                    {
                        img: "img/around/macdonalds.jpg",
                        name: "McDonald's",
                        description: "McDonald's Paris parmentier",
                        address: "88bis Av Parmentier, 159 Rue Oberkampf",
                        phone: "0143552510",
                        website: "https://www.restaurants.mcdonalds.fr/mcdonalds-paris-parmentier"
                    },
                    {
                        img: "img/around/kfc.png",
                        name: "KFC",
                        description: "Kentucky Fried Chicken",
                        address: "152 Boulevard de Ménilmontant",
                        phone: "0143491600",
                        website: "kfc.fr"
                    },
                    {
                        img: "img/around/subway.jpg",
                        name: "Subway",
                        description: "Subway Paris Oberkampf",
                        address: "121 Rue Oberkampf",
                        phone: "0148055100",
                        website: "www.subwayfrance.fr"
                    },
                    {
                        img: "img/around/sofast.png",
                        name: "So Fast",
                        description: "Fast food, Pizzas",
                        address: "88 Rue Oberkampf",
                        phone: "0148054041",
                        website: "www.so-fast.fr"
                    },
                    {
                        img: "img/around/kebab.png",
                        name: "Burak",
                        description: "Lebanese-Greek Fast Food",
                        address: "81 Avenue Parmentier",
                        phone: "0147002294",
                        website: "http://www.yelp.com/biz/burak-paris",
                        website_name: "Yelp"
                    },
                    {
                        img: "img/around/deer.png",
                        name: "Thank You My Deer",
                        description: "Gluten-free Coffee Shop/Restaurant",
                        address: "112 Rue Saint Maur",
                        phone: "0171931624",
                        website: "http://thankyoumydeer.com/coffeeshop/"
                    }
                ]
                },
                {
                    name: "Medium price (between 10€ - 20€)", items: [
                    {
                        img: "img/around/bm.png",
                        name: "B&M Burgers",
                        description: "Homemade burgers, some vegetarian.",
                        address: "82 Avenue Parmentier",
                        phone: "0143572611",
                        website: "www.bmburgers.com"
                    },
                    {
                        img: "img/around/pny.png",
                        name: "PNY",
                        description: "Paris New York Hamburgers",
                        address: "96 Rue Oberkampf",
                        phone: "0984378150",
                        website: "www.pny-hamburgers.fr"
                    },
                    {
                        img: "img/around/wcg.png",
                        name: "West Country Girl",
                        description: "Galettes & Crêpes",
                        address: "6 Passage Saint-Ambroise",
                        phone: "0147007254",
                        website: ""
                    },
                    {
                        img: "img/around/restaurant.png",
                        name: "Les Anémones",
                        description: "Bistrot Français",
                        address: "41 Avenue de la République",
                        phone: "0143575734",
                        website: "https://www.yelp.fr/biz/les-an%C3%A9mones-paris-3",
                        website_name: "Yelp"
                    },
                    {
                        img: "img/around/sushi.png",
                        name: "Sushi Folie’s",
                        description: "Japanese restaurant",
                        address: "56 Bis Rue Oberkampf",
                        phone: "0143555838",
                        website: "http://www.sushifolies.fr/"
                    },
                    {
                        img: "img/around/idfun.png",
                        name: "ID Fun Sushi",
                        description: "Japanese Restaurant",
                        address: "94 Avenue Parmentier",
                        phone: "0143573369",
                        website: "http://www.idfunsushi-75.fr/"
                    },
                    {
                        img: "img/around/asian.png",
                        name: "Bon Appétit",
                        description: "Chinese Restaurant",
                        address: "79 Avenue Parmentier",
                        phone: "0143574969",
                        website: "http://www.linternaute.com/restaurant/restaurant/158451/bon-appetit.shtml",
                        website_name: "L'Internaute"
                    },
                    {
                        img: "img/around/arlecchino.png",
                        name: "Arlecchino",
                        description: "Italian Restaurant",
                        address: "42 Avenue de la République",
                        phone: "0143144961",
                        website: "http://www.restaurant-arlecchino.com/"
                    },
                    {
                        img: "img/around/altaglio.png",
                        name: "Altaglio",
                        description: "Italian Pizzas",
                        address: "2 Bis Rue Neuve Popincourt",
                        phone: "0143381200",
                        website: "http://www.altaglio.fr/"
                    },
                    {
                        img: "img/around/village.png",
                        name: "Le Village",
                        description: "West African Restaurant",
                        address: "86 Avenue Parmentier",
                        phone: "0148056345",
                        website: "http://www.restaurantafricain-levillage.fr/"
                    },
                    {
                        img: "img/around/manguier.png",
                        name: "Le Manguier",
                        description: "Senegalese Restaurant",
                        address: "67 Avenue Parmentier",
                        phone: "0148070327",
                        website: "http://www.lafourchette.com/restaurant/le-manguier/6566",
                        website_name: "La Fourchette"
                    }
                ]
                },
                {
                    name: "Gourmet (>20€)", items: [
                    {
                        img: "img/around/raclette.png",
                        name: "Les Fondus de la Raclette",
                        description: "Traditional French Cuisine",
                        address: "107 Avenue Parmentier",
                        phone: "0140216168",
                        website: "http://www.lesfondusdelaraclette.fr/"
                    },
                    {
                        img: "img/around/barbershop.png",
                        name: "Barbershop",
                        description: "Bistrot Lounge",
                        address: "68 Avenue de la République",
                        phone: "0981111285",
                        website: "http://www.lafourchette.com/restaurant/barbershop/5930",
                        website_name: "La Fourchette"
                    },
                    {
                        img: "img/around/soleil.png",
                        name: "Le Plein Soleil",
                        description: "90 Avenue Parmentier",
                        address: "Brasserie Française",
                        phone: "0148054106",
                        website: "http://www.lepleinsoleilparis.fr/"
                    },
                    {
                        img: "img/around/deux_amis.jpg",
                        name: "Aux Deux Amis",
                        description: "Brasserie, French/Spanish Tapas",
                        address: "45 Rue Oberkampf",
                        phone: "0158303813",
                        website: "https://www.yelp.fr/biz/aux-deux-amis-paris",
                        website_name: "Yelp"
                    },
                    {
                        img: "img/around/vertigo.png",
                        name: "Le Vertigo",
                        description: "Northern France & Catalan Restaurant & Lounge",
                        address: "18, rue de Lacharrière",
                        phone: "0155287007",
                        website: "http://www.vertigoparis.fr/"
                    }
                ]
                }
            ]
            }
        ];

        return {
            all: function() {
                return around;
            },
            get: function(aroundName) {
                for (var i = 0; i < around.length; i++) {
                    if (around[i].name === aroundName) {
                        return around[i];
                    }
                }
                return null;
            }
        };
    })
    .factory('Teams', function() {
        var teams = [{
            name: "iGEM IONIS Team",
            description: "Composed of 15 members, this team is a multidisciplinary group from 6 different schools " +
            "with various formations: biology (Sup’Biotech), marketing & communication (Sup’Biotech ; Ionis-STM), " +
            "computer science (Epita ; Epitech), aeronautics (IPSA) and design (E-artsup). " +
            "Together, we are building our iGEM 2016 project.",
            project: "The project, named Quantifly, allows a quantitative and precise analysis " +
            "of atmospheric pollution. To do so, the iGEM IONIS team uses genetically engineered E.coli " +
            "that uses bioluminescence as a reporter to detect air pollution. This biosensor device " +
            "is then embarked on a drone. This device will be used as a precise and innovative mapping tool, " +
            "which will allow us to realize quality analysis of air adapted to the zone to be covered.",
            facebook: "ionisigem",
            twitter: "IONIS_iGEM",
            email: "ionis.igem@gmail.com",
            logo: "logo_ionis"
        }, {
            name: "Évry Team",
            description: "Since 2012, Université d’Évry-Val-d’Essonne has participated in iGEM as Évry Team. " +
            "With the support of the Institute of Systems and Synthetic Biology (iSSB) and Genopole, " +
            "it has already been possible to send 4 teams of motivated students to the international " +
            "competition, who have succeeded in presenting brilliant projects.",
            project: "After some months of brainstorming and organization, the Évry team 2016 is ready to involve " +
            "themselves in producing bioplastic, concretely Poly-Lactic Acid (PLA). Évry will face the challenge " +
            "of engineering Pseudomonas putida for obtaining it. Moreover, they will characterize " +
            "and use their PLA for a real application in biomedicine and 3D printing.",
            facebook: "iGEM.Evry.2016",
            twitter: "iGEM_Evry",
            email: "evryigem2016@gmail.com",
            logo: "logo_evry"
        }];
        return {
            all: function() {
                return teams;
            },
            remove: function(event) {
                teams.splice(teams.indexOf(event), 1);
            },
            get: function(eventId) {
                for (var i = 0; i < teams.length; i++) {
                    if (teams[i].id === parseInt(eventId)) {
                        return teams[i];
                    }
                }
                return null;
            }
        };
    })
;
