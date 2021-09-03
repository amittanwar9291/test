import { TestBed, inject } from '@angular/core/testing';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { IReport } from '@interfaces/report.interface';

import { NavigationService } from '@services/shared/navigation/navigation.service';
import { NavigationRestoreService } from '@services/shared/navigation/navigation-restore.service';
import { ReportDataGenerator, testPagesNames } from '@services/shared/navigation/tests/data-generators/report-data-generator';
import { ModuleLifecycleService } from '@services/shared/module-lifecycle/module-lifecycle.service';
import { SlideRequestService } from '../slide-request.service';

import { AbstractNavigationReportDataService } from '@abstractions/abstract-classes/navigation/navigation-report-data';
import { HttpListService } from '@abstractions/abstract-classes/http-list-service';

import { Guid } from '@models/shared/guid/guid';

import {
  MockNavigationService,
  MockNavigationDataService,
  MockRestoreService,
  MockModuleLifecycleService,
  MockHttpListService
} from '../mocks';
import { slideBaseTestConsts } from '../mocks/test-const';

// tslint:disable: no-string-literal

describe('Slide request service', () => {
  let mockNavService: MockNavigationService;
  let mockNavDataService: MockNavigationDataService;
  let mockNavRestoreService: MockRestoreService;
  let mockModuleLifecycles: MockModuleLifecycleService;
  let mockListService: MockHttpListService;

  const reportDataGenerator = new ReportDataGenerator();

  let pageModel: IReport;

  const savedReportId = '00000000-0000-0000-0000-000000000099';
  const savedPageId = '00000000-0000-0000-0000-000000000009';
  const savedTestPropId = 999;

  const getDelayPromise = () => {
    return of(null)
      .pipe(delay(10))
      .toPromise();
  };

  const getSavedModelVal = (): IReport => {
    return {
      id: savedPageId,
      reportId: savedReportId,
      testProp: savedTestPropId
    } as IReport;
  };

  beforeEach(() => {
    const reportData = reportDataGenerator.getReportWithPages('00000000-0000-0000-0000-000000000001', 'MammaMRT', 10, testPagesNames);

    mockNavService = new MockNavigationService();
    mockNavService.setReportData(reportData);

    mockNavDataService = new MockNavigationDataService();
    mockNavDataService.setReportData(reportData);

    mockNavRestoreService = new MockRestoreService();
    mockModuleLifecycles = new MockModuleLifecycleService();
    mockListService = new MockHttpListService();

    TestBed.configureTestingModule({
      providers: [
        { provide: NavigationService, useValue: mockNavService },
        { provide: AbstractNavigationReportDataService, useValue: mockNavDataService },
        { provide: NavigationRestoreService, useValue: mockNavRestoreService },
        { provide: ModuleLifecycleService, useValue: mockModuleLifecycles },
        { provide: HttpListService, useValue: mockListService }
      ]
    });

    pageModel = { id: Guid.createEmpty(), reportId: Guid.createEmpty() } as IReport;
  });

  afterEach(() => {});

  it('should initialize', done => {
    inject([SlideRequestService], (slideService: SlideRequestService) => {
      mockModuleLifecycles.triggerInit();

      expect(slideService['httpServicesHandler']).toBeDefined();
      expect(slideService['httpServicesHandler']['slidesData'].length).toEqual(9);

      expect(slideService.reportData).toBeDefined();
      expect(slideService.reportData.examinationType).toEqual('MammaMRT');
      done();
    })();
  });

  it('should initialize empty page', done => {
    inject([SlideRequestService], (slideService: SlideRequestService) => {
      mockModuleLifecycles.triggerInit();

      const model = {
        id: Guid.createEmpty(),
        reportId: Guid.createEmpty(),
        testProp: 0
      } as IReport;

      slideService.initializePage({ model }).then((outModel: IReport) => {
        expect(model).toBe(outModel);

        expect(slideService['httpServicesHandler']['slidesData'][4].model).toBe(model);
        expect(slideService['httpServicesHandler']['slidesData'][4].isBinded).toEqual(true);

        model['testProp'] = 99;
        expect(slideService['httpServicesHandler']['slidesData'][4].model['testProp']).toEqual(99);

        done();
      });
    })();
  });

  it('should initialize existing page', done => {
    const savedModelMock = getSavedModelVal();

    mockListService.setServiceModel(5, savedModelMock);
    mockNavDataService.reportData.pages[4].pageId = savedPageId;
    mockNavDataService.reportData.pages[4].reportId = savedReportId;

    inject([SlideRequestService], (slideService: SlideRequestService) => {
      mockModuleLifecycles.triggerInit();

      slideService.initializePage({ model: pageModel }).then((outModel: IReport) => {
        expect(outModel).not.toBe(pageModel);

        expect(outModel.id).toEqual(savedPageId);
        expect(outModel.reportId).toEqual(savedReportId);
        expect(outModel['testProp']).toEqual(savedTestPropId);

        done();
      });
    })();
  });

  it('should cache page model', done => {
    const savedModelMock = getSavedModelVal();

    mockListService.setServiceModel(5, savedModelMock);
    mockNavDataService.reportData.pages[4].pageId = savedPageId;
    mockNavDataService.reportData.pages[4].reportId = savedReportId;

    inject([SlideRequestService], (slideService: SlideRequestService) => {
      mockModuleLifecycles.triggerInit();

      let getSpy = null;
      slideService
        .initializePage({ model: pageModel })
        .then(() => {
          const pageModelSecond = {
            id: Guid.createEmpty(),
            reportId: Guid.createEmpty()
          } as IReport;

          getSpy = spyOn<any>(slideService['httpServicesHandler'], 'get');

          return slideService.initializePage({ model: pageModelSecond });
        })
        .then((outModel: IReport) => {
          expect(outModel).toBe(pageModel);

          expect(getSpy).not.toHaveBeenCalled();

          expect(outModel.id).toEqual(savedPageId);
          expect(outModel.reportId).toEqual(savedReportId);
          expect(outModel['testProp']).toEqual(savedTestPropId);

          done();
        });
    })();
  });

  it('should create report and page', done => {
    const emptyReport = reportDataGenerator.getReportWithPages(Guid.createEmpty(), 'MammaMRT', 10, testPagesNames);
    mockNavDataService.setReportData(emptyReport);

    inject([SlideRequestService], (slideService: SlideRequestService) => {
      mockModuleLifecycles.triggerInit();
      slideService
        .initializePage({ model: pageModel })
        .then(() => {
          pageModel['testProp'] = savedTestPropId;
          slideService.save();

          return getDelayPromise();
        })
        .then(() => {
          expect(mockNavDataService.reportData.id).toEqual(slideBaseTestConsts.reportPostId);
          expect(pageModel.reportId).toEqual(slideBaseTestConsts.reportPostId);

          expect(pageModel.id).toEqual(slideBaseTestConsts.pagePostId);
          expect(pageModel['testProp']).toEqual(savedTestPropId);

          done();
        });
    })();
  });

  it('should create report and save multiple pages', done => {
    const emptyReport = reportDataGenerator.getReportWithPages(Guid.createEmpty(), 'MammaMRT', 10, testPagesNames);
    mockNavDataService.setReportData(emptyReport);

    mockNavService.setPage(1);

    inject([SlideRequestService], (slideService: SlideRequestService) => {
      mockModuleLifecycles.triggerInit();

      const firstPageModel = { id: Guid.createEmpty(), reportId: Guid.createEmpty() } as IReport;
      const secondPageModel = { id: Guid.createEmpty(), reportId: Guid.createEmpty() } as IReport;

      slideService
        .initializePage({ model: firstPageModel })
        .then(() => {
          firstPageModel['testProp'] = savedTestPropId;
          slideService.save();

          mockNavService.setPage(2);
          return slideService.initializePage({ model: secondPageModel });
        })
        .then(() => {
          secondPageModel['testProp'] = savedTestPropId;
          slideService.save();

          return getDelayPromise();
        })
        .then(() => {
          expect(mockNavDataService.reportData.id).toEqual(slideBaseTestConsts.reportPostId);
          expect(firstPageModel.reportId).toEqual(slideBaseTestConsts.reportPostId);
          expect(secondPageModel.reportId).toEqual(slideBaseTestConsts.reportPostId);

          expect(firstPageModel.id).toEqual(slideBaseTestConsts.pagePostId);
          expect(firstPageModel['testProp']).toEqual(savedTestPropId);

          expect(secondPageModel.id).toEqual(slideBaseTestConsts.pagePostId);
          expect(secondPageModel['testProp']).toEqual(savedTestPropId);

          done();
        });
    })();
  });

  it('should create pages', done => {
    inject([SlideRequestService], (slideService: SlideRequestService) => {
      mockModuleLifecycles.triggerInit();

      slideService
        .initializePage({ model: pageModel })
        .then(() => {
          pageModel['testProp'] = savedTestPropId;
          slideService.save();

          return getDelayPromise();
        })
        .then(() => {
          expect(pageModel.reportId).toEqual(slideBaseTestConsts.pagePostId);

          expect(pageModel.id).toEqual(slideBaseTestConsts.pagePostId);
          expect(pageModel['testProp']).toEqual(savedTestPropId);

          expect(slideService['httpServicesHandler']['slidesData'][4].model.id).toEqual(slideBaseTestConsts.pagePostId);
          expect(slideService['httpServicesHandler']['slidesData'][4].model['testProp']).toEqual(savedTestPropId);

          done();
        });
    })();
  });

  it('should update page', done => {
    inject([SlideRequestService], (slideService: SlideRequestService) => {
      mockModuleLifecycles.triggerInit();

      slideService
        .initializePage({ model: pageModel })
        .then(() => {
          pageModel['testProp'] = savedTestPropId;
          slideService.save();

          return getDelayPromise();
        })
        .then(() => {
          pageModel['testProp'] = 9;
          slideService.save();

          return getDelayPromise();
        })
        .then(() => {
          expect(pageModel.reportId).toEqual(slideBaseTestConsts.pagePostId);

          expect(pageModel.id).toEqual(slideBaseTestConsts.pagePostId);
          expect(pageModel['testProp']).toEqual(9);

          expect(slideService['httpServicesHandler']['slidesData'][4].model.id).toEqual(slideBaseTestConsts.pagePostId);
          expect(slideService['httpServicesHandler']['slidesData'][4].model['testProp']).toEqual(9);

          done();
        });
    })();
  });

  it('should invoke get callback', done => {
    const savedModelMock = getSavedModelVal();

    mockListService.setServiceModel(5, savedModelMock);
    mockNavDataService.reportData.pages[4].pageId = savedPageId;
    mockNavDataService.reportData.pages[4].reportId = savedReportId;

    inject([SlideRequestService], (slideService: SlideRequestService) => {
      mockModuleLifecycles.triggerInit();

      const spyObject = { callback: () => {} };
      const spyCallback = spyOn(spyObject, 'callback');

      slideService.setGetCallback(spyObject.callback);
      slideService.initializePage({ model: pageModel }).then((outModel: IReport) => {
        expect(spyCallback).toHaveBeenCalled();
        done();
      });
    })();
  });

  it('should omit get callback', done => {
    const savedModelMock = getSavedModelVal();

    mockListService.setServiceModel(5, savedModelMock);
    mockNavDataService.reportData.pages[4].pageId = savedPageId;
    mockNavDataService.reportData.pages[4].reportId = savedReportId;

    inject([SlideRequestService], (slideService: SlideRequestService) => {
      mockModuleLifecycles.triggerInit();

      const spyObject = { callback: () => {} };
      const spyCallback = spyOn(spyObject, 'callback');

      slideService.setGetCallback(spyObject.callback);
      slideService.initializePage({ model: pageModel }, 5).then((outModel: IReport) => {
        expect(spyCallback).not.toHaveBeenCalled();
        done();
      });
    })();
  });

  it('should update page', done => {
    inject([SlideRequestService], (slideService: SlideRequestService) => {
      mockModuleLifecycles.triggerInit();

      slideService
        .initializePage({ model: pageModel })
        .then(() => {
          pageModel['testProp'] = savedTestPropId;
          slideService.save();

          return getDelayPromise();
        })
        .then(() => {
          pageModel['testProp'] = 9;
          slideService.save();

          return getDelayPromise();
        })
        .then(() => {
          expect(pageModel.reportId).toEqual(slideBaseTestConsts.pagePostId);

          expect(pageModel.id).toEqual(slideBaseTestConsts.pagePostId);
          expect(pageModel['testProp']).toEqual(9);

          expect(slideService['httpServicesHandler']['slidesData'][4].model.id).toEqual(slideBaseTestConsts.pagePostId);
          expect(slideService['httpServicesHandler']['slidesData'][4].model['testProp']).toEqual(9);

          done();
        });
    })();
  });

  it('should invoke save callback', done => {
    inject([SlideRequestService], (slideService: SlideRequestService) => {
      mockModuleLifecycles.triggerInit();

      const spyObject = { callback: () => {} };
      const spyCallback = spyOn(spyObject, 'callback');

      slideService.setPreSaveCallback(5, spyObject.callback);

      slideService
        .initializePage({ model: pageModel })
        .then(() => {
          slideService.save(); // post

          return getDelayPromise();
        })
        .then(() => {
          expect(spyCallback).toHaveBeenCalled();

          slideService.save(); // update

          return getDelayPromise();
        })
        .then(() => {
          expect(spyCallback).toHaveBeenCalledTimes(2);
          done();
        });
    })();
  });

  it('should indicate saving', done => {
    const emptyReport = reportDataGenerator.getReportWithPages(Guid.createEmpty(), 'MammaMRT', 10, testPagesNames);
    mockNavDataService.setReportData(emptyReport);

    inject([SlideRequestService], (slideService: SlideRequestService) => {
      mockModuleLifecycles.triggerInit();

      const expectedArr = [false, true, false, true, false];

      const resultArr = [];
      slideService.getAwaitStream().subscribe(val => {
        resultArr.push(val);
      });

      slideService
        .initializePage({ model: pageModel })
        .then(() => {
          slideService.save();
          return getDelayPromise();
        })
        .then(() => {
          slideService.save();
          return getDelayPromise();
        })
        .then(() => {
          expect(resultArr.length).toEqual(expectedArr.length);

          for (let i = 0; i < expectedArr.length; i++) {
            expect(resultArr[i]).toEqual(expectedArr[i]);
          }

          done();
        });
    })();
  });
});
