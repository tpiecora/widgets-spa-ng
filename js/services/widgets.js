angular.module('app')
    .factory('Widgets', ['$http', 'api', function ($http, api) {
        // Build our base url and define our storage objects
        var baseUrl = api.url + ':' + api.port + '/';
        var widgetData = [];
        var currentWidget = {};

        return {
            // When a widget is clicked on it stores it here
            setSelected: function(widget) {
                currentWidget = widget;
            },
            // When we want to view a selected widget it pulls the data from here
            getSelected: function() {
                return currentWidget;
            },
            // Retrieve widgets array from here once our getAll returns
            data: function() {
                return widgetData;
            },
            getAll: function () {
                return $http.get(baseUrl + 'widgets')
                    .success(function (data) {
                        widgetData = data;
                        return data;
                    });
            },
            // Our widget view fetches the specific widget from the API
            getOne: function (id) {
                return $http.get(baseUrl + 'widgets/' + id)
                    .success(function (data) {
                        currentWidget = data;
                        return data;
                    });
            },
            newWidget: function(widget) {
                return $http.post(baseUrl + 'widgets', widget)
                    .success(function(data, status) {
                        return status;
                    })
                    .error(function(data, status) {
                        return status;
                    })
            },
            updateWidget: function(widget) {
                return $http.put(baseUrl + 'widgets/' + widget.id, widget)
                    .success(function(data, status) {
                        return status;
                    })
                    .error(function(data, status) {
                        return status;
                    })
            }
        }
    }]);