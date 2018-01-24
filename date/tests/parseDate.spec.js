define(['parseDate'], function(parseDate){
    describe('parseDate', function(){
        describe('dateString', function(){
            it('Date should be 2018-01-01', function(){
                var expectedDate = new Date(2018, 0, 1);
                var actualDate = parseDate.dateString('2018-01-01');
                expect(actualDate.getUTCFullYear()).toEqual(expectedDate.getUTCFullYear());
            });
        });
    });
});