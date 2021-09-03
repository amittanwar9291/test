import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { Component, OnDestroy } from '@angular/core';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';
import {
  CauseTypeEnum,
  ClassificationTypeEnum,
  DifferentialDiagnosisDetailsTypeEnum,
  DominantPatternTypeEnum,
  IIPHRCTPatternTypeEnum,
  LocalizationAxialTypeEnum,
  LungInterstitiumAreFindingsEnum,
  LungInterstitiumFindingTypeEnum,
  LungInterstitiumLocalizationCraniocaudalTypeEnum,
  LungInterstitiumDiagnosisTypeEnum,
  SideComparisonTypeEnum,
  SarcoidosisTypeEnum
} from '@enums/thoraxCT/lung-interstitium';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';

import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { LungsFlapsModel } from '@models/shared/thorax/localizers/lungs-flaps-model';
import { LungInterstitiumFindingUiModel } from '@models/thoraxCT/ui/lung-interstitium/lung-interstitium-finding-ui.model';
import { LungInterstitiumUiModel } from '@models/thoraxCT/ui/lung-interstitium/lung-interstitium-ui.model';
import { LungInterstitiumValidationModel } from '@models/thoraxCT/ui/lung-interstitium/lung-interstitium-validation.model';

import { NavigationService } from '@services/shared';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { LungInterstitiumHelperService, LungInterstitiumLargeLocalizerConfig } from './lung-interstitium-helper.service';
import { DifferentialDiagnosisPresetService } from '@abstractions/abstract-classes/differential-diagnosis-preset-service';
import { LungInterstitiumPresetHttpService } from '@services/thoraxCT/http/lung-interstitium/lung-interstitium-preset-http.service';
import { FindingBase } from '@models/shared/finding/finding.base';
import { omit, compact } from 'lodash';
import { nameof } from 'ts-simple-nameof';
import { AppConfig } from '../../../../app.config';
import { FileService } from '@services/shared/file-service/file.service';

@Component({
  selector: 'rr-lung-interstitium',
  templateUrl: './lung-interstitium.component.html',
  styleUrls: ['./lung-interstitium.component.scss'],
  providers: [
    {
      provide: DifferentialDiagnosisPresetService,
      useClass: LungInterstitiumPresetHttpService
    }
  ]
})
export class LungInterstitiumComponent extends SlideBaseComponent<LungInterstitiumUiModel> implements OnDestroy {
  differentialDiagnosisList: DropdownGroupedModel[];

  findingHandler: DynamicComponentHandler<LungInterstitiumFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;

  lungInterstitiumAreFindingsEnum = LungInterstitiumAreFindingsEnum;
  lungInterstitiumFindingTypeEnum = LungInterstitiumFindingTypeEnum;
  descriptionTypeEnum = DescriptionTypeEnum;

  localizerConfig: LungInterstitiumLargeLocalizerConfig;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    private lungInterstitiumHelperService: LungInterstitiumHelperService,
    private enumMapper: EnumMapper,
    private fileService: FileService
  ) {
    super(
      navService,
      slideRequestService,
      changeDetectionService,
      LungInterstitiumUiModel,
      commonServices,
      LungInterstitiumValidationModel
    );
    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, LungInterstitiumFindingUiModel);

    this.initializeDynamicDropdownConfig();
    this.registerCallbacks();

    this.subscriptions.push(
      this.lungInterstitiumHelperService.largeLocalizerOpen.subscribe((value: LungInterstitiumLargeLocalizerConfig) => {
        this.localizerConfig = value;
      })
    );
    this.subscriptions.push(
      this.lungInterstitiumHelperService.diagnosisPresetData.subscribe((presetData: FindingBase | FindingBase[]) => {
        if (presetData) {
          this.updatePageModelOnPreset(presetData);
        }
      })
    );
  }

  private registerCallbacks() {
    this.registerGetCallback((outModel: LungInterstitiumUiModel) => {
      this.findingHandler.reinitializeCollection(outModel.findings);
    });

    this.registerSaveCallback((outModel: LungInterstitiumUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(outModel.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  initializeDynamicDropdownConfig() {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.itemCount = 8;
    this.findingDropdownConfig.findingType = 'findingType';
    const columnIds = this.findingDropdownConfig.findingColumnIds;
    columnIds.iDescribeLabelRRId = 'tho_c_0601104';
    columnIds.iKnowLabelRRId = 'tho_c_0601105';
    columnIds.iDescribeRadioRRId = 'tho_c_0601106';
    columnIds.iKnowRadioRRId = 'tho_c_0601107';
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('thoraxCT.lungInterstitium.W027.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.keys(out).map(e => out[e]);
      })
    );

    this.subscriptions.push(
      this.translate.stream('thoraxCT.lungInterstitium.placeholder').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      })
    );

    this.subscriptions.push(
      this.translate.stream('thoraxCT.lungInterstitium.addNewFinding.value').subscribe((out: string) => {
        if (this.findingDropdownConfig) {
          this.findingDropdownConfig.buttonText = out;
        }
      })
    );
  }

  isCurrentItem(item: string): boolean {
    return this.findingHandler.currentItem.findingType === item;
  }

  isMainContentDisabled(): boolean {
    return this.model.areFindings !== this.lungInterstitiumAreFindingsEnum.Finding;
  }

  onLargeLocalizerClosed() {
    if (this.enumMapper.mapToString(this.findingHandler.currentItem[this.localizerConfig.modelName]) !== 'None') {
      this.validationHelperService.removeError(this.localizerConfig.modelName);
    }
    this.lungInterstitiumHelperService.largeLocalizerOpen.next(null);
  }

  setIDescribe() {
    this.model.descriptionType = this.descriptionTypeEnum.IDescribe;
  }

  onDescriptionChanged(value: string) {
    this.clearModelAndValidationErrors();
    this.model.descriptionType = value as DescriptionTypeEnum;
  }

  clearModelAndValidationErrors() {
    this.clearModel();
    this.clearValidationErrors();
  }

  clearModel() {
    this.model.descriptionType = DescriptionTypeEnum.None;
    this.model.differentialDiagnosis = LungInterstitiumDiagnosisTypeEnum.None;
    this.model.dominantPatternType = DominantPatternTypeEnum.None;
    this.model.localizationCraniocaudalType = LungInterstitiumLocalizationCraniocaudalTypeEnum.None;
    this.model.lungsFlapsLocation = new LungsFlapsModel();
    this.model.localizationAxialType = LocalizationAxialTypeEnum.None;
    this.model.sideComparisonType = SideComparisonTypeEnum.None;
    this.model.asymmetricalType = LocationTypeEnum.None;
    this.findingHandler.deleteAllElements(false);
    this.model.differentialDiagnosis1 = LungInterstitiumDiagnosisTypeEnum.None;
    this.model.isSuspected = false;
    this.model.differentialDiagnosis2 = LungInterstitiumDiagnosisTypeEnum.None;
    this.model.isSubordinated = false;
    this.model.differentialDiagnosis3 = LungInterstitiumDiagnosisTypeEnum.None;
    this.model.causeType1 = CauseTypeEnum.None;
    this.model.causeType2 = CauseTypeEnum.None;
    this.model.causeType3 = CauseTypeEnum.None;
    this.model.iiphrctPatternType1 = IIPHRCTPatternTypeEnum.None;
    this.model.iiphrctPatternType2 = IIPHRCTPatternTypeEnum.None;
    this.model.iiphrctPatternType3 = IIPHRCTPatternTypeEnum.None;
    this.model.classificationType1 = ClassificationTypeEnum.None;
    this.model.classificationType2 = ClassificationTypeEnum.None;
    this.model.classificationType3 = ClassificationTypeEnum.None;
    this.model.differentialDiagnosisDetailsType1 = DifferentialDiagnosisDetailsTypeEnum.None;
    this.model.differentialDiagnosisDetailsType2 = DifferentialDiagnosisDetailsTypeEnum.None;
    this.model.differentialDiagnosisDetailsType3 = DifferentialDiagnosisDetailsTypeEnum.None;
    this.model.sarcoidosisType1 = SarcoidosisTypeEnum.None;
    this.model.sarcoidosisType2 = SarcoidosisTypeEnum.None;
    this.model.sarcoidosisType3 = SarcoidosisTypeEnum.None;
    this.model.isBronchiolitisObliterans = false;
  }

  clearValidationErrors() {
    this.validationHelperService.removeError(nameof<LungInterstitiumUiModel>(m => m.differentialDiagnosis));
    this.validationHelperService.removeError(nameof<LungInterstitiumUiModel>(m => m.dominantPatternType));
    this.validationHelperService.removeError(nameof<LungInterstitiumUiModel>(m => m.localizationCraniocaudalType));
    this.validationHelperService.removeError(nameof<LungInterstitiumUiModel>(m => m.asymmetricalType));
    this.model.findings.forEach((finding: LungInterstitiumFindingUiModel) =>
      this.validationHelperService.removeAllErrorsInFinding(finding.validationId)
    );
    this.validationHelperService.removeError(nameof<LungInterstitiumUiModel>(m => m.differentialDiagnosis1));
    this.validationHelperService.removeError(nameof<LungInterstitiumUiModel>(m => m.causeType1));
    this.validationHelperService.removeError(nameof<LungInterstitiumUiModel>(m => m.causeType2));
    this.validationHelperService.removeError(nameof<LungInterstitiumUiModel>(m => m.causeType3));
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    this.lungInterstitiumHelperService.largeLocalizerOpen.next(null);
    this.lungInterstitiumHelperService.diagnosisPresetData.next(null);
  }

  private updatePageModelOnPreset(presetData: FindingBase | FindingBase[]) {
    this.removeImages();
    this.clearPage();
    this.updateFindingsOnPreset(presetData);
  }

  private clearPage() {
    const newPageModel = new LungInterstitiumUiModel();

    const omittedProperties = [
      nameof<LungInterstitiumUiModel>(m => m.areFindings),
      nameof<LungInterstitiumUiModel>(m => m.descriptionType),
      nameof<LungInterstitiumUiModel>(m => m.id),
      nameof<LungInterstitiumUiModel>(m => m.reportId),
      nameof<LungInterstitiumUiModel>(m => m.reportTypeName),
      nameof<LungInterstitiumUiModel>(m => m.differentialDiagnosis),
      nameof<LungInterstitiumUiModel>(m => m.findings)
    ];
    Object.assign(this.model, omit(newPageModel, omittedProperties));
    Object.keys(newPageModel).forEach(item => this.validationHelperService.removeError(item));
    this.model.findings.forEach(item => this.validationHelperService.removeAllErrorsInFinding(item.validationId));
  }

  private updateFindingsOnPreset(presetData: FindingBase | FindingBase[]) {
    const findingsWithPresetData: LungInterstitiumFindingUiModel[] = this.transformPresetDataIntoFinding(presetData);
    this.findingHandler.deleteAllElements(true);
    findingsWithPresetData.forEach((item, index) => {
      this.findingHandler.addElement();
      const currentFindings = this.findingHandler.collection.filter(elem => !elem.isDeleted);
      Object.assign(currentFindings[index], item);
    });
    this.validationDataService.currentFindingValidationId.next(this.findingHandler.currentItem.validationId);
  }

  private transformPresetDataIntoFinding(presetData: FindingBase | FindingBase[]): LungInterstitiumFindingUiModel[] {
    const presetDataInArray = Array.isArray(presetData) ? presetData : [presetData];
    const newFindingsWithPResetData: LungInterstitiumFindingUiModel[] = [];
    presetDataInArray.forEach(elem => {
      newFindingsWithPResetData.push(Object.assign(new LungInterstitiumFindingUiModel(), omit(elem, ['id'])));
    });
    return newFindingsWithPResetData;
  }

  private removeImages() {
    const imagesToRemoveIds = compact(this.model.findings.map(item => item.referencePicture.imageFileId));
    if (imagesToRemoveIds.length > 0) {
      this.fileService.setRoute(`${AppConfig.settings.servicesUrls.thoraxCT.lungParenchyma.fileUpload}`);
      return this.fileService.deleteMultiple(imagesToRemoveIds);
    }
  }
}
