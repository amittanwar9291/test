import { IReportsYearData } from '@interfaces/statistics.interface';
import { ReportListExaminationFilter } from '@enums/shared/report-list-examination-filter.enum';

export class StatisticsModel {
  numberOfReports: IReportsYearData;
  numberOfReportsByExamination: IReportsYearData;
  numberOfReportsPerRadiologist: IReportsYearData;
  averageTimeOfReport: IReportsYearData;
  averageTimeOfReportByExamination: IReportsYearData;

  constructor() {
    this.numberOfReports = {
      selectedYearOption: 0,
      inSpecificYear: 0,
      inAllYears: 0
    };

    this.numberOfReportsByExamination = {
      selectedYearOption: 0,
      inSpecificYear: 0,
      inAllYears: 0,
      selectedModule: ReportListExaminationFilter.AllCT
    };

    this.numberOfReportsPerRadiologist = {
      selectedYearOption: 0,
      inSpecificYear: 0,
      inAllYears: 0
    };

    this.averageTimeOfReport = {
      selectedYearOption: 0,
      inSpecificYear: 0,
      inAllYears: 0
    };

    this.averageTimeOfReportByExamination = {
      selectedYearOption: 0,
      inSpecificYear: 0,
      inAllYears: 0,
      selectedModule: ReportListExaminationFilter.AllCT
    };
  }
}
