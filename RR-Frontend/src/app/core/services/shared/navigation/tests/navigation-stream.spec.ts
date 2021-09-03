import { async, TestBed, inject } from '@angular/core/testing';

import { TranslateService } from '@ngx-translate/core';
import { MockTranslateService } from './mocks/mock-translate-service';
import { NavigationStreamService } from '../navigation-stream.service';

import { isEqual } from 'lodash';
import { NavigationStreamModel } from '@models/shared/navigation/navigation-stream.model';
import { skip, take } from 'rxjs/operators';
import { ReportDataGenerator } from './data-generators/report-data-generator';

describe('NavigationDataService ', () => {
  let transateServiceMock: MockTranslateService;
  let reportDataGenerator: ReportDataGenerator;

  beforeEach(async(() => {
    transateServiceMock = new MockTranslateService();
    reportDataGenerator = new ReportDataGenerator();

    TestBed.configureTestingModule({
      providers: [{ provide: TranslateService, useValue: transateServiceMock }]
    });
  }));

  it('should return empty stream data', done => {
    inject([NavigationStreamService], (navStreamService: NavigationStreamService) => {
      navStreamService.getStream().subscribe(streamModel => {
        const emptyModel = new NavigationStreamModel();
        expect(isEqual(streamModel, emptyModel)).toBeTruthy();
        done();
      });
    })();
  });

  it('should trigger subscription on emit', done => {
    inject([NavigationStreamService], (navStreamService: NavigationStreamService) => {
      // arrange
      const report = reportDataGenerator.getReportWithPages('00000000-0000-0000-0000-000000000001', 'TestMRT', 10, Array(10).fill('none'));

      // act
      navStreamService
        .getStream()
        .pipe(skip(1), take(1))
        .subscribe(streamModel => {
          expect(streamModel.pages.length).toEqual(11);

          done();
        });

      navStreamService.emitStream(report, 1);
    })();
  });

  it('should throw error if there are no pages', inject([NavigationStreamService], (navStreamService: NavigationStreamService) => {
    // arrange
    const report = reportDataGenerator.getReportWithoutPages('00000000-0000-0000-0000-000000000001', 'TestMRT');

    // act
    expect(() => {
      navStreamService.emitStream(null, 1);
    }).toThrowError();
    expect(() => {
      navStreamService.emitStream(undefined, 1);
    }).toThrowError();

    expect(() => {
      navStreamService.emitStream(report, 1);
    }).toThrowError();
  }));

  it('should correctry check if page is first', done => {
    inject([NavigationStreamService], (navStreamService: NavigationStreamService) => {
      // arrange
      let report = reportDataGenerator.getReportWithPages('00000000-0000-0000-0000-000000000001', 'TestMRT', 10, Array(10).fill('none'));

      // act
      navStreamService
        .getStream()
        .pipe(skip(1), take(2))
        .subscribe(streamModel => {
          expect(streamModel.isFirst).toBeTruthy();
        });

      navStreamService
        .getStream()
        .pipe(skip(3), take(2))
        .subscribe(streamModel => {
          expect(streamModel.isFirst).toBeFalsy();
          done();
        });

      navStreamService.emitStream(report, 1);

      report.pages.splice(0, 1);
      navStreamService.emitStream(report, 2);

      report = reportDataGenerator.getReportWithPages('00000000-0000-0000-0000-000000000001', 'TestMRT', 10, Array(10).fill('none'));
      navStreamService.emitStream(report, 2);

      report.pages.splice(1, 1);
      navStreamService.emitStream(report, 2);
    })();
  });

  it('should correctry check if page is last', done => {
    inject([NavigationStreamService], (navStreamService: NavigationStreamService) => {
      // arrange
      const report = reportDataGenerator.getReportWithPages('00000000-0000-0000-0000-000000000001', 'TestMRT', 10, Array(10).fill('none'));

      // act
      navStreamService
        .getStream()
        .pipe(skip(1), take(1))
        .subscribe(streamModel => {
          expect(streamModel.isLast).toBeTruthy();
        });

      navStreamService
        .getStream()
        .pipe(skip(2), take(1))
        .subscribe(streamModel => {
          expect(streamModel.isLast).toBeFalsy();
          done();
        });

      navStreamService.emitStream(report, 10);

      navStreamService.emitStream(report, 6);
    })();
  });
});
