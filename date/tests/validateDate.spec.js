define(['validateDate'], function(validateDate){
    describe('validateDate', function(){
        describe('dateString', function(){
            it('is valid date format (yyyy-MM-dd)', function(){
                expect(validateDate.dateString('2018-01-01')).toEqual(true);
            });

            it('is invalid date format (MM-dd-yyyy)', function(){
                expect(validateDate.dateString('01-01-2018')).toEqual(false);
            });

            it('is invalid date values (201-17-52)', function(){
                expect(validateDate.dateString('201-17-52')).toEqual(false);
            });
        });

        describe('time12String', function(){
            it('is valid time 12-hour format (hh:mm:ss am)', function(){
                expect(validateDate.time12String('01:22:13 am')).toEqual(true);
            });

            it('is invalid time 12-hour format (32:75:75 qr)', function(){
                expect(validateDate.time12String('32:75:75 qr')).toEqual(false);
            });

            it('rejects time 24-hour format (HH:mm:ss)', function(){
                expect(validateDate.time12String('13:22:13')).toEqual(false);
            });
        });

        describe('time24String', function(){
            it('is valid time 24-hour format (HH:mm:ss)', function(){
                expect(validateDate.time24String('13:22:13')).toEqual(true);
            });

            it('is invalid time 24-hour format (32:75:75)', function(){
                expect(validateDate.time24String('32:75:75')).toEqual(false);
            });

            it('rejects time 12-hour format (hh:mm:ss am)', function(){
                expect(validateDate.time24String('01:22:13 am')).toEqual(false);
            });
        });
    });
});