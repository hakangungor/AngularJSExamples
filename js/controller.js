var app = angular.module ('myApp',[]);

app.controller ('myController',function($scope){

  $scope.adi = "Hakan";

});

var orderApp = angular.module ('orderApp',[])
.controller ('orderController', ['$scope', function ($scope) {

	$scope.kisiler = [

		{adi: 'hakan', soyadi: 'gungor', yas: 29},
		{adi: 'mehmet', soyadi: 'aslan', yas: 2},
		{adi: 'yana', soyadi: 'sytdykova', yas: 28}

	];

}]);