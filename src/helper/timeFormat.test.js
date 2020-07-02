import * as ProcessTime from './timeFormat';

describe('Test Time Format', () => {
    
    it('convert timestamp to readable time', () => {
        expect(ProcessTime.timeFormat(1591515739, false)).toBe("1970/01/19 18:00-18:59");
    });

    it('convert timestamp within a readable time interval', () => {
        expect(ProcessTime.timeFormat(1591515739, false)).toBe("1970/01/19 18:00-18:59");
    });

    it('add zero if number less than ten', () => {
        expect(ProcessTime.numberLessThanTen("1")).toBe("01");
        expect(ProcessTime.numberLessThanTen("2")).toBe("02");
        expect(ProcessTime.numberLessThanTen("3")).toBe("03");
        expect(ProcessTime.numberLessThanTen("4")).toBe("04");
        expect(ProcessTime.numberLessThanTen("5")).toBe("05");
        expect(ProcessTime.numberLessThanTen("6")).toBe("06");
        expect(ProcessTime.numberLessThanTen("7")).toBe("07");
        expect(ProcessTime.numberLessThanTen("8")).toBe("08");
        expect(ProcessTime.numberLessThanTen("9")).toBe("09");
    });

});
