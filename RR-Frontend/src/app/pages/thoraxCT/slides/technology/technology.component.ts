import { Component, OnInit } from '@angular/core';

import { DialogService } from 'primeng/dynamicdialog';

import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { CenterspecificPreferencesHttpService } from '@services/shared/centerspecific-preferences/centerspecific-preferences-http.service';

import { TechnologyCtBaseComponent } from '@abstractions/technology-base/technology-ct-base.component';

import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { HomogeneityTypeEnum } from '@enums/thoraxCT/common/homogeneity-type.enum';
import { HeterogeneousTypeEnum } from '@enums/thoraxCT/soft-parts/chest-wall-soft-tissue';
import { CenterspecificPreferencesModulesEnum } from '@enums/centerspecific-preferences/centerspecific-preferences-modules.enum';
import { ContrastEnhancementTypeEnum } from '@enums/thoraxCT/mediastinum';

import { TechnologyUiModel } from '@models/thoraxCT/ui/technology/technology-ui.model';
import { AcquisitionUiModel } from '@models/thoraxCT/ui/technology/acquisition-ui.model';
import { ReconstructionFindingUiModel } from '@models/thoraxCT/ui/technology/reconstruction-finding-ui.model';

import { LungParenchymaUiModel } from '@models/thoraxCT/ui/lung-parenchyma/lung-parenchyma-ui.model';
import { SoftPartsFindingUiModel } from '@models/thoraxCT/ui/soft-parts/soft-parts-finding-ui.model';
import { SoftPartsUiModel } from '@models/thoraxCT/ui/soft-parts/soft-parts-ui.model';
import { MediastinumUiModel } from '@models/thoraxCT/ui/mediastinum/mediastinum-ui.model';

import { IPageConnection } from '@interfaces/page-connection.interface';
import { ContrastEnhancementQuantitativeTypeEnum } from '@enums/thoraxCT/common/contrast-enhancement-quantitative-type.enum';
import { SideEffectsSectionService } from '@commonTemplates/technology/services/side-effects-section.service';

@Component({
  selector: 'rr-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent extends TechnologyCtBaseComponent<TechnologyUiModel, AcquisitionUiModel, ReconstructionFindingUiModel>
  implements OnInit {
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
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.getPreferences(CenterspecificPreferencesModulesEnum.CTThorax);
  }

  protected preparePageConnection() {
    const PC04 = this.preparePage4ConnectionObject();
    this.addPageConnection(PC04.pageNr, MediastinumUiModel, PC04.condition, PC04.callback);

    const PC05 = this.preparePage5ConnectionObject();
    this.addPageConnection(PC05.pageNr, LungParenchymaUiModel, PC05.condition, PC05.callback);

    const PC07 = this.preparePage7ConnectionObject();
    this.addPageConnection(PC07.pageNr, SoftPartsUiModel, PC07.condition, PC07.callback);
  }

  private preparePage4ConnectionObject(): IPageConnection<MediastinumUiModel> {
    const condition = () => true;
    const callback = (model: MediastinumUiModel) => {
      if (this.model.cmReinforcedType === SimpleAnswerEnum.No) {
        model.findings.map(finding => {
          finding.contrastEnhancementType = ContrastEnhancementTypeEnum.None;
          finding.noCMEnhancementHomogeneityType = HomogeneityTypeEnum.None;
          finding.isVenousContrastAgentReflux = false;
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
          finding.isDrecreased = false;
          finding.contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeTypeEnum.None;
          finding.contrastEnhancementHomogeneityType = HomogeneityTypeEnum.None;
        });
      }
    };

    return {
      pageNr: 5,
      condition,
      callback
    };
  }

  private preparePage7ConnectionObject(): IPageConnection<SoftPartsUiModel> {
    const condition = () => true;
    const callback = (model: SoftPartsUiModel) => {
      if (this.model.cmReinforcedType === SimpleAnswerEnum.No) {
        model.findings.map((finding: SoftPartsFindingUiModel) => {
          finding.isCMEnrichingCapsule = false;
          finding.cmEnhancementHomogeneityType = HomogeneityTypeEnum.None;
          finding.contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeTypeEnum.None;
          finding.heterogeneousType = HeterogeneousTypeEnum.None;
        });
      }
    };

    return {
      pageNr: 7,
      condition,
      callback
    };
  }

  onContrastEnhancedChange() {
    super.onContrastEnhancedChange();
    this.setIntravenousCalculatedField();
  }

  private setIntravenousCalculatedField(): void {
    this.model.isIntravenous = this.model.cmReinforcedType === SimpleAnswerEnum.Yes;
  }
}
