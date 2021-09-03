import { Component, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { DialogService } from 'primeng/dynamicdialog';

import { TechnologyMrtBaseComponent } from '@abstractions/technology-base/technology-mrt-base.component';

import { CenterspecificPreferencesModulesEnum } from '@enums/centerspecific-preferences/centerspecific-preferences-modules.enum';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import {
  BonesFindingTypeEnum,
  ContrastEnhancementQuantitativeTypeEnum,
  HomogeneityTypeEnum as BonesHomogeneityTypeEnum
} from '@enums/spineMRT/bones';
import { CmEnhancementFormTypeEnum } from '@enums/spineMRT/bones/tumor-focal/cm-enhancement-form-type.enum';
import { IntervertebralDiscJointsFindingTypesEnum } from '@enums/spineMRT/intervertebral-disc-joints';
import { ContrastEnhancementTypeEnum, HomogeneityTypeEnum as SoftTissueHomogeneityTypeEnum } from '@enums/spineMRT/soft-tissues';
import { SequencesTypeEnum } from '@enums/shared/technology';
import { ContrastEnhancementTypeEnum as MyelonContrastEnhancementTypeEnum } from '@enums/spineMRT/myelon/contrast-enhancement-type.enum';
import { BonesUiModel } from '@models/spineMRT/ui/bones/bones-ui.model';
import { IntervertebralDiscJointsUiModel } from '@models/spineMRT/ui/intervertebral-disc-joints/intervertebral-disc-joints-ui.model';
import { MyelonUIModel } from '@models/spineMRT/ui/myelon/myelon-ui.model';
import { SacroiliacJointUiModel } from '@models/spineMRT/ui/sacroiliac-joint/sacroiliac-joint-ui.model';
import { SoftTissuesUiModel } from '@models/spineMRT/ui/soft-tissues/soft-tissues-ui.model';
import { SequenceUiModel } from '@models/spineMRT/ui/technology/sequence-ui.model';
import { TechnologyUiModel } from '@models/spineMRT/ui/technology/technology-ui.model';

import { NavigationService } from '@services/shared';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { CenterspecificPreferencesHttpService } from '@services/shared/centerspecific-preferences/centerspecific-preferences-http.service';

import { IPageConnection } from '@interfaces/page-connection.interface';
import { SideEffectsSectionService } from '@commonTemplates/technology/services/side-effects-section.service';
import { HomogeneityTypeEnum } from '@enums/spineMRT/myelon/homogeneity-type.enum';
import { SpinalCanalFindingTypeEnum } from '@enums/spineMRT/myelon/spinal-canal-finding-type.enum';
import { PialTypeEnum } from '@enums/spineMRT/myelon/pial-type.enum';

@Component({
  selector: 'rr-spine-mrt-technology',
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
    this.getPreferences(CenterspecificPreferencesModulesEnum.MRISpine);
  }

  preparePageConnection(): void {
    const PCO5 = this.preparePage5ConnectionObject();
    const PCO6 = this.preparePage6ConnectionObject();
    const PCO7 = this.preparePage7ConnectionObject();
    const PCO8 = this.preparePage8ConnectionObject();
    const PCO9 = this.preparePage9ConnectionObject();

    this.addPageConnection(PCO5.pageNr, IntervertebralDiscJointsUiModel, PCO5.condition, PCO5.callback);
    this.addPageConnection(PCO6.pageNr, BonesUiModel, PCO6.condition, PCO6.callback);
    this.addPageConnection(PCO7.pageNr, MyelonUIModel, PCO7.condition, PCO7.callback);
    this.addPageConnection(PCO8.pageNr, SoftTissuesUiModel, PCO8.condition, PCO8.callback);
    this.addPageConnection(PCO9.pageNr, SacroiliacJointUiModel, PCO9.condition, PCO9.callback);
  }

  private preparePage5ConnectionObject(): IPageConnection<IntervertebralDiscJointsUiModel> {
    const condition = () => true;
    const callback = (model: IntervertebralDiscJointsUiModel) => {
      if (this.model.cmReinforcedType !== SimpleAnswerEnum.Yes) {
        model.findings
          .filter(finding => finding.findingType === IntervertebralDiscJointsFindingTypesEnum.RheumatoidArthritis)
          .map(finding => {
            finding.isAnteriorContrastEnhancement = false;
            finding.isPosteriorContrastEnhancement = false;
            finding.isMarginalisContrastEnhancement = false;
            finding.isContrastEnhancement = false;
          });
        model.findings
          .filter(finding => finding.findingType === IntervertebralDiscJointsFindingTypesEnum.InflammatoryOrSpondylodiscitis)
          .map(finding => {
            finding.isContrastEnhancementOfTheDisc = false;
            finding.isEpiduralContrastEnhancement = false;
          });
      }
    };

    return {
      pageNr: 5,
      condition,
      callback
    };
  }

  private preparePage6ConnectionObject(): IPageConnection<BonesUiModel> {
    const condition = () => true;
    const callback = (model: BonesUiModel) => {
      if (this.model.cmReinforcedType !== SimpleAnswerEnum.Yes) {
        model.findings
          .filter(finding => finding.findingType === BonesFindingTypeEnum.FocalTumor)
          .map(finding => {
            finding.contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeTypeEnum.None;
            finding.cmEnhancementHomogeneityType = BonesHomogeneityTypeEnum.None;
            finding.isInTheSepta = false;
            finding.cmEnhancementForm = CmEnhancementFormTypeEnum.None;
          });
        model.findings
          .filter(finding => finding.findingType === BonesFindingTypeEnum.DiffuseTumor)
          .map(finding => {
            finding.contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeTypeEnum.None;
            finding.cmEnhancementHomogeneityType = BonesHomogeneityTypeEnum.None;
          });
      }
    };

    return {
      pageNr: 6,
      condition,
      callback
    };
  }

  private preparePage7ConnectionObject(): IPageConnection<MyelonUIModel> {
    const condition = () => true;
    const callback = (model: MyelonUIModel) => {
      if (this.model.cmReinforcedType !== SimpleAnswerEnum.Yes) {
        model.findings
          .filter(finding => finding.findingType === SpinalCanalFindingTypeEnum.MassEffect)
          .map(finding => {
            finding.contrastEnhancementType = MyelonContrastEnhancementTypeEnum.None;
            finding.contrastEnhancementHomogeneityType = HomogeneityTypeEnum.None;
          });
        model.findings
          .filter(finding => finding.findingType === SpinalCanalFindingTypeEnum.NoMassEffect)
          .map(finding => {
            finding.contrastEnhancementType = MyelonContrastEnhancementTypeEnum.None;
            finding.contrastEnhancementHomogeneityType = HomogeneityTypeEnum.None;
            finding.isIntramedullaryFocal = false;
            finding.isAnteriorRadix = false;
            finding.isPosteriorRadix = false;
            finding.isPial = false;
            finding.pialType = PialTypeEnum.None;
            finding.isSubarachnoid = false;
            finding.isEpidural = false;
            finding.isMedullaryCone = false;
            finding.isCaudaEquina = false;
          });
      }
    };

    return {
      pageNr: 7,
      condition,
      callback
    };
  }

  private preparePage8ConnectionObject(): IPageConnection<SoftTissuesUiModel> {
    const condition = () => true;
    const callback = (model: SoftTissuesUiModel) => {
      if (this.model.cmReinforcedType !== SimpleAnswerEnum.Yes) {
        model.findings.map(finding => {
          finding.contrastEnhancementType = ContrastEnhancementTypeEnum.None;
          finding.cmEnhancementHomogeneityType = SoftTissueHomogeneityTypeEnum.None;
        });
      }
    };

    return {
      pageNr: 8,
      condition,
      callback
    };
  }

  private preparePage9ConnectionObject(): IPageConnection<SacroiliacJointUiModel> {
    const condition = () => true;
    const callback = (model: SacroiliacJointUiModel) => {
      if (this.model.cmReinforcedType !== SimpleAnswerEnum.Yes) {
        model.findings.map(finding => (finding.isCmEnhancement = false));
      }
    };

    return {
      pageNr: 9,
      condition,
      callback
    };
  }

  protected resetCustomSequencesControls() {
    if (this.model.sequencesType === SequencesTypeEnum.Individual) {
      this.model.sequences.forEach(sequence => {
        sequence.isPostContrast = false;
      });
    }
  }
}
