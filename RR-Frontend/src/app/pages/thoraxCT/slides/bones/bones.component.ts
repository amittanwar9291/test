import { Component, OnDestroy } from '@angular/core';

import { mapKeys, startsWith } from 'lodash';
import { Subscription } from 'rxjs';

import { NavigationService } from '@services/shared';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { BonesUiModel } from '@models/thoraxCT/ui/bones/bones-ui.model';
import { BonesFindingUiModel } from '@models/thoraxCT/ui/bones/bones-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

import { BonesHelperService, largeLocalizers } from './bones-helper.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { ThoraxBonesFindingsTypeEnum } from '@enums/thoraxCT/bones/thorax-bones-findings-type.enum';
import { nameof } from 'ts-simple-nameof';
import { SternumFractureTypeEnum } from '@enums/thoraxCT/bones/sternum-fracture-type.enum';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { BonesValidationModel } from '@models/thoraxCT/ui/bones/bones-validation.model';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';
import { SpineSelectionAccessibilityModeEnum } from '@enums/shared/spine/spine-selection-accessibility-mode.enum';
import { DifferentialDiagnosisPresetService } from '@abstractions/abstract-classes/differential-diagnosis-preset-service';
import { BonesPresetsHttpService } from '@services/thoraxCT/http/bones/bones-presets-http.service';

@Component({
  selector: 'rr-bones',
  templateUrl: './bones.component.html',
  styleUrls: ['./bones.component.scss'],
  providers: [
    {
      provide: DifferentialDiagnosisPresetService,
      useClass: BonesPresetsHttpService
    }
  ]
})
export class BonesComponent extends SlideBaseComponent<BonesUiModel> implements OnDestroy {
  readonly largeLocalizers = largeLocalizers;
  largeLocalizerToByOpened: string;
  isLargeLocalizerOpenedSubscription: Subscription;

  findingHandler: DynamicComponentHandler<BonesFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;
  descriptionTypes = [
    ThoraxBonesFindingsTypeEnum.MassClavicle,
    ThoraxBonesFindingsTypeEnum.MassScapula,
    ThoraxBonesFindingsTypeEnum.MassRibs,
    ThoraxBonesFindingsTypeEnum.MassSternum,
    ThoraxBonesFindingsTypeEnum.MassSpine
  ];
  currentSpineSelection: string;
  currentRibsSelection: string;

  spineLocationLogicTypeEnum = SpineLocationLogicTypeEnum;
  selectionAccessibilityMode = SpineSelectionAccessibilityModeEnum;
  areFindingsEnum = AreFindingsEnum;
  thoraxBonesFindingsTypeEnum = ThoraxBonesFindingsTypeEnum;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    private bonesHelperService: BonesHelperService
  ) {
    super(navService, slideRequestService, changeDetectionService, BonesUiModel, commonServices, BonesValidationModel);

    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, BonesFindingUiModel);
    this.initDynamicComponentConfig();
    this.registerCallbacks();

    this.isLargeLocalizerOpenedSubscription = this.bonesHelperService.isLargeLocalizerOpened.subscribe(v => {
      this.largeLocalizerToByOpened = v;
      this.setCurrentLocalizerSelection();
    });
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

  isDropdownDisabled(): boolean {
    return this.model.areFindings !== this.areFindingsEnum.Yes;
  }

  isFindingType(type: string): boolean {
    return this.findingHandler.currentItem.findingType === type;
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('thoraxCT.bones.placeholder').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      })
    );

    this.subscriptions.push(
      this.translate.stream('thoraxCT.bones.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.keys(out).map(e => out[e]);
      })
    );

    this.subscriptions.push(
      this.translate.stream('thoraxCT.bones.addNewFinding.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      })
    );

    this.subscriptions.push(
      this.translate.stream('thoraxCT.bones.translationBits').subscribe((out: any) => {
        this.findingDropdownConfig.translationBits = out;
      })
    );
  }

  initDynamicComponentConfig(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.findingType = nameof<BonesFindingUiModel>(m => m.findingType);
    this.findingDropdownConfig.autoConfigFindingRRId = 'tho_c_080106';
    this.findingDropdownConfig.itemCount = 5;
  }

  customLabelCalculator(index: number, handler: DynamicComponentHandler<BonesFindingUiModel>, translationBits: any): string {
    let base = '';
    if (handler.collection[index].findingType !== ThoraxBonesFindingsTypeEnum.None && translationBits.findingTypes) {
      base = translationBits.findingTypes[handler.collection[index].findingType];

      if (handler.collection[index].findingType === ThoraxBonesFindingsTypeEnum.FractureOfScapula) {
        const selection: LocationTypeEnum = handler.collection[index].sideType;
        if (selection !== LocationTypeEnum.None) {
          base = base + ' ' + translationBits[selection.toLowerCase()];
        }
      }
      if (handler.collection[index].findingType === ThoraxBonesFindingsTypeEnum.FractureOfRibs) {
        const selection = [];
        mapKeys(handler.collection[index].ribLocation, (value, key) => {
          if (value) {
            selection.push(key);
          }
        });
        if (selection.length === 1) {
          const ribName: string = selection[0];
          const side = startsWith(ribName, 'right') ? 'right' : 'left';
          const ribNumber = side === 'right' ? Number(ribName.slice(5, ribName.length)) : Number(ribName.slice(4, ribName.length));
          base = base + ' • ' + ribNumber + '. ' + translationBits[side];
        }
      }
      if (handler.collection[index].findingType === ThoraxBonesFindingsTypeEnum.FractureOfSternum) {
        const selection = handler.collection[index].sternumFractureType;
        if (![SternumFractureTypeEnum.None, SternumFractureTypeEnum.SternalFractureNotFurtherDefined].includes(selection)) {
          base = base + ' • ' + translationBits[selection];
        }
      }
    }
    return base;
  }

  onLargeLocalizerCosed() {
    this.bonesHelperService.isLargeLocalizerOpened.next(null);
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    this.bonesHelperService.isLargeLocalizerOpened.next(null);
    this.bonesHelperService.previousRibsLocalizerSelection = null;
    this.bonesHelperService.previousSpineLocalizerSelection = null;
    this.isLargeLocalizerOpenedSubscription.unsubscribe();
  }

  setCurrentLocalizerSelection() {
    if (this.largeLocalizerToByOpened === largeLocalizers.SPINE && this.isFindingType('FractureSpine')) {
      mapKeys(this.findingHandler.currentItem.vertebralColumnLocalization, (value, key) => {
        if (value) {
          this.currentSpineSelection = key;
        }
      });
    } else if (this.largeLocalizerToByOpened === largeLocalizers.RIBS && this.isFindingType('FractureRibs')) {
      mapKeys(this.findingHandler.currentItem.ribLocation, (value, key) => {
        if (value) {
          this.currentRibsSelection = key;
        }
      });
    }
  }
}
