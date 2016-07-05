var app = angular.module("Pedia",["ngRoute"]);

app.config(["$routeProvider","$locationProvider",function($routeProvider,$locationProvider){
	$routeProvider
		.when("/",{
			controller: "HomeCtrl",
			templateUrl: "views/home.html"
		})
		.when("/animal/:animal",{
			controller:"AnimalCtrl",
			templateUrl:"views/animal.html"
		})
		.otherwise('/');
		$locationProvider.html5Mode(true);
}]);

app.controller("HomeCtrl",["$scope",function($scope){
	$scope.animals = animals;
}]).controller("AnimalCtrl",["$scope","$routeParams",function($scope,$routeParams){
	$scope.animals = animals;
	$scope.animal = $scope.animals[$routeParams.animal]
}]);

var animals = {
		tortuga:{
			name:{
				science:"Testudines",
				common:"tortuga"
			},
			description:"Las tortugas o quelonios (Testudines) forman un orden de reptiles (Sauropsida) caracterizados por tener un tronco ancho y corto, y un caparazón o envoltura que protege los órganos internos de su cuerpo. De su caparazón salen, por delante, la cabeza y las patas delanteras, y por detrás las patas traseras y la cola.Las tortugas o quelonios (Testudines) forman un orden de reptiles (Sauropsida) caracterizados por tener un tronco ancho y corto, y un caparazón o envoltura que protege los órganos internos de su cuerpo. De su caparazón salen, por delante, la cabeza y las patas delanteras, y por detrás las patas traseras y la cola.",
			img_url:"tortuga.jpg"
		},
		zorro:{
			name:{
				science:"Vulpini",
				common:"zorro"
			},
			description:"Los vulpinos (Vulpini) son una tribu de mamíferos carnívoros incluidos en la familia de los cánidos. Se conocen comúnmente como zorros, zorras, raposos o raposas. Actualmente están representados por unas 27 especies que se encuentran en casi todos los continentes, aunque la más extendida es el zorro rojo o zorro común (Vulpes vulpes), que habita en Europa y América del Norte. Otras especies importantes son el zorro polar, también conocido como zorro ártico, el zorro gris y el zorro isleño.",
			img_url:"zorro.jpg"
		},
		ciervo:{
			name: {
				science:"Cervidae",
				common:"ciervo"
			},
			description:"Los cérvidos (Cervidae) son una familia de mamíferos rumiantes que incluye los ciervos o venados. Su tamaño es variable, siendo el alce el mayor (hasta 450 kg), y el venadito o pudú sudamericano, el menor, con unos 8 o 10 kg.",
			img_url:"ciervo.jpg"
		}
	};