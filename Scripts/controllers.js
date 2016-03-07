// CONTROLLERS

//Home Controller
weatherApp.controller('homeController', ['$scope', 'cityService', '$location', function ($scope, cityService, $location) {

    $scope.city = cityService.city;

    $scope.$watch('city', function () {
        cityService.city = $scope.city;
    });

    $scope.submit = function () {
        $location.path("/forecast");
    }
}]);


//Forecast Controller
weatherApp.controller('forecastController', ['$scope', '$routeParams', 'cityService', 'weatherService', function ($scope, $routeParams, cityService, weatherService) {

    $scope.city = cityService.city;
    $scope.days = $routeParams.days || '2';

    $scope.weartherResult = weatherService.GetWeather($scope.city, $scope.days, "44db6a862fba0b067b1930da0d769e98");

    $scope.convertToCelcius = function (degk) {

        return Math.round(degk - 273.15);
    }

    $scope.convertDate = function (date) {
        return new Date(date * 1000);
    }
    console.log($scope.weartherResult);
}]);


//News Controller
weatherApp.controller('newsController', ['$scope', 'newsService', function ($scope, newsService) {

    $scope.newsResult = newsService.GetNews("6ed05e0a019feabfe5765751af9b2949:2:73791686");
    console.log("hello");
    console.log($scope.newsResult);
}]);
