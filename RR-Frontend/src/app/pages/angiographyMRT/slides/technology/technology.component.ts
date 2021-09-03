import { TechnologyMrtBaseComponent } from '@abstractions/technology-base/technology-mrt-base.component';
import { Component, OnInit } from '@angular/core';

import { SideEffectsSectionService } from '@commonTemplates/technology/services/side-effects-section.service';
import {
  CollectionWithoutContrastEnhancementTypeEnum,
  PeriprostheticFluidCollectionTypeEnum
} from '@enums/angiographyMRT/pelvis-leg-arteries';

import { CenterspecificPreferencesModulesEnum } from '@enums/centerspecific-preferences/centerspecific-preferences-modules.enum';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { SequencesTypeEnum } from '@enums/shared/technology';
import { MethodTypeEnum } from '@enums/shared/technology/method-type.enum';
import { PelvisLegArteriesUiModel } from '@models/angiographyMRT/ui/pelvis-leg-arteries/pelvis-leg-arteries-ui.model';
import { MethodUiModel } from '@models/angiographyMRT/ui/technology/method-ui.model';

import { TechnologyUiModel } from '@models/angiographyMRT/ui/technology/technology-ui.model';

import { NavigationService } from '@services/shared';
import { CenterspecificPreferencesHttpService } from '@services/shared/centerspecific-preferences/centerspecific-preferences-http.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';

import { DialogService } from 'primeng/dynamicdialog';
import { UpperArteriesUiModel } from '@models/angiographyMRT/ui/upper-arteries/upper-arteries-ui.model';
import { AortaUiModel } from '@models/angiographyMRT/ui/aorta/aorta-ui.model';

@Component({
  selector: 'rr-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss'],
  providers: [DialogService]
})
export class TechnologyComponent extends TechnologyMrtBaseComponent<TechnologyUiModel, MethodUiModel> implements OnInit {
  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    public dialogService: DialogService,
    public centerspecificPreferencesService: CenterspecificPreferencesHttpService,
    public technologyService: SideEffectsSectionService
  ) {
    super(
      navService,
      slideRequestService,
      changeDetectionService,
      commonServices,
      dialogService,
      centerspecificPreferencesService,

      TechnologyUiModel,
      MethodUiModel,
      technologyService
    );
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.getPreferences(CenterspecificPreferencesModulesEnum.MRIAngiography);
  }

  protected resetCustomSequencesControls() {
    if (this.model.sequencesType === SequencesTypeEnum.Individual) {
    }
  }

  preparePageConnection() {
    this.addPageConnection(
      5,
      UpperArteriesUiModel,
      () => {
        return true;
      },
      (model: UpperArteriesUiModel) => {
        if (this.model.cmReinforcedType === SimpleAnswerEnum.No) {
          model.findings.map(finding => {
            finding.isContrastEnhancementOfTheArterialWall = false;
          });
        }
      }
    );

    this.addPageConnection(
      6,
      AortaUiModel,
      () => {
        return true;
      },
      (model: AortaUiModel) => {
        if (this.model.cmReinforcedType === SimpleAnswerEnum.No) {
          model.findings.map(finding => {
            finding.isContrastEnhancementOfTheArterialWall = false;
          });
        }
      }
    );

    this.addPageConnection(
      8,
      PelvisLegArteriesUiModel,
      () => {
        return true;
      },
      (model: PelvisLegArteriesUiModel) => {
        if (this.model.cmReinforcedType === SimpleAnswerEnum.No) {
          model.findings.map(finding => {
            finding.periprostheticFluidCollectionType = PeriprostheticFluidCollectionTypeEnum.None;
            finding.isEspeciallyPeriprostheticInfection = false;
            finding.isArterialWallEnhancement = false;
            finding.collectionWithoutContrastEnhancementType = CollectionWithoutContrastEnhancementTypeEnum.None;
          });
        }
      }
    );
  }

  onContrastEnhancedChange() {
    super.onContrastEnhancedChange();
    this.setIntravenousCalculatedField();

    if (this.model.cmReinforcedType === SimpleAnswerEnum.No) {
      this.sequenceHandler.removeElementsByFindingType(MethodTypeEnum.ContrastEnhancedMRAngiography, 'methodType');
    }
  }

  isMethodsColumnDisabled(): boolean {
    return this.sequenceHandler.currentItem.methodType === 'None';
  }

  private setIntravenousCalculatedField(): void {
    this.model.isIntravenous = this.model.cmReinforcedType === SimpleAnswerEnum.Yes;
  }

  getMethodFindingOptionsTranslationKey(): string {
    return this.model.cmReinforcedType === SimpleAnswerEnum.No
      ? 'shared-templates.technology.angiographyMRTMethodRestrictedArray'
      : 'shared-templates.technology.angiographyMRTMethodFullArray.options';
  }
}
