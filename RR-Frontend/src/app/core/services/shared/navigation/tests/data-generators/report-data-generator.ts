import { ReportUiModel } from '@models/shared/report';
import { ReportPageApiModel } from '@models/shared/navigation';
import { IDictionary } from '@interfaces/dictionary.interface';
import { PageUrlModel } from '@models/shared/navigation/page-url.model';
import { Guid } from '@models/shared/guid/guid';

export class ReportDataGenerator {
  private generatePages(reportId: string, typeName: string, pageCount: number, pagesNames: string[]): ReportPageApiModel[] {
    const pages = [] as ReportPageApiModel[];

    for (let i = 0; i < pageCount; i++) {
      pages.push({
        id: Guid.createEmpty(),
        pageId: Guid.createEmpty(),
        reportId,
        typeName: pagesNames[i],
        pageNumber: i + 1,
        isBlocked: false,
        wasModified: false
      });
    }

    return pages;
  }
  public getReportWithPages(id: string, typeName: string, pageCount: number, pagesNames: string[]): ReportUiModel {
    const report = new ReportUiModel();

    report.id = id;
    report.examinationType = typeName;
    report.totalPageCount = pageCount;
    report.pages = this.generatePages(id, typeName, pageCount, pagesNames);

    return report;
  }

  public getReportWithoutPages(id: string, typeName: string): ReportUiModel {
    const report = new ReportUiModel();

    report.id = id;
    report.examinationType = typeName;
    report.totalPageCount = 0;
    report.pages = [];

    return report;
  }
}

export const testPresetRoutes: IDictionary<string> = {
  MammaMRT: 'MammaMRTReport/api/v1/MammaMRT/Report'
};

export const testMammaMRTRoutes: IDictionary<PageUrlModel> = {
  MammaMRT_PatientIndication: new PageUrlModel('mammaMRT/report/patient-indication', 1),
  MammaMRT_AnamnesisExtension: new PageUrlModel('mammaMRT/report/anamnesis-extension', 2),
  MammaMRT_Technology: new PageUrlModel('mammaMRT/report/technology', 3),
  MammaMRT_Anatomy: new PageUrlModel('mammaMRT/report/anatomy', 4),
  MammaMRT_AnatomyEnhancement: new PageUrlModel('mammaMRT/report/anatomy-enhancement', 5),
  MammaMRT_Findings: new PageUrlModel('mammaMRT/report/diagnosis', 6),
  MammaMRT_Lymphs: new PageUrlModel('mammaMRT/report/lymph-node', 7),
  MammaMRT_Bones: new PageUrlModel('mammaMRT/report/bone', 8),
  MammaMRT_Rating: new PageUrlModel('mammaMRT/report/rating', 9),
  Core_ReportResults: new PageUrlModel('mammaMRT/report/text-report', 10)
};

export const testPagesNames = [
  'MammaMRT_PatientIndication',
  'MammaMRT_AnamnesisExtension',
  'MammaMRT_Technology',
  'MammaMRT_Anatomy',
  'MammaMRT_AnatomyEnhancement',
  'MammaMRT_Findings',
  'MammaMRT_Lymphs',
  'MammaMRT_Bones',
  'MammaMRT_Rating'
];

export const testModuleRoutes: IDictionary<IDictionary<PageUrlModel>> = {
  MammaMRT: testMammaMRTRoutes
};
