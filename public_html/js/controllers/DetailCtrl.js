kazoosh.controller('DetailCtrl', ['CONF', '$scope', '$state', 'ContentService', function(CONF, $scope, $state, ContentService) {

	ContentService.getDetail($state.params.type, $state.params.id).then(
		function(detail){
			$scope.content = detail;
		},
		function(){
			$state.go('404');
		}
	);

}]);