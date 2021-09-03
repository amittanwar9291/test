import { Component, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { DialogService } from 'primeng/dynamicdialog';

import { TechnologyMrtBaseComponent } from '@abstractions/technology-base/technology-mrt-base.component';

import { TechnologyUiModel } from '@models/hipMRT/ui/technology/technology-ui.model';
import { SequenceUiModel } from '@models/hipMRT/ui/technology/sequence-ui.model';
import { CapsuleAndLigamentsUiModel } from '@models/hipMRT/ui/capsule-and-ligaments/capsule-and-ligaments-ui.model';
import { BonesUiModel } from '@models/hipMRT/ui/bones/bones-ui.model';

import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { NavigationService } from '@services/shared/navigation/navigation.service';

import { SideEffectsSectionService } from '@commonTemplates/technology/services/side-effects-section.service';

import { CenterspecificPreferencesModulesEnum } from '@enums/centerspecific-preferences/centerspecific-preferences-modules.enum';
import { SequencesTypeEnum } from '@enums/shared/technology/sequences-type.enum';
import { CenterspecificPreferencesHttpService } from '@services/shared/centerspecific-preferences/centerspecific-preferences-http.service';
import { IPageConnection } from '@interfaces/page-connection.interface';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import {
  ContrastEnhancementDistributionTypeEnum as CapsuleAndLigamentsContrastEnhancementDistributionTypeEnum,
  ContrastEnhancementQuantitativeTypeEnum as CapsuleAndSynoviaContrastEnhancementQuantitativeTypeEnum
} from '@enums/hipMRT/capsule-and-ligaments/synovia-mass';
import {
  ContrastEnhancementDistributionTypeEnum as BonesContrastEnhancementDistributionTypeEnum,
  ContrastEnhancementQuantitativeTypeEnum as BonesContrastEnhancementQuantitativeTypeEnum,
  HomogeneityTypeEnum as BonesHomogeneityTypeEnum
} from '@enums/hipMRT/bones';
import { SoftTissueUiModel } from '@models/hipMRT/ui/soft-tissue/soft-tissue-ui-model';
import {
  HomogeneityTypeEnum,
  ContrastEnhancementDistributionTypeEnum,
  ContrastEnhancementQuantitativeTypeEnum
} from '@enums/hipMRT/soft-tissue';

@Component({
  selector: 'rr-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss'],
  providers: [DialogService],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class TechnologyComponent extends TechnologyMrtBaseComponent<TechnologyUiModel, SequenceUiModel> implements OnInit {
  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    public dialogService: DialogService,
    public preferencesHttpService: CenterspecificPreferencesHttpService,
    public technologyService: SideEffectsSectionService
  ) {
    super(
      navService,
      slideRequestService,
      changeDetectionService,
      commonServices,
      dialogService,
      preferencesHttpService,

      TechnologyUiModel,
      SequenceUiModel,
      technologyService
    );
  }

  ngOnInit() {
    super.ngOnInit();
    this.getPreferences(CenterspecificPreferencesModulesEnum.MRIHip);
  }

  preparePageConnection() {
    const PC04 = this.preparePage4ConnectionObject();
    const PC06 = this.preparePage6ConnectionObject();
    const PC08 = this.preparePage8ConnectionObject();
    this.addPageConnection(PC04.pageNr, CapsuleAndLigamentsUiModel, PC04.condition, PC04.callback);
    this.addPageConnection(PC06.pageNr, CapsuleAndLigamentsUiModel, PC06.condition, PC06.callback);
    this.addPageConnection(PC08.pageNr, CapsuleAndLigamentsUiModel, PC08.condition, PC08.callback);
  }

  private preparePage4ConnectionObject(): IPageConnection<BonesUiModel> {
    const condition = () => true;
    const callback = (model: BonesUiModel) => {
      if (this.model.cmReinforcedType !== SimpleAnswerEnum.Yes) {
        model.findings.forEach(finding => {
          finding.isPerifocalContrastEnhancement = false;
          finding.isSynovitis = false;
          finding.isPeripheralContrastEnhancement = false;
          finding.isNoContrastEnhancement = false;
          finding.contrastEnhancementQuantitativeType = BonesContrastEnhancementQuantitativeTypeEnum.None;
          finding.pronouncedHomogeneityType = BonesHomogeneityTypeEnum.None;
          finding.contrastEnhancementDistributionType = BonesContrastEnhancementDistributionTypeEnum.None;
        });
      }
    };

    return {
      pageNr: 4,
      condition,
      callback
    };
  }

  private preparePage6ConnectionObject(): IPageConnection<CapsuleAndLigamentsUiModel> {
    const condition = () => true;
    const callback = (model: CapsuleAndLigamentsUiModel) => {
      if (this.model.cmReinforcedType !== SimpleAnswerEnum.Yes) {
        model.findings.forEach(finding => {
          finding.isPronouncedContrastEnhancement = false;
          finding.contrastEnhancementQuantitativeType = CapsuleAndSynoviaContrastEnhancementQuantitativeTypeEnum.None;
          finding.pronouncedHomogeneityType = HomogeneityTypeEnum.None;
          finding.contrastEnhancementDistributionType = CapsuleAndLigamentsContrastEnhancementDistributionTypeEnum.None;
        });
      }
    };

    return {
      pageNr: 6,
      condition,
      callback
    };
  }

  private preparePage8ConnectionObject(): IPageConnection<SoftTissueUiModel> {
    const condition = () => true;
    const callback = (model: SoftTissueUiModel) => {
      if (this.model.cmReinforcedType !== SimpleAnswerEnum.Yes) {
        model.findings.forEach(finding => {
          finding.contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeTypeEnum.None;
          finding.cmHomogeneityType = HomogeneityTypeEnum.None;
          finding.contrastEnhancementDistributionType = ContrastEnhancementDistributionTypeEnum.None;
        });
      }
    };

    return {
      pageNr: 8,
      condition,
      callback
    };
  }

  protected resetCustomContrastMediumControls() {
    this.model.isIntravenous = false;
    this.model.isIndirectArthrography = false;
    this.model.isIntraarticular = false;
    this.model.dilutionAmount = null;
  }

  protected resetCustomSequencesControls() {
    if (this.model.sequencesType === SequencesTypeEnum.Individual) {
      this.model.sequences.forEach(sequence => {
        sequence.isPostContrast = false;
      });
    }
  }
}
