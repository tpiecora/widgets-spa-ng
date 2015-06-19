angular.module('app')
    .controller('WidgetViewController', ['$scope', 'Widgets', '$state', 'selected', function ($scope, Widgets, $state, selected) {
        $scope.widget = selected;
/*
        if(!$scope.widget.id) {
            $state.go('widgets');
        }
*/
        $scope.editWidget = function(widget) {
            console.log(widget);
            Widgets.setSelected(widget);
            $state.go('editWidget', {id: widget.id});
        };
    }]);