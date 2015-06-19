angular.module('app')
    .factory('Widgets', ['$http', 'api', function ($http, api) {
        var baseUrl = api.url + ':' + api.port + '/';
        var widgetData = [];
        var currentWidget = {};
        // TODO - loading spinner
        return {
            setSelected: function(widget) {
                currentWidget = widget;
            },
            getSelected: function() {
                return currentWidget;
            },
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
            getOne: function (id) {
                // TODO - error handling
                return $http.get(baseUrl + 'widgets/' + id)
                    .success(function (data) {
                        currentWidget = data;
                        return data;
                    });
            }
        }
    }]);