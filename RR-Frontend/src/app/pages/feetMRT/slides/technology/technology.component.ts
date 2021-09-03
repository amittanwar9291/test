import { Component, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { DialogService } from 'primeng/dynamicdialog';

import { TechnologyMrtBaseComponent } from '@abstractions/technology-base/technology-mrt-base.component';

import { TechnologyUiModel } from '@models/feetMRT/ui/technology/technology-ui.model';
import { SequenceUiModel } from '@models/feetMRT/ui/technology/sequence-ui.model';
import { BonesUiModel } from '@models/feetMRT/ui/bones/bones-ui.model';

import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { NavigationService } from '@services/shared/navigation/navigation.service';

import { IPageConnection } from '@interfaces/page-connection.interface';

import { SideEffectsSectionService } from '@commonTemplates/technology/services/side-effects-section.service';

import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { CenterspecificPreferencesModulesEnum } from '@enums/centerspecific-preferences/centerspecific-preferences-modules.enum';
import { SequencesTypeEnum } from '@enums/shared/technology/sequences-type.enum';
import { CenterspecificPreferencesHttpService } from '@services/shared/centerspecific-preferences/centerspecific-preferences-http.service';
import { BonesFindingTypeEnum } from '@enums/feetMRT/bones';
import { SoftTissueUiModel } from '@models/feetMRT/ui/soft-tissue/soft-tissue-ui.model';
import { HomogeneityTypeEnum, QuantitativeTypeEnum } from '@enums/feetMRT/soft-tissue';
import {
  BonesHomogeneityTypeEnum,
  ContrastAgentEnhancementFormTypeEnum,
  ContrastAgentEnhancementTypeEnum
} from '@enums/feetMRT/bones/space-requirement';

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
    this.getPreferences(CenterspecificPreferencesModulesEnum.MRIUAJFoot);
  }

  preparePageConnection(): void {
    const PCO4 = this.preparePage4ConnectionObject();
    const PCO6 = this.preparePage6ConnectionObject();

    this.addPageConnection(PCO4.pageNr, BonesUiModel, PCO4.condition, PCO4.callback);
    this.addPageConnection(PCO6.pageNr, BonesUiModel, PCO6.condition, PCO6.callback);
  }

  private preparePage4ConnectionObject(): IPageConnection<BonesUiModel> {
    const condition = () => true;
    const callback = (model: BonesUiModel) => {
      if (this.model.cmReinforcedType !== SimpleAnswerEnum.Yes) {
        model.findings
          .filter(finding => finding.findingType === BonesFindingTypeEnum.Arthritis)
          .map(finding => {
            finding.isIncreasedContrastEnhancement = false;
          });

        model.findings
          .filter(finding => finding.findingType === BonesFindingTypeEnum.MassOsteolysis)
          .map(finding => {
            finding.contrastAgentEnhancementType = ContrastAgentEnhancementTypeEnum.None;
            finding.noCaEnhancementHomogeneityType = BonesHomogeneityTypeEnum.None;
            finding.contrastAgentEnhancementFormType = ContrastAgentEnhancementFormTypeEnum.None;
          });

        model.findings
          .filter(finding => finding.findingType === BonesFindingTypeEnum.Osteomyelitis)
          .map(finding => {
            finding.isSequesterNoContrastEnhancement = false;
          });
      }
    };

    return {
      pageNr: 4,
      condition,
      callback
    };
  }

  private preparePage6ConnectionObject(): IPageConnection<SoftTissueUiModel> {
    const condition = () => true;
    const callback = (model: SoftTissueUiModel) => {
      if (this.model.cmReinforcedType !== SimpleAnswerEnum.Yes) {
        model.findings.map(finding => {
          finding.isHypervascularization = false;
          finding.isLowSignalThrombusWithFillingDefect = false;
          finding.isIncreasedCMEnhancement = false;
          finding.quantitativeType = QuantitativeTypeEnum.None;
          finding.quantitativeHomogeneityType = HomogeneityTypeEnum.None;
          finding.isInTheSepta = false;
          finding.isSynovialEnhancement = false;
        });
      }
      if (this.model.contrastMediumType === 'None') {
        model.findings.map(finding => {
          finding.quantitativeType = QuantitativeTypeEnum.None;
        });
      }
    };

    return {
      pageNr: 6,
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
