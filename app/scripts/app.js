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
    'ngSanitize',
    'ngTouch',
    'pascalprecht.translate',// angular-translate
    'tmh.dynamicLocale',// angular-dynamic-locale,
    'angucomplete-alt',
    'categoryService',
    'businessService',
    'suggestionService',
    'dataService',
    'requestService',
    'paymentService',
    'ui.router',
    'ngMessages'
])

.run(
  [          '$rootScope', '$state', '$stateParams',
    function ($rootScope,   $state,   $stateParams) {

    // It's very handy to add references to $state and $stateParams to the $rootScope
    // so that you can access them from any scope within your applications.For example,
    // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
    // to active whenever 'contacts.list' or one of its decendents is active.
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    }
  ]
)

.config(
    function ($stateProvider,   $urlRouterProvider) {
	  //
	  // For any unmatched url, redirect to /state1
	  $urlRouterProvider.otherwise("/user/home");
	  
	  $stateProvider
	  	.state('user', {
	      url: "/user",
	      templateUrl: "views/user/layout.html"
	    })
	    .state('user.home', {
	      url: "/home",
	      templateUrl: "views/user/home.html",
	      controller: 'MainCtrl'
	    })
	    .state('user.about', {
	      url: "/about",
	      templateUrl: 'views/user/about.html'
	    })
	    .state('user.faq', {
	    	url:"/faq",
	        templateUrl: 'views/user/faq.html'
	    })
	    .state('user.services', {
    	  url:"/services",
          templateUrl: 'views/user/categories.html',
          controller: 'CategoryCtrl'
        })
       .state('user.request', {
    	   url:"/request",
    	   templateUrl: 'views/user/request.html',
    	   controller: 'RequestCtrl'
        })
        .state('user.thankyou', {
        	url:"/thankyou",
	        templateUrl: 'views/user/thankyou.html'
        })
        
        .state('business', {
        	url:"/business",
	        templateUrl: 'views/business/layout.html',
        })
        .state('business.home', {
        	url:"/home",
	        templateUrl: 'views/business/home.html'
        })
        
        .state('business.register', {
        	url:"/register",
	        templateUrl: 'views/business/register.html'
        })
        
        .state('business.registrationsuccess', {
        	url:"/registrationsuccess",
	        templateUrl: 'views/business/registrationsuccess.html'
        })
        
        .state('backoffice', {
        	url:"/backoffice",
	        templateUrl: 'views/backoffice/layout.html'
        })
        .state('backoffice.home', {
        	url:"/home",
	        templateUrl: 'views/backoffice/home.html'
        })
        
        .state('business.showquoteforacceptance', {
        	url:"/showquotedetails/:businessId/:quoteCreationTimestamp",
	        templateUrl: 'views/business/showquotesummary.html',
	        controller: 'AcceptQuoteCtrl'
        })
        
        .state('business.paymentform', {
        	url:"/showquotedetails/:businessId/:quoteCreationTimestamp/payment",
	        templateUrl: 'views/business/paymentform.html',
	        controller: 'PaymentCtrl'
        })
        
        .state('business.paymentsuccess', {
        	params: {quote: {}},
        	url:"/showquotedetails/paymentsuccess",
	        templateUrl: 'views/business/showquotedetails.html',
	        controller: 'AcceptQuoteCtrl'
        })
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
