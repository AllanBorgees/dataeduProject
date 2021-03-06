var app = angular.module('app', [ 'angularjs-dropdown-multiselect' ]);

app.value("urlBase", "http://localhost:8080/dataEduProject/rest/");

app
		.controller(
				'dataeduController',
				function($scope, $http, urlBase) {

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

					//					
					//					
					//					
					//					
					//					
					//					
					// E S TA DOS
					//					
					//					
					//					
					//					
					$scope.estadosSelecionado = [];

					$scope.estados = [ {
						id : 1,
						label : "Acre-AC"
					}, {
						id : 2,
						label : "Alagoas-AL"
					}, {
						id : 3,
						label : "Amapá-AP"
					}, {
						id : 4,
						label : "Amazonas-AM"
					}, {
						id : 5,
						label : "Bahia-BA"
					}, {
						id : 6,
						label : "Ceará-CE"
					}, {
						id : 7,
						label : "Distrito Federal-DF"
					}, {
						id : 8,
						label : "Espírito Santo-ES"
					}, {
						id : 9,
						label : "Goiás-GO"
					}, {
						id : 10,
						label : "Maranhão-MA"
					}, {
						id : 11,
						label : "Mato Grosso-MT"
					}, {
						id : 12,
						label : "Mato Grosso do Sul-MS"
					}, {
						id : 13,
						label : "Minas Gerais-MG"
					}, {
						id : 14,
						label : "Pará-PA"
					}, {
						id : 15,
						label : "Paraíba-PB"
					}, {
						id : 16,
						label : "Paraná-PR"
					}, {
						id : 17,
						label : "Pernambuco-PE"
					}, {
						id : 18,
						label : "Piauí-PI"
					}, {
						id : 19,
						label : "Rio de Janeiro-RJ"
					}, {
						id : 20,
						label : "Rio Grande do Norte-RN"
					}, {
						id : 21,
						label : "Rio Grande do Sul-RS"
					}, {
						id : 22,
						label : "Rondônia-RO"
					}, {
						id : 23,
						label : "Roraima-RR"
					}, {
						id : 24,
						label : "Santa Catarina-SC"
					}, {
						id : 25,
						label : "São Paulo-SP"
					}, {
						id : 26,
						label : "Sergipe-SE"
					}, {
						id : 27,
						label : "Tocantins-TO"
					} ];

					$scope.estadoSettings = {
						scrollable : true,
						scrollableHeight : '200px'
					};

					$scope.selecaoEstado = [];
					$scope.estadosId = [];
					$scope.submittedEstados = [];

					//	
					//	
					//	
					//	
					//	
					// M U N I C I P I O S
					//	
					//	
					//	
					//	
					//	
					//	

					$scope.municipiosSelecionado = [];
					$http.get(urlBase + "dataedu/municipios").success(
							function(data) {
								console.log(data);
								$scope.municipios = data.municipio;

							}).error(function() {
						alert('deu certo, mas cade o resultado');
					});

					$scope.municipioSettings = {
						scrollable : true,
						scrollableHeight : '200px'
					};

					$scope.selecaoMunicipio = [];
					$scope.municipiosId = [];
					$scope.submittedMunicipios = [];
					//
					//	
					//	
					//
					//	
					// PORTADOR DE DEFICIENCIA
					//	
					//	
					//	
					//	
					//	
					//	
					//	

					$scope.deficientesSelecionado = [];
					$scope.deficientes = [ {
						id : 1,
						label : "Sim"
					}, {
						id : 2,
						label : "Nao"
					} ];
					$scope.deficienteSettings = {
						scrollable : true,
						scrollableHeight : '200px'
					};

					$scope.selecaoDeficiente = [];
					$scope.deficientesId = [];
					$scope.submittedDeficientes = [];
					//	
					//	
					//	
					//	
					//	
					// TIPO DE INGRESSO
					//	
					//	
					//	
					//	
					//	

					$scope.tipoDeIngressosSelecionado = [];
					$scope.tipoDeIngressos = [ {
						id : 1,
						label : "Vestibular"
					}, {
						id : 2,
						label : "Enem"
					}, {
						id : 3,
						label : "Avaliação Seriada"
					}, {
						id : 4,
						label : "Seleção Simplificada"
					}, {
						id : 5,
						label : "Seleção Vaga Remanescente"
					} ];
					$scope.tipoDeIngressosSettings = {
						scrollable : true,
						scrollableHeight : '200px'
					};

					$scope.selecaoIngresso = [];
					$scope.tipoDeIngressosId = [];
					$scope.submittedtipoDeIngressos = [];

					//	
					//	
					//	
					//	
					//	
					// APOIO
					//	
					//	
					//	
					//	
					//	
					$scope.apoiosSelecionado = [];
					$scope.apoios = [ {
						id : 1,
						label : "Sim"
					}, {
						id : 2,
						label : "Nao"
					} ];
					$scope.apoiosSettings = {
						scrollable : true,
						scrollableHeight : '200px'
					};

					$scope.selecaoApoio = [];
					$scope.apoiosId = [];
					$scope.submittedapoios = [];

					//	
					//	
					//	
					//	
					//	
					// BOLSA
					//	
					//	
					//	
					//	
					//	
					//	

					$scope.bolsasSelecionado = [];
					$scope.bolsas = [ {
						id : 1,
						label : "Sim"
					}, {
						id : 2,
						label : "Nao"
					} ];
					$scope.bolsasSettings = {
						scrollable : true,
						scrollableHeight : '200px'
					};

					$scope.selecaoBolsa = [];
					$scope.bolsasId = [];
					$scope.submittedbolsas = [];

					$scope.submitDataTotal = function() {
						// /regiao
						$scope.regioesId = [];
						angular.forEach($scope.regioesSelecionada, function(
								value, index) {
							$scope.regioesId.push(value.id);

						});
						for (var i = 0; i < $scope.regioes.length; i++) {

							for (var a = 0; a < $scope.regioesId.length; a++) {
								if ($scope.regioes[i].id == $scope.regioesId[a]) {
									$scope.selecaoRegiao
											.push($scope.regioes[i].label);
								}
							}
						}
						$scope.regioesId=[];
						console.log($scope.selecaoRegiao);

						// /estados
						angular.forEach($scope.estadosSelecionado, function(
								value, index) {
							$scope.estadosId.push(value.id);
						});
						for (var i = 0; i < $scope.estados.length; i++) {
							for (var a = 0; a < $scope.estadosId.length; a++) {

								if ($scope.estados[i].id == $scope.estadosId[a]) {
									$scope.selecaoEstado
											.push($scope.estados[i].label);
								}
							}
						}
						$scope.estadosId=[];
						console.log($scope.selecaoEstado);

						// /municipios

						angular.forEach($scope.municipiosSelecionado, function(
								value, index) {
							$scope.municipiosId.push(value.id);
						});
						for (var i = 0; i < $scope.municipios.length; i++) {
							for (var a = 0; a < $scope.municipiosId.length; a++) {
								if ($scope.municipios[i].id == $scope.municipiosId[a]) {
									$scope.selecaoMunicipio
											.push($scope.municipios[i].label);
								}
							}
						}
						$scope.municipiosId=[];
						console.log($scope.selecaoMunicipio);
						// /deficientes

						angular.forEach($scope.deficientesSelecionado,
								function(value, index) {
									$scope.deficientesId.push(value.id);
								});

						for (var i = 0; i < $scope.deficientes.length; i++) {
							for (var a = 0; a < $scope.deficientesId.length; a++) {

								if ($scope.deficientes[i].id == $scope.deficientesId[a]) {
									$scope.selecaoDeficiente
											.push($scope.deficientes[i].label);
								}
							}
						}
						$scope.deficientesId=[];
						console.log($scope.selecaoDeficiente);
						// /ingressos

						angular.forEach($scope.tipoDeIngressosSelecionado,
								function(value, index) {
									$scope.tipoDeIngressosId.push(value.id);
								});
						for (var i = 0; i < $scope.tipoDeIngressos.length; i++) {
							for (var a = 0; a < $scope.tipoDeIngressosId.length; a++) {
								if ($scope.tipoDeIngressos[i].id == $scope.tipoDeIngressosId[a]) {
									$scope.selecaoIngresso
											.push($scope.tipoDeIngressos[i].label);
								}
							}
						}
						$scope.tipoDeIngressosId=[];
						console.log($scope.selecaoIngresso);

						// /apoio

						angular.forEach($scope.apoiosSelecionado, function(
								value, index) {
							$scope.apoiosId.push(value.id);
						});
						for (var i = 0; i < $scope.apoios.length; i++) {
							for (var a = 0; a < $scope.apoios.length; a++) {

								if ($scope.apoios[i].id == $scope.apoiosId[a]) {
									$scope.selecaoApoio
											.push($scope.apoios[i].label);
								}
							}
						}
						$scope.apoiosId=[];
						console.log($scope.selecaoApoio);
						// /bolsa
						angular.forEach($scope.bolsasSelecionado, function(
								value, index) {
							$scope.bolsasId.push(value.id);
						});
						for (var i = 0; i < $scope.bolsas.length; i++) {
							for (var a = 0; a < $scope.bolsas.length; a++) {
								if ($scope.bolsas[i].id == $scope.bolsasId[a]) {
									$scope.selecaoBolsa
											.push($scope.bolsas[i].label);
								}
							}
						}

						console.log($scope.selecaoBolsa);
					
						$scope.selecaoBolsa=[];
						$scope.selecaoApoio=[];
						$scope.selecaoIngresso=[];
						$scope.selecaoDeficiente=[];
						$scope.selecaoMunicipio=[];
						$scope.selecaoEstado=[];
						$scope.selecaoRegiao=[];
					};

				});
