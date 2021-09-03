import { Component, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { DialogService } from 'primeng/dynamicdialog';

import { TechnologyMrtBaseComponent } from '@abstractions/technology-base/technology-mrt-base.component';

import { TechnologyUiModel } from '@models/handMRT/ui/technology/technology-ui.model';
import { SequenceUiModel } from '@models/handMRT/ui/technology/sequence-ui.model';
import { SoftTissueUiModel } from '@models/handMRT/ui/soft-tissue/soft-tissue-ui.model';

import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { NavigationService } from '@services/shared/navigation/navigation.service';

import { SideEffectsSectionService } from '@commonTemplates/technology/services/side-effects-section.service';

import { CenterspecificPreferencesModulesEnum } from '@enums/centerspecific-preferences/centerspecific-preferences-modules.enum';
import { SequencesTypeEnum } from '@enums/shared/technology/sequences-type.enum';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { CMEnhancementTypeEnum } from '@enums/handMRT/soft-tissue/cm-enhancement-type.enum';
import { HomogeneityTypeEnum } from '@enums/shared/homogeneity-type.enum';
import { ContrastEnhancementDistributionTypeEnum } from '@enums/handMRT/soft-tissue/contrast-enhancement-distribution-type.enum';

import { CenterspecificPreferencesHttpService } from '@services/shared/centerspecific-preferences/centerspecific-preferences-http.service';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

import { IPageConnection } from '@interfaces/page-connection.interface';
import { BonesUiModel } from '@models/handMRT/ui/bones/bones-ui.model';
import { SoftTissueFindingTypeEnum } from '@enums/handMRT/soft-tissue/soft-tissue-finding-type.enum';
import { BonesFindingTypeEnum, QuantitativeTypeEnum } from '@enums/handMRT/bones';

@Component({
  selector: 'rr-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss'],
  providers: [DialogService],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class TechnologyComponent extends TechnologyMrtBaseComponent<TechnologyUiModel, SequenceUiModel> implements OnInit {
  localizationTypes: DropdownModel[];

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
    this.getPreferences(CenterspecificPreferencesModulesEnum.MRIHand);
  }

  protected resetCustomContrastMediumControls() {
    this.model.isIntravenous = false;
    this.model.isIndirectArthrography = false;
    this.model.isIntraarticular = false;
    this.model.dilutionAmount = null;
    this.model.applicationLocalizationType = 'None';
  }

  protected resetCustomSequencesControls() {
    if (this.model.sequencesType === SequencesTypeEnum.Individual) {
      this.model.sequences.forEach(sequence => {
        sequence.isPostContrast = false;
      });
    }
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('handMRT.technology.localizationTypes').subscribe((out: DropdownModel[]) => {
        this.localizationTypes = Object.values(out);
      })
    );
  }

  protected preparePageConnection() {
    const PC04 = this.preparePage4ConnectionObject();
    const PC08 = this.preparePage8ConnectionObject();

    this.addPageConnection(PC04.pageNr, BonesUiModel, PC04.condition, PC04.callback);
    this.addPageConnection(PC08.pageNr, SoftTissueUiModel, PC08.condition, PC08.callback);
  }

  private preparePage4ConnectionObject(): IPageConnection<BonesUiModel> {
    const condition = () => true;
    const callback = (model: BonesUiModel) => {
      if (this.model.cmReinforcedType === SimpleAnswerEnum.No) {
        model.findings
          .filter(finding => finding.findingType === BonesFindingTypeEnum.Osteomyelitis)
          .map(finding => {
            finding.isPeripheralContrast = false;
            finding.isNoContrastEnhancement = false;
          });
        model.findings
          .filter(finding => finding.findingType === BonesFindingTypeEnum.MassOsteolysis)
          .map(finding => {
            finding.contrastEnhancementType = QuantitativeTypeEnum.None;
            finding.contrastHomogenityType = HomogeneityTypeEnum.None;
          });
      }
    };

    return {
      pageNr: 4,
      condition,
      callback
    };
  }

  private preparePage8ConnectionObject(): IPageConnection<SoftTissueUiModel> {
    const condition = () => true;
    const callback = (model: SoftTissueUiModel) => {
      if (this.model.cmReinforcedType === SimpleAnswerEnum.No) {
        model.findings
          .filter(finding => finding.findingType === SoftTissueFindingTypeEnum.SoftTissueMass)
          .map(finding => {
            finding.contrastEnhancementType = CMEnhancementTypeEnum.None;
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
}
