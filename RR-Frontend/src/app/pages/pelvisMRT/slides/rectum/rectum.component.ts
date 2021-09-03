import { Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { RectumUiModel } from '@models/pelvisMRT/ui/rectum/rectum-ui.model';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';

import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { RectumFindingUiModel } from '@models/pelvisMRT/ui/rectum/rectum-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { LocalizationUiModel } from '@models/pelvisMRT/ui/localization/localization-ui.model';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { RectumValidationModel } from '@models/pelvisMRT/ui/rectum/rectum-validation.model';
import { SummaryUiModel } from '@models/pelvisMRT/ui/summary/summary-ui.model';
import { TnStagingTypeEnum } from '@enums/pelvisMRT/summary/tn-staging-type.enum';
import { filter } from 'lodash';
import { TStageTypeEnum } from '@enums/pelvisMRT/summary/t-stage-type.enum';
import { NStageTypeEnum } from '@enums/pelvisMRT/summary/n-stage-type.enum';
import { TechnologyUiModel } from '@models/pelvisMRT/ui/technology/technology-ui.model';
import { Rectum } from '@models/pelvisMRT/ui/localizers/rectum';
import { FindingTypesEnum } from '@enums/pelvisMRT/rectum/common/finding-types.enum';
import { DifferentialDiagnosisTypeEnum } from '@enums/pelvisMRT/rectum/common/differential-diagnosis-type.enum';

@Component({
  selector: 'rr-rectum',
  templateUrl: './rectum.component.html',
  styleUrls: ['./rectum.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class RectumComponent extends SlideBaseComponent<RectumUiModel> {
  findingHandler: DynamicComponentHandler<RectumFindingUiModel>;
  findingType: typeof FindingTypesEnum;
  findingDropdownConfig: FindingColumnConfig;
  localizationModel: LocalizationUiModel;
  technologyModel: TechnologyUiModel;
  localisationDropdownOptions: DropdownModel[];
  differentialDiagnosisAppendictisList: DropdownModel[];
  fistelDropdownOptions: DropdownModel[];
  fistulaLocalizationSSLTypeDropdownOptions: DropdownModel[];
  w030differentialDiagnosisList: DropdownModel[];

  differentialSigmaMass01Options: DropdownModel[];
  differentialSigmaMass02Options: DropdownModel[];
  largeLocaliserOpen: boolean;
  tNStagingType: typeof TnStagingTypeEnum;
  tStageType: typeof TStageTypeEnum;
  nStageType: typeof NStageTypeEnum;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, RectumUiModel, commonServices, RectumValidationModel);
    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, RectumFindingUiModel);

    this.tStageType = TStageTypeEnum;
    this.nStageType = NStageTypeEnum;
    this.findingType = FindingTypesEnum;

    this.registerGetCallback((model: RectumUiModel) => {
      this.findingHandler.reinitializeCollection(model.findings);
    });

    this.registerSaveCallback((model: RectumUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(model.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });

    this.addPageConnection(
      12,
      SummaryUiModel,
      () => {
        return (
          filter(this.model.findings, {
            findingType: 'RectalCarcinoma',
            isDeleted: false
          }).length === 0
        );
      },
      (model: SummaryUiModel) => {
        if (model.tnStagingType === TnStagingTypeEnum.RectalCancer) {
          model.tnStagingType = TnStagingTypeEnum.None;
          model.rectalCancerTStageType = this.tStageType.None;
          model.rectalCancerNStageType = this.nStageType.None;
        }
      }
    );

    this.addPageConnection(
      12,
      SummaryUiModel,
      () => {
        return (
          filter(this.model.findings, {
            sigmaMassDifferentialDiagnosisType: DifferentialDiagnosisTypeEnum.SigmoidColonCancer,
            isDeleted: false
          }).length === 0
        );
      },
      (model: SummaryUiModel) => {
        if (model.tnStagingType === TnStagingTypeEnum.SigmoidColonCancer) {
          model.tnStagingType = TnStagingTypeEnum.None;
          model.sigmoidColonTStageType = this.tStageType.None;
          model.sigmoidColonNStageType = this.nStageType.None;
        }
      }
    );

    this.registerConnectionCallback(1, LocalizationUiModel, (localizationModel: LocalizationUiModel) => {
      this.localizationModel = localizationModel ? localizationModel : new LocalizationUiModel();
    });

    this.registerConnectionCallback(3, TechnologyUiModel, (technologyModel: TechnologyUiModel) => {
      this.technologyModel = technologyModel ? technologyModel : new TechnologyUiModel();
    });

    this.findingsConfiguration();
    this.largeLocaliserOpen = false;
  }

  private static checkLocalizerPartSelected(localizerModel: Rectum) {
    for (const field in localizerModel) {
      if (localizerModel[field]) {
        return true;
      }
    }
  }

  findingsConfiguration() {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.itemCount = 8;
    this.findingDropdownConfig.findingColumnIds.buttonRRId = 'pel_m_080108';
    this.findingDropdownConfig.findingColumnIds.findingRRId = 'pel_m_080107';
  }

  isDynamicPartDisabled(): boolean {
    return this.model.areFindings !== 'True';
  }

  openLargeLocalizer(): void {
    this.largeLocaliserOpen = true;
  }

  closeLargeLocalizer(): void {
    this.largeLocaliserOpen = false;
    this.clearLocalizersErrors();
  }

  private clearLocalizersErrors() {
    const localizerModel = this.findingHandler.currentItem.fistulaLocalizer;
    const isSelected = RectumComponent.checkLocalizerPartSelected(localizerModel);

    if (!isSelected) {
      return;
    }

    return this.validationHelperService.removeError('fistulaLocalizer');
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('pelvisMRT.rectum.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.keys(out).map(e => out[e]);
      }),
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      }),
      this.translate.stream('pelvisMRT.rectum.addNewFinding.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      }),
      this.translate.stream('pelvisMRT.rectum.localisationSSL.options').subscribe((out: DropdownModel[]) => {
        this.localisationDropdownOptions = Object.keys(out).map(e => out[e]);
      }),
      this.translate.stream('pelvisMRT.rectum.differentialDiagnosisSigmaMass01.options').subscribe((out: DropdownModel[]) => {
        this.differentialSigmaMass01Options = Object.keys(out).map(e => out[e]);
      }),
      this.translate.stream('pelvisMRT.rectum.differentialDiagnosisSigmaMass02.options').subscribe((out: DropdownModel[]) => {
        this.differentialSigmaMass02Options = Object.keys(out).map(e => out[e]);
      }),
      this.translate.stream('pelvisMRT.rectum.differentialDiagnosisAppendictisList.options').subscribe((out: DropdownModel[]) => {
        this.differentialDiagnosisAppendictisList = Object.keys(out).map(e => out[e]);
      }),
      this.translate.stream('pelvisMRT.rectum.fistelDropdownOptions.options').subscribe((out: DropdownModel[]) => {
        this.fistelDropdownOptions = Object.keys(out).map(e => out[e]);
      }),
      this.translate.stream('pelvisMRT.rectum.hoursOptions.options').subscribe((out: DropdownModel[]) => {
        this.fistulaLocalizationSSLTypeDropdownOptions = Object.keys(out).map(e => out[e]);
      }),
      this.translate.stream('pelvisMRT.rectum.w030differentialDiagnosisList.options').subscribe((out: DropdownModel[]) => {
        this.w030differentialDiagnosisList = Object.keys(out).map(e => out[e]);
      })
    );
  }
}
