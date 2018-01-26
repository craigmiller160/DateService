define(['parseDate'], function(parseDate){
    describe('parseDate', function(){
        describe('dateString', function(){
            it('Date should be 2018-01-01', function(){
                var expectedDate = new Date(2018, 0, 1);
                var actualDate = parseDate.dateString('2018-01-01');
                expect(actualDate.getUTCFullYear()).toEqual(expectedDate.getUTCFullYear());
                expect(actualDate.getMonth()).toEqual(expectedDate.getMonth());
                expect(actualDate.getUTCDate()).toEqual(expectedDate.getUTCDate());
            });
        });

        describe('time24String', function(){
            it('Time should be 13:12:12', function(){
                var expectedTime = new Date(2018, 0, 1, 13, 12, 12);
                var actualTime = parseDate.time24String('13:12:12');
                expect(actualTime.getHours()).toEqual(expectedTime.getHours());
                expect(actualTime.getMinutes()).toEqual(expectedTime.getMinutes());
                expect(actualTime.getSeconds()).toEqual(expectedTime.getSeconds());
            });
        });

        describe('time12String', function(){
            it('Time should be 01:12:12 pm', function(){
                var expectedTime = new Date(2018, 0, 1, 13, 12, 12);
                var actualTime = parseDate.time12String('01:12:12 PM');
                expect(actualTime.getHours()).toEqual(expectedTime.getHours());
                expect(actualTime.getMinutes()).toEqual(expectedTime.getMinutes());
                expect(actualTime.getSeconds()).toEqual(expectedTime.getSeconds());
            });
        });

        describe('dateTime12String', function(){
            it('Date/Time should be 2018-01-01 01:12:12 pm', function(){
                var expectedDateTime = new Date(2018, 0, 1, 13, 12, 12);
                var actualDateTime = parseDate.dateTime12String('2018-01-01 01:12:12 pm');
                expect(actualDateTime.getUTCFullYear()).toEqual(expectedDateTime.getUTCFullYear());
                expect(actualDateTime.getMonth()).toEqual(expectedDateTime.getMonth());
                expect(actualDateTime.getUTCDate()).toEqual(expectedDateTime.getUTCDate());
                expect(actualDateTime.getHours()).toEqual(expectedDateTime.getHours());
                expect(actualDateTime.getMinutes()).toEqual(expectedDateTime.getMinutes());
                expect(actualDateTime.getSeconds()).toEqual(expectedDateTime.getSeconds());
            });
        });

        describe('dateTime24String', function(){
            it('Date/Time should be 2018-01-01 13:12:12', function(){
                var expectedDateTime = new Date(2018, 0, 1, 13, 12, 12);
                var actualDateTime = parseDate.dateTime24String('2018-01-01 13:12:12');
                expect(actualDateTime.getUTCFullYear()).toEqual(expectedDateTime.getUTCFullYear());
                expect(actualDateTime.getMonth()).toEqual(expectedDateTime.getMonth());
                expect(actualDateTime.getUTCDate()).toEqual(expectedDateTime.getUTCDate());
                expect(actualDateTime.getHours()).toEqual(expectedDateTime.getHours());
                expect(actualDateTime.getMinutes()).toEqual(expectedDateTime.getMinutes());
                expect(actualDateTime.getSeconds()).toEqual(expectedDateTime.getSeconds());
            });
        });
    });
});