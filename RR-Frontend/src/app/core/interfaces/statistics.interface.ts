export interface IReportsYearData {
  selectedYearOption?: number;
  inSpecificYear: number;
  inAllYears: number;
  selectedModule?: string;
}

export interface IReportsData {
  year: number;
  count: number;
  moduleName: string;
}

export interface IAverageTimesData {
  averageTime: number;
  moduleName: string;
  year: number;
}

export interface IReportsPerRadiologistData {
  year: number;
  averageReportCount: number;
}
