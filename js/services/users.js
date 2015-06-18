angular.module('app')
    .factory('Users', ['$http', 'api', function ($http, api) {
        var baseUrl = api.url + ':' + api.port + '/';
        // TODO - loading spinner
        return {
            getAll: function () {
                return $http.get(baseUrl + 'users')
                    .success(function (data) {
                        return data;
                    });
            },
            getOne: function (id) {
                // TODO - error handling
                return $http.get(baseUrl + 'users/' + id)
                    .success(function (data) {
                        return data;
                    });
            }
        }
    }]);