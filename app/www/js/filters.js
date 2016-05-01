angular.module('europapp.filters', [])
    .filter('duration', function() {
    return function(input) {
        var textDuration = "";
        var minutes = parseInt(input);
        var hours = Math.floor(minutes / 60);
        minutes = minutes - 60 * hours;

        if (hours > 0) textDuration += hours + "h";
        if (minutes != 0) textDuration += " " + minutes + "m";
        return textDuration;
    };
});