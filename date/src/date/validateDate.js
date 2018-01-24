define(['jquery'], function($){
	return {
    	//Validate the format of all date inputs, throws exception if any are invalid
    	dateInputs: function(){
			var obj = this;
			$.each($('input[type = "date"]'), function(index, dateInput){
				var value = $(dateInput).val();
				if(value && !obj.dateString(value)){
					var id = $(dateInput).attr('id');
					throw 'Invalid date input value. Field ID: ' + id + ', value: ' + value;
				}
			});
		},
		//Validate the format of all 12-hour time inputs, throws exception if any are invalid
		time12Inputs: function(){
			var obj = this;
			$.each($('input[type = "time"]'), function(index, timeInput){
				var value = $(timeInput).val();
				if(value && !obj.time12String(value)){
					var id = $(timeInput).attr('id');
					throw 'Invalid time input value. Field ID: ' + id + ', value: ' + value;
				}
			});
		},
		//Validate the format of all 24-hour time inputs, throws exception if any are invalid
		time24Inputs: function(){
			var obj = this;
			$.each($('input[type = "time"]'), function(index, timeInput){
				var value = $(timeInput).val();
				if(value && !obj.time24String(value)){
					var id = $(timeInput).attr('id');
					throw 'Invalid time input value. Field ID: ' + id + ', value: ' + value;
				}
			});
		},
		//yyyy-MM-dd
		dateString: function(dateString){
			var parts = dateString.split('-');
			return parts.length === 3 && !isNaN(parseInt(parts[0])) && parts[0].length === 4 &&
				!isNaN(parseInt(parts[1])) && parseInt(parts[1]) <= 12 && 
				!isNaN(parseInt(parts[2])) && parseInt(parts[2]) <= 31;
		},
		//hh:mm:ss am
		time12String: function(timeString){
			var timeStringUC = timeString.toUpperCase();
			var hasAmPm = timeStringUC.indexOf('AM') > 0 || timeStringUC.indexOf('PM') > 0;
			if(!hasAmPm){
				return false;
			}

			timeStringUC = timeStringUC.replace('AM', '').replace('PM', '');
			var parts = timeStringUC.split(':');
			return parts.length === 3 && !isNaN(parseInt(parts[0])) && parseInt(parts[0]) <= 12 && 
				!isNaN(parseInt(parts[1])) && parseInt(parts[1]) < 60 &&
				!isNaN(parseInt(parts[2])) && parseInt(parts[2]) < 60;
		},
		//HH:mm:ss
		time24String: function(timeString){
			var wrongParts = timeString.split(' ');
			if(wrongParts.length > 1){
				return false;
			}

			var parts = timeString.split(':');
			return parts.length === 3 && !isNaN(parseInt(parts[0])) && parseInt(parts[0]) < 24 &&
				!isNaN(parseInt(parts[1])) && parseInt(parts[1]) < 60 && 
				!isNaN(parseInt(parts[2])) && parseInt(parts[2]) < 60;
		},
		//yyyy-MM-dd hh:mm:ss am
		dateTime12String: function(dateTimeString){
			var parts = dateTimeString.split(' ');
			if(parts.length !== 3){
				return false;
			}

			return this.dateString(parts[0]) && this.time12String(parts[1] + ' ' + parts[2]);
		},
		//yyyy-MM-dd HH:mm:ss
		dateTime24String: function(dateTimeString){
			var parts = dateTimeString.split(' ');
			if(parts.length !== 2){
				return false;
			}

			return this.dateString(parts[0]) && this.time24String(parts[1]);
		}
    };
});