import { addDays, format } from "date-fns";

import { formatDate } from "../date";

describe("date util", () => {
    const DATE_FORMAT = "yyyy-MM-dd";

    it("should return N/A", () => {
        const result = formatDate("");
        expect(result).toEqual("N/A");
    });

    it("should return Today", () => {
        const result = formatDate(format(new Date(), DATE_FORMAT));
        expect(result).toEqual("Today");
    });

    it("should return Tomorrow", () => {
        const result = formatDate(format(addDays(new Date(), 1), DATE_FORMAT));
        expect(result).toEqual("Tomorrow");
    });

    it("should return exactly date", () => {
        const result = formatDate("2020-07-14");
        expect(result).toEqual("Tue 14 Jul");
    });
});
