define(['validateDate', 'compareDate', 'monthDate', 'parseDate'], function($validateDate, $compareDate, $monthDate, $parseDate){
	return {
		parse: $parseDate,
		validate: $validateDate,
		month: $monthDate,
		compare: $compareDate
	}
});