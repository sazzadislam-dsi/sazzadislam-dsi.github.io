(function () {
    var app = angular.module("demoApp", ["ngRoute"]);
    app.config(function ($routeProvider) {
        $routeProvider
            .when("/main",{
                templateUrl: "page1.html",
                controller: "mainController"
            })
            .otherwise({
                redirectTo: "/main"
            })
    });
}());
