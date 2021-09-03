import { Injectable } from '@angular/core';
import { MonthYearModel } from '@models/shared/month-year/month-year.model';

@Injectable({
  providedIn: 'root'
})
export class MonthYearMapper {
  constructor() {}

  mapToApi(sourceMonthYearModel: MonthYearModel) {
    return sourceMonthYearModel.year > 0 ? sourceMonthYearModel.month : 0;
  }
}
