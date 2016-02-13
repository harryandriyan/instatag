var InstaTagAppCtrl = angular.module('InstaTagAppCtrl', []);

// Instagram Fotos

InstaTagAppCtrl.controller('HomeCtrl', function ($scope) {
	$scope.loadFotos = function () {
		var photos = new Instafeed({
		    get: 'tagged',
		    tagName: $scope.tag,
		    clientId: 'e83d98f73669406f9f15ec885ea1e2bf'
		});
		$scope.clearPhotos();
		photos.run();
	}
	$scope.clearPhotos = function () {
		var element = angular.element( document.querySelector( '#instafeed' ) );
		element.empty();
	}
});