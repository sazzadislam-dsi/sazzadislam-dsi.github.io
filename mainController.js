(function () {
    var app = angular.module("demoApp");

    var mainController = function ($scope, $http) {
        var req = {
            method: 'GET',
            url: 'https://api.github.com/users/lynas',
            headers: {
                
            }
        };

        $scope.makeCall = function () {
            $scope.loading = true;
            $http(req).then(function(response){
                $scope.myWelcome = response.data.login;
                $scope.loading = false;
            });
            /*$http.get("https://api.github.com/users/lynas")
                .then(function(response) {
                    $scope.myWelcome = response.data.login;
                });*/

            /*$http.get('https://api.github.com/users/lynas', {
                headers: {
                    "X-Poll-Interval": 20
                }
            }).success(function(response){
                console.log("rrr : "+response)
            });*/
        }

    };

    app.controller("mainController", mainController)
}());
