var app = angular.module('app', ['angularjs-dropdown-multiselect']);

app.value("urlBase", "http://localhost:8080/dataEduProject/rest/");


app
		.controller(
				'dataeduController',
				function($scope, $http, urlBase) {
					$scope.camposSelecionados = [];
					
					$scope.checkinModel = []; 
					$scope.getChekingdata = [ {id:
					1, label: "Nordeste"}, {id: 2, label: "Norte"}, {id: 3, label: "Centro-Oeste"}, {id: 4, label: "Sudeste"},{id: 5, label: "Sul"}];
					
					$scope.checkinModelEstados = []; 
					$scope.getChekingdataEstados = [ {id:
					1, label: "Acre-AC"}, {id: 2, label: "Alagoas-AL"}, {id: 3, label: "Amapá-AP"}, {id: 4, label: "Amazonas-AM"},{id: 5, label: "Bahia-BA"},{id: 6, label: "Ceará-CE"}, {id: 7, label: "Distrito Federal-DF"}, {id: 8, label: "Espírito Santo-ES"}, {id: 9, label: "Goiás-GO"}, {id: 10, label: "Maranhão-MA"},{id: 11, label: "Mato Grosso-MT"}, {id: 12, label: "Mato Grosso do Sul-MS"}, {id: 13, label: "Minas Gerais-MG"}, {id: 14, label: "Pará-PA"}, {id: 15, label: "Paraíba-PB"}, {id: 16, label: "Paraná-PR"} , {id: 17, label: "Pernambuco-PE"},{id: 18, label: "Piauí-PI"},{id: 19, label: "Rio de Janeiro-RJ"},{id: 20, label: "Rio Grande do Norte-RN"}, {id: 21, label: "Rio Grande do Sul-RS"}, {id: 22, label: "Rondônia-RO"}, {id: 23, label: "Roraima-RR"}, {id: 24, label: "Santa Catarina-SC"},{id: 25, label: "São Paulo-SP"}, {id: 26, label: "Sergipe-SE"},{id: 27, label: "Tocantins-TO"}];
					
					
					$scope.checkinModelMunicipio = []; 
					$http.get(urlBase + "dataedu/municipios").success(
					function(data) {
						console.log(data);
						$scope.getChekingdataMunicipio = data.municipio;

					}).error(function() {
				alert('deu certo, mas cade o resultado');
			});
					
					$scope.checkinModelPortadorDeficiencia = []; 
					$scope.getChekingdataPortadorDefiencia = [ {id:
					1, label: "Auditiva"}, {id: 2, label: "Fisica"}, {id: 3, label: "Intelectual"}, {id: 4, label: "Multipla"}, {id: 5, label: "Surdez"}, {id: 6, label: "Surdocegueira"}, {id: 7, label: "Baixa Visão"}, {id: 8, label: "Cegueira"}, {id: 9, label: "Superdotação"}, {id: 10, label: "Autismos Infantil"}, {id: 11, label: "Sindrome Asperger"}, {id: 12, label: "Sindrome Rett"}, {id: 13, label: "Transtorno Desintegrativo"} ];
					
					$scope.checkinModelTipodeIngresso = []; 
					$scope.getChekingdataTipodeIngresso = [ {id:
					1, label: "Vestibular"}, {id: 2, label: "Enem"}, {id: 3, label: "Avaliação Seriada"}, {id: 4, label: "Seleção Simplificada"}, {id: 5, label: "Seleção Vaga Remanescente"}];

					$scope.checkinModelApoio = []; 
					$scope.getChekingdataApoio = [ {id:
					1, label: "Social"}, {id: 2, label: "Alimentação"}, {id: 3, label: "Bolsa Permanencia"},{id: 4, label: "Bolsa Trabalho"}, {id: 5, label: "Material Didatico"}, {id: 6, label: "Moradia"}, {id: 7, label: "Transporte"}];
					
					$scope.checkinModelBolsa = []; 
					$scope.getChekingdataBolsa = [ {id:
					1, label: "Estagio"}, {id: 2, label: "Extensão"}, {id: 3, label: "Monitoria"}, {id: 4, label: "Pesquisas"}];
					

						
					console.log("ashjakshajksha");
//					console($scope.chekinModel);
					
//					$scope.getChekingdata = [ {id:
//					1, label: "David"}, {id: 2, label: "Jhon"}, {id: 3, label: "Danny"}];
//					



				});

