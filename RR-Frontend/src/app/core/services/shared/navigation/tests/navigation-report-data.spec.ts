import { async, TestBed, inject } from '@angular/core/testing';

import { NavigationReportDataService } from '../navigation-report-data.service';
import { ReportHttpService } from '../report-http.service';
import { AbstractNavigationStreamService } from '@abstractions/abstract-classes/navigation/navigation-stream';
import { ReportUiModel } from '@models/shared/report';
import { delay, skip } from 'rxjs/operators';
import { ReportDataGenerator, testModuleRoutes, testPagesNames } from './data-generators/report-data-generator';
import { MockStreamService } from './mocks/mock-stream-service';
import { MockReportService } from './mocks/mock-report-service';

describe('NavigationDataService ', () => {
  let reportHttpMock: MockReportService;
  let streamServiceMock: MockStreamService;
  let reportDataGenerator: ReportDataGenerator;

  beforeEach(async(() => {
    reportHttpMock = new MockReportService();
    reportDataGenerator = new ReportDataGenerator();
    streamServiceMock = new MockStreamService();

    TestBed.configureTestingModule({
      providers: [
        { provide: 'moduleRoutes', useValue: testModuleRoutes },
        { provide: AbstractNavigationStreamService, useValue: streamServiceMock },
        { provide: ReportHttpService, useValue: reportHttpMock }
      ]
    });
  }));

  // Report GETs
  it('should emit report data after get', done => {
    inject([NavigationReportDataService], (navDataService: NavigationReportDataService) => {
      // Arrange
      const report = new ReportUiModel();
      report.id = '00000000-0000-0000-0000-000000000009';

      reportHttpMock.setReport(report);
      const spy = spyOn<any>(navDataService, 'swapReportServiceURL');

      // Act + Assert
      navDataService
        .getReportStream()
        .pipe(skip(1))
        .subscribe(outReport => {
          // expect(outReport.examinationType).toContain('MammaMRT'); TODO mock AppConfig correctly
          expect(outReport.id).toEqual('00000000-0000-0000-0000-000000000009');
          expect(outReport === report).toBeFalsy();

          done();
        });

      navDataService.getReport('00000000-0000-0000-0000-000000000009', 'MammaMRT');
    })();
  });

  it('should throw error if get have incorrect module name', inject(
    [NavigationReportDataService],
    (navDataService: NavigationReportDataService) => {
      expect(() => {
        navDataService.getReport('00000000-0000-0000-0000-000000000001', 'TailMRT');
      }).toThrowError();
    }
  ));

  it('should return report data after get', done => {
    inject([NavigationReportDataService], (navDataService: NavigationReportDataService) => {
      // Arrange
      const report = new ReportUiModel();
      report.id = '00000000-0000-0000-0000-000000000009';

      reportHttpMock.setReport(report);

      const spy = spyOn<any>(navDataService, 'swapReportServiceURL');

      // Act + Assert
      navDataService.getReport('00000000-0000-0000-0000-000000000009', 'MammaMRT').then(outReport => {
        // expect(outReport.examinationType).toContain('MammaMRT'); TODO mock AppConfig correctly
        expect(outReport.id).toEqual('00000000-0000-0000-0000-000000000009');

        // checks if refference is lost
        expect(outReport === report).toBeFalsy();

        done();
      });
    })();
  });

  it('should return null report before get', inject([NavigationReportDataService], (navDataService: NavigationReportDataService) => {
    expect(navDataService.getReportData()).toBeFalsy();
  }));

  it('should emit empty report before get', done => {
    inject([NavigationReportDataService], (navDataService: NavigationReportDataService) => {
      navDataService.getReportStream().subscribe(outReport => {
        expect(outReport).toEqual(new ReportUiModel());

        done();
      });
    })();
  });

  it('should return report id', done => {
    inject([NavigationReportDataService], (navDataService: NavigationReportDataService) => {
      // Arrange
      const report = new ReportUiModel();
      report.id = '00000000-0000-0000-0000-000000000005';
      reportHttpMock.setReport(report);
      const spy = spyOn<any>(navDataService, 'swapReportServiceURL');

      // Act + Assert
      navDataService.getReport('00000000-0000-0000-0000-000000000005', 'MammaMRT').then(() => {
        expect(navDataService.getReportId()).toEqual('00000000-0000-0000-0000-000000000005');

        done();
      });
    })();
  });

  // Report POSTs
  it('should post report', done => {
    inject([NavigationReportDataService], (navDataService: NavigationReportDataService) => {
      // Arrange
      const report = new ReportUiModel();
      report.patientAge = 60;
      report.id = '00000000-0000-0000-0000-000000000000';
      report.examinationType = 'MammaMRT';

      const spy = spyOn<any>(navDataService, 'swapReportServiceURL');

      // Act
      navDataService.postReport(report).then(outReport => {
        expect(outReport.patientAge).toEqual(60);
        expect(outReport.id).toEqual('00000000-0000-0000-0000-000000000099');

        done();
      });
    })();
  });

  // Page number operations
  it('should set page number', done => {
    inject([NavigationReportDataService], (navDataService: NavigationReportDataService) => {
      // Arrange
      const report = reportDataGenerator.getReportWithPages('00000000-0000-0000-0000-000000000000', 'MammaMRT', 10, testPagesNames);
      const spy = spyOn<any>(navDataService, 'swapReportServiceURL');

      // Act
      navDataService.postReport(report).then(outReport => {
        navDataService.setCurrentPage(1);
        expect(navDataService.getCurrentPageNumber()).toEqual(1);
        // expect(navDataService.getCurrentPageUrl()).toEqual('mammaMRT/report/patient-indication/00000000-0000-0000-0000-000000000099'); TODO mock AppConfig correctly

        navDataService.setCurrentPage(5);
        expect(navDataService.getCurrentPageNumber()).toEqual(5);
        // expect(navDataService.getCurrentPageUrl()).toEqual('mammaMRT/report/anatomy-enhancement/00000000-0000-0000-0000-000000000099'); TODO mock AppConfig correctly

        navDataService.setCurrentPage(8);
        expect(navDataService.getCurrentPageNumber()).toEqual(8);
        // (navDataService.getCurrentPageUrl()).toEqual('mammaMRT/report/bone/00000000-0000-0000-0000-000000000099'); TODO mock AppConfig correctly

        done();
      });
    })();
  });

  it('should throw error when wrong page number', done => {
    inject([NavigationReportDataService], (navDataService: NavigationReportDataService) => {
      // Arrange
      const report = reportDataGenerator.getReportWithPages('00000000-0000-0000-0000-000000000000', 'MammaMRT', 10, testPagesNames);
      const spy = spyOn<any>(navDataService, 'swapReportServiceURL');

      // Act
      navDataService.postReport(report).then(outReport => {
        expect(() => {
          navDataService.setCurrentPage(100);
        }).toThrowError();

        done();
      });
    })();
  });

  it('should get next page url and number', done => {
    inject([NavigationReportDataService], (navDataService: NavigationReportDataService) => {
      // Arrange
      const report = reportDataGenerator.getReportWithPages('00000000-0000-0000-0000-000000000000', 'MammaMRT', 10, testPagesNames);
      const spy = spyOn<any>(navDataService, 'swapReportServiceURL');
      report.pages.splice(3, 2);

      // Act
      navDataService.postReport(report).then(() => {
        navDataService.setCurrentPage(1);
        expect(navDataService.getNextPageNumber()).toEqual(2);

        navDataService.setCurrentPage(3);
        expect(navDataService.getNextPageNumber()).toEqual(6);

        done();
      });
    })();
  });

  it('should throw error if on last page and trying to get next', done => {
    inject([NavigationReportDataService], (navDataService: NavigationReportDataService) => {
      // Arrange
      const report = reportDataGenerator.getReportWithPages('00000000-0000-0000-0000-000000000000', 'MammaMRT', 10, testPagesNames);
      const spy = spyOn<any>(navDataService, 'swapReportServiceURL');

      // Act
      navDataService.postReport(report).then(() => {
        navDataService.setCurrentPage(10);
        expect(() => navDataService.getNextPageNumber()).toThrowError();

        done();
      });
    })();
  });

  it('should get previous page url and number', done => {
    inject([NavigationReportDataService], (navDataService: NavigationReportDataService) => {
      // Arrange
      const report = reportDataGenerator.getReportWithPages('00000000-0000-0000-0000-000000000000', 'MammaMRT', 10, testPagesNames);
      const spy = spyOn<any>(navDataService, 'swapReportServiceURL');

      report.pages.splice(3, 2);

      // Act
      navDataService.postReport(report).then(() => {
        navDataService.setCurrentPage(2);
        expect(navDataService.getPreviousPageNumber()).toEqual(1);

        navDataService.setCurrentPage(6);
        expect(navDataService.getPreviousPageNumber()).toEqual(3);

        done();
      });
    })();
  });

  it('should throw error if on last page and trying to get next', done => {
    inject([NavigationReportDataService], (navDataService: NavigationReportDataService) => {
      // Arrange
      const report = reportDataGenerator.getReportWithPages('00000000-0000-0000-0000-000000000000', 'MammaMRT', 10, testPagesNames);
      const spy = spyOn<any>(navDataService, 'swapReportServiceURL');

      // Act
      navDataService.postReport(report).then(() => {
        navDataService.setCurrentPage(1);
        expect(() => navDataService.getPreviousPageNumber()).toThrowError();

        done();
      });
    })();
  });

  // Setting id
  it('should set page id', done => {
    inject([NavigationReportDataService], (navDataService: NavigationReportDataService) => {
      // Arrange
      const report = reportDataGenerator.getReportWithPages('00000000-0000-0000-0000-000000000000', 'MammaMRT', 10, testPagesNames);
      const streamSpy = spyOn(streamServiceMock, 'emitStream');

      const spy = spyOn<any>(navDataService, 'swapReportServiceURL');

      // Act
      navDataService.postReport(report).then(() => {
        navDataService.setPageId(1, '00000000-0000-0000-0000-000000000013');
        const outReport = navDataService.getReportData();

        expect(outReport.pages[0].pageId).toEqual('00000000-0000-0000-0000-000000000013');
        expect(streamServiceMock.emitStream).toHaveBeenCalled();

        done();
      });
    })();
  });
});
