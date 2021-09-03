import { Component, ComponentFactoryResolver, ComponentRef, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

import { Subject } from 'rxjs';
import { auditTime } from 'rxjs/operators';

import { DialogService } from 'primeng/dynamicdialog';

import { AppConfig } from 'app/app.config';

import { LeftVentricleUiModel } from '@models/cardioMRT/ui/left-ventricle/left-ventricle-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { CardioSingleColorLocalizer } from '@models/cardioMRT/ui/left-ventricle/cardio-single-color-localizer-ui.model';
import { CardioRelaxationTimeUiModel } from '@models/cardioMRT/ui/left-ventricle/cardio-relaxation-time-ui.model';
import { CardioKineticDisorderLocalizerUiModel } from '@models/cardioMRT/ui/left-ventricle/cardio-kinetic-disorder-localizer-ui.model';
import { CardioPerfusionDefectLocalizerUiModel } from '@models/cardioMRT/ui/left-ventricle/cardio-perfusion-defect-localizer-ui.model';
import { CardioLGELocalizerUiModel } from '@models/cardioMRT/ui/left-ventricle/cardio-LGE-localizer-ui.model';
import { TechnologyUiModel } from '@models/cardioMRT/ui/technology/technology-ui.model';
import { LeftVentricleValidation } from '@models/cardioMRT/ui/left-ventricle/left-ventricle-validation.model';

import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { InfoIconService } from '@services/shared/info-icon/info-icon.service';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';

import { CardioMorphologyEditDialogComponent } from './cardio-edit-dialogs/cardio-morphology-edit-dialog/cardio-morphology-edit-dialog.component';
import { CardioRelaxationTimeEditDialogComponent } from './cardio-edit-dialogs/cardio-relaxation-time-edit-dialog/cardio-relaxation-time-edit-dialog.component';
import { CardioSingleCircleEditDialogComponent } from './cardio-edit-dialogs/cardio-single-circle-edit-dialog/cardio-single-circle-edit-dialog.component';
import {
  KINETIC_LOCALIZER_EDITOR_CONFIG,
  LGE_NOT_SEGMENTAL_LOCALIZER_EDITOR_CONFIG,
  LGE_SEGMENTAL_LOCALIZER_EDITOR_CONFIG,
  LOCALIZERS_DIALOG_STYLING_CONFIG,
  PERFUSION_LOCALIZER_EDITOR_CONFIG
} from './cardio-constants';

import { PerfusionTypeEnum } from '@enums/cardioMRT/left-ventricle/perfusion-type.enum';
import { AnamnesisUiModel } from '@models/cardioMRT/ui/anamnesis/anamnesis-ui.model';
import { LgeLocalizerTypeEnum } from '@enums/cardioMRT/left-ventricle/lge-localizer-type.enum';
import { MyocardialEdemaTypeEnum } from '@enums/cardioMRT/left-ventricle/myocardial-edema-type.enum';
import { WallThickeningTypeEnum } from '@enums/cardioMRT/left-ventricle/wall-thickening-type.enum';
import { WallThinningTypeEnum } from '@enums/cardioMRT/left-ventricle/wall-thinning-type.enum';
import { HypointensMyokTypeEnum } from '@enums/cardioMRT/left-ventricle/hypointens-myok-type.enum';
import { DistributionTypeEnum } from '@enums/cardioMRT/left-ventricle/distribution-type.enum';

import { nameof } from 'ts-simple-nameof';
import { ReferencePictureComponent } from '@controls/reference-picture/reference-picture.component';
import { ImageFileTypeEnum } from '@enums/cardioMRT/left-ventricle/image-file-type.enum';
import { ReferencePictureUiModel } from '@models/shared/reference-picture/reference-picture-ui.model';
import { UploaderComponent } from '@controls/uploader/uploader.component';
import { FileUiModel } from '@models/shared/uploader/file-ui.model';
import { ReferencePictureRRIds } from '@models/shared/reference-picture/reference-picture-rr-ids.model';

@Component({
  selector: 'rr-left-ventricle',
  templateUrl: './left-ventricle.component.html',
  styleUrls: ['./left-ventricle.component.scss'],
  providers: [DialogService]
})
export class LeftVentricleComponent extends SlideBaseComponent<LeftVentricleUiModel> implements OnInit, OnDestroy {
  @ViewChild(ReferencePictureComponent) referencePicture: ReferencePictureComponent;
  uploaderComponentRef: ComponentRef<UploaderComponent>;

  readonly KINETIC_LOCALIZER_EDITOR_CONFIG = KINETIC_LOCALIZER_EDITOR_CONFIG;
  readonly PERFUSION_LOCALIZER_EDITOR_CONFIG = PERFUSION_LOCALIZER_EDITOR_CONFIG;
  readonly LGE_NOT_SEGMENTAL_LOCALIZER_EDITOR_CONFIG = LGE_NOT_SEGMENTAL_LOCALIZER_EDITOR_CONFIG;

  myocardialEdemaTypeDropdown: DropdownModel[];
  wallThickeningTypeDropdown: DropdownModel[];
  wallThinningTypeDropdown: DropdownModel[];
  hypointensMyokTypeDropdown: DropdownModel[];
  functionTypeDropdown: DropdownModel[];
  lgeTypeDropdown: DropdownModel[];
  distributionTypeDropdown: DropdownModel[];
  dialogChanges$: Subject<any>;

  isRelaxationTimeColumnDisabled = false;
  haematocritValue: number;

  myocardialEdemaType: typeof MyocardialEdemaTypeEnum;
  wallThickeningType: typeof WallThickeningTypeEnum;
  wallThinningType: typeof WallThinningTypeEnum;
  hypointensMyokType: typeof HypointensMyokTypeEnum;

  perfusionType: typeof PerfusionTypeEnum;
  lgeType: typeof LgeLocalizerTypeEnum;
  imageFileType: typeof ImageFileTypeEnum;

  validationErrorsInMorphologyLocalizers = [
    nameof<LeftVentricleUiModel>(m => m.myocardialEdemaLocalizer),
    nameof<LeftVentricleUiModel>(m => m.wallThickeningLocalizer),
    nameof<LeftVentricleUiModel>(m => m.wallThinningLocalizer),
    nameof<LeftVentricleUiModel>(m => m.reducedMyocardialSignalT1wT2wLocalizer)
  ];
  validationErrorsInRelaxationTimeLocalizers = [
    nameof<LeftVentricleUiModel>(m => m.t1Localizer.localizer),
    nameof<LeftVentricleUiModel>(m => m.t2Localizer.localizer),
    nameof<LeftVentricleUiModel>(m => m.t1GdLocalizer.localizer),
    nameof<LeftVentricleUiModel>(m => m.t1Localizer.qualitativeType),
    nameof<LeftVentricleUiModel>(m => m.t2Localizer.qualitativeType),
    nameof<LeftVentricleUiModel>(m => m.t1GdLocalizer.qualitativeType),
    nameof<LeftVentricleUiModel>(m => m.t1Localizer.valueMyocardiumInMs),
    nameof<LeftVentricleUiModel>(m => m.t2Localizer.valueMyocardiumInMs),
    nameof<LeftVentricleUiModel>(m => m.t1GdLocalizer.valueMyocardiumInMs),
    nameof<LeftVentricleUiModel>(m => m.t1Localizer.measureType),
    nameof<LeftVentricleUiModel>(m => m.t2Localizer.measureType),
    nameof<LeftVentricleUiModel>(m => m.t1GdLocalizer.measureType),
    nameof<LeftVentricleUiModel>(m => m.t1Localizer.severityType),
    nameof<LeftVentricleUiModel>(m => m.t2Localizer.severityType),
    nameof<LeftVentricleUiModel>(m => m.t1GdLocalizer.severityType)
  ];

  referencePictureLGERRID: ReferencePictureRRIds = {
    headerId: 'uni_06_001_01',
    serialNoLabelId: 'uni_06_002_01',
    serialNoInputId: 'uni_06_003_01',
    pictureNoLabelId: 'uni_06_004_01',
    pictureNoInputId: 'uni_06_005_01',
    importLabelId: 'uni_06_006_01',
    importInputId: 'uni_06_007_01'
  };

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    public infoIconService: InfoIconService,
    public dialogService: DialogService,
    public resolver: ComponentFactoryResolver,
    public viewContainerRef: ViewContainerRef
  ) {
    super(navService, slideRequestService, changeDetectionService, LeftVentricleUiModel, commonServices, LeftVentricleValidation);

    this.myocardialEdemaType = MyocardialEdemaTypeEnum;
    this.wallThickeningType = WallThickeningTypeEnum;
    this.wallThinningType = WallThinningTypeEnum;
    this.hypointensMyokType = HypointensMyokTypeEnum;

    this.perfusionType = PerfusionTypeEnum;
    this.lgeType = LgeLocalizerTypeEnum;
    this.imageFileType = ImageFileTypeEnum;
    this.registerConnectionCallbacks();
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.setInfoIconConfig();
    this.prepareUploaderRef();
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
    this.infoIconService.resetInfoIconConfig(); // TODO check what it does
  }

  private prepareUploaderRef(): void {
    const factory = this.resolver.resolveComponentFactory(UploaderComponent);
    this.uploaderComponentRef = this.viewContainerRef.createComponent(factory);
    this.uploaderComponentRef.instance.isVisible = false;
    this.uploaderComponentRef.instance.operationsUrl = this.fileUploadUrl;
    this.registerGetCallback(model => {
      this.uploaderComponentRef.instance.referenceId = model.id;
    });
  }

  private setConfigUploader(model: FileUiModel, pictureFileType: string): void {
    this.uploaderComponentRef.instance.fileType = pictureFileType;
    this.uploaderComponentRef.instance.initFileModel = model;
  }

  private registerConnectionCallbacks(): void {
    this.registerConnectionCallback(3, TechnologyUiModel, (technologyModel: TechnologyUiModel) => {
      this.isRelaxationTimeColumnDisabled = !technologyModel.sequences.some(
        item => item.examinationTechniqueType === 'Mapping' && !item.isDeleted
      );
    });

    this.registerConnectionCallback(2, AnamnesisUiModel, (anamnesisModel: AnamnesisUiModel) => {
      this.haematocritValue = anamnesisModel.hematocritInPercent;
    });
  }

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.cardioMRT.leftVentricle.fileUpload;
  }

  initDialogModelChangesSubscription() {
    this.dialogChanges$ = new Subject();
    this.dialogChanges$
      .asObservable()
      .pipe(auditTime(AppConfig.settings.autosaveTime))
      .subscribe(() => this.save());
  }

  /* disabling condition methods */
  areMorphologyLocalizersDisabled() {
    return !(
      this.model.myocardialEdemaType === MyocardialEdemaTypeEnum.FocalMyocardialEdema ||
      this.model.wallThickeningType === WallThickeningTypeEnum.FocalWallThickening ||
      this.model.wallThinningType === WallThinningTypeEnum.FocalWallThinning ||
      this.model.hypointensMyokType === HypointensMyokTypeEnum.HypointensityT1wT2wFocal
    );
  }

  isLGELocalizerDisabled() {
    return !(
      this.model.lgeType === LgeLocalizerTypeEnum.Segmental ||
      (this.model.lgeType === LgeLocalizerTypeEnum.NonSegmental && this.model.distributionType === DistributionTypeEnum.Focal)
    );
  }

  areRelaxationTimeLocalizersDisabled() {
    return !(this.model.isT1 || this.model.isT2 || this.model.isT1Gd);
  }

  resetMyocardialEdemaLocalizer() {
    if (this.model.myocardialEdemaType !== MyocardialEdemaTypeEnum.FocalMyocardialEdema) {
      this.model.myocardialEdemaLocalizer = new CardioSingleColorLocalizer();
      this.validationHelperService.removeError(nameof<LeftVentricleUiModel>(m => m.myocardialEdemaLocalizer));
    }
  }

  resetWallThickeningLocalizer() {
    if (this.model.wallThickeningType !== WallThickeningTypeEnum.FocalWallThickening) {
      this.model.wallThickeningLocalizer = new CardioSingleColorLocalizer();
      this.validationHelperService.removeError(nameof<LeftVentricleUiModel>(m => m.wallThickeningLocalizer));
    }
  }

  resetWallThinningLocalizer() {
    if (this.model.wallThinningType !== WallThinningTypeEnum.FocalWallThinning) {
      this.model.wallThinningLocalizer = new CardioSingleColorLocalizer();
      this.validationHelperService.removeError(nameof<LeftVentricleUiModel>(m => m.wallThinningLocalizer));
    }
  }

  resetReducedMyocardialSignalT1wT2wLocalizer() {
    if (this.model.hypointensMyokType !== HypointensMyokTypeEnum.HypointensityT1wT2wFocal) {
      this.model.reducedMyocardialSignalT1wT2wLocalizer = new CardioSingleColorLocalizer();
      this.validationHelperService.removeError(nameof<LeftVentricleUiModel>(m => m.reducedMyocardialSignalT1wT2wLocalizer));
    }
  }

  resetKineticDisorderLocalizer() {
    this.model.kineticDisorderLocalizer = new CardioKineticDisorderLocalizerUiModel();
    this.validationHelperService.removeError(nameof<LeftVentricleUiModel>(m => m.kineticDisorderLocalizer));
  }

  resetPerfusionDefectLocalizer() {
    this.model.perfusionDefectLocalizer = new CardioPerfusionDefectLocalizerUiModel();
    this.validationHelperService.removeError(nameof<LeftVentricleUiModel>(m => m.perfusionDefectLocalizer));
  }

  resetLGELocalizer() {
    this.model.lgeSegmentalLocalizer = new CardioLGELocalizerUiModel();
    this.validationHelperService.removeError(nameof<LeftVentricleUiModel>(m => m.lgeSegmentalLocalizer));
  }

  setLGEType(): void {
    if (this.model.lgeType === LgeLocalizerTypeEnum.Segmental) {
      this.model.lgeSegmentalLocalizer.lGELocalizerType = LgeLocalizerTypeEnum.Segmental;
    } else if (this.model.lgeType === LgeLocalizerTypeEnum.NonSegmental && this.model.distributionType === DistributionTypeEnum.Focal) {
      this.model.lgeSegmentalLocalizer.lGELocalizerType = LgeLocalizerTypeEnum.NonSegmental;
    } else {
      this.model.lgeSegmentalLocalizer.lGELocalizerType = LgeLocalizerTypeEnum.None;
    }
  }

  resetTabsContent(): void {
    this.model.lgeType = 'None';
    this.model.distributionType = 'None';
    this.referencePicture?.resetReferencePicture();
    this.resetLGELocalizer();

    this.validationHelperService.removeError(nameof<LeftVentricleUiModel>(m => m.lgeType));
    this.validationHelperService.removeError(nameof<LeftVentricleUiModel>(m => m.distributionType));
  }

  resetDistributionType(): void {
    if (this.model.lgeType !== LgeLocalizerTypeEnum.NonSegmental) {
      this.model.distributionType = DistributionTypeEnum.None;
    }
  }

  resetT1Localizer() {
    if (this.model.t1ReferencePicture.uploadedImageFile) {
      this.setConfigUploader(this.model.t1ReferencePicture.uploadedImageFile, this.imageFileType.T1ImageFile);
      this.uploaderComponentRef.instance.removeFile();
    }
    this.model.t1ReferencePicture = new ReferencePictureUiModel();
    this.model.t1Localizer = this.resetRelaxationOmitId(this.model.t1Localizer.id);
    this.validationHelperService.removeError(nameof<LeftVentricleUiModel>(m => m.t1Localizer.localizer));
    this.validationHelperService.removeError(nameof<LeftVentricleUiModel>(m => m.t1Localizer.qualitativeType));
    this.validationHelperService.removeError(nameof<LeftVentricleUiModel>(m => m.t1Localizer.measureType));
    this.validationHelperService.removeError(nameof<LeftVentricleUiModel>(m => m.t1Localizer.severityType));
    this.validationHelperService.removeError(nameof<LeftVentricleUiModel>(m => m.t1Localizer.valueMyocardiumInMs));
  }

  resetT2Localizer() {
    if (this.model.t2ReferencePicture.uploadedImageFile) {
      this.setConfigUploader(this.model.t2ReferencePicture.uploadedImageFile, this.imageFileType.T2ImageFile);
      this.uploaderComponentRef.instance.removeFile();
    }
    this.model.t2ReferencePicture = new ReferencePictureUiModel();
    this.model.t2Localizer = this.resetRelaxationOmitId(this.model.t2Localizer.id);
    this.validationHelperService.removeError(nameof<LeftVentricleUiModel>(m => m.t2Localizer.localizer));
    this.validationHelperService.removeError(nameof<LeftVentricleUiModel>(m => m.t2Localizer.qualitativeType));
    this.validationHelperService.removeError(nameof<LeftVentricleUiModel>(m => m.t2Localizer.measureType));
    this.validationHelperService.removeError(nameof<LeftVentricleUiModel>(m => m.t2Localizer.severityType));
    this.validationHelperService.removeError(nameof<LeftVentricleUiModel>(m => m.t2Localizer.valueMyocardiumInMs));
  }

  resetT1GdLocalizer() {
    if (this.model.t1GdReferencePicture.uploadedImageFile) {
      this.setConfigUploader(this.model.t1GdReferencePicture.uploadedImageFile, this.imageFileType.T1GdImageFile);
      this.uploaderComponentRef.instance.removeFile();
    }
    this.model.t1GdReferencePicture = new ReferencePictureUiModel();
    this.model.t1GdLocalizer = this.resetRelaxationOmitId(this.model.t1GdLocalizer.id);
    this.validationHelperService.removeError(nameof<LeftVentricleUiModel>(m => m.t1GdLocalizer.localizer));
    this.validationHelperService.removeError(nameof<LeftVentricleUiModel>(m => m.t1GdLocalizer.qualitativeType));
    this.validationHelperService.removeError(nameof<LeftVentricleUiModel>(m => m.t1GdLocalizer.measureType));
    this.validationHelperService.removeError(nameof<LeftVentricleUiModel>(m => m.t1GdLocalizer.severityType));
    this.validationHelperService.removeError(nameof<LeftVentricleUiModel>(m => m.t1GdLocalizer.valueMyocardiumInMs));
  }

  private resetRelaxationOmitId(id: string): CardioRelaxationTimeUiModel {
    const model = new CardioRelaxationTimeUiModel();
    model.id = id;
    return model;
  }

  /* localizers edition dialogs opening */
  openMorphologyEditDialog() {
    this.initDialogModelChangesSubscription();
    const dialogRef = this.dialogService.open(CardioMorphologyEditDialogComponent, {
      data: {
        model: this.model,
        callback: () => this.dialogChanges$.next()
      },
      showHeader: false,
      contentStyle: LOCALIZERS_DIALOG_STYLING_CONFIG
    });

    dialogRef.onClose.subscribe(() => this.dialogChanges$.unsubscribe());
  }

  openKineticDisorderEditDialog() {
    this.initDialogModelChangesSubscription();
    const dialogRef = this.dialogService.open(CardioSingleCircleEditDialogComponent, {
      data: {
        localizerModel: this.model.kineticDisorderLocalizer,
        editorConfig: KINETIC_LOCALIZER_EDITOR_CONFIG,
        callback: () => this.dialogChanges$.next()
      },
      showHeader: false,
      contentStyle: LOCALIZERS_DIALOG_STYLING_CONFIG
    });

    dialogRef.onClose.subscribe(() => this.dialogChanges$.unsubscribe());
  }

  openPerfusionDefectEditDialog() {
    this.initDialogModelChangesSubscription();
    const dialogRef = this.dialogService.open(CardioSingleCircleEditDialogComponent, {
      data: {
        localizerModel: this.model.perfusionDefectLocalizer,
        editorConfig: PERFUSION_LOCALIZER_EDITOR_CONFIG,
        callback: () => this.dialogChanges$.next()
      },
      showHeader: false,
      contentStyle: LOCALIZERS_DIALOG_STYLING_CONFIG
    });

    dialogRef.onClose.subscribe(() => this.dialogChanges$.unsubscribe());
  }

  openLGEEditDialog() {
    this.initDialogModelChangesSubscription();
    const dialogRef = this.dialogService.open(CardioSingleCircleEditDialogComponent, {
      data: {
        localizerModel: this.model.lgeSegmentalLocalizer,
        editorConfig:
          this.model.lgeType === LgeLocalizerTypeEnum.Segmental
            ? LGE_SEGMENTAL_LOCALIZER_EDITOR_CONFIG
            : LGE_NOT_SEGMENTAL_LOCALIZER_EDITOR_CONFIG,
        callback: () => this.dialogChanges$.next()
      },
      showHeader: false,
      contentStyle: LOCALIZERS_DIALOG_STYLING_CONFIG
    });

    dialogRef.onClose.subscribe(() => this.dialogChanges$.unsubscribe());
  }

  openRelaxationTimeEditDialog() {
    this.initDialogModelChangesSubscription();
    const dialogRef = this.dialogService.open(CardioRelaxationTimeEditDialogComponent, {
      data: {
        model: this.model,
        haematocritPercent: this.haematocritValue,
        callback: () => this.dialogChanges$.next()
      },
      showHeader: false,
      contentStyle: {
        position: 'relative',
        top: '0px'
      }
    });

    dialogRef.onClose.subscribe(() => this.dialogChanges$.unsubscribe());
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('cardioMRT.leftVentricle.myocardialEdemaTypeDropdown.options').subscribe(out => {
        this.myocardialEdemaTypeDropdown = Object.values(out);
      }),

      this.translate.stream('cardioMRT.leftVentricle.wallThickeningTypeDropdown.options').subscribe(out => {
        this.wallThickeningTypeDropdown = Object.values(out);
      }),

      this.translate.stream('cardioMRT.leftVentricle.wallThinningTypeDropdown.options').subscribe(out => {
        this.wallThinningTypeDropdown = Object.values(out);
      }),

      this.translate.stream('cardioMRT.leftVentricle.hypointensMyokTypeDropdown.options').subscribe(out => {
        this.hypointensMyokTypeDropdown = Object.values(out);
      }),

      this.translate.stream('cardioMRT.leftVentricle.functionTypeDropdown.options').subscribe(out => {
        this.functionTypeDropdown = Object.values(out);
      }),

      this.translate.stream('cardioMRT.leftVentricle.lgeTypeDropdown.options').subscribe(out => {
        this.lgeTypeDropdown = Object.values(out);
      }),

      this.translate.stream('cardioMRT.leftVentricle.distributionTypeDropdown.options').subscribe(out => {
        this.distributionTypeDropdown = Object.values(out);
      })
    );
  }

  private setInfoIconConfig() {
    this.infoIconService.infoIconConfig$.next({ rrid: 'car_m_06_01', isHorizontal: true });
  }
}
