/**
 * Created by amed.ibanez on 5/20/2015.
 *
 * Configuration file for production environment
 */
angular.module('sbAdminApp')

    /* Configuraciones para los parametros necesarios de comunicación a la API */
    .constant('API_CONFIG', {
        baseUrl: 'http://localhost:99/api/v1',
        version: 'v1'
    })
    /* Configuraciones para datos de Session */
    .constant('EXP_SESSION_TIME', {
        time: 3000
    });