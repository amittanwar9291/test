import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReportListExaminationFilter } from '@enums/shared/report-list-examination-filter.enum';
import { DropdownNumberModel } from '@models/shared/dropdown/dropdown-number.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { StatisticsModel } from '@models/shared/statistics/statistics-model';
import { ReportListService } from '@services/shared/report-list/report-list.service';
import { StatisticsHttpService } from '@services/shared/statistics/statistics-http.service';
import { DotsToCommasPipe } from '@pipes/dots-to-commas.pipe';
import { IReportsData, IAverageTimesData, IReportsPerRadiologistData } from '@interfaces/statistics.interface';
import { AuthorizedComponent } from 'app/shared/authorized/authorized.component';
import { TranslateService } from '@ngx-translate/core';
import { Subscription, forkJoin } from 'rxjs';

@Component({
  selector: 'rr-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
  providers: [DotsToCommasPipe]
})
export class StatisticsComponent implements OnInit, OnDestroy {
  headerTitleSubscription: Subscription;
  subscriptions: Subscription[] = [];

  yearsDropdownOptions: DropdownNumberModel[] = [];
  modulesDropdownOptions: DropdownModel[] = [];

  reportsData: IReportsData[];
  reportsPerRadiologistData: IReportsPerRadiologistData[];
  averageTimesData: IAverageTimesData[];

  earliestReportYear: number;
  totalNumberOfReportYears: number;

  model: StatisticsModel;
  initialySelectedModule = ReportListExaminationFilter.AllCT;

  constructor(
    public parent: AuthorizedComponent,
    public translate: TranslateService,
    private reportListService: ReportListService,
    private statisticsHttpService: StatisticsHttpService
  ) {
    this.model = new StatisticsModel();

    this.initTranslation();
  }

  private initTranslation(): void {
    this.headerTitleSubscription = this.translate.stream('statistics.header').subscribe((out: string) => {
      this.parent.header = out;
    });
    this.subscriptions.push(
      this.translate.stream('reportlist.examinations').subscribe(out => {
        this.modulesDropdownOptions = this.reportListService.mapToDropdownList(out);
        this.modulesDropdownOptions = this.modulesDropdownOptions.filter(option => option.label !== '--' && option.label !== '-');
      })
    );
  }

  ngOnInit(): void {
    forkJoin({
      requestOne: this.statisticsHttpService.getReportsData(),
      requestTwo: this.statisticsHttpService.getAverageTimesData(),
      requestThree: this.statisticsHttpService.getReportsPerRadiologistData()
    }).subscribe(({ requestOne, requestTwo, requestThree }) => {
      this.reportsData = requestOne;
      this.averageTimesData = requestTwo;
      this.reportsPerRadiologistData = requestThree;

      this.generateYearOptionsForDropdowns();
      this.getInitialStatistics();
    });
  }

  ngOnDestroy(): void {
    this.headerTitleSubscription.unsubscribe();
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }

  selectedModuleSubstring(selectedModuleName: string): string {
    if (selectedModuleName === ReportListExaminationFilter.AllCT) {
      return 'CT';
    } else if (selectedModuleName === ReportListExaminationFilter.AllMRT) {
      return 'MRT';
    } else {
      return selectedModuleName;
    }
  }

  generateYearOptionsForDropdowns(): void {
    const yearsArray = this.reportsData.map((el: IReportsData) => el.year);
    const latestReportYear = Math.max(...yearsArray);
    this.earliestReportYear = Math.min(...yearsArray);

    this.totalNumberOfReportYears = latestReportYear - this.earliestReportYear + 1;

    for (let currentYear = this.earliestReportYear; currentYear <= latestReportYear; currentYear++) {
      this.yearsDropdownOptions.push({ label: currentYear.toString(), value: currentYear });
    }

    this.model.numberOfReports.selectedYearOption = this.earliestReportYear;
    this.model.numberOfReportsByExamination.selectedYearOption = this.earliestReportYear;
    this.model.numberOfReportsPerRadiologist.selectedYearOption = this.earliestReportYear;
    this.model.averageTimeOfReport.selectedYearOption = this.earliestReportYear;
    this.model.averageTimeOfReportByExamination.selectedYearOption = this.earliestReportYear;
  }

  getInitialStatistics(): void {
    this.getNumberOfReportsStatistic(this.earliestReportYear);
    this.getNumberOfReportsByExaminationStatistic(this.earliestReportYear, this.initialySelectedModule);
    this.getNumberOfReportsPerRadiologistStatistic(this.earliestReportYear);
    this.getAverageTimeOfReportStatistic(this.earliestReportYear);
    this.getAverageTimeOfReportsByExaminationStatistic(this.earliestReportYear, this.initialySelectedModule);
  }

  getNumberOfReportsStatistic(selectedYear?: number): void {
    this.model.numberOfReports.inSpecificYear = this.reportsData
      .filter((el: IReportsData) => el.year === (selectedYear || this.model.numberOfReports.selectedYearOption))
      .reduce((acc, curItem) => acc + curItem.count, 0);

    if (!selectedYear) {
      return;
    }

    this.model.numberOfReports.inAllYears = this.reportsData.reduce((acc, curItem) => acc + curItem.count, 0);
  }

  getNumberOfReportsByExaminationStatistic(earliestReportYear?: number, initialySelectedModule?: string): void {
    const selectedModule = initialySelectedModule || this.model.numberOfReportsByExamination.selectedModule;
    const selectedYear = earliestReportYear || this.model.numberOfReportsByExamination.selectedYearOption;

    this.model.numberOfReportsByExamination.inSpecificYear = this.reportsData
      .filter((el: IReportsData) => el.year === selectedYear && el.moduleName.includes(this.selectedModuleSubstring(selectedModule)))
      .reduce((acc, curItem) => acc + curItem.count, 0);

    this.model.numberOfReportsByExamination.inAllYears = this.reportsData
      .filter((el: IReportsData) => el.moduleName.includes(this.selectedModuleSubstring(selectedModule)))
      .reduce((acc, curItem) => acc + curItem.count, 0);
  }

  getNumberOfReportsPerRadiologistStatistic(earliestReportYear?: number): void {
    const selectedYear = earliestReportYear || this.model.numberOfReportsPerRadiologist.selectedYearOption;

    this.model.numberOfReportsPerRadiologist.inSpecificYear = this.reportsPerRadiologistData
      .filter((el: IReportsPerRadiologistData) => el.year === selectedYear)
      .reduce((acc, curItem) => acc + curItem.averageReportCount, 0);

    this.model.numberOfReportsPerRadiologist.inAllYears = this.reportsPerRadiologistData.reduce(
      (acc, curItem) => acc + curItem.averageReportCount,
      0
    );
  }

  getAverageTimeOfReportStatistic(earliestReportYear?: number): void {
    const selectedYear = earliestReportYear || this.model.averageTimeOfReport.selectedYearOption;

    const numberOfReportsInSelectedYear = this.averageTimesData.filter((el: IAverageTimesData) => el.year === selectedYear).length;
    const numberOfReportsInAllYears = this.averageTimesData.length;

    this.model.averageTimeOfReport.inSpecificYear =
      this.averageTimesData
        .filter((el: IAverageTimesData) => el.year === selectedYear)
        .reduce((acc, curItem) => acc + curItem.averageTime, 0) / numberOfReportsInSelectedYear || 0;

    this.model.averageTimeOfReport.inAllYears =
      this.averageTimesData.reduce((acc, curItem) => acc + curItem.averageTime, 0) / numberOfReportsInAllYears || 0;
  }

  getAverageTimeOfReportsByExaminationStatistic(earliestReportYear?: number, initialySelectedModule?: string): void {
    const selectedModule = this.selectedModuleSubstring(
      initialySelectedModule || this.model.averageTimeOfReportByExamination.selectedModule
    );
    const selectedYear = earliestReportYear || this.model.averageTimeOfReportByExamination.selectedYearOption;

    const numberOfModuleReportsInSelectedYear = this.averageTimesData.filter(
      (el: IAverageTimesData) => el.year === selectedYear && el.moduleName.includes(selectedModule)
    ).length;
    const numberOfModuleReportsInAllYears = this.averageTimesData.filter((el: IAverageTimesData) => el.moduleName.includes(selectedModule))
      .length;

    this.model.averageTimeOfReportByExamination.inSpecificYear =
      this.averageTimesData
        .filter((el: IAverageTimesData) => el.year === selectedYear && el.moduleName.includes(selectedModule))
        .reduce((acc, curItem) => acc + curItem.averageTime, 0) / numberOfModuleReportsInSelectedYear || 0;
    this.model.averageTimeOfReportByExamination.inAllYears =
      this.averageTimesData
        .filter((el: IAverageTimesData) => el.moduleName.includes(selectedModule))
        .reduce((acc, curItem) => acc + curItem.averageTime, 0) / numberOfModuleReportsInAllYears || 0;
  }
}
