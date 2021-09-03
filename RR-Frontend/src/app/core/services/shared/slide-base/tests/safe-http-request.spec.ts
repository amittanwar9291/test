import { async } from '@angular/core/testing';

import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { MockHttpService } from '@services/mocks/http-service.mock';
import { SafeHttpRequest } from '../safe-http-request';

describe('Pausable http request', () => {
  let mockHttp: MockHttpService;
  let pausableRequest: SafeHttpRequest;

  beforeEach(async(() => {}));

  beforeEach(() => {
    mockHttp = new MockHttpService();
    pausableRequest = new SafeHttpRequest(mockHttp);
  });

  afterAll(() => {
    pausableRequest.destroy();
  });

  // POST tests
  it('should post', completed => {
    const modelStub = { id: '00000000-0000-0000-0000-000000000000', value: 5 };

    const postSubscription = pausableRequest.getPostStream();
    postSubscription.subscribe(outModel => {
      expect(outModel.id).toEqual('00000000-0000-0000-0000-000000000001');
      completed();
    });

    pausableRequest.post(modelStub);
  });

  it('should disallow any posts', completed => {
    const modelStub = { id: '00000000-0000-0000-0000-000000000000', value: 5 };

    let counter = 0;
    const postSubscription = pausableRequest.getPostStream();
    postSubscription.subscribe(() => {
      counter++;
    });

    pausableRequest.disable();

    pausableRequest.post(modelStub);

    of({})
      .pipe(delay(510))
      .subscribe(() => {
        expect(counter).toEqual(0);
        completed();
      });
  });

  it('should not stop any outcoming post after disabling', completed => {
    const modelStub = { id: '00000000-0000-0000-0000-000000000000', value: 5 };

    let counter = 0;
    const postSubscription = pausableRequest.getPostStream();
    postSubscription.subscribe(() => {
      counter++;
    });

    pausableRequest.post(modelStub);
    pausableRequest.disable();

    of({})
      .pipe(delay(510))
      .subscribe(() => {
        expect(counter).toEqual(1);
        completed();
      });
  });

  it('should throw when trying to post twice (after fist post completion)', async completed => {
    const modelStub = { id: '00000000-0000-0000-0000-000000000000', value: 5 };

    pausableRequest.post(modelStub);
    await mockHttp.sleep(510);
    expect(() => {
      pausableRequest.post(modelStub);
    }).toThrowError();
    completed();
  });

  it('should throw when trying to post twice (before first post request is fully fired)', async completed => {
    const modelStub = { id: '00000000-0000-0000-0000-000000000000', value: 5 };

    pausableRequest.post(modelStub);
    expect(() => {
      pausableRequest.post(modelStub);
    }).toThrowError();
    completed();
  });

  it('should throw when trying to post twice (while first post request is pending)', async completed => {
    const modelStub = { id: '00000000-0000-0000-0000-000000000000', value: 5 };

    pausableRequest.post(modelStub);
    await mockHttp.sleep(250);
    expect(() => {
      pausableRequest.post(modelStub);
    }).toThrowError();
    completed();
  });

  it('should throw when trying to post with id', () => {
    const modelStub = { id: '00000000-0000-0000-0000-000000000001', value: 5 };

    expect(() => {
      pausableRequest.post(modelStub);
    }).toThrowError();
  });

  it('should block updates while posting', async completed => {
    let counter = 0;
    const updateSubscription = pausableRequest.getUpdateStream();
    updateSubscription.subscribe(() => {
      counter++;
    });

    pausableRequest.post({ id: '00000000-0000-0000-0000-000000000000' });
    pausableRequest.update({ id: '00000000-0000-0000-0000-000000000001' });
    await mockHttp.sleep(510);
    pausableRequest.update({ id: '00000000-0000-0000-0000-000000000001' });

    of({})
      .pipe(delay(510))
      .subscribe(() => {
        expect(counter).toEqual(1);
        completed();
      });
  });

  // UPDATE tests
  // tslint:disable: no-string-literal
  it('should update', completed => {
    const modelStub = { id: '00000000-0000-0000-0000-000000000001', value: 5 };

    const updateSubscription = pausableRequest.getUpdateStream();
    updateSubscription.subscribe(outModel => {
      expect(outModel['updatedProp']).toEqual(1);
      completed();
    });

    pausableRequest.update(modelStub);
  });

  it('should disallow any updates', completed => {
    const modelStub = { id: '00000000-0000-0000-0000-000000000001', value: 5 };

    let counter = 0;
    const updateSubscription = pausableRequest.getUpdateStream();
    updateSubscription.subscribe(() => {
      counter++;
    });

    pausableRequest.disable();

    pausableRequest.update(modelStub);
    pausableRequest.update(modelStub);

    of({})
      .pipe(delay(1010))
      .subscribe(() => {
        expect(counter).toEqual(0);
        completed();
      });
  });

  it('should not stop any outcoming updates after disabling', completed => {
    const modelStub = { id: '00000000-0000-0000-0000-000000000001', value: 5 };

    let counter = 0;
    const updateSubscription = pausableRequest.getUpdateStream();
    updateSubscription.subscribe(() => {
      counter++;
    });

    pausableRequest.update(modelStub);
    pausableRequest.disable();

    of({})
      .pipe(delay(510))
      .subscribe(() => {
        expect(counter).toEqual(1);
        completed();
      });
  });

  it('should throw when trying to update without id', () => {
    const modelStub = { id: '00000000-0000-0000-0000-000000000000', value: 5 };

    expect(() => {
      pausableRequest.update(modelStub);
    }).toThrowError();
  });

  // GET tests
  it('should get', completed => {
    const getSubscribtion = pausableRequest.get('00000000-0000-0000-0000-000000000010').subscribe(output => {
      output.id = '00000000-0000-0000-0000-000000000010';
      completed();
    });
  });

  it('should not stop any outcoming requests before get', completed => {
    let postCounter = 0;
    const postSubscribtion = pausableRequest.getPostStream();
    postSubscribtion.subscribe(() => {
      postCounter++;
    });

    pausableRequest.post({ id: '00000000-0000-0000-0000-000000000000' });

    const getSubscribtionBis = pausableRequest.get(11).subscribe(() => {
      of({})
        .pipe(delay(550))
        .subscribe(() => {
          expect(postCounter).toEqual(1);
          completed();
        });
    });
  });

  it('should block any posts while getting', async completed => {
    let postCounter = 0;
    const postSubscribtion = pausableRequest.getPostStream();
    postSubscribtion.subscribe(() => {
      postCounter++;
    });

    pausableRequest.get(10).subscribe(() => {}); // subscription is needed to finish get
    pausableRequest.post({ id: '00000000-0000-0000-0000-000000000000' });
    await mockHttp.sleep(510);
    pausableRequest.post({ id: '00000000-0000-0000-0000-000000000000' });

    of({})
      .pipe(delay(510))
      .subscribe(() => {
        expect(postCounter).toEqual(1);
        completed();
      });
  });

  it('should block any updates while get', async completed => {
    let updateCounter = 0;
    const updateSubscribtion = pausableRequest.getUpdateStream();
    updateSubscribtion.subscribe(() => {
      updateCounter++;
    });

    pausableRequest.get('00000000-0000-0000-0000-000000000010').subscribe(() => {}); // subscribtion is needed to finish
    pausableRequest.update({ id: '00000000-0000-0000-0000-000000000012' });
    await mockHttp.sleep(510);
    pausableRequest.update({ id: '00000000-0000-0000-0000-000000000012' });

    of({})
      .pipe(delay(510))
      .subscribe(() => {
        expect(updateCounter).toEqual(1);
        completed();
      });
  });

  // Await tests
  it('should not indicate requests pending on default', () => {
    pausableRequest.getSaveAwaitStream().subscribe(value => {
      expect(value).toBe(false);
    });
  });

  it('should indicate pending requests while post or get', async () => {
    const resultArr = [];
    pausableRequest.getSaveAwaitStream().subscribe(value => {
      resultArr.push(value);
    });

    pausableRequest.post({ id: '00000000-0000-0000-0000-000000000000' });
    await mockHttp.sleep(510);
    pausableRequest.update({ id: '00000000-0000-0000-0000-000000000001' });
    await mockHttp.sleep(510);

    let correctArr = [false, true, false, true, false];

    expect(resultArr.length).toBe(correctArr.length);

    for (let i = 0; i < resultArr.length; i++) {
      expect(resultArr[i]).toBe(correctArr[i]);
    }

    resultArr.length = 0;

    pausableRequest.update({ id: '00000000-0000-0000-0000-000000000001' });
    pausableRequest.update({ id: '00000000-0000-0000-0000-000000000001' });
    await mockHttp.sleep(1050);

    correctArr = [true, false];

    expect(resultArr.length).toBe(correctArr.length);

    for (let i = 0; i < resultArr.length; i++) {
      expect(resultArr[i]).toBe(correctArr[i]);
    }
  });

  // Other test
  it('should not trigger post or update when enabling or disabling', async completed => {
    let counter = 0;
    const postSubscribtion = pausableRequest.getPostStream();
    postSubscribtion.subscribe(() => {
      counter++;
    });

    const updateSubscribtion = pausableRequest.getUpdateStream();
    updateSubscribtion.subscribe(() => {
      counter++;
    });

    pausableRequest.post({ id: '00000000-0000-0000-0000-000000000000' });
    await mockHttp.sleep(510);
    pausableRequest.update({ id: '00000010-0001-1111-1111-000000000001' });
    await mockHttp.sleep(510);

    pausableRequest.enable();
    pausableRequest.disable();

    of({})
      .pipe(delay(510))
      .subscribe(() => {
        expect(counter).toEqual(2);
        completed();
      });
  });
});

// TODO
// add http errors test
//  add http errors corection
