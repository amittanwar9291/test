import { Component, DoCheck } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { NavigationService } from '@services/shared';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';

import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { BonesFindingUiModel } from '@models/shoulderMRT/ui/bones/bones-finding-ui.model';
import { BonesUiModel } from '@models/shoulderMRT/ui/bones/bones-ui.model';
import { BonesValidation } from '@models/shoulderMRT/ui/bones/bones-validation.model';
import { TechnologyUiModel } from '@models/shoulderMRT/ui/technology/technology-ui.model';

import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { BonesFindingTypeEnum, BoneTypeEnum, FractureClassificationTypeEnum } from '@enums/shoulderMRT/bones';
import { IBoneLabelTranslations } from './bone-label-translations';

@Component({
  selector: 'rr-bones',
  templateUrl: './bones.component.html',
  styleUrls: ['./bones.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class BonesComponent extends SlideBaseComponent<BonesUiModel> implements DoCheck {
  findingTypes: DropdownModel[];
  findingHandler: DynamicComponentHandler<BonesFindingUiModel>;
  placeholder: string;
  findingDropdownConfig: FindingColumnConfig;
  areFindings: typeof AreFindingsEnum;
  findingType: typeof BonesFindingTypeEnum;

  technologyModel: TechnologyUiModel;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, BonesUiModel, commonServices, BonesValidation);
    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, BonesFindingUiModel);

    this.registerCallbacks();
    this.initializeDynamicDropdownConfig();

    this.registerConnectionCallback(3, TechnologyUiModel, (modelTechnology: TechnologyUiModel) => {
      this.technologyModel = modelTechnology;
    });

    this.areFindings = AreFindingsEnum;
    this.findingType = BonesFindingTypeEnum;
  }

  private initializeDynamicDropdownConfig(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.itemCount = 5;
    this.findingDropdownConfig.findingColumnIds.findingRRId = 'sho_m_040106';
    this.findingDropdownConfig.findingColumnIds.buttonRRId = 'sho_m_040107';
  }

  private registerCallbacks(): void {
    this.registerGetCallback((outModel: BonesUiModel) => {
      this.findingHandler.reinitializeCollection(outModel.findings);
    });

    this.registerSaveCallback((outModel: BonesUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(outModel.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  getCustomLabel(
    index: number,
    findingHandler: DynamicComponentHandler<BonesFindingUiModel>,
    translationBits: IBoneLabelTranslations
  ): string {
    let result = '';

    const findingType = findingHandler.collection[index].findingType;

    if (findingType === BonesFindingTypeEnum.Fracture) {
      result += translationBits.fracture;

      switch (findingHandler.collection[index].boneType) {
        case BoneTypeEnum.ProximalHumerus: {
          result += ' • ' + translationBits.proximalerHumerus;

          if (findingHandler.collection[index].fractureHumerusClassificationType === FractureClassificationTypeEnum.AO) {
            result += ' • ' + translationBits.aOClassification;
          } else if (findingHandler.collection[index].fractureHumerusClassificationType === FractureClassificationTypeEnum.Neer) {
            result += ' • ' + translationBits.neerClassification;
          }
          break;
        }
        case BoneTypeEnum.Clavicle: {
          result += ' • ' + translationBits.clavicula;
          break;
        }
        case BoneTypeEnum.Scapula: {
          result += ' • ' + translationBits.scapula;
          break;
        }
        case BoneTypeEnum.HumeralDiaphysis: {
          result += ' • ' + translationBits.humerusDiaphyseal;
          break;
        }
      }
    }

    return result;
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('shoulderMRT.bones.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.keys(out).map(e => out[e]);
      }),

      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      }),

      this.translate.stream('shoulderMRT.bones.addNewFinding.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      }),

      this.translate.stream('shoulderMRT.bones.translationBits').subscribe((out: string) => {
        this.findingDropdownConfig.translationBits = out;
      })
    );
  }

  get isTabView(): boolean {
    return [BonesFindingTypeEnum.BoneMarrowEdema, BonesFindingTypeEnum.BoneTumor].includes(this.findingHandler.currentItem.findingType);
  }

  get hasRegularMargin(): boolean {
    return ![BonesFindingTypeEnum.BoneMarrowEdema, BonesFindingTypeEnum.Fracture, BonesFindingTypeEnum.BoneTumor].includes(
      this.findingHandler.currentItem.findingType
    );
  }
}
