angular.module('app')
    .factory('Users', ['$http', 'api', function ($http, api) {
        var baseUrl = api.url + ':' + api.port + '/';
        var userData = [];
        var currentUser = {};
        // TODO - loading spinner
        return {
            setSelected: function(user) {
                currentUser = user;
            },
            getSelected: function() {
                return currentUser;
            },
            data: function() {
                return userData;
            },
            getAll: function () {
                return $http.get(baseUrl + 'users')
                    .success(function (data) {
                        userData = data;
                        return data;
                    });
            },
            getOne: function (id) {
                // TODO - error handling
                return $http.get(baseUrl + 'users/' + id)
                    .success(function (data) {
                        currentUser = data;
                        return data;
                    });
            }
        }
    }]);