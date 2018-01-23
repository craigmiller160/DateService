define(['compareDate'], function(compareDate){
    describe('compareDate', function(){
        describe('datesEqual', function(){
            it('dates should be equal', function(){
                var date1 = new Date(2018, 1, 1);
                var date2 = new Date(2018, 1, 1);
                expect(compareDate.datesEqual(date1, date2)).toEqual(true);
            });

            it('dates should not be equal', function(){
                var date1 = new Date(2018, 1, 1);
                var date2 = new Date(2017, 2, 2);
                expect(compareDate.datesEqual(date1, date2)).toEqual(false);
            });

            it('dates with different times should be equal', function(){
                var date1 = new Date(2018, 1, 1, 1, 1, 1);
                var date2 = new Date(2018, 1, 1, 2, 2, 2);
                expect(compareDate.datesEqual(date1, date2)).toEqual(true);
            });
        });

        describe('timesEqual', function(){
            it('times should be equal', function(){
                var time1 = new Date(2018, 1, 1, 1, 1, 1);
                var time2 = new Date(2018, 1, 1, 1, 1, 1);
                expect(compareDate.timesEqual(time1, time2)).toEqual(true);
            });

            it('times should not be equal', function(){
                var time1 = new Date(2018, 1, 1, 1, 1, 1);
                var time2 = new Date(2018, 1, 1, 2, 2, 2);
                expect(compareDate.timesEqual(time1, time2)).toEqual(false);
            });

            it('times with different dates should be equal', function(){
                var time1 = new Date(2018, 1, 1, 1, 1, 1);
                var time2 = new Date(2017, 2, 2, 1, 1, 1);
                expect(compareDate.timesEqual(time1, time2)).toEqual(true);
            });
        });

        describe('datesTimesEqual', function(){
            it('dates/times should be equal', function(){
                var date1 = new Date(2018, 1, 1, 1, 1, 1);
                var date2 = new Date(2018, 1, 1, 1, 1, 1);
                expect(compareDate.datesTimesEqual(date1, date2)).toEqual(true);
            });

            it('dates/times should not be equal with different dates', function(){
                var date1 = new Date(2018, 1, 1, 1, 1, 1);
                var date2 = new Date(2018, 2, 2, 1, 1, 1);
                expect(compareDate.datesTimesEqual(date1, date2)).toEqual(false);
            });

            it('dates/times should not be equal with different times', function(){
                var date1 = new Date(2018, 1, 1, 1, 1, 1);
                var date2 = new Date(2018, 1, 1, 2, 2, 2);
                expect(compareDate.datesTimesEqual(date1, date2)).toEqual(false);
            });

            it('dates/times should not be equal with different dates & times', function(){
                var date1 = new Date(2018, 1, 1, 1, 1, 1);
                var date2 = new Date(2017, 2, 2, 2, 2, 2);
                expect(compareDate.datesTimesEqual(date1, date2)).toEqual(false);
            });
        });
    });
});