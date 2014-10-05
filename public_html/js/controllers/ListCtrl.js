kazoosh.controller('ListCtrl', ['CONF', '$scope', '$state', 'ContentService', function(CONF, $scope, $state, ContentService) {
	
	ContentService.getList($state.params.type).then(
		function(list){
			$scope.contents = list;
		},
		function(){
			$state.go('404');
		}
	);

}]);