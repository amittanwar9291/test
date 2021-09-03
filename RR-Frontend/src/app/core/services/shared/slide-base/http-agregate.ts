import { HttpParams, HttpHeaders } from '@angular/common/http';

import { Subscription, of, Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { share, distinctUntilChanged } from 'rxjs/operators';

import { IModel } from '@interfaces/model.interface';
import { IReport } from '@interfaces/report.interface';
import { IHttpService } from '@interfaces/http-service.interface';

import { SlideHttpData } from '@models/shared/slide/slide-http-data.model';
import { ReportPageApiModel } from '@models/shared/navigation';

import { cloneDeep, includes, assign } from 'lodash';
import { Guid } from '@models/shared/guid/guid';
import { DataStructure } from '@models/shared/slide/data-structure.model';
import { INoParamConstructor } from '@interfaces/no-param-constructor.interface';

export class HttpAgregate {
  private slidesData: SlideHttpData[] = [];
  private subscriptions: Subscription[] = [];

  private isAnyAwaiting$: BehaviorSubject<boolean>;
  private combinedPendingsSubscription: Subscription;

  private getCallback: (out: IModel) => void;

  constructor(slideHttpServices: IHttpService[], reportPages: ReportPageApiModel[]) {
    this.initializeSlidesData(slideHttpServices, reportPages);
  }

  // Initialization methods
  setModelRef(modelRef: { model: IReport }, slideType: string, slideNumber: number) {
    if (this.canSetModelRef(slideType, slideNumber)) {
      const slideModel = this.slidesData[slideNumber];

      if (!slideModel.model && !slideModel.isBinded) {
        slideModel.model = modelRef.model;
        slideModel.typeName = slideType;
        slideModel.modelStructure = new DataStructure(slideModel.model);

        this.createHttpSubscriptions(slideModel);

        slideModel.isBinded = true;
      } else {
        modelRef.model = slideModel.model;
      }
    } else {
      throw new Error('Error while setting model refference!');
    }
  }

  setPostCallback(pageNumber: number, callback: (out: IModel) => void): void {
    if (this.slidesData[pageNumber - 1]) {
      this.slidesData[pageNumber - 1].postCallback = callback;
    } else {
      throw new Error('Error while setting post callback: slide data is incorrect!');
    }
  }

  setUpdateCallback(pageNumber: number, callback: (out: IModel) => void): void {
    if (this.slidesData[pageNumber - 1]) {
      this.slidesData[pageNumber - 1].updateCallback = callback;
    } else {
      throw new Error('Error while setting update callback: slide data is incorrect!');
    }
  }

  setPrePostCallback(pageNumber: number, callback: () => void): void {
    if (this.slidesData[pageNumber - 1]) {
      this.slidesData[pageNumber - 1].prePostCallback = callback;
    } else {
      throw new Error('Error while setting pre post callback: slide data is incorrect!');
    }
  }

  setPreUpdateCallback(pageNumber: number, callback: () => void): void {
    if (this.slidesData[pageNumber - 1]) {
      this.slidesData[pageNumber - 1].preUpdateCallback = callback;
    } else {
      throw new Error('Error while setting pre update callback: slide data is incorrect!');
    }
  }

  setGetCallback(callback: (out: IModel) => void): void {
    this.getCallback = callback;
  }

  setPageModelCtor(modelCtor: INoParamConstructor<IReport>, pageNumber: number) {
    this.slidesData[pageNumber].modelCtor = modelCtor;
  }

  initializeData(slideNumber: number, params?: HttpParams, omitGetCallback?: boolean): Observable<IModel> {
    const slideData = this.slidesData[slideNumber];

    if (Guid.isEmpty(slideData.model.id) && !Guid.isEmpty(slideData.pageId)) {
      return this.get(slideNumber, slideData.pageId, params, omitGetCallback);
    } else {
      return of(this.getCachedModel(slideNumber, omitGetCallback));
    }
  }

  // Accesors
  getCachedModel(slideNumber: number, omitCallback: boolean) {
    const model = this.slidesData[slideNumber].model;

    // getting from cache is treated as ordinary http get
    if (this.getCallback && !omitCallback) {
      this.getCallback(model);
    }

    return model;
  }

  getModelReff(slideNumber: number) {
    return this.slidesData[slideNumber].model;
  }

  setPageReportId(slideNumber: number, reportId: string) {
    this.slidesData[slideNumber].model.reportId = reportId;
  }

  getRequestHandler(slideNumber: number) {
    return this.slidesData[slideNumber].requestHandler;
  }

  getAwaitStream() {
    return this.isAnyAwaiting$.pipe(distinctUntilChanged());
  }

  // Actions
  save(slideNumber: number, headers = new HttpHeaders({ autosave: String(true) })) {
    const slideData = this.slidesData[slideNumber];

    // TODO: add queuing of requests (now they are dissapearing in void)
    if (slideData.requestHandler.getSaveAwaitStream().value) {
      return;
    }

    // TODO: change to check with report data - possible bug found
    if (Guid.isEmpty(slideData.model.id)) {
      this.post(slideNumber, headers);
    } else {
      this.update(slideNumber, headers);
    }
  }

  // Destoyers
  destroy() {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }

    for (const slide of this.slidesData) {
      if (slide && slide.requestHandler) {
        slide.requestHandler.destroy();
      }
    }
  }

  reset() {
    for (let i = 0; i < this.slidesData.length; i++) {
      const slide = this.slidesData[i];

      if (slide && slide.requestHandler) {
        const service = slide.service;
        const pageId = slide.pageId;

        if (slide.postSubscription) {
          slide.postSubscription.unsubscribe();
        }

        if (slide.updateSubscription) {
          slide.updateSubscription.unsubscribe();
        }

        this.slidesData[i] = new SlideHttpData(service, pageId);
      }
    }
  }

  deletePageData(pageNumber: number) {
    const cleanModel = new this.slidesData[pageNumber].modelCtor();
    assign(this.slidesData[pageNumber].model, cleanModel); // shallow copying

    this.slidesData[pageNumber].requestHandler.resetPostBlockade(); // allow for new post to occure
  }

  // Private
  private get(slideNumber: number, id: any, params?: HttpParams, omitCallback?: boolean) {
    const slideData = this.slidesData[slideNumber];

    if (!this.checkIfCanGet(slideData)) {
      console.error('CANT GET!'); // TODO: proper error
    }

    const getObservable = slideData.requestHandler.get(id, params).pipe(share());

    getObservable.subscribe(outModel => {
      // copies properties values without destroying oryginal refference
      Object.assign(slideData.model, outModel);

      if (this.getCallback && !omitCallback) {
        this.getCallback(outModel);
      }
    });

    return getObservable;
  }

  private checkIfCanGet(slideData: SlideHttpData) {
    if (!slideData || !slideData.requestHandler) {
      return false;
    }

    return !slideData.requestHandler.getSaveAwaitStream().value;
  }

  private post(slideNumber: number, headers?: HttpHeaders) {
    const slideData = this.slidesData[slideNumber];

    if (!slideData || !slideData.requestHandler || !slideData.model) {
      throw new Error('HTTP POST Error');
    }
    const deepCopiedModel = cloneDeep(slideData.model);

    if (slideData.prePostCallback) {
      slideData.prePostCallback();
    }

    slideData.requestHandler.post(deepCopiedModel, headers);
  }

  private update(slideNumber: number, headers?: HttpHeaders) {
    const slideData = this.slidesData[slideNumber];

    if (!slideData || !slideData.requestHandler || !slideData.model) {
      throw new Error('HTTP UPDATE Error');
    }

    if (slideData.preUpdateCallback) {
      slideData.preUpdateCallback();
    }

    const deepCopiedModel = cloneDeep(slideData.model);
    slideData.requestHandler.update(deepCopiedModel, headers);
  }

  private createHttpSubscriptions(slideData: SlideHttpData) {
    if (slideData.postSubscription || slideData.updateSubscription) {
      console.error('error');
    }

    const modelStructure = slideData.modelStructure;

    slideData.postSubscription = slideData.requestHandler.getPostStream().subscribe(outModel => {
      if (slideData.postCallback) {
        slideData.postCallback(outModel);
      }
      modelStructure.updateModelStructure(outModel);
      modelStructure.mapModelIds(outModel, slideData.model);
    });

    slideData.updateSubscription = slideData.requestHandler.getUpdateStream().subscribe(outModel => {
      if (slideData.updateCallback) {
        slideData.updateCallback(outModel);
      }
      modelStructure.updateModelStructure(outModel);
      modelStructure.mapModelIds(outModel, slideData.model);
    });

    this.subscriptions.push(slideData.postSubscription, slideData.updateSubscription);
  }

  private canSetModelRef(slideType: string, slideNumber: number) {
    return this.slidesData !== null && (!this.slidesData[slideNumber].typeName || this.slidesData[slideNumber].typeName === slideType);
  }

  private initializeSlidesData(slideHttpServices: IHttpService[], reportPages: ReportPageApiModel[]) {
    // last page is ReportResults - navigation doesnt deal with it
    if (slideHttpServices.length !== reportPages.length - 1) {
      console.warn('Report pages count not equal to number of pages in http agregate!');
    }
    const minLenght = slideHttpServices.length > reportPages.length - 1 ? reportPages.length - 1 : slideHttpServices.length;

    for (let i = 0; i < minLenght; i++) {
      if (slideHttpServices[i]) {
        this.slidesData.push(new SlideHttpData(slideHttpServices[i], reportPages[i].pageId));
      }
    }

    this.buildAwaitStream();
  }

  private buildAwaitStream() {
    this.isAnyAwaiting$ = new BehaviorSubject<boolean>(false);

    const pendingArray = [];
    for (const slideData of this.slidesData) {
      pendingArray.push(slideData.requestHandler.getSaveAwaitStream());
    }

    this.combinedPendingsSubscription = combineLatest(pendingArray).subscribe((value: boolean[]) => {
      this.isAnyAwaiting$.next(this.checkIfAnyPending(value));
    });
  }

  private checkIfAnyPending(array: boolean[]) {
    return includes(array, true);
  }
}
