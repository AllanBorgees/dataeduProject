var app = angular.module('app', ['angularjs-dropdown-multiselect']);

//app.value("urlBase", "http://localhost:8080/simulationSmartFier/rest/");


app
		.controller(
				'dataeduController',
				function($scope) {
					$scope.informacoes = null;
					$scope.estacoes = null;
					$scope.dado = null;
					$scope.sensorDadosLista = null;
					$scope.coluna = null;
					
					$scope.checkinModel = []; 
					$scope.getChekingdata = [ {id:
					1, label: "David"}, {id: 2, label: "Jhon"}, {id: 3, label: "Danny"}];
					

//					$http.get(urlBase + "municipio/getmunicipios").success(
//							function(data) {
//								// console.log(data);
//								$scope.estacoes = data.estacao;
//
//							}).error(function() {
//						alert('deu certo, mas cade o resultado');
//					});


				});

