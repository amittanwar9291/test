import { Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';

import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';

import { RotatorUiModel } from '@models/shoulderMRT/ui/rotator/rotator-ui.model';
import { RotatorFindingUiModel } from '@models/shoulderMRT/ui/rotator/rotator-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { RotatorTranslations } from '@models/shoulderMRT/ui/rotator/rotator-translations';
import { RotatorValidation } from '@models/shoulderMRT/ui/rotator/rotator-validation.model';
import { LocalizationUiModel } from '@models/shoulderMRT/ui/localization/localization-ui.model';

import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import {
  AfflicationTypeEnum,
  LesionTypeEnum,
  PartialLesionLocationTypeEnum,
  RotatorFindingTypeEnum,
  TendonPartTypeEnum
} from '@enums/shoulderMRT/rotator';

@Component({
  selector: 'rr-rotator',
  templateUrl: './rotator.component.html',
  styleUrls: ['./rotator.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class RotatorComponent extends SlideBaseComponent<RotatorUiModel> {
  acromionTypes: DropdownModel[];
  areFindings: typeof AreFindingsEnum;
  findingType: typeof RotatorFindingTypeEnum;
  findingTypes: DropdownModel[];
  findingHandler: DynamicComponentHandler<RotatorFindingUiModel>;
  placeholder: string;
  findingDropdownConfig: FindingColumnConfig;
  localizationPatteVersion = 'right';

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, RotatorUiModel, commonServices, RotatorValidation);
    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, RotatorFindingUiModel);

    this.initializeDynamicDropdownConfig();

    this.registerCallbacks();

    this.registerConnectionCallback(1, LocalizationUiModel, (technologyModel: LocalizationUiModel) => {
      if (technologyModel.localization.left) {
        this.localizationPatteVersion = 'left';
      }
    });

    this.areFindings = AreFindingsEnum;
    this.findingType = RotatorFindingTypeEnum;
  }

  private registerCallbacks() {
    this.registerGetCallback((outModel: RotatorUiModel) => {
      this.findingHandler.reinitializeCollection(outModel.findings);
    });

    this.registerSaveCallback((outModel: RotatorUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(outModel.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  /* Custom labels for findings */
  getCustomLabel(
    index: number,
    findingHandler: DynamicComponentHandler<RotatorFindingUiModel>,
    translationBits: RotatorTranslations
  ): string {
    if (index || index === 0) {
      let result = '';
      let value = null;

      // getFindingTypeLabel
      const type = findingHandler.collection[index].findingType;

      if (type !== RotatorFindingTypeEnum.None) {
        value = translationBits.findingType.find(x => x.value === findingHandler.collection[index].findingType);
      }

      if (value) {
        switch (value.value) {
          case RotatorFindingTypeEnum.ACJoint: {
            result = 'AC';
            break;
          }
          case RotatorFindingTypeEnum.RotatorCuff: {
            result = 'Rota';
            break;
          }
        }
      }

      switch (findingHandler.collection[index].afflicationType) {
        case AfflicationTypeEnum.Degeneration: {
          result += ' ' + String.fromCharCode(8226) + ' ' + translationBits.degeneration;
          break;
        }
        case AfflicationTypeEnum.Trauma: {
          result += ' ' + String.fromCharCode(8226) + ' ' + translationBits.trauma;
          break;
        }
        case AfflicationTypeEnum.Inflammation: {
          result += ' ' + String.fromCharCode(8226) + ' ' + translationBits.inflammation;
          break;
        }
      }

      // getLesionTypeLabel
      const lesionType = findingHandler.collection[index].lesionType;

      switch (lesionType) {
        case LesionTypeEnum.Complete: {
          result += ' ' + String.fromCharCode(8226) + ' ' + translationBits.complete;
          break;
        }
        case LesionTypeEnum.PartialLesions: {
          result += ' ' + String.fromCharCode(8226) + ' ' + translationBits.partialLesions;
          break;
        }
      }

      // getPartialLesionLocationType
      const partialLesionLocationType = findingHandler.collection[index].partialLesionLocationType;

      switch (partialLesionLocationType) {
        case PartialLesionLocationTypeEnum.Supraspinatus: {
          result += ' ' + String.fromCharCode(8226) + ' ' + translationBits.supraspinatus;
          break;
        }
        case PartialLesionLocationTypeEnum.Subscapularis: {
          result += ' ' + String.fromCharCode(8226) + ' ' + translationBits.subscapularis;
          break;
        }
        case PartialLesionLocationTypeEnum.Infraspinatus: {
          result += ' ' + String.fromCharCode(8226) + ' ' + translationBits.infraspinatus;
          break;
        }
        case PartialLesionLocationTypeEnum.TeresMinor: {
          result += ' ' + String.fromCharCode(8226) + ' ' + translationBits.teresMinor;
          break;
        }
      }

      // ifTendonPartTypeSelectedLabel
      const tendonPartType = findingHandler.collection[index].tendonPartType;

      switch (tendonPartType) {
        case TendonPartTypeEnum.Degeneration: {
          result += ' ' + String.fromCharCode(8226) + ' ' + translationBits.tendonDegeneration;
          break;
        }
        case TendonPartTypeEnum.PartialThicknessTear: {
          result += ' ' + String.fromCharCode(8226) + ' ' + translationBits.partialThicknessTear;
          break;
        }
      }

      return result;
    }
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('shoulderMRT.rotator.placeholder').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      }),

      this.translate.stream('shoulderMRT.rotator.acromionTypes.options').subscribe((out: DropdownModel[]) => {
        this.acromionTypes = Object.keys(out).map(e => out[e]);
      }),

      this.translate.stream('shoulderMRT.rotator.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.keys(out).map(e => out[e]);
        this.findingDropdownConfig.translationBits.findingType = Object.keys(out).map(e => out[e]);
      }),

      this.translate.stream('shoulderMRT.rotator.addNewFindings').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      }),

      this.translate.stream('shoulderMRT.rotator.translationBits').subscribe((out: any) => {
        this.findingDropdownConfig.translationBits.degeneration = out.degeneration;
        this.findingDropdownConfig.translationBits.trauma = out.trauma;
        this.findingDropdownConfig.translationBits.inflammation = out.inflammation;
        this.findingDropdownConfig.translationBits.complete = out.complete;
        this.findingDropdownConfig.translationBits.partialLesions = out.partialLesions;
        this.findingDropdownConfig.translationBits.supraspinatus = out.supraspinatus;
        this.findingDropdownConfig.translationBits.subscapularis = out.subscapularis;
        this.findingDropdownConfig.translationBits.infraspinatus = out.infraspinatus;
        this.findingDropdownConfig.translationBits.teresMinor = out.teresMinor;
        this.findingDropdownConfig.translationBits.tendonDegeneration = out.tendonDegeneration;
        this.findingDropdownConfig.translationBits.partialThicknessTear = out.partialThicknessTear;
      })
    );
  }

  private initializeDynamicDropdownConfig(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.itemCount = 5;
    this.findingDropdownConfig.findingType = 'findingType';
    this.findingDropdownConfig.findingColumnIds.findingRRId = 'sho_m_050110';
    this.findingDropdownConfig.findingColumnIds.buttonRRId = 'sho_m_050111';
    this.findingDropdownConfig.translationBits = new RotatorTranslations();
  }
}
