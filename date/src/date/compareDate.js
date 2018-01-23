define([], function(){
	return {
		datesEqual: function(date1, date2){
			return date1.getMonth() === date2.getMonth() &&
	            date1.getUTCFullYear() === date2.getUTCFullYear() &&
	            date1.getDate() === date2.getDate();
		},
		timesEqual: function(date1, date2){
			return date1.getHours() === date2.getHours() &&
	            date1.getMinutes() === date2.getMinutes() &&
	            date1.getSeconds() === date2.getSeconds() &&
	            date1.getMilliseconds() === date2.getMilliseconds();
		},
		datesTimesEqual: function(date1, date2){
			return this.datesEqual(date1, date2) && this.timesEqual(date1, date2);
		}
	}
});