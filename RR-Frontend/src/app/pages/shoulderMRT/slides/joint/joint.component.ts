import { Component } from '@angular/core';

import { NavigationService } from '@services/shared';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';

import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { JointUiModel } from '@models/shoulderMRT/ui/joint/joint-ui-model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { JointFindingUiModel } from '@models/shoulderMRT/ui/joint/joint-finding-ui.model';
import { JointValidation } from '@models/shoulderMRT/ui/joint/joint-validation.model';
import { TechnologyUiModel } from '@models/shoulderMRT/ui/technology/technology-ui.model';

import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { JointAndBursaeFindingType } from '@enums/shoulderMRT/joint';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';

@Component({
  selector: 'rr-joint',
  templateUrl: './joint.component.html',
  styleUrls: ['./joint.component.scss']
})
export class JointComponent extends SlideBaseComponent<JointUiModel> {
  findingTypes: DropdownModel[];
  placeholder: string;
  findingHandler: DynamicComponentHandler<JointFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;

  areFindingsType: typeof AreFindingsEnum;
  findingType: typeof JointAndBursaeFindingType;

  isCmReinforcedTypeYes: boolean;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, JointUiModel, commonServices, JointValidation);

    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, JointFindingUiModel);

    this.areFindingsType = AreFindingsEnum;
    this.findingType = JointAndBursaeFindingType;

    this.initializeDynamicDropdownConfig();

    this.registerCallbacks();

    this.registerConnectionCallback(3, TechnologyUiModel, (modelTechnology: TechnologyUiModel) => {
      if (modelTechnology.isIntraarticular) {
        const isArticularEffusionElem = (val: DropdownModel): boolean => val.value === JointAndBursaeFindingType.ArticularEffusion;
        const indexOfArticularEffusionFinding = this.findingDropdownConfig.dropdownValues.findIndex(isArticularEffusionElem);

        this.findingDropdownConfig.dropdownValues.splice(indexOfArticularEffusionFinding, 1);
      }
      if (modelTechnology.cmReinforcedType === SimpleAnswerEnum.Yes) {
        this.isCmReinforcedTypeYes = true;
      }
    });
  }

  private registerCallbacks() {
    this.registerGetCallback((outModel: JointUiModel) => {
      this.findingHandler.reinitializeCollection(outModel.findings);
    });

    this.registerSaveCallback((outModel: JointUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(outModel.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  private initializeDynamicDropdownConfig() {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.itemCount = 8;
    this.findingDropdownConfig.findingColumnIds.findingRRId = 'sho_m_070106';
    this.findingDropdownConfig.findingColumnIds.buttonRRId = 'sho_m_070107';
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('shoulderMRT.jointAndBursae.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.keys(out).map(e => out[e]);
      }),
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      }),
      this.translate.stream('shoulderMRT.jointAndBursae.addNewFinding.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      })
    );
  }
}
