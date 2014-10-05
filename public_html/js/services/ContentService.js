angular.module('kazoosh')
	.factory('ContentService', ['CONF', '$http', '$q', function(CONF, $http, $q) {
		return{
			getList: function(type){

				var deferred = $q.defer();

				$http.get(CONF.content_folder + type + '.json')
					.success(function(list){

						var converter = new Showdown.converter();

						for(var id in list){
							//parse markdown
							list[id][CONF.markdown_to_html_attribute] = converter.makeHtml(list[id][CONF.markdown_attribute]);

							//add id attribute
							if(!list[id].id){
								list[id].id = id;
							}
						}

						deferred.resolve(list);
					})
					.error(function(list, status, headers, config) {
						deferred.reject(null);
					});

				return deferred.promise;
			},
			getDetail: function(type, id){

				var deferred = $q.defer();

				$http.get(CONF.content_folder + type + '.json')
					.success(function(list){

						var converter = new Showdown.converter();

						var detail = list[id];

						if(detail){
							
							//parse markdown
							detail[CONF.markdown_to_html_attribute] = converter.makeHtml(detail[CONF.markdown_attribute]);

							//add id attribute
							if(!detail.id){
								detail.id = id;
							}
						}
						
						deferred.resolve(detail);
					})
					.error(function(list, status, headers, config) {
						deferred.reject(null);
					});

				return deferred.promise;
			}
		};
	}]);