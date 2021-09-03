import { Component } from '@angular/core';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { KneeBonesTranslations } from '@models/kneeMRT/ui/bones/knee-bones-translations';
import { BonesValidationModel } from '@models/kneeMRT/ui/bones/knee-bones-validation.model';
import { KneeBonesUiModel } from '@models/kneeMRT/ui/bones/knee-bones-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { KneeBonesFindingUiModel } from '@models/kneeMRT/ui/bones/knee-bones-finding-ui.model';

import { NavigationService } from '@services/shared';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';

import { BonesFindingTypeEnum } from '@enums/kneeMRT/bones/bones-finding-type.enum';

import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { TechnologyUiModel } from '@models/kneeMRT/ui/technology/technology-ui.model';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';

@Component({
  selector: 'rr-knee-mrt-bones',
  templateUrl: './bones.component.html',
  styleUrls: ['./bones.component.scss']
})
export class BonesComponent extends SlideBaseComponent<KneeBonesUiModel> {
  findingHandler: DynamicComponentHandler<KneeBonesFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;
  descriptionTypes: string[];
  differentialDiagnosisList: DropdownModel[];
  descriptionArray: string[];

  findingType: typeof BonesFindingTypeEnum;
  isCMYes: boolean;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, KneeBonesUiModel, commonServices, BonesValidationModel);

    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, KneeBonesFindingUiModel);

    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.findingType = 'findingType';
    this.findingDropdownConfig.findingColumnIds.findingRRId = 'kne_m_040106';
    this.findingDropdownConfig.findingColumnIds.buttonRRId = 'kne_m_040107';
    this.findingDropdownConfig.itemCount = 6;
    this.findingDropdownConfig.translationBits = new KneeBonesTranslations();

    this.registerCallbacks();
    this.registerConnection();
    this.findingType = BonesFindingTypeEnum;
  }

  private registerCallbacks() {
    this.registerGetCallback((outModel: KneeBonesUiModel) => {
      this.findingHandler.reinitializeCollection(outModel.findings);
    });

    this.registerSaveCallback((outModel: KneeBonesUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(outModel.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  private registerConnection() {
    this.registerConnectionCallback(3, TechnologyUiModel, (technologyModel: TechnologyUiModel) => {
      this.isCMYes = technologyModel.cmReinforcedType === SimpleAnswerEnum.Yes;
    });
  }

  isDropdownDisabled(): boolean {
    return this.model.areFindings !== 'True';
  }

  isMarginBottom93Px(): boolean {
    return [this.findingType.FracturePatella, this.findingType.BoneMarrowEdema, this.findingType.Osteomyelitis].includes(
      this.findingHandler.currentItem.findingType
    );
  }

  getCustomLabel(
    index: number,
    findingHandler: DynamicComponentHandler<KneeBonesFindingUiModel>,
    translationBits: KneeBonesTranslations
  ): string {
    let result = '';
    if (findingHandler) {
      const findingType = findingHandler.collection[index].findingType;
      if (findingType) {
        result = translationBits[findingType];
      }
    }
    return result;
  }

  isFindingHeaderDisabled(): boolean {
    return this.model.areFindings !== 'True' || this.findingHandler.currentItem.findingType === 'None';
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      }),
      this.translate.stream('kneeMRT.bones.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.keys(out).map(e => out[e]);
      }),
      this.translate.stream('kneeMRT.bones.addNewFindings.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      }),
      this.translate.stream('kneeMRT.bones.translationBits').subscribe((out: KneeBonesTranslations) => {
        this.findingDropdownConfig.translationBits = out;
      })
    );
  }
}
