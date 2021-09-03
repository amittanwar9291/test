import { SlideRequestService } from '../slide-request.service';
import { NavigationReportDataService } from '@services/shared/navigation/navigation-report-data.service';
import { ChangeDetectionService } from '../change-detection.service';
import { ModuleLifecycleService } from '@services/shared/module-lifecycle/module-lifecycle.service';
import { MockModuleLifecycleService } from '../mocks/mock-module-lifecycle-service';
import { AppConfig } from 'app/app.config';
import { of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { IAppConfig } from '@interfaces/configs';
import { ReportUiModel } from '@models/shared/report';
import { ReportPageUiModel } from '@models/shared/navigation';

// tslint:disable: no-string-literal

describe('Change detection service', () => {
  let changeDetection: ChangeDetectionService;
  const mockModuleLifecycle = new MockModuleLifecycleService() as ModuleLifecycleService;

  const mockSaveService = {
    save(pageNumber: number) {}
  } as SlideRequestService;

  const mockNavDataService = {
    getCurrentPageNumber() {
      return 1;
    },
    getRaportPagesCount() {
      return 10;
    },
    setPageAsModified(pageNumber: number) {},
    getReportData(): ReportUiModel {
      const reportMock = new ReportUiModel();
      reportMock.pages = [];

      for (let i = 0; i < 10; i++) {
        const page = new ReportPageUiModel();
        page.pageNumber = i;

        reportMock.pages.push(page);
      }

      return reportMock;
    }
  } as NavigationReportDataService;

  beforeEach(() => {
    changeDetection = new ChangeDetectionService(mockSaveService, mockNavDataService, mockModuleLifecycle);
    AppConfig.settings = { autosaveTime: 100 } as IAppConfig;
  });

  afterEach(() => {
    mockModuleLifecycle.triggerDestroy();
  });

  it('should initialize', () => {
    mockModuleLifecycle.triggerInit();

    expect(changeDetection['pagesChangeModels'].length).toEqual(10);
    for (const page of changeDetection['pagesChangeModels']) {
      expect(page.triggerSubscription).toBeDefined();
    }
  });

  it('should save', completed => {
    const saveSpy = spyOn(mockSaveService, 'save').and.callThrough();
    mockModuleLifecycle.triggerInit();

    changeDetection.triggerChange(1);

    of({})
      .pipe(delay(110))
      .subscribe(() => {
        expect(saveSpy).toHaveBeenCalledWith(1);
        completed();
      });
  });

  it('should save current by default', completed => {
    const saveSpy = spyOn(mockSaveService, 'save').and.callThrough();
    mockModuleLifecycle.triggerInit();

    changeDetection.triggerChange();

    of({})
      .pipe(delay(110))
      .subscribe(() => {
        expect(saveSpy).toHaveBeenCalledWith(1);
        completed();
      });
  });

  it('should save with auditTime', completed => {
    const saveSpy = spyOn(mockSaveService, 'save').and.callThrough();
    mockModuleLifecycle.triggerInit();

    changeDetection.triggerChange(1);

    of({})
      .pipe(
        delay(50),
        tap(() => {
          changeDetection.triggerChange(1);
        }),
        delay(110)
      )
      .subscribe(() => {
        expect(saveSpy).toHaveBeenCalledTimes(1);
        completed();
      });
  });

  it('should omit audit time', () => {
    const saveSpy = spyOn(mockSaveService, 'save').and.callThrough();
    mockModuleLifecycle.triggerInit();

    changeDetection.triggerChange(1);
    changeDetection.skipAudit();

    expect(saveSpy).toHaveBeenCalledTimes(1);
  });

  it('should indicate savaing', completed => {
    mockModuleLifecycle.triggerInit();
    const expectedSequence = [false, true, false, true, false, true, false];
    const resultSequence = [];

    changeDetection.getAwaitStream().subscribe(value => {
      resultSequence.push(value);
    });

    changeDetection.triggerChange(1);

    of({})
      .pipe(
        delay(110),
        tap(() => {
          changeDetection.triggerChange(1);
        }),
        delay(20),
        tap(() => {
          changeDetection.triggerChange(1);
        }),
        delay(110),
        tap(() => {
          changeDetection.triggerChange(1);
          changeDetection.triggerChange(2);
          changeDetection.triggerChange(3);
        }),
        delay(110)
      )
      .subscribe(() => {
        expect(expectedSequence.length).toEqual(resultSequence.length);

        for (let i = 0; i < expectedSequence.length; i++) {
          expect(expectedSequence[i]).toEqual(resultSequence[i]);
        }

        completed();
      });
  });
});
