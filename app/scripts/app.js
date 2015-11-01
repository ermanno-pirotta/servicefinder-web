'use strict';

/**
 * @ngdoc overview
 * @name servicefinderWebApp
 * @description
 * # servicefinderWebApp
 *
 * Main module of the application.
 */
angular
  .module('servicefinderWebApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'pascalprecht.translate',// angular-translate
    'tmh.dynamicLocale',// angular-dynamic-locale,
    'angucomplete-alt',
    'categoryService',
    'suggestionService',
    'dataService',
    'requestService'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'StaticContentCtrl',
        controllerAs: 'about'
      })
      .when('/faq', {
        templateUrl: 'views/faq.html',
        controller: 'StaticContentCtrl',
        controllerAs: 'faq'
      })
      .when('/services', {
          templateUrl: 'views/categories.html',
          controller: 'CategoryCtrl',
          controllerAs: 'categories'
        })
       .when('/request', {
          templateUrl: 'views/request.html',
          controller: 'RequestCtrl',
          controllerAs: 'request'
        })
        .when('/thankyou', {
        templateUrl: 'views/thankyou.html',
        controller: 'StaticContentCtrl',
        controllerAs: 'thankyou'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function ($translateProvider) {
    $translateProvider.useMissingTranslationHandlerLog();
  })
  .config(function ($translateProvider) {
    $translateProvider.useStaticFilesLoader({
        prefix: 'resources/locale-',// path to translations files
        suffix: '.json'// suffix, currently- extension of the translations
    });
    $translateProvider.preferredLanguage('it_IT');// is applied on first load
    $translateProvider.useLocalStorage();// saves selected language to localStorage
  })
  .config(function (tmhDynamicLocaleProvider) {
    tmhDynamicLocaleProvider.localeLocationPattern('bower_components/angular-i18n/angular-locale_{{locale}}.js');
  })
  .config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
  ])
  .constant('LOCALES', {
    'locales': {
         'it_IT':'Italiano'
    },
    'preferredLocale': 'it_IT'
});
