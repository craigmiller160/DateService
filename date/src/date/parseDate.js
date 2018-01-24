define(['validateDate'], function($validateDate){
	
	function convertHour12To24(hour, isAm){
		if(isAm && hour === 12){
			return 0;
		}
		else if(isAm){
			return hour - 1;
		}
		else if(!isAm && hour === 12){
			return hour;
		}
		else{
			return hour + 12;
		}
	}

	return {
		//yyyy-MM-dd
		dateString: function(dateString){
			if(!$validateDate.dateString(dateString)){
				throw 'Invalid date format: ' + dateString;
			}

			var parts = dateString.split('-');
			return new Date(parts[0], parts[1] - 1, parts[2]);
		},
		//HH:mm:ss
		time24String: function(timeString){
			if(!$validateDate.time24String(timeString)){
				throw 'Invalid time 24 hour format: ' + timeString;
			}

			var parts = timeString.split(':');
			var date = new Date();
			return new Date(date.getUTCFullYear(), date.getMonth(), date.getDate(), parts[0], parts[1], parts[2]);
		},
		//yyyy-MM-dd HH:mm:ss
		dateTime24String: function(dateTimeString){
			if(!$validateDate.dateTime24String(dateTimeString)){
				throw 'Invalid date/time 24 hour format: ' + dateTimeString;
			}

			var parts = dateTimeString.split(' ');
			var date = this.dateString(parts[0]);
			var time = this.time24String(parts[1]);
			return new Date(date.getUTCFullYear(), date.getMonth(), date.getDate(), time.getHours(), time.getMinutes(), time.getSeconds());
		},
		//hh:mm:ss am
		time12String: function(timeString){
			if(!$validateDate.time12String(timeString)){
				throw 'Invalid time 12 hour format: ' + timeString;
			}

			var timeStringUC = timeString.toUpperCase();

			var isAm = timeStringUC.indexOf('AM') > -1;
			timeStringUC = timeStringUC.replace('AM', '').replace('PM', '');
			var parts = timeStringUC.trim().split(':');
			var date = new Date();

			return new Date(date.getUTCFullYear(), date.getMonth(), date.getDate(), convertHour12To24(parseInt(parts[0]), isAm), parts[1], parts[2]);
		},
		//yyyy-MM-dd hh:mm:ss am
		dateTime12String: function(dateTimeString){
			if(!$validateDate.dateTime12String(dateTimeString)){
				throw 'Invalid date/time 12 hour format: ' + dateTimeString;
			}
			var parts = dateTimeString.split(' ');
			var date = this.dateString(parts[0]);
			var time = this.time12String(parts[1] + ' ' + parts[2]);
			return new Date(date.getUTCFullYear(), date.getMonth(), date.getDate(), time.getHours(), time.getMinutes(), time.getSeconds());
		}
    };
});