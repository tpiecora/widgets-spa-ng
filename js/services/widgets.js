angular.module('app')
    .factory('Widgets', ['$http', 'api', function ($http, api) {
        var baseUrl = api.url + ':' + api.port + '/';
        // TODO - loading spinner
        return {
            getAll: function () {
                return $http.get(baseUrl + 'widgets')
                    .success(function (data) {
                        return data;
                    });
            },
            getOne: function (id) {
                // TODO - error handling
                return $http.get(baseUrl + 'widgets/' + id)
                    .success(function (data) {
                        return data;
                    });
            }
        }
    }]);