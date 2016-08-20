/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function () {
    // map tells the System loader where to look for things
    var map = {
        'app': 'src',
        '@angular': 'node_modules/@angular',
        '@ngrx/store': 'node_modules/@ngrx/store',
        '@ngrx/effects': 'node_modules/@ngrx/effects',
        '@ngrx/core': 'node_modules/@ngrx/core',
        'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
        'rxjs': 'node_modules/rxjs'
    };
    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app': {main: 'main.js', defaultExtension: 'js'},
        'rxjs': {defaultExtension: 'js'},
        '@ngrx/store': {main: 'index.js', defaultExtension: 'js'},
        '@ngrx/effects': {defaultExtension: 'js'},
        '@ngrx/core': {defaultExtension: 'js'},
        'angular2-in-memory-web-api': {defaultExtension: 'js'}
    };
    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'forms',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'router',
        'router-deprecated',
        'upgrade'
    ];
    // Individual files (~300 requests):
    function packIndex(pkgName) {
        packages['@angular/' + pkgName] = {main: 'index.js', defaultExtension: 'js'};
    }

    // Bundled (~40 requests):
    function packUmd(pkgName) {
        packages['@angular/' + pkgName] = {main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js'};
    }

    // Most environments should use UMD; some (Karma) need the individual index files
    var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
    // Add package entries for angular packages
    ngPackageNames.forEach(setPackageConfig);

    var barrels = [
        'ui',
        'store'
    ];
    barrels.forEach(function (barrelName) {
        map[barrelName] = 'src/' + barrelName;
        packages[barrelName] = {main: 'index.js', defaultExtension: 'js'}
    });

    var config = {
        map: map,
        packages: packages
    };
    System.config(config);
})();