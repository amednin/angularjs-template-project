'use strict';
/**
 * @ngdoc overview
 * @name sbAdminApp
 * @description
 * # sbAdminApp
 *
 * Main module of the application.
 */
var mainApp = angular
    .module('sbAdminApp', [
        'oc.lazyLoad',
        'ui.router',
        'ui.bootstrap',
        'angular-loading-bar',
        'ngResource'
    ])

    /**
     * Configuración de la aplicación. Se define todos los estados
     * posibles para acceder a las vistas a partir de las urls.
     */
    .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $httpProvider) {

        delete $httpProvider.defaults.headers.common['X-Requested-With'];

        $ocLazyLoadProvider.config({
            debug: false,
            events: true
        });

        /**
         * Ruta por defecto.
         */
        $urlRouterProvider.otherwise('/dashboard/home');

        /**
         * Inicializar y definir los estados.
         */
        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'views/dashboard/main.html',
                resolve: {
                    loadMyDirectives: function ($ocLazyLoad) {
                        return $ocLazyLoad.load(
                            {
                                name: 'sbAdminApp',
                                files: [
                                    'scripts/directives/header/header.js',
                                    'scripts/directives/header/header-notification/header-notification.js',
                                    'scripts/directives/sidebar/sidebar.js',
                                    'scripts/directives/sidebar/sidebar-search/sidebar-search.js'
                                ]
                            })
                        /**
                         * Ejemplo de todas las bondades que nos brinda el template.
                         * Ejemplo de como cargar las librerías, directivas, etc.
                         */
                        $ocLazyLoad.load(
                            {
                                name: 'toggle-switch',
                                files: ["bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
                                    "bower_components/angular-toggle-switch/angular-toggle-switch.css"
                                ]
                            })
                        $ocLazyLoad.load(
                            {
                                name: 'ngAnimate',
                                files: ['bower_components/angular-animate/angular-animate.js']
                            })
                        $ocLazyLoad.load(
                            {
                                name: 'ngCookies',
                                files: ['bower_components/angular-cookies/angular-cookies.js']
                            })
                        $ocLazyLoad.load(
                            {
                                name: 'ngResource',
                                files: ['bower_components/angular-resource/angular-resource.js']
                            })
                        $ocLazyLoad.load(
                            {
                                name: 'ngSanitize',
                                files: ['bower_components/angular-sanitize/angular-sanitize.js']
                            })
                        $ocLazyLoad.load(
                            {
                                name: 'ngTouch',
                                files: ['bower_components/angular-touch/angular-touch.js']
                            })
                    }
                }
            })
            .state('dashboard.home', {
                url: '/home',
                controller: 'MainCtrl',
                templateUrl: 'views/dashboard/home.html',
                resolve: {
                    loadMyFiles: function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'sbAdminApp',
                            files: [
                                'scripts/controllers/main.js',
                                'scripts/directives/timeline/timeline.js',
                                'scripts/directives/notifications/notifications.js',
                                'scripts/directives/chat/chat.js',
                                'scripts/directives/dashboard/stats/stats.js'
                            ]
                        })
                    }
                }
            })
            .state('dashboard.form', {
                templateUrl: 'views/form.html',
                url: '/form'
            })
            .state('dashboard.blank', {
                templateUrl: 'views/pages/blank.html',
                url: '/blank'
            })

            /* LOGIN */
            .state('login', {
                templateUrl: 'views/pages/login.html',
                url: '/login',
                controller: 'LoginController',
                resolve: {
                    loadMyFile: function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'sbAdminApp',
                            files: [
                                'scripts/services/login/authentication.js',
                                'scripts/controllers/loginController.js']
                        })
                    }
                }
            })

            /* CHART */
            .state('dashboard.chart', {
                templateUrl: 'views/chart.html',
                url: '/chart',
                controller: 'ChartCtrl',
                resolve: {
                    loadMyFile: function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'chart.js',
                            files: [
                                'bower_components/angular-chart.js/dist/angular-chart.min.js',
                                'bower_components/angular-chart.js/dist/angular-chart.css'
                            ]
                        }).
                            $ocLazyLoad.load({
                                name: 'sbAdminApp',
                                files: ['scripts/controllers/chartContoller.js']
                            })
                    }
                }
            })
            .state('dashboard.table', {
                templateUrl: 'views/table.html',
                url: '/table'
            })
            .state('dashboard.panels-wells', {
                templateUrl: 'views/ui-elements/panels-wells.html',
                url: '/panels-wells'
            })
            .state('dashboard.buttons', {
                templateUrl: 'views/ui-elements/buttons.html',
                url: '/buttons'
            })
            .state('dashboard.notifications', {
                templateUrl: 'views/ui-elements/notifications.html',
                url: '/notifications'
            })
            .state('dashboard.typography', {
                templateUrl: 'views/ui-elements/typography.html',
                url: '/typography'
            })
            .state('dashboard.icons', {
                templateUrl: 'views/ui-elements/icons.html',
                url: '/icons'
            })
            .state('dashboard.grid', {
                templateUrl: 'views/ui-elements/grid.html',
                url: '/grid'
            })

            .state('dashboard.resttable', {
                templateUrl: 'views/rest-example/index.html',
                url: '/resttable',
                controller: 'ProductsController',
                resolve: {
                    loadMyFile: function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'sbAdminApp',
                            files: ['scripts/services/products.js',
                                'scripts/controllers/products.controller.js']
                        })
                    }
                }
            })

            .state('dashboard.products', {
                templateUrl: 'views/rest-example/products.html',
                url: '/products',
                controller: 'ProductsRestController',
                resolve: {
                    loadMyFile: function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'sbAdminApp',
                            files: ['scripts/services/products.js',
                                'scripts/controllers/productsRestController.js']
                        })
                    }
                }
            })

            .state('dashboard.menuopciones', {
                templateUrl: 'views/rest-example/menu-opciones.html',
                url: '/menu-opciones',
                controller: 'ProductsRestController',
                resolve: {
                    loadMyFile: function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'sbAdminApp',
                            files: ['scripts/services/products.js',
                                'scripts/controllers/MenuOpcionesController.js']
                        })
                    }
                }
            })
    }]);

    
