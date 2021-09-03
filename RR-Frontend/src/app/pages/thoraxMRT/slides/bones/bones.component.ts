import { Component } from '@angular/core';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { BonesUiModel } from '@models/thoraxMRT/ui/bones/bones-ui.model';
import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { ThoraxMRTBonesFindingTypeEnum } from '@enums/thoraxMRT/bones/thorax-mrt-bones-finding-type.enum';
import { BonesFindingUiModel } from '@models/thoraxMRT/ui/bones/bones-finding-ui.model';
import { BonesHelperService, ThoraxMRTBonesRibsLocalizerConfig, ThoraxMRTBonesSpineLocalizerConfig } from './bones-helper.service';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { TechnologyUiModel } from '@models/thoraxMRT/ui/technology/technology-ui.model';
import { BonesValidationModel } from '@models/thoraxMRT/ui/bones/bones-validation.model';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';
import { compact } from 'lodash';
import { FractureTypeEnum } from '@enums/thoraxMRT/bones/fracture/fracture-type.enum';

@Component({
  selector: 'rr-bones',
  templateUrl: './bones.component.html',
  styleUrls: ['./bones.component.scss']
})
export class BonesComponent extends SlideBaseComponent<BonesUiModel> {
  areFindingsEnum = AreFindingsEnum;
  findingTypeEnum = ThoraxMRTBonesFindingTypeEnum;

  dynamicConfig: FindingColumnConfig;
  findingHandler: DynamicComponentHandler<BonesFindingUiModel>;
  findingTypes: DropdownModel[];

  translationBits = {};

  descriptionTypes = [
    ThoraxMRTBonesFindingTypeEnum.ClavicularMass,
    ThoraxMRTBonesFindingTypeEnum.ScapularMass,
    ThoraxMRTBonesFindingTypeEnum.MassOfTheRibs,
    ThoraxMRTBonesFindingTypeEnum.SternalMass,
    ThoraxMRTBonesFindingTypeEnum.SpinalMass
  ];

  spineLocalizerConfig: ThoraxMRTBonesSpineLocalizerConfig;
  ribsLocalizerConfig: ThoraxMRTBonesRibsLocalizerConfig;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    private bonesHelperService: BonesHelperService
  ) {
    super(navService, slideRequestService, changeDetectionService, BonesUiModel, commonServices, BonesValidationModel);

    this.findingHandler = new DynamicComponentHandler<BonesFindingUiModel>(this.logger, this.model.findings, BonesFindingUiModel);
    this.registerCallbacks();
    this.registerConnection();
    this.initLargeLocalizersSupscription();
    this.configureFindingColumn();
  }

  private registerCallbacks() {
    this.registerGetCallback((modelOut: BonesUiModel) => {
      this.findingHandler.reinitializeCollection(modelOut.findings);
    });

    this.registerSaveCallback((modelOut: BonesUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(modelOut.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  private registerConnection() {
    this.registerConnectionCallback(3, TechnologyUiModel, (technologyModel: TechnologyUiModel) => {
      this.bonesHelperService.isCMYes.next(technologyModel.cmReinforcedType === SimpleAnswerEnum.Yes);
    });
  }

  private initLargeLocalizersSupscription() {
    this.subscriptions.push(
      this.bonesHelperService.spineLocalizerConfig.subscribe((config: ThoraxMRTBonesSpineLocalizerConfig) => {
        this.spineLocalizerConfig = config;
      })
    );
    this.subscriptions.push(
      this.bonesHelperService.ribsLocalizerConfig.subscribe((config: ThoraxMRTBonesRibsLocalizerConfig) => {
        this.ribsLocalizerConfig = config;
      })
    );
  }

  private configureFindingColumn(): void {
    this.dynamicConfig = new FindingColumnConfig();
    this.dynamicConfig.itemCount = 5;
    this.dynamicConfig.autoConfigFindingRRId = 'tho_m_070106';
    this.dynamicConfig.translationBits = this.translationBits;
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('thoraxMRT.bones.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.dynamicConfig.dropdownValues = Object.keys(out).map(e => out[e]);
        this.dynamicConfig.translationBits.findingTypes = Object.keys(out).map(e => out[e]);
      }),
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.dynamicConfig.placeholder = out;
      }),
      this.translate.stream('thoraxMRT.bones.addNewFinding.value').subscribe((out: string) => {
        this.dynamicConfig.buttonText = out;
      }),
      this.translate.stream('thoraxMRT.bones.translationBits').subscribe((out: any) => {
        this.dynamicConfig.translationBits.additional = out;
      })
    );
  }

  isCurrentItem(items: ThoraxMRTBonesFindingTypeEnum[]): boolean {
    return items.includes(this.findingHandler.currentItem.findingType);
  }

  isCurrentItemMass() {
    return [
      ThoraxMRTBonesFindingTypeEnum.ClavicularMass,
      ThoraxMRTBonesFindingTypeEnum.ScapularMass,
      ThoraxMRTBonesFindingTypeEnum.MassOfTheRibs,
      ThoraxMRTBonesFindingTypeEnum.SternalMass,
      ThoraxMRTBonesFindingTypeEnum.SpinalMass
    ].includes(this.findingHandler.currentItem.findingType);
  }

  customLabelCalculator(index: number, handler: DynamicComponentHandler<BonesFindingUiModel>, translationBits): string {
    let base = '';
    const currentFinding = handler.collection[index];
    const sideSelectionFindings = [ThoraxMRTBonesFindingTypeEnum.ClavicleFracture, ThoraxMRTBonesFindingTypeEnum.ScapularFracture];

    if (sideSelectionFindings.includes(currentFinding.findingType) && currentFinding.sideType !== LocationTypeEnum.None) {
      base += ` ${translationBits[currentFinding.findingType]} ${
        translationBits.additional ? translationBits.additional[currentFinding.sideType] : ''
      }`;
    }
    if (
      currentFinding.findingType === ThoraxMRTBonesFindingTypeEnum.SternalFracture &&
      currentFinding.fractureType !== FractureTypeEnum.None
    ) {
      base += ` ${translationBits[currentFinding.findingType]} ${
        translationBits.additional ? translationBits.additional[currentFinding.fractureType] : ''
      }`;
    }
    if (currentFinding.findingType === ThoraxMRTBonesFindingTypeEnum.SpinalFracture) {
      const localizerCurrentSlection = Object.keys(currentFinding.spineLocalization).filter(elem => currentFinding.spineLocalization[elem]);
      base += ` ${translationBits.additional[currentFinding.findingType]}`;
      if (localizerCurrentSlection.length >= 1) {
        base += ` • ${localizerCurrentSlection[0].toUpperCase()}`;
      }
      if (localizerCurrentSlection.length > 1) {
        base += ` - ${localizerCurrentSlection[1].toUpperCase()}`;
        if (localizerCurrentSlection.length > 2) {
          base += ` - ${localizerCurrentSlection[2].toUpperCase()} - ...`;
        }
      }
    }
    return base;
  }

  onSpineLargeLocalizerClosed() {
    this.bonesHelperService.spineLocalizerConfig.next(null);
  }

  onRibsLargeLocalizerClosed() {
    this.bonesHelperService.ribsLocalizerConfig.next(null);
  }
}
