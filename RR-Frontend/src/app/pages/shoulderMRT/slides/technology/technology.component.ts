import { Component, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { DialogService } from 'primeng/dynamicdialog';

import { TechnologyMrtBaseComponent } from '@abstractions/technology-base/technology-mrt-base.component';

import { TechnologyUiModel } from '@models/shoulderMRT/ui/technology/technology-ui.model';
import { SequenceUiModel } from '@models/shoulderMRT/ui/technology/sequence-ui.model';
import { BonesUiModel } from '@models/shoulderMRT/ui/bones/bones-ui.model';
import { BonesFindingUiModel } from '@models/shoulderMRT/ui/bones/bones-finding-ui.model';
import { JointUiModel } from '@models/shoulderMRT/ui/joint/joint-ui-model';
import { JointFindingUiModel } from '@models/shoulderMRT/ui/joint/joint-finding-ui.model';

import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { NavigationService } from '@services/shared/navigation/navigation.service';

import { IPageConnection } from '@interfaces/page-connection.interface';

import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { CenterspecificPreferencesModulesEnum } from '@enums/centerspecific-preferences/centerspecific-preferences-modules.enum';
import { SequencesTypeEnum } from '@enums/shared/technology/sequences-type.enum';
import { CmEnhancementDistributionTypeEnum, CmEnhancementQuantitativeTypeEnum, HomogeneityTypeEnum } from '@enums/shoulderMRT/bones';
import { JointAndBursaeFindingType } from '@enums/shoulderMRT/joint';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { CenterspecificPreferencesHttpService } from '@services/shared/centerspecific-preferences/centerspecific-preferences-http.service';
import { SideEffectsSectionService } from '@commonTemplates/technology/services/side-effects-section.service';

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
    this.getPreferences(CenterspecificPreferencesModulesEnum.MRIShoulder);
  }

  preparePageConnection(): void {
    const PCO4 = this.preparePage4ConnectionObject();
    const PCO7 = this.preparePage7ConnectionObject();
    const PCO7_2 = this.preparePage7ConnectionObject2();

    this.addPageConnection(PCO4.pageNr, BonesUiModel, PCO4.condition, PCO4.callback);
    this.addPageConnection(PCO7.pageNr, BonesUiModel, PCO7.condition, PCO7.callback);
    this.addPageConnection(PCO7_2.pageNr, BonesUiModel, PCO7_2.condition, PCO7_2.callback);
  }

  // Connection with 4th page
  private preparePage4ConnectionObject(): IPageConnection<BonesUiModel> {
    const condition = () => this.model.cmReinforcedType !== SimpleAnswerEnum.Yes;
    const callback = (model: BonesUiModel) => {
      model.findings.forEach((finding: BonesFindingUiModel) => {
        finding.cMenhancementQuantitativeType = CmEnhancementQuantitativeTypeEnum.None;
        finding.noCMEnhancementHomogeneityType = HomogeneityTypeEnum.None;
        finding.isSeptal = false;
        finding.cmEnhancementDistributionType = CmEnhancementDistributionTypeEnum.None;
      });
    };

    return {
      pageNr: 4,
      condition,
      callback
    };
  }

  // Connection with 7th page
  private preparePage7ConnectionObject(): IPageConnection<JointUiModel> {
    const condition = () => this.model.isIntraarticular;
    const callback = (model: JointUiModel) => {
      model.findings.forEach((finding: JointFindingUiModel): void => {
        finding.isDeleted = finding.findingType === JointAndBursaeFindingType.ArticularEffusion;
      });

      const isAnyFindingLeft = model.findings.some(finding => finding.isDeleted === false);
      if (!isAnyFindingLeft) {
        model.areFindings = AreFindingsEnum.No;
      }
    };

    return {
      pageNr: 7,
      condition,
      callback
    };
  }

  // Connection 2 with 7th page
  private preparePage7ConnectionObject2(): IPageConnection<JointUiModel> {
    const condition = () => this.model.cmReinforcedType !== SimpleAnswerEnum.Yes;
    const callback = (model: JointUiModel) => {
      model.findings.forEach((finding: JointFindingUiModel): void => {
        finding.isIncreasedCAEnhancementByRotator = false;
        finding.isIncreasedCAEnhancementOfTheCapsule = false;
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
