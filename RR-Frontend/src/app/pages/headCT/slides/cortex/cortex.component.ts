import { Component } from '@angular/core';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { CortexUiModel } from '@models/headCT/ui/cortex/cortex-ui.model';

import { CortexAreFindingsEnum, CortexFindingTypeEnum } from '@enums/shared/head/cortex';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { CortexFindingUiModel } from '@models/headCT/ui/cortex/cortex-finding-ui-model';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { CortexHelperService } from './cortex-helper.service';
import { nameof } from 'ts-simple-nameof';
import { CortexValidationModel } from '@models/headCT/ui/cortex/cortex-valdation-model';
import { TechnologyUiModel } from '@models/headCT/ui/technology/technology-ui.model';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { ExaminationUiModel } from '@models/headCT/ui/examination/examination-ui.model';
import { RegionTypeEnum } from '@enums/shared/head/cortex/common/region-type.enum';
import { uniq } from 'lodash';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

@Component({
  selector: 'rr-cortex',
  templateUrl: './cortex.component.html',
  styleUrls: ['./cortex.component.scss']
})
export class CortexComponent extends SlideBaseComponent<CortexUiModel> {
  areFindingsEnum = CortexAreFindingsEnum;
  cortexFindingTypeEnum = CortexFindingTypeEnum;
  findingHandler: DynamicComponentHandler<CortexFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;
  isContrastEnhanced: boolean;
  isExaminationArea: boolean;
  largeLocalizerOpen: boolean;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    private cortexHelperService: CortexHelperService
  ) {
    super(navService, slideRequestService, changeDetectionService, CortexUiModel, commonServices, CortexValidationModel);
    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, CortexFindingUiModel);
    this.initDynamicComponentConfig();
    this.registerCallbacks();
    this.registerConnection();

    this.subscriptions.push(
      this.cortexHelperService.largeLocalizerOpen.subscribe(value => {
        this.largeLocalizerOpen = value;
      })
    );
  }

  private registerCallbacks() {
    this.registerGetCallback((modelOut: CortexUiModel) => {
      this.findingHandler.reinitializeCollection(modelOut.findings);
    });

    this.registerSaveCallback((modelOut: CortexUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(modelOut.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  private registerConnection() {
    this.registerConnectionCallback(3, TechnologyUiModel, (technologyModel: TechnologyUiModel) => {
      this.isContrastEnhanced = technologyModel.cmReinforcedType === SimpleAnswerEnum.Yes;
    });
    this.registerConnectionCallback(1, ExaminationUiModel, (examinationModel: ExaminationUiModel) => {
      this.isExaminationArea =
        examinationModel.isBrainMRI ||
        examinationModel.isBrainstemMRI ||
        examinationModel.isPituitaryMRI ||
        examinationModel.isOrbitaMRI ||
        examinationModel.isTemporalBone ||
        examinationModel.isParanasalSinusMRI;
    });
  }

  disableChosenValueInRegionTypeDropdown() {
    let currentValue: Array<RegionTypeEnum> = [];

    this.findingHandler.collection.forEach(finding => {
      if (!finding.isDeleted) {
        currentValue.push(finding.regionType);
      }
    });
    currentValue = currentValue.filter(item => item !== RegionTypeEnum.None);
    currentValue = uniq(currentValue);

    this.cortexHelperService.excludedValueFromRegionDropdown.next(currentValue);
  }

  isDropdownDisabled(): boolean {
    return this.model.areFindings !== this.areFindingsEnum.Yes;
  }

  isFindingType(type: CortexFindingTypeEnum): boolean {
    return this.findingHandler.currentItem.findingType === type;
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      })
    );

    this.subscriptions.push(
      this.translate.stream('headCT.cortex.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = out;
      })
    );

    this.subscriptions.push(
      this.translate.stream('headCT.cortex.addNewFinding.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      })
    );
  }

  onLargeLocalizerClosed() {
    this.cortexHelperService.largeLocalizerOpen.next(null);
    this.resetCortexLocalizationRelatedValues();
  }

  private resetCortexLocalizationRelatedValues() {
    const model = this.findingHandler.currentItem;
    const cortexLocations = model.cortexLocations;
    if (!cortexLocations.parietalLobeRight && !cortexLocations.parietalLobeLeft) {
      model.isPraecuneus = false;
    }
    if (!cortexLocations.occipitalLobeRight && !cortexLocations.occipitalLobeLeft) {
      model.isCuneus = false;
      model.isLingualGyrus = false;
    }
    if (!cortexLocations.temporalLobeRight && !cortexLocations.temporalLobeLeft) {
      model.isGyrusTemporalisTransversus = false;
      model.isLateralOccipitotemporalGyrus = false;
    }
    if (!cortexLocations.cerebellum) {
      model.isParsIntermedia = false;
      model.isSuperiorCerebellarPeduncle = false;
      model.isMiddleCerebellarPeduncle = false;
      model.isInferiorCerebellarPeduncle = false;
    }
  }

  initDynamicComponentConfig(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.findingType = nameof<CortexFindingUiModel>(m => m.findingType);
    this.findingDropdownConfig.itemCount = 4;
    this.findingDropdownConfig.autoConfigFindingRRId = 'hea_c_060106';
  }
}
