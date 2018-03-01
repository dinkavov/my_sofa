var con = angular.module('myApp',[]);
	con.controller('LineCtrl', function($scope){
		
		$scope.lineshop = {};

		$scope.myData = new Firebase("https://scorching-heat-7145.firebaseio.com//Lineshop");

		$scope.myData.on('value', function(snapshot){
			$scope.lineshop = snapshot.val();
			$scope.$apply();
		});
	});

	con.controller('CornerCtrl', function($scope){
		
		$scope.cornershop = {};

		$scope.myData = new Firebase("https://scorching-heat-7145.firebaseio.com//Cornershop");

		$scope.myData.on('value', function(snapshot){
			$scope.cornershop = snapshot.val();
			$scope.$apply();
		});
	});

	con.controller('SofaCtrl', function($scope){
		
		$scope.sofashop = {};

		$scope.myData = new Firebase("https://scorching-heat-7145.firebaseio.com//Sofashop");

		$scope.myData.on('value', function(snapshot){
			$scope.sofashop = snapshot.val();
			$scope.$apply();
		});
	});

