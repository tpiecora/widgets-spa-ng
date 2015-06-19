angular.module('app')
    .factory('Users', ['$http', 'api', function ($http, api) {
        // Build our base url and define our storage objects
        var baseUrl = api.url + ':' + api.port + '/',
            userData = [],
            currentUser = {};

        return {
            // When a user is clicked on it stores it here
            setSelected: function(user) {
                currentUser = user;
            },
            // When we want to view a selected user it pulls the data from here
            getSelected: function() {
                return currentUser;
            },
            // Retrieve users array from here once our getAll returns
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
            // Our user view fetches the specific user from the API
            getOne: function (id) {
                return $http.get(baseUrl + 'users/' + id)
                    .success(function (data) {
                        currentUser = data;
                        return data;
                    });
            }
        }
    }]);