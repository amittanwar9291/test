import { TechnologyMrtBaseComponent } from '@abstractions/technology-base/technology-mrt-base.component';
import { Component, OnInit } from '@angular/core';
import { SideEffectsSectionService } from '@commonTemplates/technology/services/side-effects-section.service';
import { CenterspecificPreferencesModulesEnum } from '@enums/centerspecific-preferences/centerspecific-preferences-modules.enum';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { SequencesTypeEnum, WeightingTypeEnum } from '@enums/shared/technology';
import { ContrastEnhancementPatternTypeEnum, ContrastEnhancementTypeEnum, HomogeneityTypeEnum } from '@enums/thoraxMRT/mediastinum';
import { IPageConnection } from '@interfaces/page-connection.interface';
import { MediastinumUiModel } from '@models/thoraxMRT/ui/mediastinum/mediastinum-ui.model';
import { SequenceUiModel } from '@models/thoraxMRT/ui/technology/sequence-ui.model';
import { TechnologyUiModel } from '@models/thoraxMRT/ui/technology/technology-ui.model';

import { NavigationService } from '@services/shared';
import { CenterspecificPreferencesHttpService } from '@services/shared/centerspecific-preferences/centerspecific-preferences-http.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';

import { DialogService } from 'primeng/dynamicdialog';
import { BonesUiModel } from '@models/thoraxMRT/ui/bones/bones-ui.model';
import { ContrastEnhancementDistributionTypeEnum } from '@enums/thoraxMRT/bones/mass/contrast-enhancement-distribution-type.enum';
import { ContrastEnhancementQuantitativeTypeEnum } from '@enums/thoraxMRT/bones/contrast-enhancement-quantitative-type.enum';
import { PleuraUiModel } from '@models/thoraxMRT/ui/pleura/pleura-ui.model';
import { LungParenchymaUiModel } from '@models/thoraxMRT/ui/lung-parenchyma/lung-parenchyma-ui.model';
import { LungsFlapsModel } from '@models/shared/thorax/localizers/lungs-flaps-model';

@Component({
  selector: 'rr-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
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

  ngOnInit(): void {
    super.ngOnInit();
    this.getPreferences(CenterspecificPreferencesModulesEnum.MRIThorax);
  }

  onContrastEnhancedChange() {
    super.onContrastEnhancedChange();
    this.setIntravenousCalculatedField();
  }

  private setIntravenousCalculatedField(): void {
    this.model.isIntravenous = this.model.cmReinforcedType === SimpleAnswerEnum.Yes;
  }

  protected resetCustomSequencesControls() {
    if (this.model.sequencesType === SequencesTypeEnum.Individual) {
      this.model.sequences.forEach(sequence => {
        sequence.isPostContrast = false;
      });
    }
  }

  protected preparePageConnection() {
    const PC04 = this.preparePage4ConnectionObject();
    this.addPageConnection(PC04.pageNr, MediastinumUiModel, PC04.condition, PC04.callback);

    const PC05 = this.preparePage5ConnectionObject();
    this.addPageConnection(PC05.pageNr, LungParenchymaUiModel, PC05.condition, PC05.callback);

    const PC06 = this.preparePage6ConnectionObject();
    this.addPageConnection(PC06.pageNr, BonesUiModel, PC06.condition, PC06.callback);

    const PC07 = this.preparePage7ConnectionObject();
    this.addPageConnection(PC07.pageNr, BonesUiModel, PC07.condition, PC07.callback);
  }

  private preparePage4ConnectionObject(): IPageConnection<MediastinumUiModel> {
    const condition = () => true;
    const callback = (model: MediastinumUiModel) => {
      if (this.model.cmReinforcedType === SimpleAnswerEnum.No) {
        model.findings.map(finding => {
          finding.contrastEnhancementType = ContrastEnhancementTypeEnum.None;
          finding.noCMEnhancementHomogeneityType = HomogeneityTypeEnum.None;
          finding.contrastEnhancementPatternType = ContrastEnhancementPatternTypeEnum.None;
          finding.isVenousContrastAgentReflux = false;
        });
      }

      let isDWISelected = false;
      this.model.sequences.forEach(sequence => {
        if (sequence.weightingType === WeightingTypeEnum.DWI && !sequence.isDeleted) {
          isDWISelected = true;
        }
      });
      if (!isDWISelected) {
        model.findings.map(finding => {
          finding.isDiffusionRestriction = false;
        });
      }
    };

    return {
      pageNr: 4,
      condition,
      callback
    };
  }

  private preparePage5ConnectionObject(): IPageConnection<LungParenchymaUiModel> {
    const condition = () => true;
    const callback = (model: LungParenchymaUiModel) => {
      if (this.model.cmReinforcedType === SimpleAnswerEnum.No) {
        model.findings.map(finding => {
          finding.isPerfusionDisorder = false;
          finding.perfusionDisorderLocation = new LungsFlapsModel();
        });
      }
    };
    return {
      pageNr: 5,
      condition,
      callback
    };
  }

  private preparePage6ConnectionObject(): IPageConnection<PleuraUiModel> {
    const condition = () => true;
    const callback = (model: PleuraUiModel) => {
      if (this.model.cmReinforcedType === SimpleAnswerEnum.No) {
        model.findings.map(finding => {
          finding.contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeTypeEnum.None;
          finding.contrastEnhancementHomogeneityType = HomogeneityTypeEnum.None;
        });
      }
    };
    return {
      pageNr: 6,
      condition,
      callback
    };
  }

  private preparePage7ConnectionObject(): IPageConnection<BonesUiModel> {
    const condition = () => true;
    const callback = (model: BonesUiModel) => {
      if (this.model.cmReinforcedType === SimpleAnswerEnum.No) {
        model.findings.map(finding => {
          finding.contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeTypeEnum.None;
          finding.contrastEnhancementDistributionType = ContrastEnhancementDistributionTypeEnum.None;
          finding.homogeneityType = HomogeneityTypeEnum.None;
        });
      }
    };

    return {
      pageNr: 7,
      condition,
      callback
    };
  }
}
