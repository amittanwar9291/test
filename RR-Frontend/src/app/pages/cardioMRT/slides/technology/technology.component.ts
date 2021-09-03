import { Component, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { TechnologyMrtBaseComponent } from '@abstractions/technology-base/technology-mrt-base.component';

import { IPageConnection } from '@interfaces/page-connection.interface';

import { DialogService } from 'primeng/dynamicdialog';

import { AppConfig } from 'app/app.config';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { SequenceUiModel } from '@models/cardioMRT/ui/technology/sequence-ui.model';
import { TechnologyUiModel } from '@models/cardioMRT/ui/technology/technology-ui.model';
import { SummaryUiModel } from '@models/cardioMRT/ui/summary/summary-ui.model';
import { SpatialRequirementUiModel } from '@models/cardioMRT/ui/spatial-requirement/spatial-requirement-ui.model';
import { FlapsUiModel } from '@models/cardioMRT/ui/flaps/flaps-ui.model';
import { MeasurementUiModel } from '@models/cardioMRT/ui/flaps/measurement-ui.model';
import { LeftVentricleUiModel } from '@models/cardioMRT/ui/left-ventricle/left-ventricle-ui.model';
import { CardioRelaxationTimeUiModel } from '@models/cardioMRT/ui/left-ventricle/cardio-relaxation-time-ui.model';

import { NavigationService } from '@services/shared';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { CenterspecificPreferencesHttpService } from '@services/shared/centerspecific-preferences/centerspecific-preferences-http.service';
import { FileService } from '@services/shared/file-service/file.service';

import { CenterspecificPreferencesModulesEnum } from '@enums/centerspecific-preferences/centerspecific-preferences-modules.enum';
import { PharmacologicalStressTypeEnum } from '@enums/cardioMRT/technology/pharmacological-stress-type.enum';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { EnhancementIntensityTypeEnum } from '@enums/cardioMRT/spatial-requirement/enhancement-intensity-type.enum';
import { HomogeneityTypeEnum } from '@enums/cardioMRT/spatial-requirement/homogeneity-type.enum';
import { PericardiumVesselsUiModel } from '@models/cardioMRT/ui/pericardium-vessels/pericardium-vessels-ui.model';
import { FindingTypeEnum, HomogenityTypeEnum, CmEnhancQuantiTypeEnum } from '@enums/cardioMRT/pericardium-vessels';
import { ModuleTypesEnum } from '@enums/centerspecific-preferences/module-types.enum';
import { SequencesTypeEnum } from '@enums/shared/technology';
import { SideEffectsSectionService } from '@commonTemplates/technology/services/side-effects-section.service';
import { ReferencePictureUiModel } from '@models/shared/reference-picture/reference-picture-ui.model';
import { nameof } from 'ts-simple-nameof';

import { omit } from 'lodash';

@Component({
  selector: 'rr-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss'],
  providers: [DialogService],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class TechnologyComponent extends TechnologyMrtBaseComponent<TechnologyUiModel, SequenceUiModel> implements OnInit {
  fractionationOptions: DropdownModel[];
  descriptionArray: string[];

  pharmacologicalStressType: typeof PharmacologicalStressTypeEnum;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    public dialogService: DialogService,
    public preferencesHttpService: CenterspecificPreferencesHttpService,
    public technologyService: SideEffectsSectionService,
    private fileService: FileService
  ) {
    super(
      navService,
      slideRequestService,
      changeDetectionService,
      commonServices,
      dialogService,
      preferencesHttpService,

      TechnologyUiModel,
      SequenceUiModel,
      technologyService
    );

    this.pharmacologicalStressType = PharmacologicalStressTypeEnum;
    this.moduleTypes = ModuleTypesEnum;
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.getPreferences(CenterspecificPreferencesModulesEnum.MRICardio);
  }

  protected preparePageConnection(): void {
    const PCO4 = this.preparePage4ConnectionObject();
    this.addPageConnection(PCO4.pageNr, FlapsUiModel, PCO4.condition, PCO4.callback);

    const PC06 = this.preparePage6ConnectionObject();
    this.addPageConnection(PC06.pageNr, LeftVentricleUiModel, PC06.condition, PC06.callback);

    const PCO8 = this.preparePage8ConnectionObject();
    this.addPageConnection(PCO8.pageNr, SpatialRequirementUiModel, PCO8.condition, PCO8.callback);

    const PCO9 = this.preparePage9ConnectionObject();
    this.addPageConnection(PCO9.pageNr, PericardiumVesselsUiModel, PCO9.condition, PCO9.callback);

    const PCO10 = this.preparePage10ConnectionObject();
    this.addPageConnection(PCO10.pageNr, SummaryUiModel, PCO10.condition, PCO10.callback);
  }

  // Connection with 4th page
  private preparePage4ConnectionObject(): IPageConnection<FlapsUiModel> {
    const condition = () => !this.model.sequences.some(item => item.examinationTechniqueType === 'FlowMeasurement' && !item.isDeleted);
    const callback = async (model: FlapsUiModel) => {
      const measureUploadedImagesIds = this.fileService.getUploadedFileIds([
        model.aortaAscendensMeasures.flowCurveImage,
        model.aortaAscendensMeasures.pcMeasurementImage,
        model.pulmonaryArteryMeasures.flowCurveImage,
        model.pulmonaryArteryMeasures.pcMeasurementImage,
        model.mitralValveMeasures.flowCurveImage,
        model.mitralValveMeasures.pcMeasurementImage
      ]);

      if (!model.isAortaAscendens && !model.isPulmonaryArtery && !model.isMitralValve) {
        return;
      }

      // aortaAscendensMeasures
      model.isAortaAscendens = false;
      model.aortaAscendensMeasures = Object.assign(
        model.aortaAscendensMeasures,
        omit(
          new MeasurementUiModel(),
          nameof<MeasurementUiModel>(m => m.id)
        )
      );

      // pulmonaryArteryMeasures
      model.isPulmonaryArtery = false;
      model.pulmonaryArteryMeasures = Object.assign(
        model.pulmonaryArteryMeasures,
        omit(
          new MeasurementUiModel(),
          nameof<MeasurementUiModel>(m => m.id)
        )
      );

      // mitralValveMeasures
      model.isMitralValve = false;
      model.mitralValveMeasures = Object.assign(
        model.mitralValveMeasures,
        omit(
          new MeasurementUiModel(),
          nameof<MeasurementUiModel>(m => m.id)
        )
      );

      if (measureUploadedImagesIds.length) {
        this.fileService.deleteMultiple(measureUploadedImagesIds, AppConfig.settings.servicesUrls.cardioMRT.flaps.fileUpload);
      }
    };
    return {
      pageNr: 4,
      condition,
      callback
    };
  }

  // Connection with 6th page
  private preparePage6ConnectionObject(): IPageConnection<LeftVentricleUiModel> {
    const condition = () => !this.model.sequences.some(item => item.examinationTechniqueType === 'Mapping' && !item.isDeleted);
    const callback = (model: LeftVentricleUiModel) => {
      model.isT1 = false;
      model.isT2 = false;
      model.isT1Gd = false;
      model.isT2Asterisk = false;
      model.valueMyocardiumInMs = null;
      model.referenceValueOfMyocardiumInMs = null;

      model.t1Localizer = this.resetRelaxationOmitId(model.t1Localizer.id);
      model.t2Localizer = this.resetRelaxationOmitId(model.t2Localizer.id);
      model.t1GdLocalizer = this.resetRelaxationOmitId(model.t1GdLocalizer.id);

      const leftVentricleImageIds = this.fileService.getUploadedFileIds([
        model.t1ReferencePicture.uploadedImageFile,
        model.t2ReferencePicture.uploadedImageFile,
        model.t1GdReferencePicture.uploadedImageFile
      ]);

      this.fileService
        .deleteMultiple(leftVentricleImageIds, AppConfig.settings.servicesUrls.cardioMRT.leftVentricle.fileUpload)
        .finally(() => {
          model.t1ReferencePicture = new ReferencePictureUiModel();
          model.t2ReferencePicture = new ReferencePictureUiModel();
          model.t1GdReferencePicture = new ReferencePictureUiModel();
        });
    };
    return {
      pageNr: 6,
      condition,
      callback
    };
  }

  // Connection with 8th page
  private preparePage8ConnectionObject(): IPageConnection<SpatialRequirementUiModel> {
    const condition = () => this.model.cmReinforcedType !== SimpleAnswerEnum.Yes;
    const callback = (model: SpatialRequirementUiModel) => {
      model.findings.forEach(finding => {
        finding.contrastEnhancementPerfusionType = SimpleAnswerEnum.None;
        finding.gdEnhancementEGEType = SimpleAnswerEnum.None;
        finding.gdEnhancementLGEType = SimpleAnswerEnum.None;

        finding.contrastEnhancementIntensityPerfusionType = EnhancementIntensityTypeEnum.None;
        finding.gdEnhancementIntensityEGEType = EnhancementIntensityTypeEnum.None;
        finding.gdEnhancementIntensityLGEType = EnhancementIntensityTypeEnum.None;

        finding.contrastEnhancementQualityPerfusionType = HomogeneityTypeEnum.None;
        finding.gdEnhancementQualityEGEType = HomogeneityTypeEnum.None;
        finding.gdEnhancementQualityLGEType = HomogeneityTypeEnum.None;
      });
    };
    return {
      pageNr: 8,
      condition,
      callback
    };
  }

  // Connection with 9th page
  private preparePage9ConnectionObject(): IPageConnection<PericardiumVesselsUiModel> {
    const condition = () => this.model.cmReinforcedType !== SimpleAnswerEnum.Yes;
    const callback = (model: PericardiumVesselsUiModel) => {
      model.findings
        .filter(finding => finding.findingType === FindingTypeEnum.MediastinumMass)
        .forEach(finding => {
          finding.cmEnhancQuantiType = CmEnhancQuantiTypeEnum.None;
          finding.noHomogenityType = HomogenityTypeEnum.None;
        });
    };
    return {
      pageNr: 9,
      condition,
      callback
    };
  }

  // Connection with 10th page
  private preparePage10ConnectionObject(): IPageConnection<SummaryUiModel> {
    const condition = () => this.model.pharmacologicalStressType !== PharmacologicalStressTypeEnum.None;
    const callback = (model: SummaryUiModel) => {
      model.isStressCardiacMRI = false;
    };
    return {
      pageNr: 10,
      condition,
      callback
    };
  }

  private resetRelaxationOmitId(id: string): CardioRelaxationTimeUiModel {
    const model = new CardioRelaxationTimeUiModel();
    model.id = id;
    return model;
  }

  protected resetCustomContrastMediumControls() {
    this.model.fractionationType = 'None';
  }

  protected resetCustomSequencesControls() {
    if (this.model.sequencesType === SequencesTypeEnum.Individual) {
      this.model.sequences.forEach(sequence => {
        sequence.isPostContrast = false;
        sequence.isSubtraction = false;
      });
    }
  }

  showDoseLabel(): boolean {
    return this.model.pharmacologicalStressType !== PharmacologicalStressTypeEnum.None;
  }

  getDoseLabel(): string {
    return this.model.pharmacologicalStressType === PharmacologicalStressTypeEnum.RegadenosonInjection
      ? 'cardioMRT.technology.doseInug.value'
      : 'cardioMRT.technology.doseInugkgmin.value';
  }

  get maxInput(): number {
    if (this.model.pharmacologicalStressType === this.pharmacologicalStressType.AdenosineInfusion) {
      return 140;
    } else if (this.model.pharmacologicalStressType === this.pharmacologicalStressType.RegadenosonInjection) {
      return 400;
    } else if (this.model.pharmacologicalStressType === this.pharmacologicalStressType.DobutamineInfusion) {
      return 20;
    }
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('shared-templates.technology.imageQualityValues').subscribe((out: string[]) => {
        this.descriptionArray = Object.values(out);
      }),
      this.translate.stream('shared-templates.technology.fractionationOptions.options').subscribe((out: DropdownModel[]) => {
        this.fractionationOptions = Object.values(out);
      })
    );
  }
}
