var app = angular.module('app', []);
app.controller('controller', function ($scope, $http, $q, $filter) {
    $scope.init = function () {
    }

    $scope.init();
});

app.filter('toDate', function() {
    return function(item) {
        return new Date(item);
    };
});
