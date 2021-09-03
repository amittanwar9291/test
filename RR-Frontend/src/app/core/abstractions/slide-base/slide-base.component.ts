import { ViewChild, OnDestroy, OnInit, DoCheck, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

import { Subscription, Subject } from 'rxjs';
import { take, filter } from 'rxjs/operators';

import { IReport } from '@interfaces/report.interface';
import { INoParamConstructor } from '@interfaces/no-param-constructor.interface';

import { ModelDiff } from '@abstractions/model-diff/model-diff';

import { NavigationService, CustomTranslateService } from '@services/shared';
import { LoggingService } from '@services/shared/logging/logging.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { IModel } from '@interfaces/model.interface';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideFormService } from '@services/shared/slide-base/slide-form.service';
import { PageConnectionModel } from '@models/shared/slide/page-connection.model';

import { isEqual, cloneDeep } from 'lodash';
import { Guid } from '@models/shared/guid/guid';
import { IValidationModel } from '@models/shared/validation/form-validation.models';
import { TrackingEventType } from '@enums/shared/tracking-event-type.enum';
import { TrackingSubjectType } from '@enums/shared/tracking-subject-type.enum';
import { ValidationDataService } from '@services/shared/validation/validation-data.service';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';

export class SlideBaseComponent<TModel extends IReport> implements OnInit, OnDestroy, DoCheck, AfterViewInit {
  subscriptions: Subscription[] = [];
  formChangesSubscription: Subscription;

  $modelChanged: Subject<void>;
  $allConnectionCallbacksPerformed: Subject<void>;

  model: TModel;
  modelInitialized = false;

  private modelDiffHandler: ModelDiff<TModel>;

  afterGetCallback: (model: IModel) => void;
  afterSaveCallback: (model: IModel) => void;
  preSaveCallback: () => void;

  pageConnectionCallback: Array<() => Promise<void>>;
  pagesConnections: PageConnectionModel<IModel>[];

  // local services - allows for quick adding new services whithout switching constructors in every slide
  slideFormService: SlideFormService;
  translate: TranslateService;
  customTranslate: CustomTranslateService;
  logger: LoggingService;
  validationDataService: ValidationDataService;
  validationHelperService: ValidationHelperService;

  @ViewChild('autosaveForm', { static: true }) ngForm: NgForm;

  constructor(
    protected navigationService: NavigationService,
    public saveService: SlideRequestService,
    public changeService: ChangeDetectionService,
    private modelCtor: INoParamConstructor<TModel>,
    public commonServices: SlideCommonService,
    public validationModel?: IValidationModel
  ) {
    this.initCommonServices(commonServices);
    this.initProperties();
  }

  ngOnInit(): void {
    this.initTranslations();
    this.setFormReff();
    this.initCustomTranslate();
    this.setValidationService();
    this.sendTrackingEvent(TrackingEventType.Start);
  }

  ngAfterViewInit(): void {
    this.initModelReff();
    this.initCallbacks();
  }

  ngDoCheck(): void {
    this.$modelChanged.next();
  }

  private initCommonServices(services: SlideCommonService): void {
    this.slideFormService = services.slideFormService;
    this.translate = services.translate;
    this.customTranslate = services.customTranslate;
    this.logger = services.logger;
    this.validationHelperService = services.validationHelperService;
    this.validationDataService = services.validationDataService;
  }

  private initProperties(): void {
    this.modelDiffHandler = new ModelDiff(this.logger);
    this.$modelChanged = new Subject<void>();
    this.$allConnectionCallbacksPerformed = new Subject<void>();

    this.subscriptions.push(
      this.customTranslate.language.subscribe(lan => {
        this.translate.use(lan);
      })
    );

    this.model = new this.modelCtor();

    this.pagesConnections = [];
    this.pageConnectionCallback = [];
  }

  private initCustomTranslate(): void {
    this.subscriptions.push(
      this.customTranslate.language.subscribe(lan => {
        this.translate.use(lan);
      })
    );
  }

  private setFormReff(): void {
    this.commonServices.slideFormService.pushCurrentSlideFormRef(this);
  }

  private initModelReff(): void {
    // TODO: delete after full integration
    if (!this.saveService) {
      return;
    }

    const modelBoxed = { model: this.model };

    this.saveService
      .initializePage(modelBoxed, undefined, this.modelCtor)
      .then((outModel: TModel) => {
        this.model = modelBoxed.model; // bypass of unexpected ts behaviour
        this.modelDiffHandler.modelRef = this.model;

        return this.saveService.savePageOnSlideEnter(this.model);
      })
      .then(() => {
        this.performConnectionCallbacks();
        this.initFormChanges();

        this.modelInitialized = true;
      });
  }

  // to be chenged after PR and core merge
  private initCallbacks(): void {
    // getCurrentPageNumber shouldn be here (it breaks responsibilities between services)
    // i couldnt find better solution
    // TODO: find better solution
    this.saveService.setPostSaveCallback(this.navigationService.getCurrentPageNumber(), modelOut => {
      this.modelDiffHandler.modelRef = modelOut as TModel;

      if (this.afterSaveCallback) {
        this.afterSaveCallback(modelOut);
      }
    });

    this.saveService.setGetCallback(model => {
      if (this.afterGetCallback) {
        this.afterGetCallback(model);
      }
    });

    this.saveService.setPreSaveCallback(this.navigationService.getCurrentPageNumber(), () => {
      if (this.preSaveCallback) {
        this.preSaveCallback();
      }
    });

    this.changeService.setTriggerCallback(() => {
      this.triggerPagesConnections();
    });
  }

  private initFormChanges(): void {
    if (this.formChangesSubscription && !this.formChangesSubscription.closed) {
      return;
    }

    this.formChangesSubscription = this.ngForm.form.valueChanges.subscribe(() => {
      this.scheduleFormDetection();
    });
  }

  private scheduleFormDetection(): void {
    this.$modelChanged
      .pipe(
        take(1),
        filter(() => !this.modelDiffHandler.isEqualOrEmpty(this.model))
      )
      .subscribe(() => {
        this.modelDiffHandler.modelRef = this.model as TModel;
        this.changeService.triggerChange();
      });
  }

  save() {
    this.changeService.triggerChange();
  }

  // to be chenged after PR and core merge
  public performWithoutFormDetection(action: () => void) {
    if (this.formChangesSubscription) {
      this.formChangesSubscription.unsubscribe();

      action();
      this.initFormChanges();
    }
  }

  registerGetCallback(callback: (model: IModel) => void): void {
    this.afterGetCallback = callback;
  }

  registerSaveCallback(callback: (model: IModel) => void): void {
    this.afterSaveCallback = callback;
  }

  registerPreSaveCallback(callback: () => void): void {
    this.preSaveCallback = callback;
  }

  // TODO start
  // should be moved to different service, as now its prime example of technological dept creation
  addPageConnection(pageId: number, modelCtor: INoParamConstructor<IReport>, predicate: () => boolean, callback: (model: IModel) => void) {
    const communicationModel = new PageConnectionModel(pageId, modelCtor, predicate, callback);

    this.pagesConnections.push(communicationModel);
  }

  private triggerPagesConnections() {
    if (!this.pagesConnections.length) {
      return;
    }

    for (const pageConnection of this.pagesConnections) {
      if (!pageConnection.condition()) {
        continue;
      }

      const pageModel = this.saveService.getModelReff(pageConnection.pageNumber - 1);
      const pageId = this.navigationService.getReportData().pages[pageConnection.pageNumber - 1].pageId;

      if (Guid.isEmpty(pageId)) {
        continue;
      }

      if (!pageModel) {
        this.initializeAndTriggerPage(pageConnection);
      } else {
        this.triggerPage(pageConnection, pageModel);
      }
    }
  }

  private initializeAndTriggerPage(pageConnection: PageConnectionModel<IModel>) {
    const pageModel = new pageConnection.modelCtor();
    const pageNumber = pageConnection.pageNumber;
    const pageModelDiff = cloneDeep(pageModel);

    pageModel.reportId = this.navigationService.getReportData().id;

    this.saveService.initializePage({ model: pageModel }, pageNumber, this.modelCtor).then(() => {
      pageConnection.callback(pageModel);

      this.saveService.setPostSaveCallback(pageNumber, () => {});
      if (!isEqual(pageModel, pageModelDiff)) {
        this.changeService.triggerChange(pageConnection.pageNumber);
      }
    });
  }

  private triggerPage(pageConnection: PageConnectionModel<IModel>, pageModel: IModel) {
    const pageModelDiff = cloneDeep(pageModel);

    pageConnection.callback(pageModel);

    if (!isEqual(pageModel, pageModelDiff)) {
      this.changeService.triggerChange(pageConnection.pageNumber);
    }
  }

  async performConnectionCallbacks() {
    for (const callback of this.pageConnectionCallback) {
      await callback();
    }
    this.$allConnectionCallbacksPerformed.next();
  }

  registerConnectionCallback(pageNumber: number, modelCtor: INoParamConstructor<IReport>, callback: (model: IModel) => void) {
    this.pageConnectionCallback.push(() => {
      /**
       * TODO we need to get fully up-to-date model here (including newly added findings' id's obtained from backend
       * because now, if autosave on page X doesn't get triggered and finished before entering page Y, then on page Y we still don't have
       * newly added findings' ids and we still see the removed findings in the model (these with flag isDeleted: true)
       */
      const modelReff = this.saveService.getModelReff(pageNumber - 1);

      if (!modelReff) {
        const model = new modelCtor();
        return this.saveService.initializePage({ model }, pageNumber, this.modelCtor).then(modelOut => {
          callback(cloneDeep(modelOut));
        });
      } else {
        callback(cloneDeep(modelReff));
      }
    });
  }
  // TODO end

  initTranslations(): void {}

  ngOnDestroy(): void {
    this.validationHelperService.clearValidationData();
    this.subscriptions.forEach(subs => {
      subs.unsubscribe();
    });
    if (this.formChangesSubscription) {
      this.formChangesSubscription.unsubscribe();
    }
    this.sendTrackingEvent(TrackingEventType.Stop);
  }

  private setValidationService() {
    if (this.validationModel) {
      this.validationDataService.currentPageValidator.next(this.validationModel);
      this.subscriptions.push(
        this.ngForm.valueChanges.subscribe(() => {
          this.validationDataService.currentPageData.next(this.model);
        })
      );
    }
  }

  private sendTrackingEvent(eventType: TrackingEventType): void {
    let pageNumber: number;
    switch (eventType) {
      case TrackingEventType.Start:
        pageNumber = this.navigationService.getCurrentPageNumber();
        break;
      case TrackingEventType.Stop:
        pageNumber = this.saveService.currentPageNumber;
        break;
    }
    if (pageNumber) {
      this.commonServices.trackingService.sendTrackingEvent(eventType, TrackingSubjectType.Page, pageNumber.toString());
    } else {
      const reportData = this.navigationService.getReportData();
      // TODO insert report ID in non-breaking manner
      this.logger.warn('TRACKING', 'Tracking event type ' + eventType.toString() + ' sent without page number - ReportId: ');
    }
  }
}
