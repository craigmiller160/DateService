define([], function(){
	var monthsAbrev = [
        'Jan', 'Feb', 'Mar',
        'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep',
        'Oct', 'Nov', 'Dec'
    ];

    var months = [
        'January', 'February', 'March',
        'April', 'May', 'June', 'July',
        'August', 'September', 'October',
        'November', 'December'
    ];

    return {
    	//Accepts either a date object or a 0-indexed month index
		getMonthNameAbrev: function(value){
			if(value instanceof Date){
				return monthsAbrev[value.getMonth()];
			}
			else{
				return monthsAbrev[value];
			}
		},
		//Accepts either a date object or a 0-indexed month index
		getMonthName: function(value){
			if(value instanceof Date){
				return months[value.getMonth()];
			}
			else{
				return months[value];
			}
		}
    }
});