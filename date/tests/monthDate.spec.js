define(['monthDate'], function(monthDate){
    describe('monthDate', function(){
        describe('getMonthNameAbrev', function(){
            it('0 = Jan', function(){
                expect(monthDate.getMonthNameAbrev(0)).toEqual('Jan');
            });

            it('1 = Feb', function(){
                expect(monthDate.getMonthNameAbrev(1)).toEqual('Feb');
            });

            it('2 = Mar', function(){
                expect(monthDate.getMonthNameAbrev(2)).toEqual('Mar');
            });

            it('3 = Apr', function(){
                expect(monthDate.getMonthNameAbrev(3)).toEqual('Apr');
            });

            it('4 = May', function(){
                expect(monthDate.getMonthNameAbrev(4)).toEqual('May');
            });

            it('5 = Jun', function(){
                expect(monthDate.getMonthNameAbrev(5)).toEqual('Jun');
            });

            it('6 = Jul', function(){
                expect(monthDate.getMonthNameAbrev(6)).toEqual('Jul');
            });

            it('7 = Aug', function(){
                expect(monthDate.getMonthNameAbrev(7)).toEqual('Aug');
            });

            it('8 = Sep', function(){
                expect(monthDate.getMonthNameAbrev(8)).toEqual('Sep');
            });

            it('9 = Oct', function(){
                expect(monthDate.getMonthNameAbrev(9)).toEqual('Oct');
            });

            it('10 = Nov', function(){
                expect(monthDate.getMonthNameAbrev(10)).toEqual('Nov');
            });

            it('11 = Dec', function(){
                expect(monthDate.getMonthNameAbrev(11)).toEqual('Dec');
            });
        });

        describe('getMonthName', function(){
            it('0 = January', function(){
                expect(monthDate.getMonthName(0)).toEqual('January');
            });

            it('1 = February', function(){
                expect(monthDate.getMonthName(1)).toEqual('February');
            });

            it('2 = March', function(){
                expect(monthDate.getMonthName(2)).toEqual('March');
            });

            it('3 = April', function(){
                expect(monthDate.getMonthName(3)).toEqual('April');
            });

            it('4 = May', function(){
                expect(monthDate.getMonthName(4)).toEqual('May');
            });

            it('5 = June', function(){
                expect(monthDate.getMonthName(5)).toEqual('June');
            });

            it('6 = July', function(){
                expect(monthDate.getMonthName(6)).toEqual('July');
            });

            it('7 = August', function(){
                expect(monthDate.getMonthName(7)).toEqual('August');
            });

            it('8 = September', function(){
                expect(monthDate.getMonthName(8)).toEqual('September');
            });

            it('9 = October', function(){
                expect(monthDate.getMonthName(9)).toEqual('October');
            });

            it('10 = November', function(){
                expect(monthDate.getMonthName(10)).toEqual('November');
            });

            it('11 = December', function(){
                expect(monthDate.getMonthName(11)).toEqual('December');
            });
        });
    });
});