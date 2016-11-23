var app = angular.module('myApp', [ 'angularjs-dropdown-multiselect' ]);

app.controller("appController", function($scope) {

	$scope.regioesSelecionada = [];

	$scope.regioes = [ {
		id : 8,
		label : "Nordeste"
	}, {
		id : 2,
		label : "Norte"
	}, {
		id : 3,
		label : "Centro-Oeste"
	}, {
		id : 4,
		label : "Sudeste"
	}, {
		id : 5,
		label : "Sul"
	} ];

	$scope.regiaoSettings = {
		scrollable : true,
		scrollableHeight : '200px'
	};

	$scope.selecaoRegiao = []
	$scope.regioesId = []
	$scope.submittedRegioes = [];
	$scope.submitData = function() {
		$scope.regioesId = [];
		angular.forEach($scope.regioesSelecionada, function(value, index) {
			$scope.regioesId.push(value.id);
//			console.log("-------------------------")
//			console.log(value.id);
//			console.log("----------------");
//			console.log("jjhghg");
		});
//		console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxx")
//		console.log($scope.regioesId);
//		console.log("!!!!!!!!!!!!!!!!!!!!!!!");

		for (var i = 0; i < $scope.regioes.length; i++) {

			for (var a = 0; a< $scope.regioesId.length; a++) {
//				console.log("###########");
//				console.log($scope.regioesId[i]);
//				
				if ($scope.regioes[i].id == $scope.regioesId[a]) {
//					console.log("@@@@@@@@@@@@@@@@@@@@");	
//					console.log($scope.regioes[i].label);
					$scope.selecaoRegiao.push($scope.regioes[i].label);
				}
			}
		}
		
		console.log($scope.selecaoRegiao);
		
		
		//		
		// for (i in $scope.regioes) {
		// console.log("************");
		// console.log(i.id);
		// for(a in $scope.regioesId){
		// if(i.id==a){
		// console.log(i.label);
		// }
		// }
		//		
		// var txt = "FABRICANTE " + item.fabricante + " / MODELO "
		// + obj.carros[0].modelo + " / ANO " + obj.carros[0].ano
		// + " / COMBUSTIVEL " + obj.carros[0].combustivel;
		//
		// console.log(txt);
		// }
		var data = {
		// label : $scope.selecao.label
		};

		// $scope.submittedRegioes = data;
//		console.log("-------------------");
//		console.log(data);
		// console.log($scope.submittedRegioes);
	};

});