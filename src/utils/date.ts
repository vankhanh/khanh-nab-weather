import { parse, format, isToday, isTomorrow } from "date-fns";

const NOT_AVAILABLE = "N/A";
const TODAY = "Today";
const TOMORROW = "Tomorrow";
const DATE_FORMAT = "yyyy-MM-dd";
const WEEK_DATE_FORMAT = "ccc dd MMM";

function parseDate(date: string): Date {
    return parse(date, DATE_FORMAT, new Date());
}

export function formatDate(dateStr: string): string {
    if (!dateStr) {
        return NOT_AVAILABLE;
    }

    const date = parseDate(dateStr);

    if (isToday(date)) {
        return TODAY;
    }

    if (isTomorrow(date)) {
        return TOMORROW;
    }

    return format(date, WEEK_DATE_FORMAT);
}
