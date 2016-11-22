var app = angular.module('app', ['angularjs-dropdown-multiselect']);

app.value("urlBase", "http://localhost:8080/dataEduProject/rest/");


app
		.controller(
				'dataeduController',
				function($scope, $http, urlBase) {
					$scope.informacoes = null;
					$scope.estacoes = null;
					$scope.dado = null;
					$scope.sensorDadosLista = null;
					$scope.coluna = null;
					
					$scope.checkinModel = []; 

					$http.get(urlBase + "dataedu/municipios").success(
					function(data) {
						console.log(data);
						$scope.getChekingdata = data.municipio;

					}).error(function() {
				alert('deu certo, mas cade o resultado');
			});

					
					
//					$scope.getChekingdata = [ {id:
//					1, label: "David"}, {id: 2, label: "Jhon"}, {id: 3, label: "Danny"}];
//					



				});

