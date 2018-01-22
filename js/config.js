requirejs.config({
	baseUrl: 'js',
	paths: {
		jquery: ['https://code.jquery.com/jquery-3.3.1', 'lib/jquery'],
		compareDate: 'date/compareDate',
		date: 'date',
		monthDate: 'date/monthDate',
		parseDate: 'date/parseDate',
		validateDate: 'date/validateDate',
		jasmine: 'testlib/jasmine',
		jasmineHtml: 'testlib/jasmine-html',
		jasmineBoot: 'testlib/boot'
	},
	scrim: {
		jasmineHtml: {
			deps: ['jasmine']
		},
		jasmineBoot: {
			deps: ['jasmineHtml', 'jasmine']
		}
	}
});