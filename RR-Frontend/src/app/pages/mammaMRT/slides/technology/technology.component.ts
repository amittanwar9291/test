import { Component, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { DialogService } from 'primeng/dynamicdialog';

import { TechnologyMrtBaseComponent } from '@abstractions/technology-base/technology-mrt-base.component';

import { SequenceUiModel } from '@models/mammaMRT/ui/technology/sequence-ui.model';
import { TechnologyUiModel } from '@models/mammaMRT/ui/technology/technology-ui.model';
import { DiagnosisUiModel } from '@models/mammaMRT/ui/diagnosis/diagnosis-ui.model';
import { DiagnosisFindingUiModel } from '@models/mammaMRT/ui/diagnosis/diagnosis-finding-ui.model';
import { AnatomyEnhancementUi } from '@models/mammaMRT/ui/anatomy-enhancement/anatomy-enhancement-ui.model';
import { TechnologyMRIValidationModel } from '@models/shared/validation/technology-MRI-validation.model';

import { NavigationService } from '@services/shared/navigation/navigation.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { CenterspecificPreferencesHttpService } from '@services/shared/centerspecific-preferences/centerspecific-preferences-http.service';

import { CenterspecificPreferencesModulesEnum } from '@enums/centerspecific-preferences/centerspecific-preferences-modules.enum';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { LevelParenchymalesSideEnum, ParenchymaDynamicContrastTypeEnum, ParenchymalesSideEnum } from '@enums/mammaMRT/anatomy-enhancement';
import { DiagnosisFindingTypeEnum, KmDynamicDelayedTypeEnum, KmDynamicInitialTypeEnum } from '@enums/mammaMRT';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { SideEffectsSectionService } from '@commonTemplates/technology/services/side-effects-section.service';
import { SequencesTypeEnum } from '@enums/shared/technology';

@Component({
  selector: 'rr-technology',
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
    this.getPreferences(CenterspecificPreferencesModulesEnum.MRIMamma);
  }

  preparePageConnection() {
    this.addPageConnection(
      5,
      AnatomyEnhancementUi,
      () => {
        return this.model.cmReinforcedType !== SimpleAnswerEnum.None;
      },
      (model: AnatomyEnhancementUi) => {
        if (this.model.cmReinforcedType !== SimpleAnswerEnum.Yes) {
          model.parenchymaDynamicContrastType = ParenchymaDynamicContrastTypeEnum.None;
          model.levelParenchymalesSide = LevelParenchymalesSideEnum.None;
          model.onBothSides = ParenchymalesSideEnum.None;
          model.right = ParenchymalesSideEnum.None;
          model.left = ParenchymalesSideEnum.None;
        }
      }
    );
    this.addPageConnection(
      6,
      DiagnosisUiModel,
      () => {
        return this.model.cmReinforcedType !== SimpleAnswerEnum.None;
      },
      (model: DiagnosisUiModel) => {
        if (this.model.cmReinforcedType !== SimpleAnswerEnum.Yes) {
          model.findings
            .filter(finding => finding.findingType === DiagnosisFindingTypeEnum.FocalPoint)
            .map(finding => {
              finding.enhancementType = 'None';
              finding.kmDynamicDelayedType = KmDynamicDelayedTypeEnum.None;
              finding.kmDynamicInitialType = KmDynamicInitialTypeEnum.None;
              finding.isDiffusionRestriction = false;
              finding.isAdditionalIpsilateralLesionsSameEntity = false;
            });

          model.findings.forEach((finding: DiagnosisFindingUiModel): void => {
            finding.isDeleted = finding.findingType === DiagnosisFindingTypeEnum.NonSpatialEnhancement;
          });

          const isAnyFindingLeft = model.findings.some(finding => finding.isDeleted === false);
          if (!isAnyFindingLeft) {
            model.areFindings = AreFindingsEnum.No;
          }
        }
      }
    );
  }

  protected resetCustomContrastMediumControls() {
    this.model.isAutomatedCAInjection = false;
    this.model.isComputerAidedAnalysisOfCADynamics = false;
  }

  protected resetCustomSequencesControls() {
    if (this.model.sequencesType === SequencesTypeEnum.Individual) {
      this.model.sequences.forEach(sequence => {
        sequence.isDynamicsFollowingGdApplication = false;
        sequence.isSubtraction = false;
        sequence.isLateStage = false;
      });
    }
  }
}
