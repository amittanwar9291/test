import { TechnologyMrtBaseComponent } from '@abstractions/technology-base/technology-mrt-base.component';
import { Component, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { CenterspecificPreferencesModulesEnum } from '@enums/centerspecific-preferences/centerspecific-preferences-modules.enum';
import {
  ContrastEnhancementQuantitativeType as BonesContrastEnhancementQuantitativeType,
  ContrastEnhancementDistributionTypeEnum
} from '@enums/elbowMRT/bones';
import { HomogeneityTypeEnum } from '@enums/shared/homogeneity-type.enum';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { SequencesTypeEnum } from '@enums/shared/technology';
import { HomogeneityType, ContrastEnhancementQuantitativeType, HeterogenousType } from '@enums/elbowMRT/soft-tissue/';

import { IPageConnection } from '@interfaces/page-connection.interface';

import { BonesUiModel } from '@models/elbowMRT/ui/bones/bones-ui.model';
import { CartilageLigamentsCapsuleUiModel } from '@models/elbowMRT/ui/cartilage-ligaments-capsule/cartilage-ligaments-capsule-ui.model';
import { SoftTissueUiModel } from '@models/elbowMRT/ui/soft-tissue/soft-tissue-ui.model';
import { SequenceUiModel } from '@models/elbowMRT/ui/technology/sequence-ui.model';
import { TechnologyUiModel } from '@models/elbowMRT/ui/technology/technology-ui.model';

import { NavigationService } from '@services/shared';
import { CenterspecificPreferencesHttpService } from '@services/shared/centerspecific-preferences/centerspecific-preferences-http.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';

import { DialogService } from 'primeng/dynamicdialog';

import { SideEffectsSectionService } from '@commonTemplates/technology/services/side-effects-section.service';

@Component({
  selector: 'rr-elbow-mrt-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
  providers: [DialogService]
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
    this.getPreferences(CenterspecificPreferencesModulesEnum.MRIElbow);
  }

  preparePageConnection(): void {
    const PC04 = this.preparePage4ConnectionObject();
    const PC05 = this.preparePage5ConnectionObject();
    const PC07 = this.preparePage7ConnectionObject();

    this.addPageConnection(PC04.pageNr, BonesUiModel, PC04.condition, PC04.callback);
    this.addPageConnection(PC05.pageNr, CartilageLigamentsCapsuleUiModel, PC05.condition, PC05.callback);
    this.addPageConnection(PC07.pageNr, CartilageLigamentsCapsuleUiModel, PC07.condition, PC07.callback);
  }

  private preparePage4ConnectionObject(): IPageConnection<BonesUiModel> {
    const condition = () => this.model.cmReinforcedType !== SimpleAnswerEnum.Yes;
    const callback = (model: BonesUiModel) => {
      model.findings.forEach(finding => {
        finding.contrastEnhancementDistributionType = ContrastEnhancementDistributionTypeEnum.None;
        finding.contrastEnhancementQuantitativeType = BonesContrastEnhancementQuantitativeType.None;
        finding.contrastEnhancementHomogeneityType = HomogeneityTypeEnum.None;
        finding.isNoCmEnhancement = false;
        finding.isPeripheralContrastEnhancement = false;
        finding.isApophysitis = false;
      });
    };

    return {
      pageNr: 4,
      condition,
      callback
    };
  }

  private preparePage5ConnectionObject(): IPageConnection<CartilageLigamentsCapsuleUiModel> {
    const condition = () => this.model.cmReinforcedType !== SimpleAnswerEnum.Yes;
    const callback = (model: CartilageLigamentsCapsuleUiModel) => {
      model.findings.forEach(finding => {
        finding.isSynovialCMEnhancement = false;
      });
    };

    return {
      pageNr: 5,
      condition,
      callback
    };
  }

  private preparePage7ConnectionObject(): IPageConnection<SoftTissueUiModel> {
    const condition = () => this.model.cmReinforcedType !== SimpleAnswerEnum.Yes;
    const callback = (model: SoftTissueUiModel) => {
      model.findings.forEach(finding => {
        finding.contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.None;
        finding.caEnhancementHomogeneityType = HomogeneityType.None;
        finding.heterogenousType = HeterogenousType.None;
        finding.isContrastEnhancement = false;
      });
    };

    return {
      pageNr: 7,
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
