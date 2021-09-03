import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';

import { Component } from '@angular/core';

import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';

import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { MediastinumFindingTypeEnum } from '@enums/thoraxCT/mediastinum';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';

import { EnumMapper } from '@mappings/shared/enum/enum.mapper';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { MediastinumFindingUiModel } from '@models/thoraxCT/ui/mediastinum/mediastinum-finding-ui.model';
import { MediastinumUiModel } from '@models/thoraxCT/ui/mediastinum/mediastinum-ui.model';
import { MediastinumValidationModel } from '@models/thoraxCT/ui/mediastinum/mediastinum-validation.model';
import { LungsModel } from '@models/thoraxCT/ui/thorax/lungs.model';
import { TechnologyUiModel } from '@models/thoraxCT/ui/technology/technology-ui.model';

import { NavigationService } from '@services/shared';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { DifferentialDiagnosisPresetService } from '@abstractions/abstract-classes/differential-diagnosis-preset-service';
import { MediastinumPresetsHttpService } from '@services/thoraxCT/http/mediastinum/mediastinum-presets-http.service';

@Component({
  selector: 'rr-mediastinum',
  templateUrl: './mediastinum.component.html',
  styleUrls: ['./mediastinum.component.scss'],
  providers: [
    {
      provide: DifferentialDiagnosisPresetService,
      useClass: MediastinumPresetsHttpService
    }
  ]
})
export class MediastinumComponent extends SlideBaseComponent<MediastinumUiModel> {
  isLargeLocalizerOpened: boolean;
  localizerModel: LungsModel;
  findingHandler: DynamicComponentHandler<MediastinumFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;

  additionalData = {
    isCmSelected: false
  };

  areFindingsEnum = AreFindingsEnum;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    private enumMapper: EnumMapper
  ) {
    super(navService, slideRequestService, changeDetectionService, MediastinumUiModel, commonServices, MediastinumValidationModel);

    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, MediastinumFindingUiModel);

    this.initializeDynamicDropdownConfig();

    this.registerCallbacks();
  }

  private registerCallbacks() {
    this.registerGetCallback((outModel: MediastinumUiModel) => {
      this.findingHandler.reinitializeCollection(outModel.findings);
    });

    this.registerSaveCallback((outModel: MediastinumUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(outModel.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });

    this.registerConnectionCallback(3, TechnologyUiModel, (technologyModel: TechnologyUiModel) => {
      this.additionalData = {
        isCmSelected: technologyModel && technologyModel.cmReinforcedType === SimpleAnswerEnum.Yes
      };
    });
  }

  initializeDynamicDropdownConfig() {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.itemCount = 5;
    this.findingDropdownConfig.findingType = 'findingType';
    this.findingDropdownConfig.autoConfigFindingRRId = 'tho_c_040106';
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('thoraxCT.mediastinum.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.keys(out).map(e => out[e]);
      })
    );

    this.subscriptions.push(
      this.translate.stream('thoraxCT.mediastinum.placeholder').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      })
    );

    this.subscriptions.push(
      this.translate.stream('thoraxCT.mediastinum.addNewFinding.value').subscribe((out: string) => {
        if (this.findingDropdownConfig) {
          this.findingDropdownConfig.buttonText = out;
        }
      })
    );
  }

  isDynamicPartDisabled(): boolean {
    return this.model.areFindings !== 'True';
  }

  isCurrentItem(item: string): boolean {
    return this.findingHandler.currentItem.findingType === item;
  }

  setLargeLocalizerOpened(isLocalizerOpened: boolean) {
    this.isLargeLocalizerOpened = isLocalizerOpened;
  }

  onLargeLocalizerClosed() {
    if (this.isLargeLocalizerOpened) {
      this.isLargeLocalizerOpened = false;
    }

    if (this.enumMapper.mapToString(this.findingHandler.currentItem.lungsLocation) !== 'None') {
      this.validationHelperService.removeError('lungsLocation');
    }
  }

  isFindingWithTabs(): boolean {
    return [MediastinumFindingTypeEnum.Mass, MediastinumFindingTypeEnum.CardiovascularPulmonaryArteries].includes(
      this.findingHandler.currentItem.findingType
    );
  }

  /**
   * According to the documentation, the checkbox isReferenceVersionAccordingToRECIST2
   * "[...] would be editable only twice time, the user had only the possibiliy to check the box only in 2 findings".
   */
  isRECISTCheckboxSelectable(): boolean {
    let count = 0;
    this.model.findings.forEach(finding => {
      if (!finding.isDeleted && finding.isReferenceLesionAccToRECIST) {
        count++;
      }
    });
    return count < 2;
  }
}
