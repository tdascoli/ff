;(function() {
  'use strict';

  angular.module('forza').config(function(LanguageServiceProvider) {
    LanguageServiceProvider.setLanguages(['de', 'fr', 'it', 'en']);
  });

}());

