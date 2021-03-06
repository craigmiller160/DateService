// require.config({
//     baseUrl: '../src',
//     paths: {
//         jquery: ['https://code.jquery.com/jquery-3.3.1', 'lib/jquery'],
//         compareDate: 'date/compareDate', //TODO make this one go away
//         date: 'date', //TODO make this one go away
//         monthDate: 'date/monthDate', //TODO make this one go away
//         parseDate: 'date/parseDate', //TODO make this one go away
//         validateDate: 'date/validateDate', //TODO make this one go away
//         jasmine: '../tests/lib/jasmine',
//         'jasmineHtml': '../tests/lib/jasmine-html',
//         'jasmineBoot': '../tests/lib/boot'
//     },
//     scrim: {
//         'jasmineHtml': {
//             deps: ['jasmine']
//         },
//         'jasmineBoot': {
//             deps: ['jasmine', 'jasmineHtml']
//         }
//     }
// });

require.config({
    baseUrl: '../src',
    paths: {
        'jquery': ['https://code.jquery.com/jquery-3.3.1', 'lib/jquery'],
        'jasmine': '../tests/lib/jasmine',
        'jasmine-html': '../tests/lib/jasmine-html',
        'jasmine-boot': '../tests/lib/boot',
        'jasmine-jquery': '../tests/lib/jasmine-jquery',
        'compareDate': 'date/compareDate',
        'monthDate': 'date/monthDate',
        'parseDate': 'date/parseDate',
        'validateDate': 'date/validateDate'
    },
    shim: {
        'jasmine-html': {
            deps: ['jasmine']
        },
        'jasmine-boot': {
            deps: ['jasmine', 'jasmine-html']
        },
        'jasmine-jquery': {
            deps: ['jasmine', 'jquery']
        }
    }
});


require(['jasmine-boot', 'jasmine-jquery'], function () {
    require(['../tests/compareDate.spec', '../tests/monthDate.spec',
        '../tests/parseDate.spec', '../tests/validateDate.spec'], function(){
        //trigger Jasmine
        window.onload();
    })
});