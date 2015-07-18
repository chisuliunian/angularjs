/*global angular*/
'use strict';

angular.module('angularjsApp')
	.controller('ArticleCtrl', ['$scope', '$state', 'IP',
		function($scope, $state, IP) {
				
				$scope.articles = [] ;
				$scope.comments = [];
				
				$scope.add = function(){		//发表话题
					if($scope.content && $scope.nickname){
						var user = {
							nickname: $scope.nickname,
							ip: IP
						}
						$scope.user = user;
						var article = {
							content: $scope.content,
							createTime: new Date().toLocaleString()
						}
						$scope.articles.push(article);
					}else{
						alert("不能为空");
					}
				}
				
				$scope.delete = function(article){
						$scope.articles.pop(article);
				}
		}
	]);
