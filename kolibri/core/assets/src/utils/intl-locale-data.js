/*
* This is an autogenerated file, any manual edits to this may be overridden.
* To modify how this code is generated please look at frontend_build/src/intl_code_gen.js
* If you change the supported_language.json, then this file must be regenerated by running:
* yarn run generate-locale-data
*/
module.exports = function(locale) {
  switch (locale) {
    case 'ar':
      return new Promise(function(resolve) {
        require.ensure(['intl/locale-data/jsonp/ar.js'], function(require) {
          resolve(() => require('intl/locale-data/jsonp/ar.js'));
        });
      });
    case 'en':
      return new Promise(function(resolve) {
        require.ensure(['intl/locale-data/jsonp/en.js'], function(require) {
          resolve(() => require('intl/locale-data/jsonp/en.js'));
        });
      });
    case 'es-ES':
      return new Promise(function(resolve) {
        require.ensure(['intl/locale-data/jsonp/es-ES.js'], function(require) {
          resolve(() => require('intl/locale-data/jsonp/es-ES.js'));
        });
      });
    case 'fa':
      return new Promise(function(resolve) {
        require.ensure(['intl/locale-data/jsonp/fa.js'], function(require) {
          resolve(() => require('intl/locale-data/jsonp/fa.js'));
        });
      });
    case 'fr-FR':
      return new Promise(function(resolve) {
        require.ensure(['intl/locale-data/jsonp/fr-FR.js'], function(require) {
          resolve(() => require('intl/locale-data/jsonp/fr-FR.js'));
        });
      });
    case 'hi-IN':
      return new Promise(function(resolve) {
        require.ensure(['intl/locale-data/jsonp/hi-IN.js'], function(require) {
          resolve(() => require('intl/locale-data/jsonp/hi-IN.js'));
        });
      });
    case 'mr':
      return new Promise(function(resolve) {
        require.ensure(['intl/locale-data/jsonp/mr.js'], function(require) {
          resolve(() => require('intl/locale-data/jsonp/mr.js'));
        });
      });
    case 'pt-BR':
      return new Promise(function(resolve) {
        require.ensure(['intl/locale-data/jsonp/pt-BR.js'], function(require) {
          resolve(() => require('intl/locale-data/jsonp/pt-BR.js'));
        });
      });
    case 'sw-TZ':
      return new Promise(function(resolve) {
        require.ensure(['intl/locale-data/jsonp/sw-TZ.js'], function(require) {
          resolve(() => require('intl/locale-data/jsonp/sw-TZ.js'));
        });
      });
    case 'ta':
      return new Promise(function(resolve) {
        require.ensure(['intl/locale-data/jsonp/ta.js'], function(require) {
          resolve(() => require('intl/locale-data/jsonp/ta.js'));
        });
      });
    case 'te':
      return new Promise(function(resolve) {
        require.ensure(['intl/locale-data/jsonp/te.js'], function(require) {
          resolve(() => require('intl/locale-data/jsonp/te.js'));
        });
      });
    case 'ur-PK':
      return new Promise(function(resolve) {
        require.ensure(['intl/locale-data/jsonp/ur-PK.js'], function(require) {
          resolve(() => require('intl/locale-data/jsonp/ur-PK.js'));
        });
      });
    default:
      return new Promise(function(resolve) {
        require.ensure(['intl/locale-data/jsonp/en.js'], function(require) {
          resolve(() => require('intl/locale-data/jsonp/en.js'));
        });
      });
  }
};
