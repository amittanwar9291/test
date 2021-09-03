export class MonthYearModel {
  year: number;
  month: number;

  constructor(year?: number, month?: number) {
    this.year = year ? year : 0;
    this.month = month ? month : 0;
  }
}
