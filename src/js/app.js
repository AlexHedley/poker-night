var app = angular.module('app', []);
app.controller('controller', function ($scope, $http, $q, $filter) {
    $scope.init = function () {
        // initialize wizard
        $('#wizard').wizard({
            title: 'Custom Title',
            onSubmit: function () {
                $('<div>onSubmit called</div>').appendTo('#EventLog');
                $('#wizard').wizard('end', {
                    info: 'this is an info message',
                    warning: 'this is a warning message',
                    success: 'this is a success message',
                    error: 'this is an error message',
                    // autoClose: 5000 // close after 5 seconds
                });
            },
            isModal: false,
            autoOpen: true
        });
    }

    $scope.init();
});

app.filter('toDate', function() {
    return function(item) {
        return new Date(item);
    };
});
