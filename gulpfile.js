var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {

    mix.less('common.less', 'public/css/common.css');

    mix.styles([
        'resources/assets/js/fontawesome/css/font-awesome.css'
    ], 'public/css/styles.css', './');

    mix.scripts([
        'jquery/dist/jquery.js',
        'bootstrap/dist/js/bootstrap.js',
        'moment/moment.js',
        'underscore/underscore.js',
        'angular/angular.min.js',
        'angular-ui-router/release/angular-ui-router.js',
        'angular-resource/angular-resource.min.js',
        'angular-bootstrap/ui-bootstrap.js',
        'angular-bootstrap/ui-bootstrap-tpls.js'
    ], 'public/js/common.js');

    mix.scripts([
        'app/app.main.module.js',
        'app/property/controllers/PropertiesCtrl.js',
        'app/property/controllers/PropertyCtrl.js',
        'app/property/factories/PropertyFactory.js',
        'app/filters/sqfeet.js',
        'app/filters/rent.js',
        'app/filters/highlight.js',
        'app/directives/property_address.js'

    ], 'public/js/app/angular-main-app.js');


    /* Add all files to Elixir version control */
    var version_files = [
        'public/css/common.css',
        'public/css/styles.css',
        'public/js/common.js',
        'public/js/app/angular-main-app.js'
    ];

    mix.version(version_files);

});
