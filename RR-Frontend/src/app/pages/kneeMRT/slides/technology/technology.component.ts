import { TechnologyMrtBaseComponent } from '@abstractions/technology-base/technology-mrt-base.component';
import { Component, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { CenterspecificPreferencesModulesEnum } from '@enums/centerspecific-preferences/centerspecific-preferences-modules.enum';
import { CmEnhancementTypeEnum, HomogeneityTypeEnum, SynoviaCmEnhancementTypeEnum } from '@enums/kneeMRT/soft-parts';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { ContrastEnhancementTypeEnum } from '@enums/kneeMRT/bones';
import { ContrastEnhancementDistributionTypeEnum } from '@enums/kneeMRT/bones/bones-tumor/contrast-enhancement-distribution-type.enum';

import { SoftPartsUiModel } from '@models/kneeMRT/ui/soft-parts/soft-parts-ui.model';
import { SequenceUiModel } from '@models/kneeMRT/ui/technology/sequence-ui.model';
import { KneeBonesUiModel } from '@models/kneeMRT/ui/bones/knee-bones-ui.model';
import { TechnologyUiModel } from '@models/kneeMRT/ui/technology/technology-ui.model';

import { NavigationService } from '@services/shared';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { CenterspecificPreferencesHttpService } from '@services/shared/centerspecific-preferences/centerspecific-preferences-http.service';

import { DialogService } from 'primeng/dynamicdialog';
import { SequencesTypeEnum } from '@enums/shared/technology';
import { SideEffectsSectionService } from '@commonTemplates/technology/services/side-effects-section.service';
import { IPageConnection } from '@interfaces/page-connection.interface';

@Component({
  selector: 'rr-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss'],
  providers: [DialogService],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
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
    this.getPreferences(CenterspecificPreferencesModulesEnum.MRIKnee);
  }

  preparePageConnection() {
    const PC04 = this.preparePage4ConnectionObject();
    this.addPageConnection(PC04.pageNr, KneeBonesUiModel, PC04.condition, PC04.callback);

    const PC08 = this.preparePage8ConnectionObject();
    this.addPageConnection(PC08.pageNr, SoftPartsUiModel, PC08.condition, PC08.callback);
  }

  private preparePage4ConnectionObject(): IPageConnection<KneeBonesUiModel> {
    const condition = () => true;
    const callback = (model: KneeBonesUiModel) => {
      if (this.model.cmReinforcedType !== SimpleAnswerEnum.Yes) {
        model.findings.map(finding => {
          finding.isAbscessPeripheralCMEnhancement = false;
          finding.isSequestrumNoCMEnhancement = false;
          finding.contrastEnhancementType = ContrastEnhancementTypeEnum.None;
          finding.contrastHomogeneityType = HomogeneityTypeEnum.None;
          finding.isContrastInSepta = false;
          finding.contrastEnhancementDistributionType = ContrastEnhancementDistributionTypeEnum.None;
        });
      }
    };

    return {
      pageNr: 4,
      condition,
      callback
    };
  }

  private preparePage8ConnectionObject(): IPageConnection<SoftPartsUiModel> {
    const condition = () => true;
    const callback = (model: SoftPartsUiModel) => {
      if (this.model.cmReinforcedType !== SimpleAnswerEnum.Yes) {
        model.findings.map(finding => {
          finding.musculatureCMEnchancementType = CmEnhancementTypeEnum.None;
          finding.tissueTumorCMEnhancementType = CmEnhancementTypeEnum.None;
          finding.synoviaCMEnhancementType = SynoviaCmEnhancementTypeEnum.None;
          finding.quantitativeType = HomogeneityTypeEnum.None;
          finding.isCentrally = false;
          finding.isPeripheral = false;
          finding.isIncreasedContrastEnhancement = false;
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
