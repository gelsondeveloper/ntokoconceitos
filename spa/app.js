var app = angular.module("App", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "templates/home.html"
    })
    .when("/sobre-nos", {
        templateUrl: "templates/sobre-nos.html"
    })
    .when("/produtos", {
        templateUrl: "templates/produtos.html"
    })
    .when("/contacto", {
        templateUrl: "templates/contacto.html"
    })

    .otherwise({redirectTo : '/'});
});

$scope.getClass = function (path) {
    return ($location.path().substr(0, path.length) === path) ? 'active' : '';
  }