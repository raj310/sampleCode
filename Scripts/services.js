//SERVICES

//City Service
weatherApp.service('cityService', function () {
    this.city = "San Francisco";
});

//Weather Service
weatherApp.service('weatherService', ['$resource', function ($resource) {

    this.GetWeather = function (city, days, appId) {
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", {
            callback: "JSON_CALLBACK"
        }, {
            get: {
                method: "JSONP"
            }
        });

        return weatherAPI.get({
            q: city,
            cnt: days,
            appid: appId
        });
    };
}]);

//News Service
weatherApp.service('newsService', ['$resource', function ($resource) {

    this.GetNews = function (apiKey) {
        var newsAPI = $resource("http://api.nytimes.com/svc/search/v2/articlesearch.json");
        return newsAPI.get({
            "api-key": apiKey
        });
    }
}]);
