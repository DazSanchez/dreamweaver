var app = angular.module('App',['ngRoute']);

app.config(function($routeProvider,$locationProvider){
	$routeProvider
		.when('/',{
			templateUrl:'../views/home.html',
			controller:'HomeCtrl'
		})
		.when('/animal/:category/:id',{
			templateUrl:'../views/animal.html',
			controller:'AnimalCtrl'
		});

		$locationProvider.html5Mode(true);
});

app.controller('HomeCtrl',function($scope){
	$scope.categories = categories;
});

app.controller('AnimalCtrl',function($scope,$routeParams){
	categories.filter(function(el){
		if(el.title == $routeParams.category){
			 el.animals.filter(function(animal){
				if(animal.title == $routeParams.id){
					$scope.animal = animal;
				}
			});
		}
	});
});

var toggleMenu = document.getElementById('toggle-menu');
var menu = document.querySelector('.navbar');

toggleMenu.addEventListener('click', function(){
	menu.classList.toggle('open');
});

var categories = [{
		title:'terrestres',
		animals: [{
			title:'león',
			img:'leon.jpg',
			content:'El león (Panthera leo) es un mamífero carnívoro de la familia de los félidos y una de las cinco especies del género Panthera. Los leones salvajes viven en África subsahariana y Asia, con una población en peligro crítico al noroeste de la India, habiendo desaparecido del norte de África, de Oriente Próximo y del oeste de Asia en tiempos históricos. Hasta finales del Pleistoceno, hace aproximadamente 10 000 años, de los grandes mamíferos terrestres, el león era el más extendido tras los humanos.'
		},{
			title:'rinoceronte',
			img:'rinoceronte.jpg',
			content:'Los rinocerótidos (Rhinocerotidae, del griego ρινός (rinós), "nariz" y κερος (keros), "cuerno"), conocidos con el nombre de rinocerontes, son una familia de mamíferos placentarios del suborden ceratomorfos perteneciente al orden de los perisodáctilos.'
		},{
			title:'ardilla',
			img:'ardilla.jpg',
			content:'Se llama ardilla a ciertas especies de roedores esciuromorfos de la familia Sciuridae, entre las que se encuentran: La ardilla común. Las especies del género Ratufa, el único de la subfamilia Ratufinae.'
		}]
	},{
		title:'acuáticos',
		animals: [{
			title:'ballena',
			img:'ballena.jpg',
			content:'Los balénidos son una familia de cetáceos misticetos que incluye solo cuatro especies listadas más abajo, en dos géneros, Balaena y Eubalaena.'
		},{
			title:'tortuga',
			img:'tortuga.jpg',
			content:'Las tortugas o quelonios forman un orden de reptiles caracterizados por tener un tronco ancho y corto, y un caparazón o envoltura que protege los órganos internos de su cuerpo.'
		},{
			title:'pulpo',
			img:'pulpo.jpg',
			content:'Los octópodos son un orden de moluscos cefalópodos conocidos comúnmente como pulpos. Carecen de concha y poseen ocho brazos. Son animales marinos y carnívoros.'
		}]
	},{
		title:'aéreos',
		animals: [{
			title:'águila',
			img:'aguila.jpg',
			content:'Águila es el nombre dado a las mayores aves depredadoras. Las diversas especies y subespecies de águilas pueden encontrarse en casi cualquier parte del mundo excepto en la Antártida.'
		},{
			title:'colibrí',
			img:'colibri.jpg',
			content:'Los colibríes, también conocidos como picaflores, zumbadores, pájaros mosca o ermitaños, son un clado de aves apodiformes endémicas de América que cuenta con más de 300 especies.'
		},{
			title:'guacamaya',
			img:'guacamaya.jpg',
			content:'Los guacamayos o guacamayas (Ara spp.) son un género de aves de la familia de los loros (Psittacidae), del orden de los Psittaciformes, que comprende 14 especies (seis de ellas extintas) de origen americano, habitando desde las selvas de México hasta el noreste de Argentina, aproximadamente. Se alimentan de insectos y bayas y viven en los árboles.'
		}]
	},{
		title:'insectos',
		animals: [{
			title:'mantis',
			img:'mantis.jpg',
			content:'Mantis es un género cosmopolita de insectos mantodeos de la familia Mantidae que incluye la mantis religiosa, uno de los mantodeos más conocidos y frecuentes de Europa. La mantis es un insecto depredador fuerte, pero no es venenoso. La mantis religiosa puede cazar ratones, lagartijas, mariposas, pinzones cebras, ranas, serpientes de coral y demás insectos y animales que viven en pantanos y charcas. Tras el apareamiento, la hembra, de mayor tamaño, en algunas ocasiones se come al macho.'
		},{
			title:'abeja',
			img:'abeja.jpg',
			content:'Los antófilos, conocidos comúnmente como abejas, son un clado de insectos himenópteros, sin ubicación en categoría taxonómica, dentro de la superfamilia Apoidea. Se trata de un linaje monofilético con más de 20.000 especies conocidas.'
		},{
			title:'hormiga',
			img:'hormiga.jpg',
			content:'Los formícidos, conocidos comúnmente como hormigas, son una familia de insectos eusociales que, como las avispas y las abejas, pertenecen al orden de los himenópteros.'
		}]
	}];