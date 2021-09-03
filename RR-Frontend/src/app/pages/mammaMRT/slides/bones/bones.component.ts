import { Component } from '@angular/core';

import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { NavigationService } from '@services/shared/navigation/navigation.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';

import { BonesUiModel } from '@models/mammaMRT/ui/bones/bones-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { BonesFindingUiModel } from '@models/mammaMRT/ui/bones/bones-finding-ui.model';
import { BonesValidation, tvbElements } from '@models/mammaMRT/ui/bones/bones-validation.model';

import { BoneLocalizationEnum } from '@enums/mammaMRT';
import { BonesFindingTypeEnum } from '@enums/mammaMRT';
import { BonesTypeEnum } from '@enums/mammaMRT';

@Component({
  selector: 'rr-bone',
  templateUrl: './bones.component.html',
  styleUrls: ['./bones.component.scss']
})
export class BonesComponent extends SlideBaseComponent<BonesUiModel> {
  lesionTypes: DropdownModel[];
  thFindingPositions: DropdownModel[];
  cFindingPositions: DropdownModel[];
  findingHandler: DynamicComponentHandler<BonesFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;
  costaEntries: string[];
  vertebraeEntries: string[];
  tvbName: string;

  bonesType: typeof BonesTypeEnum;
  findingType: typeof BonesFindingTypeEnum;
  boneLocalizationType: typeof BoneLocalizationEnum;

  rrValidationCheckboxes: string = tvbElements().join(' ');

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, BonesUiModel, commonServices, BonesValidation);
    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, BonesFindingUiModel);
    this.costaEntries = ['InTheCostaeMultipleSelection', 'InTheCosta'];
    this.vertebraeEntries = ['InTheVertebralBody', 'InTheVertebraeMultipleSelection'];
    this.buildFindingConfig();

    this.registerCallbacks();

    this.bonesType = BonesTypeEnum;
    this.findingType = BonesFindingTypeEnum;
    this.boneLocalizationType = BoneLocalizationEnum;
    this.tvbName = '';
  }

  private registerCallbacks() {
    this.registerGetCallback((outModel: BonesUiModel) => {
      this.findingHandler.reinitializeCollection(outModel.findings);
    });

    this.registerSaveCallback((model: BonesUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(model.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  showLocalizationHeader(): boolean {
    return [this.findingType.ProxHumerus, this.findingType.Clavicle, this.findingType.VertebralBody, this.findingType.Rib].includes(
      this.findingHandler.currentItem.findingType
    );
  }

  showBoneLocalizationType(): boolean {
    return [this.findingType.ProxHumerus, this.findingType.Clavicle, this.findingType.Rib].includes(
      this.findingHandler.currentItem.findingType
    );
  }

  showIsTVBSection(): boolean {
    return [this.findingType.VertebralBody, this.findingType.Rib].includes(this.findingHandler.currentItem.findingType);
  }

  getTVBLabel(tvbNumber: number): string {
    switch (this.findingHandler.currentItem.findingType) {
      case this.findingType.VertebralBody: {
        return this.tvbName + ' ' + tvbNumber;
      }
      case this.findingType.Rib: {
        return `${this.translate.currentLang === 'fr' ? 'K' : 'C '}${tvbNumber}`;
      }
    }
  }

  getTVBRrId(tvbNumber: number): string {
    const tVBVertebreBodyRrIdMapper = {
      1: 'mam_m_080209',
      2: 'mam_m_080210',
      3: 'mam_m_080211',
      4: 'mam_m_080212',
      5: 'mam_m_080213',
      6: 'mam_m_080214',
      7: 'mam_m_080215',
      8: 'mam_m_080216',
      9: 'mam_m_080217',
      10: 'mam_m_080218',
      11: 'mam_m_080219',
      12: 'mam_m_080220'
    };
    const tVBRibRrIdMapper = {
      1: 'mam_m_080221',
      2: 'mam_m_080222',
      3: 'mam_m_080223',
      4: 'mam_m_080224',
      5: 'mam_m_080225',
      6: 'mam_m_080226',
      7: 'mam_m_080227',
      8: 'mam_m_080228',
      9: 'mam_m_080229',
      10: 'mam_m_080230',
      11: 'mam_m_080231',
      12: 'mam_m_080232'
    };
    switch (this.findingHandler.currentItem.findingType) {
      case this.findingType.VertebralBody: {
        return tVBVertebreBodyRrIdMapper[tvbNumber];
      }
      case this.findingType.Rib: {
        return tVBRibRrIdMapper[tvbNumber];
      }
    }
  }

  getTVBModel(tvbNumber: number): boolean {
    return this.findingHandler.currentItem[`isTVB${tvbNumber}`];
  }

  setTVBModel(tvbNumber: number, value: boolean) {
    this.findingHandler.currentItem[`isTVB${tvbNumber}`] = value;
    if (!this.isExactlyOneTVBChecked()) {
      this.resetBoneLocalizationType();
    }
  }

  isBoneLocalizationDisabled(): boolean {
    if ([this.findingType.ProxHumerus, this.findingType.Clavicle].includes(this.findingHandler.currentItem.findingType)) {
      return false;
    } else if (this.findingHandler.currentItem.findingType === this.findingType.Rib) {
      return !this.isExactlyOneTVBChecked();
    }
  }

  isRibLocalizationGroupDisabled(): boolean {
    return this.findingHandler.currentItem.findingType === this.findingType.Rib && !this.isExactlyOneTVBChecked();
  }

  private isExactlyOneTVBChecked(): boolean {
    let result = false;
    let selectedCount = 0;
    for (let i = 1; i <= 12; i++) {
      if (this.findingHandler.currentItem[`isTVB${i}`]) {
        selectedCount++;
      }
      if (selectedCount > 1) {
        break;
      }
    }
    if (selectedCount === 1) {
      result = true;
    }
    return result;
  }

  private resetBoneLocalizationType(): void {
    const currentItem = this.findingHandler.currentItem;
    currentItem.boneLocalization = this.boneLocalizationType.None;
    this.validationHelperService.removeError('boneLocalization');
  }

  private buildFindingConfig(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.findingColumnIds.buttonRRId = 'mam_m_080107';
    this.findingDropdownConfig.findingColumnIds.findingRRId = 'mam_m_080106';
    this.findingDropdownConfig.itemCount = 9;
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('mammaMRT.bones.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.keys(out).map(e => out[e]);
      }),
      this.translate.stream('mammaMRT.bones.lesionTypes.options').subscribe((out: DropdownModel[]) => {
        this.lesionTypes = Object.keys(out).map(e => out[e]);
      }),
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      }),
      this.translate.stream('mammaMRT.bones.addNewFinding.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      }),
      this.translate.stream('mammaMRT.bones.tVB.value').subscribe((out: string) => {
        this.tvbName = out;
      })
    );
  }
}
