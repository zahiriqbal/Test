var app = angular.module('main', ['ngTable', 'ngSanitize']);

app.controller('AppCtrl', function ($scope) {

	$scope.selected = {
		item : null
	}

});

app.controller('DemoCtrl', function ($scope, $filter, $timeout, ngTableParams) {
	var data = emp;
	$scope.showacceptation = [];

	$scope.accept = function (item) {
		$scope.$parent.selected.item = item;
	};

	$scope.tableParams = new ngTableParams({
			page : 1, // show first page
			count : 10, // count per page
			filter : {
				First_name : '' // initial filter
			},
			sorting : {
				First_name : 'asc' // initial sorting
			}

		}, {
			total : data.length, // length of data
			getData : function ($defer, params) {
				// use build-in angular filter
				var filteredData = params.filter() ?
					$filter('filter')(data, params.filter()) :
					data;
				var orderedData = params.sorting() ?
					$filter('orderBy')(filteredData, params.orderBy()) :
					data;

				params.total(orderedData.length); // set total for recalc pagination
				$defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
			}
		});
});

app.controller('ItemCtrl', function ($scope) {

	$scope.goBack = function () {
		$scope.$parent.selected.item = null;
	};

});
