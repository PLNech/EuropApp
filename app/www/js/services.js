angular.module('europapp.services', [])
    .factory('Events', function () {
        var events = [{
            id: 1,
            type: "break",
            name: "Exhibition Stand",
            description: "Have a breakfast while discovering all the stands.",
            place: "Main hall",
            date: "Saturday",
            time: "09:00",
            duration: 180
        }, {
            id: 2,
            type: "food",
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
                id: 1,
                name: "François Képès",
                img: "img/kepes.jpg",
                title: "Research Director at CNRS, founding director of the Epigenomics Project and iSSB",
                category: "star",
                bio: "François Képès is a cell, systems and synthetic biologist. He is currently modelling and engineering " +
                "genome architecture in microorganisms. In 1986 as a postdoc he started the first cell-free assay " +
                "in the group of Randy Schekman, the 2013 Nobel awardee of Medicine. \n" +
                "François Képès is a research director at CNRS. He is the founding director of the Epigenomics Project " +
                "(Genopole, 2002), an institute of complex studies that is dedicated to the emerging disciplines of systems " +
                "and synthetic biology. He is also the founding director of the institute of Systems and Synthetic Biology (iSSB, 2008). " +
                "He is an invited Professor at the Department of Bioengineering at Imperial College London. " +
                "He is a member of the National Academy of Technologies in France. " +
                "He is the author of over 110 scientific publications and the editor or writer of 20 books. " +
                "He has organized or chaired each year 3-7 international scientific events. " +
                "Since 2005, he has been an invited speaker or an organizer for 38 conferences dedicated to synthetic biology. " +
                "Dr. Képès is the editor of 4 international journals, referee for 19 others, and is an expert advisor " +
                "for European and North-American funding agencies. In 2007 he was the team leader of the first French iGEM team."
            }, {
                id: 2,
                name: "Héloïse Muller",
                img: "img/muller.jpg",
                title: "PHD at Institut Pasteur",
                bio: "Heloise MULLER, post-doctoral student in biology, currently working in spatial regulation team of genomes " +
                "in the department of genetics and genomes bioinformatique center, Integrative Biology and Biostatistics at the Institut Pasteur.\n" +
                "In recent years Heloise MULLER has been distinguished by participating in the project «Synthetic Yeast 2.0» alongside Professor Jef BOEKE.\n" +
                "She has published «Design and synthesis of neochromosomes» on therapeutic/reproductive medicine, gynecology and endocrinology on October 1, 2015.\n"+
                "In the Johns Hopkins University, Heloise MULLER and the Sc2.0 team replaced the entire chromosome 3 " +
                "of the yeast Saccharomyces cerevisiae by a synthetic genome and completely redesigned in silico."
            }, {
                id: 3,
                name: "Andrew Tolonen",
                img: "img/tolonen.jpg",
                title: "Leader of Tolonen group at the Genoscope-CEA",
                bio: "Andy studies the systems biology and genetic engineering of environmentally important microbes. " +
                "His research focuses on Clostridium phytofermentans, an anaerobic bacterium from forest soil " +
                "that ferments plant biomass to ethanol and hydrogen. He did his PhD in microbial genomics at MIT and his post-doc " +
                "in the Church lab at Harvard Medical School.\n" +
                "Andy also teaches microbiology and molecular biology undergraduate and graduate classes at the Université d'Evry" +
                " and microbial biotechnology in the Evry-Genopole MSSB program. " +
                "Andrew Tolonen has been a superadvisor of the Evry iGEM since it was founded in 2012."
            }, {
                id: 4,
                name: "Christophe Genisset",
                img: "img/genisset.jpg",
                title: "Security Officer at SGDSN (French Secretariat for Defense and National Security)",
                description: "Christophe GENISSET obtained his Ph.D. in molecular microbiology and biotechnology in 2006 from the University of Provence." +
                "The subject of his doctoral thesis was “Structure and function study of Helicobacter pylori VacA toxin”. " +
                "Before his Ph.D. he has obtained an engineer degree in bio-engineering and applied microbiology from the Luminy engineer high school (ESIL) based in Marseille.\n\n" +
                "Christophe GENISSET has worked in the field of molecular biology and vaccinology in several research departments, " +
                "in Siena (Chiron Spa), Padova (Università degli studi di Padova) and at the Institut Pasteur of Lille. " +
                "He has worked on vaccine development against Helicobacter pylori and Mycobacterium tuberculosis.\n\n" +
                "Between 2007 and 2013, he was a biosafety and a biosecurity inspector working for the ANSM, the French drug agency. " +
                "He is now working as a biology officer at the SGDSN, the secretariat for defense and national security, " +
                "a department from the French Prime minister. He is notably in charge of synthetic biology issues."
            }, {
                id: 5,
                name: "Alexei Grinbaum",
                img: "img/grinbaum.jpg",
                title: "Researcher at LARSIM, the Philosophy of Science Group at CEA-Saclay",
                bio: "Alexei Grinbaum is a physicist and philosopher at LARSIM, the Philosophy of Science Group at CEA-Saclay near Paris. " +
                "His main interest is in the foundations of quantum theory. He also writes on the ethical and social aspects of emerging technologies, " +
                "including nanotechnology, robotics, and synthetic biology. He is a member of CERNA, the French ethics committee for research " +
                "in information technology. His latest book is «Mécanique des Étreintes» (Paris: Encre Marine, 2014)."
            }],
            name: "Roundtable #1: Synthetic Biology: Challenges & Risks",
            shortText: "This conference is here to explain the purpose of Synthetic Biology. Nowadays, …",
            description: "This conference is here to explain the purpose of Synthetic Biology.\n" +
            "Nowadays, it is really important to better understand the challenges of Synthethic Biology. " +
            "Indeed, it is going to be the future of many fields of expertise.\n" +
            "Our 5 different speakers will share with us their own expertise and help us discern the key points of synthetic biology development.",
            place: "Amphitheater 1",
            date: "Saturday",
            time: "14:00",
            duration: 90
        }, {
            id: 4,
            type: "break",
            name: "Coffee Break",
            description: "Take a break before the second roundtable.",
            place: "Amphitheater 1",
            date: "Saturday",
            time: "15:30",
            duration: 30
        }, {
            id: 5,
            type: "roundtable",
            speakers: [{
                id: 1,
                name: "Philippe Jais",
                img: "img/jais.jpg",
                title: "Chief Executive & Scientific Officer at Eukarÿs SAS",
                category: "star",
                bio: "Philippe Jais, MD, PhD, President and Scientific Director of Eukarÿs has a mixed training: physician and molecular geneticist. " +
                "As Molecular Geneticist, he completed his Doctorate of Science at INSERM (Paris) and Institut Gustave Roussy (Villejuif, France) " +
                "with a specialization in molecular genetics of cancer, and the Johns Hopkins (Baltimore, MD) as post-doctoral researcher " +
                "and finally as Assistant in Molecular and Cellular Biology, Faculty Xavier Bichat (Paris).\n" +
                "After leaving academia, Philippe Jaïs held various management positions in the Biotechnology Industry (Genset, LFB Biotech, " +
                "ProteaBio, AzurRx) and Pharmaceuticals (Solvay, Abbott, Roche) in research, translational medicine, and genomic biomarkers.\n" +
                "In this capacity, he designed and usually managed the early clinical development of five small chemical molecules " +
                "and three therapeutic proteins. He also invented a large-scale identification of approach to human monogenic diseases " +
                "treatable by synthetic ligands for nuclear receptors. \nIn 2009, he invented the technology C3P3 and then co-founded Eukarÿs. " +
                "Having assured the Scientific Director responsibilities until early 2014, it combines this function with the Presidence of the company. " +
                "Philippe Jaïs has published over fifty articles, book chapters and abstracts, and is the inventor of nearly a dozen patents."
            }, {
                id: 2,
                name: "Cyrille Pauthenier",
                img: "img/pauthenier.jpg",
                title: "President of Abolis Biotechnologies"
            }, {
                id: 3,
                name: "Samuel Juillot",
                img: "img/juillot.jpg",
                title: "CSO at Glowee",
                bio: "With two Masters in biotechnology and synthetic biology obtained SupBiotech and the University of Evry Val d'Essonne, " +
                "Samuel obtained his PhDin synthetic biology at the University of Freiburg (Germany). " +
                "He joined Glowee in 2015, where he leads the team of research and development."
            }, {
                id: 4,
                name: "Michael Krel",
                img: "img/krel.png",
                title: "CEO at Enobraq",
                bio: "Michael joined the Life Sciences team as Senior Associate in 2013 and became CEO of Enobraq in nov 2015. " +
                "Michael focuses on investments in the industrial biotechnology and renewable chemistry sectors.\n" +
                "Prior to Sofinnova, Michael spent two years as VP Business Development at Deinove, a biotech company " +
                "developing second generation biofuels and biochemicals. Before that Michael was a Business Development Manager at Metabolic Explorer, " +
                "a biotech company focused on the development of processes and products in the green chemistry area, where he contributed " +
                "to the development of projects, particularly in Asia. Previously, Michael helped to develop a consulting company " +
                "focused on strategic and organizational issues in scientific and technical environments, where he worked with major French energy and materials industrial groups.\n" +
                "Michael graduated from Ecole Polytechnique and holds a PhD in organic chemistry from the ICSN (Institut de Chimie des Substances Naturelles) in France."
            }],
            name: "Roundtable #2: Synthetic Biology: A new Economic World",
            shortText: "This conference aims at showing the importance of Synthetic Biology in our professional careers. We will…",
            description: "This conference aims at showing the importance of Synthetic Biology in our professional careers.\n" +
            "We will look at how much it is attractive and useful to participate to the iGEM competition for our personal career development.\n" +
            "Find out the career opportunities that offers the field of Synthetic Biology. Our 4 speakers will present us their success stories, and explain why & how Synthetic Biology is essential these days.",
            place: "Amphitheater 1",
            date: "Saturday",
            time: "16:00",
            duration: 90
        }, {
            id: 6,
            type: "party",
            name: "Party",
            shortText: "Let's meet and celebrate together! \nTap here for the detailed timeline.",
            description: "Let's meet and celebrate together!\n\n" +
            "09PM | Projection of Germany Euro 2016\n" +
            "10PM | Opening of the dancing party with Dj Swax\n" +
            "11PM | Show Surprise\n" +
            "03AM | Last dance",
            place: "24 rue Pasteur, Kremlin-Bicêtre",
            date: "Saturday",
            time: "21:00",
            duration: 360
        }];
        return {
            all: function () {
                return events;
            },
            remove: function (event) {
                events.splice(events.indexOf(event), 1);
            },
            get: function (eventId) {
                for (var i = 0; i < events.length; i++) {
                    if (events[i].id === parseInt(eventId)) {
                        return events[i];
                    }
                }
                return null;
            }
        };
    })
    .factory('Around', function () {
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
            all: function () {
                return around;
            },
            get: function (aroundName) {
                for (var i = 0; i < around.length; i++) {
                    if (around[i].name === aroundName) {
                        return around[i];
                    }
                }
                return null;
            }
        };
    })
    .factory('Teams', function () {
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
            all: function () {
                return teams;
            },
            remove: function (event) {
                teams.splice(teams.indexOf(event), 1);
            },
            get: function (eventId) {
                for (var i = 0; i < teams.length; i++) {
                    if (teams[i].id === parseInt(eventId)) {
                        return teams[i];
                    }
                }
                return null;
            }
        };
    });
