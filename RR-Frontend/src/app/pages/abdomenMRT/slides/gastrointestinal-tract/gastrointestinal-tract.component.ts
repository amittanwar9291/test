import { Component } from '@angular/core';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';

import { NavigationService } from '@services/shared';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';

import { GastrointestinalTractUiModel } from '@models/abdomenMRT/ui/gastrointestinal-tract/gastrointestinal-tract-ui.model';
import { GastrointestinalTractFindingUiModel } from '@models/abdomenMRT/ui/gastrointestinal-tract/gastrointestinal-tract-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TechnologyUiModel } from '@models/abdomenMRT/ui/technology/technology-ui.model';
import { GastrointestinalTractValidationModel } from '@models/abdomenMRT/ui/gastrointestinal-tract/gastrointestinal-tract-validation.model';

import { GastrointestinaltractFindingTypeEnum } from '@enums/abdomenMRT/gastrointestinal-tract/gastrointestinaltract-finding-type.enum';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';

import { nameof } from 'ts-simple-nameof';
import { ExaminationRegionUiModel } from '@models/abdomenMRT/ui/examination-region/examination-region-ui.model';
import { GenderTypeEnum } from '@enums/shared/gender-type.enum';
import { SequenceUiModel } from '@models/abdomenMRT/ui/technology/sequence-ui.model';
import { WeightingTypeEnum } from '@enums/shared/technology';

@Component({
  selector: 'rr-gastrointestinal-tract',
  templateUrl: './gastrointestinal-tract.component.html',
  styleUrls: ['./gastrointestinal-tract.component.scss']
})
export class GastrointestinalTractComponent extends SlideBaseComponent<GastrointestinalTractUiModel> {
  areFindings = AreFindingsEnum;
  findingType = GastrointestinaltractFindingTypeEnum;
  findingHandler: DynamicComponentHandler<GastrointestinalTractFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;
  activeTabIndex = 0;
  descriptionTypes = [this.findingType.GastricMass, this.findingType.IntestinalMass];

  isCMReinforced: boolean;
  isDWIInAnySequence: boolean;
  isFemale: boolean;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(
      navService,
      slideRequestService,
      changeDetectionService,
      GastrointestinalTractUiModel,
      commonServices,
      GastrointestinalTractValidationModel
    );

    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, GastrointestinalTractFindingUiModel);
    this.initDynamicComponentConfig();
    this.registerCallbacks();
    this.registerConnections();
  }
  private registerCallbacks() {
    this.registerGetCallback((modelOut: GastrointestinalTractUiModel) => {
      this.findingHandler.reinitializeCollection(modelOut.findings);
    });

    this.registerSaveCallback((modelOut: GastrointestinalTractUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(modelOut.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  private registerConnections(): void {
    this.registerConnectionCallback(3, TechnologyUiModel, (technologyUiModel: TechnologyUiModel) => {
      this.isCMReinforced = technologyUiModel.cmReinforcedType === SimpleAnswerEnum.Yes;
      this.isDWIInAnySequence =
        technologyUiModel &&
        technologyUiModel.sequences.some((model: SequenceUiModel) => model.weightingType === WeightingTypeEnum.DWI && !model.isDeleted);
    });
    this.registerConnectionCallback(1, ExaminationRegionUiModel, (examinationModel: ExaminationRegionUiModel) => {
      this.isFemale = examinationModel.patientInformation.gender === GenderTypeEnum.Female;
    });
  }

  isDropdownDisabled(): boolean {
    return this.model.areFindings !== this.areFindings.Yes;
  }

  get isFindingWithTabs(): boolean {
    return [
      GastrointestinaltractFindingTypeEnum.GastricMass,
      GastrointestinaltractFindingTypeEnum.SegmentalBowelFindings,
      GastrointestinaltractFindingTypeEnum.IntestinalMass,
      GastrointestinaltractFindingTypeEnum.BowelDiverticula,
      GastrointestinaltractFindingTypeEnum.Hernia,
      GastrointestinaltractFindingTypeEnum.Appendicitis
    ].includes(this.findingHandler.currentItem.findingType);
  }
  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('abdomenMRT.gastrointestinal.placeholder').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      })
    );
    this.subscriptions.push(
      this.translate.stream('abdomenMRT.gastrointestinal.findingTypes').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.values(out);
      })
    );
    this.subscriptions.push(
      this.translate.stream('abdomenMRT.gastrointestinal.addNewFinding.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      })
    );
  }
  initDynamicComponentConfig(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.findingType = nameof<GastrointestinalTractFindingUiModel>(m => m.findingType);
    this.findingDropdownConfig.autoConfigFindingRRId = 'abd_m_090106';
    this.findingDropdownConfig.itemCount = 4;
  }
}
