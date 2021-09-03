import { Component, OnInit } from '@angular/core';

import { DialogService } from 'primeng/dynamicdialog';

import { TechnologyCtBaseComponent } from '@abstractions/technology-base/technology-ct-base.component';

import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { CenterspecificPreferencesHttpService } from '@services/shared/centerspecific-preferences/centerspecific-preferences-http.service';

import { TechnologyUiModel } from '@models/angiographyCT/ui/technology/technology-ui.model';
import { AcquisitionUiModel } from '@models/angiographyCT/ui/technology/acquisition-ui.model';
import { ReconstructionFindingUiModel } from '@models/angiographyCT/ui/technology/reconstruction-finding-ui.model';

import { CenterspecificPreferencesModulesEnum } from '@enums/centerspecific-preferences/centerspecific-preferences-modules.enum';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { SequencesTypeEnum } from '@enums/shared/technology';
import { SideEffectsSectionService } from '@commonTemplates/technology/services/side-effects-section.service';
import { LocalizationUiModel } from '@models/angiographyCT/ui/localization/localization-ui.model';
import { SupraaorticVesselsUiModel } from '@models/angiographyCT/ui/supraaortic-vessels/supraaortic-vessels-ui.model';
import { PelvisLegArteriesUiModel } from '@models/angiographyCT/ui/pelvis-leg-arteries/pelvis-leg-arteries-ui.model';
import {
  PeriprostheticFluidCollectionTypeEnum,
  WithoutContrastEnhancementTypeEnum
} from '../../../../core/enums/angiographyCT/pelvis-leg-arteries/after-therapy';
import { CoronaryArteriesUiModel } from '@models/angiographyCT/ui/coronary-arteries/coronary-arteries-ui.model';
import { AortaUiModel } from '@models/angiographyCT/ui/aorta/aorta-ui.model';

@Component({
  selector: 'rr-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent extends TechnologyCtBaseComponent<TechnologyUiModel, AcquisitionUiModel, ReconstructionFindingUiModel>
  implements OnInit {
  descriptionArray: string[];
  isCardiacPremedicationSectionActive = false;

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
      AcquisitionUiModel,
      ReconstructionFindingUiModel,
      technologyService
    );

    this.registerConnections();
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.getPreferences(CenterspecificPreferencesModulesEnum.CTAngiography);
  }

  protected preparePageConnection() {
    this.addPageConnection(
      4,
      CoronaryArteriesUiModel,
      () => {
        return true;
      },
      (model: CoronaryArteriesUiModel) => {
        if (this.model.cmReinforcedType === SimpleAnswerEnum.No) {
          model.findings.map(finding => {
            finding.isVenousContrastReflux = false;
          });
        }
      }
    );
    this.addPageConnection(
      5,
      SupraaorticVesselsUiModel,
      () => {
        return true;
      },
      (model: SupraaorticVesselsUiModel) => {
        if (this.model.cmReinforcedType === SimpleAnswerEnum.No) {
          model.findings.map(finding => {
            finding.isContrastEnhancementOfTheArterialWall = false;
          });
        }
      }
    );
    this.addPageConnection(
      7,
      AortaUiModel,
      () => {
        return true;
      },
      (model: AortaUiModel) => {
        if (this.model.cmReinforcedType === SimpleAnswerEnum.No) {
          model.findings.map(finding => {
            finding.isCmExtravasation = false;
            finding.isContrastEnhancementOfTheArterialWall = false;
          });
        }
      }
    );
    this.addPageConnection(
      9,
      PelvisLegArteriesUiModel,
      () => {
        return true;
      },
      (model: PelvisLegArteriesUiModel) => {
        if (this.model.cmReinforcedType === SimpleAnswerEnum.No) {
          model.findings.map(finding => {
            finding.isEspeciallyPeriprostheticInfection = false;
            finding.isArterialWallEnhancement = false;
            finding.periprostheticFluidCollectionType = PeriprostheticFluidCollectionTypeEnum.None;
            finding.withoutContrastEnhancementType = WithoutContrastEnhancementTypeEnum.None;
          });
        }
      }
    );
  }

  private registerConnections(): void {
    this.registerConnectionCallback(1, LocalizationUiModel, (angioCTModel: LocalizationUiModel) => {
      this.isCardiacPremedicationSectionActive = angioCTModel.localization.coronaryArteries;
    });
  }

  onContrastEnhancedChange() {
    super.onContrastEnhancedChange();
    this.setIntravenousCalculatedField();
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('shared-templates.technology.imageQualityValues').subscribe(out => {
        this.descriptionArray = Object.values(out);
      })
    );
  }

  private setIntravenousCalculatedField(): void {
    this.model.isIntravenous = this.model.cmReinforcedType === SimpleAnswerEnum.Yes;
  }

  protected resetCustomAcquisitionsControls() {
    if (this.model.sequencesType === SequencesTypeEnum.Individual) {
      this.model.acquisitions.forEach(acquisition => {
        acquisition.isNative = false;
        acquisition.isArterial = false;
        acquisition.isArterialEarly = false;
        acquisition.isArterialLate = false;
        acquisition.isVenous = false;
        acquisition.isLate = false;
        acquisition.lateDelayInMin = null;
      });
    }
  }
}
