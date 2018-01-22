require.config({
    baseUrl: '../src',
    paths: {
        'jasmine': '../tests/lib/jasmine',
        'jasmine-html': '../tests/lib/jasmine-html',
        'jasmine-boot': '../tests/lib/boot'
    },
    shim: {
        'jasmine-html': {
            deps: ['jasmine']
        },
        'jasmine-boot': {
            deps: ['jasmine', 'jasmine-html']
        }
    }
});

require(['jasmine-boot'], function () {
    require(['my-library.specs.require'], function(){
        //trigger Jasmine
        window.onload();
    })
});