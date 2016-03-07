//ROUTE CONFIGURATION
weatherApp.config(function ($routeProvider) {
    $routeProvider

        .when('/home', {
            templateUrl: "pages/home.html",
            controller: "homeController"
        })
        .when('/forecast', {
            templateUrl: "pages/forecast.html",
            controller: "forecastController"
        })
        .when('/forecast/:days', {
            templateUrl: "pages/forecast.html",
            controller: "forecastController"
        })
        .when('/news', {
            templateUrl: "pages/news.html",
            controller: "newsController"
        })
        .otherwise({
            redirectTo: '/home',

        })
});
