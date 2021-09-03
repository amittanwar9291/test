import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { Component } from '@angular/core';

import { MeningesUiModel } from '@models/headMRT/ui/meninges/meninges-ui.model';
import { NavigationService } from '@services/shared';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';

import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';

import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { MeningesValidationModel } from '@models/headMRT/ui/meninges/meninges-validation.model';

import { MeningesAreFindingsEnum } from '@enums/headMRT/meninges';
import { MeningesMassDiagnosisTypeEnum } from '@enums/headMRT/meninges';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { MeningesFindingUiModel } from '@models/headMRT/ui/meninges/meninges-finding-ui.model';
import { MeningesFindingTypeEnum, HistologyKnownTypeEnum } from '@enums/headMRT/meninges';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { TechnologyUiModel } from '@models/headMRT/ui/technology/technology-ui.model';
import { WeightingTypeEnum } from '@enums/shared/technology';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';

@Component({
  selector: 'rr-meninges',
  templateUrl: './meninges.component.html',
  styleUrls: ['./meninges.component.scss']
})
export class MeningesComponent extends SlideBaseComponent<MeningesUiModel> {
  findingHandler: DynamicComponentHandler<MeningesFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;

  areFindings: typeof MeningesAreFindingsEnum;
  findingType: typeof MeningesFindingTypeEnum;
  descriptionType: typeof DescriptionTypeEnum;
  diffDiagnosisOptions: DropdownModel[];
  histologyKnownTypeEnum = HistologyKnownTypeEnum;
  meningesMassDiagnosisType = MeningesMassDiagnosisTypeEnum;
  isDWIInAnySequence: boolean;
  isContrastEnhanced: boolean;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, MeningesUiModel, commonServices, MeningesValidationModel);

    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, MeningesFindingUiModel);
    this.initFindingColumnConfig();

    this.registerCallbacks();
    this.registerConnection();

    this.areFindings = MeningesAreFindingsEnum;
    this.findingType = MeningesFindingTypeEnum;
    this.descriptionType = DescriptionTypeEnum;
    this.meningesMassDiagnosisType = MeningesMassDiagnosisTypeEnum;
  }

  private registerConnection() {
    this.registerConnectionCallback(3, TechnologyUiModel, (technologyModel: TechnologyUiModel) => {
      this.isDWIInAnySequence = technologyModel.sequences.some(
        sequence => sequence.weightingType === WeightingTypeEnum.DWI && !sequence.isDeleted
      );
      this.isContrastEnhanced = technologyModel.cmReinforcedType === SimpleAnswerEnum.Yes;
    });
  }

  private registerCallbacks() {
    this.registerGetCallback((modelOut: MeningesUiModel) => {
      this.findingHandler.reinitializeCollection(modelOut.findings);
    });

    this.registerSaveCallback((modelOut: MeningesUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(modelOut.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('headMRT.meninges.findingTypes').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.values(out);
      }),
      this.translate.stream('headMRT.meninges.addNewFinding.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      }),
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      })
    );
  }

  private initFindingColumnConfig(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.itemCount = 4;
    this.findingDropdownConfig.autoConfigFindingRRId = 'hea_m_050106';
  }

  isMeningenFindingType(type: MeningesFindingTypeEnum[]): boolean {
    return type.includes(this.findingHandler.currentItem.findingType);
  }

  isFindingType(type: MeningesFindingTypeEnum): boolean {
    return this.findingHandler.currentItem.findingType === type;
  }

  clearIsSuspicionOf(): void {
    this.findingHandler.currentItem.isSuspicionOf = false;
  }
}
