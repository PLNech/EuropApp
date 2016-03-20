angular.module('europapp', ['ionic', 'europapp.controllers', 'europapp.services'])

    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })
    .run(function($rootScope) {
        $rootScope.platform = ionic.Platform.platform();
    })
    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
        // setup an abstract state for the tabs directive
            .state('tab', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/tabs.html'
            })
            .state('tab.home', {
                url: '/home',
                views: {
                    'tab-home': {
                        templateUrl: 'templates/tab-home.html',
                        controller: 'HomeCtrl'
                    }
                }
            })
            .state('tab.map', {
                url: '/map',
                views: {
                    'tab-map': {
                        templateUrl: 'templates/tab-map.html',
                        controller: 'MapCtrl'
                    }
                }
            })
            .state('tab.events', {
                url: '/events',
                views: {
                    'tab-events': {
                        templateUrl: 'templates/tab-events.html',
                        controller: 'EventsCtrl'
                    }
                }
            })
            .state('tab.event-detail', {
                url: '/events/:eventId',
                views: {
                    'tab-events': {
                        templateUrl: 'templates/event-detail.html',
                        controller: 'EventDetailCtrl'
                    }
                }
            })
            .state('tab.around', {
                url: '/around',
                views: {
                    'tab-around': {
                        templateUrl: 'templates/tab-around.html',
                        controller: 'AroundCtrl'
                    }
                }
            })
            .state('tab.around-detail', {
                url: '/around/:aroundId',
                views: {
                    'tab-events': {
                        templateUrl: 'templates/around-detail.html',
                        controller: 'AroundDetailCtrl'
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/home');

    });
