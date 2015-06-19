angular.module('app')
    .controller('WidgetViewController', ['$scope', 'Widgets', '$state', 'selected', function ($scope, Widgets, $state, selected) {
        $scope.widget = selected;

        // Go edit a widget
        $scope.editWidget = function(widget) {
            Widgets.setSelected(widget);
            $state.go('editWidget', {id: widget.id});
        };
    }]);