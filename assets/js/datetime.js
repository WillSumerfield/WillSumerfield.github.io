/**
 * @param {int} day
 * @param {int} month
 * @param {int} year
 * @param {int} hour
 * @param {int} minute
 */
export class DateTime {
    constructor(month, day, year, hour, minute) {
        this.day = day;
        this.month = month;
        this.year = year;
        this.hour = hour;
        this.minute = minute;

        this.fixTimes();
    }

    fixTimes() {
        // Normalize the time values
        if (this.minute >= 60) {
            this.hour += Math.floor(this.minute / 60);
            this.minute = this.minute % 60;
        }
        if (this.hour >= 24) {
            this.day += Math.floor(this.hour / 24);
            this.hour = this.hour % 24;
        }
        if (this.day > 31) {
            this.month += Math.floor(this.day / 31);
            this.day = this.day % 31;
        }
        if (this.month > 12) {
            this.year += Math.floor(this.month / 12);
            this.month = this.month % 12;
        };
    }

    copy() {
        return new DateTime(this.month, this.day, this.year, this.hour, this.minute);
    }

    /**
     * @param {int} minutes
     * @param {int} hours
     * @param {int} days
     * @param {int} months
     * @param {int} years
     * @returns {DateTime}
     */
    offset(minutes, hours=0, days=0, months=0, years=0) {
        this.minute += minutes;
        this.hour += hours;
        this.day += days;
        this.month += months;
        this.year += years;
        this.fixTimes();
        return this.copy();
    }
  
    /**
     * @returns {string}
     */
    toString() {
        return `${this.month.toString().padStart(2, '0')}/${this.day.toString().padStart(2, '0')}/${this.year} ${this.hour.toString().padStart(2, '0')}:${this.minute.toString().padStart(2, '0')}`;
    }

    /**
     * @returns {int}
     */
    toInt() {
        return this.year*12*31*24*60 + this.month*31*24*60 + this.day*24*60 + this.hour*60 + this.minute;
    }
}