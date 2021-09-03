import { TestBed } from '@angular/core/testing';

import { MockHttpService } from '@services/mocks/http-service.mock';
import * as _ from 'lodash';
import { HttpAgregate } from '../http-agregate';
import { ReportPageApiModel } from '@models/shared/navigation';
import { Guid } from '@models/shared/guid/guid';
import { delay, tap } from 'rxjs/operators';
import { of } from 'rxjs';

// tslint:disable: no-string-literal

describe('Http Agregate', () => {
  let httpAgregateEmpty: HttpAgregate;
  let httpAgregateSaved: HttpAgregate;
  let mockHttpList: MockHttpService[];

  const slidePagesArrayEmpty = [
    new ReportPageApiModel(undefined, 'MammaMRT_Anamnesis'),
    new ReportPageApiModel(undefined, 'MammaMRT_Bones'),
    new ReportPageApiModel(undefined, 'MammaMRT_Rating'),
    new ReportPageApiModel() // one more to accomodate for befund prosa
  ];

  const slidePagesArraySaved = [
    new ReportPageApiModel('00000000-0000-0000-0000-000000000001', 'MammaMRT_Anamnesis'),
    new ReportPageApiModel('00000000-0000-0000-0000-000000000002', 'MammaMRT_Bones'),
    new ReportPageApiModel('00000000-0000-0000-0000-000000000003', 'MammaMRT_Rating'),
    new ReportPageApiModel() // one more to accomodate for befund prosa
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [HttpAgregate]
    });

    const mockHttpService = new MockHttpService();
    mockHttpList = [mockHttpService, mockHttpService, mockHttpService];

    httpAgregateEmpty = new HttpAgregate(mockHttpList, slidePagesArrayEmpty);
    httpAgregateSaved = new HttpAgregate(mockHttpList, slidePagesArraySaved);
  });

  afterEach(() => {
    httpAgregateSaved.destroy();
    httpAgregateEmpty.destroy();
  });

  it('should be created and defined', () => {
    expect(httpAgregateEmpty).toBeDefined();
  });

  it('should correctly initialize pages', () => {
    expect(httpAgregateEmpty['slidesData'].length).toEqual(3);

    for (let i = 0; i < 3; i++) {
      expect(httpAgregateEmpty['slidesData'][i].service).toBeDefined();
      expect(httpAgregateEmpty['slidesData'][i].pageId).toEqual('00000000-0000-0000-0000-000000000000');

      expect(httpAgregateSaved['slidesData'][i].service).toBeDefined();
      expect(httpAgregateSaved['slidesData'][i].pageId).toEqual('00000000-0000-0000-0000-00000000000' + (i + 1));
    }
  });

  it('slide data should be as long as shortest input array', () => {
    let localHttpAgregate = new HttpAgregate(mockHttpList, slidePagesArraySaved.slice(0, 3)); // 3 as one is for befund prosa
    expect(localHttpAgregate['slidesData'].length).toEqual(2);
    localHttpAgregate.destroy();

    localHttpAgregate = new HttpAgregate(mockHttpList.slice(0, 2), slidePagesArraySaved);
    expect(localHttpAgregate['slidesData'].length).toEqual(2);
    localHttpAgregate.destroy();
  });

  it('should set refference to model', () => {
    // arrange
    const model = { id: '00000000-0000-0000-0000-000000000000', reportId: '00000000-0000-0000-0000-000000000000' };
    httpAgregateEmpty.setModelRef({ model }, 'MammaMRT_Anamnesis', 0);

    // act
    model.id = '00000000-0000-0000-0000-000000000010';

    // assert
    expect(httpAgregateEmpty['slidesData'][0].model).toBeTruthy();
    expect(httpAgregateEmpty['slidesData'][0].model.id).toEqual('00000000-0000-0000-0000-000000000010');
    expect(httpAgregateEmpty['slidesData'][0].model).toBe(model);
  });

  it('should set create subscriptions', () => {
    // arrange
    const model = { id: '00000000-0000-0000-0000-000000000000', reportId: '00000000-0000-0000-0000-000000000000' };
    httpAgregateEmpty.setModelRef({ model }, 'MammaMRT_Anamnesis', 0);

    // assert
    expect(httpAgregateEmpty['slidesData'][0].updateSubscription).toBeDefined();
    expect(httpAgregateEmpty['slidesData'][0].postSubscription).toBeDefined();
  });

  it('should throw when setting incorrect model', () => {
    // arrange
    const model = { id: '00000000-0000-0000-0000-000000000000', reportId: '00000000-0000-0000-0000-000000000000' };
    httpAgregateEmpty.setModelRef({ model }, 'MammaMRT_Anamnesis', 0);

    // assert
    expect(() => {
      httpAgregateEmpty.setModelRef({ model }, 'MammaMRT_NotCorrectSite', 0);
    }).toThrow(new Error('Error while setting model refference!'));
  });

  it('should get on fisrt initialization of page with pageId', done => {
    // arrange
    const model = { id: '00000000-0000-0000-0000-000000000000', reportId: '00000000-0000-0000-0000-000000000005' };
    spyOn(httpAgregateSaved['slidesData'][0].requestHandler, 'get').and.callThrough();

    // act
    httpAgregateSaved.setModelRef({ model }, 'MammaMRT_Anamnesis', 0);
    httpAgregateSaved.initializeData(0).subscribe(modelGet => {
      expect(httpAgregateSaved['slidesData'][0].requestHandler.get).toHaveBeenCalled();
      expect(model).not.toEqual(modelGet as any);

      done();
    });
  });

  it('should return cached model on first initialization of page without pageID', done => {
    // arrange
    const model = { id: '00000000-0000-0000-0000-000000000002', reportId: '00000000-0000-0000-0000-000000000005' };
    spyOn(httpAgregateSaved['slidesData'][0].requestHandler, 'get').and.callThrough();

    // act
    httpAgregateSaved.setModelRef({ model }, 'MammaMRT_Anamnesis', 0);
    httpAgregateSaved.initializeData(0).subscribe(modelGet => {
      expect(httpAgregateSaved['slidesData'][0].requestHandler.get).not.toHaveBeenCalled();
      expect(model).toEqual(modelGet as any);

      done();
    });
  });

  it('should set page reportId', () => {
    // arrange
    const model = { id: '00000000-0000-0000-0000-000000000002', reportId: '00000000-0000-0000-0000-000000000000' };

    // act
    httpAgregateSaved.setModelRef({ model }, 'MammaMRT_Anamnesis', 0);
    httpAgregateSaved.setPageReportId(0, '00000000-0000-0000-0000-000000000099');

    // assert
    expect(httpAgregateSaved['slidesData'][0].model.reportId).toEqual('00000000-0000-0000-0000-000000000099');
  });

  it('should save new page', done => {
    // arrange
    const model = { id: '00000000-0000-0000-0000-000000000000', reportId: '00000000-0000-0000-0000-000000000010' };
    spyOn(httpAgregateSaved['slidesData'][0].requestHandler, 'post').and.callThrough();
    spyOn(httpAgregateSaved['slidesData'][0].requestHandler, 'update').and.callThrough();

    // act
    httpAgregateSaved.setModelRef({ model }, 'MammaMRT_Anamnesis', 0);
    httpAgregateSaved.save(0);

    // assert
    of({})
      .pipe(delay(510))
      .subscribe(() => {
        expect(httpAgregateSaved['slidesData'][0].requestHandler.post).toHaveBeenCalled();
        expect(httpAgregateSaved['slidesData'][0].requestHandler.update).not.toHaveBeenCalled();
        expect(httpAgregateSaved['slidesData'][0].model.id).toEqual('00000000-0000-0000-0000-000000000001');

        done();
      });
  });

  it('should update page', done => {
    // arrange
    const model = { id: '00000000-0000-0000-0000-000000000001', reportId: '00000000-0000-0000-0000-000000000010' };
    spyOn(httpAgregateSaved['slidesData'][0].requestHandler, 'post').and.callThrough();
    spyOn(httpAgregateSaved['slidesData'][0].requestHandler, 'update').and.callThrough();

    // act
    httpAgregateSaved.setModelRef({ model }, 'MammaMRT_Anamnesis', 0);
    httpAgregateSaved.save(0);

    // assert
    of({})
      .pipe(delay(510))
      .subscribe(() => {
        expect(httpAgregateSaved['slidesData'][0].requestHandler.post).not.toHaveBeenCalled();
        expect(httpAgregateSaved['slidesData'][0].requestHandler.update).toHaveBeenCalled();
        expect(httpAgregateSaved['slidesData'][0].model.id).toEqual('00000000-0000-0000-0000-000000000001');

        done();
      });
  });

  it('should save pages in parallel', done => {
    // arrange
    const model = { id: '00000000-0000-0000-0000-000000000000', reportId: '00000000-0000-0000-0000-000000000010' };
    const model1 = { id: '00000000-0000-0000-0000-000000000001', reportId: '00000000-0000-0000-0000-000000000010' };
    const model2 = { id: '00000000-0000-0000-0000-000000000000', reportId: '00000000-0000-0000-0000-000000000010' };

    spyOn(httpAgregateSaved['slidesData'][0].requestHandler, 'post').and.callThrough();
    spyOn(httpAgregateSaved['slidesData'][1].requestHandler, 'update').and.callThrough();
    spyOn(httpAgregateSaved['slidesData'][2].requestHandler, 'post').and.callThrough();

    // act
    httpAgregateSaved.setModelRef({ model }, 'MammaMRT_Anamnesis', 0);
    httpAgregateSaved.setModelRef({ model: model1 }, 'MammaMRT_AnamnesisExtencion', 1);
    httpAgregateSaved.setModelRef({ model: model2 }, 'MammaMRT_AnamnesisExtencionButBetter', 2);

    httpAgregateSaved.save(0);
    httpAgregateSaved.save(1);
    httpAgregateSaved.save(2);

    // assert
    of({})
      .pipe(delay(510))
      .subscribe(() => {
        expect(httpAgregateSaved['slidesData'][0].requestHandler.post).toHaveBeenCalled();
        expect(httpAgregateSaved['slidesData'][1].requestHandler.update).toHaveBeenCalled();
        expect(httpAgregateSaved['slidesData'][2].requestHandler.post).toHaveBeenCalled();

        done();
      });
  });

  it('should not queue requests', done => {
    // arange
    const model = { id: '00000000-0000-0000-0000-000000000001', reportId: '00000000-0000-0000-0000-000000000010' };
    spyOn(httpAgregateSaved['slidesData'][0].requestHandler, 'update').and.callThrough();

    // act
    httpAgregateSaved.setModelRef({ model }, 'MammaMRT_Anamnesis', 0);

    httpAgregateSaved.save(0);
    httpAgregateSaved.save(0);

    // assert
    of({})
      .pipe(delay(1010))
      .subscribe(() => {
        expect(httpAgregateSaved['slidesData'][0].requestHandler.update).toHaveBeenCalledTimes(1);

        done();
      });
  });

  it('should indicate when is saving in awaitStream', done => {
    // arange
    const model = { id: '00000000-0000-0000-0000-000000000001', reportId: '00000000-0000-0000-0000-000000000010' };
    spyOn(httpAgregateSaved['slidesData'][0].requestHandler, 'update').and.callThrough();
    spyOn(httpAgregateSaved['slidesData'][1].requestHandler, 'update').and.callThrough();

    const awaitValues = [];
    const expectedValues = [false, true, false, true, false];

    httpAgregateSaved.getAwaitStream().subscribe(val => {
      awaitValues.push(val);
    });

    // act
    httpAgregateSaved.setModelRef({ model }, 'MammaMRT_Anamnesis', 0);
    httpAgregateSaved.setModelRef({ model }, 'MammaMRT_AnamnesisExtencion', 1);

    httpAgregateSaved.save(0);
    of({})
      .pipe(
        delay(100),
        tap(() => {
          httpAgregateSaved.save(1);
        }),
        delay(550),
        tap(() => {
          httpAgregateSaved.save(0);
        }),
        delay(550)
      )
      .subscribe(() => {
        // assert
        expect(awaitValues.length).toEqual(expectedValues.length);
        for (let i = 0; i < expectedValues.length; i++) {
          expect(awaitValues[i]).toEqual(expectedValues[i]);
        }

        done();
      });
  });

  it('should reset itself', () => {
    // arrange
    const model = { id: '00000000-0000-0000-0000-000000000000', reportId: '00000000-0000-0000-0000-000000000000' };
    httpAgregateEmpty.setModelRef({ model }, 'MammaMRT_Anamnesis', 0);

    // act
    httpAgregateEmpty.reset();

    // assert
    expect(httpAgregateEmpty['slidesData'][0].model).not.toBeDefined();
  });
});
