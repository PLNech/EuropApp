angular.module('europapp.controllers', [])
    .controller('HomeCtrl', function($scope, Teams) {
        $scope.teams = Teams.all();
    })

    .controller('MapCtrl', function($scope) {
    })

    .controller('EventsCtrl', function($scope, Events) {
        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //
        //$scope.$on('$ionicView.enter', function(e) {
        //});

        $scope.events = Events.all();
        $scope.share = function(event) {
            //TODO: Share feature
        };
    })
    .controller('EventDetailCtrl', function($scope, $stateParams, Events) {
        $scope.event = Events.get($stateParams.eventId);
    })

    .controller('SpeakerDetailCtrl', function($scope, $stateParams, Events) {
        $scope.event = Events.get($stateParams.eventId);
        for (var i = 0; i < $scope.event.speakers.length; i++) {
            var speaker = $scope.event.speakers[i];
            console.log("handling speaker " + speaker.name + "...");
            if (speaker.id == $stateParams.speakerId) {
                $scope.speaker = speaker;
                break;
            }
        }
    })

    .controller('AroundDetailCtrl', function($scope, $stateParams, Around) {
        $scope.around = Around.get($stateParams.eventId);
    })
    .controller('AroundCtrl', function($scope, Around) {
        $scope.around = Around.all();
    });
