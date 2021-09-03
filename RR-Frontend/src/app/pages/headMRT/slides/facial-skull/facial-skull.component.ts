import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { Component } from '@angular/core';

import { FacialSkullUiModel } from '@models/headMRT/ui/facial-skull/facial-skull-ui.model';
import { NavigationService } from '@services/shared';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { FacialSkullValidationModel } from '@models/headMRT/ui/facial-skull/facial-skull-validation.model';
import { FacialSkullFindingUiModel } from '@models/headMRT/ui/facial-skull/facial-skull-finding-ui.model';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { FacialSkullFindingTypeEnum } from '@enums/headMRT/facial-skull/facial-skull-finding-type.enum';
import { Subscription } from 'rxjs';
import { FacialSkullAreFindingsEnum } from '@enums/headMRT/facial-skull/facial-skull-are-findings.enum';
import { TechnologyUiModel } from '@models/neckMRT/ui/technology/technology-ui.model';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { WeightingTypeEnum } from '@enums/shared/technology';
import { FacialSkullHelperService } from './facial-skull-helper.service';
import { DifferentialDiagnosisPresetService } from '@abstractions/abstract-classes/differential-diagnosis-preset-service';
import { FacialSkullPresetHttpService } from '@services/headMRT/http/facial-skull/facial-skull-preset-http.service';

@Component({
  selector: 'rr-facial-skull',
  templateUrl: './facial-skull.component.html',
  styleUrls: ['./facial-skull.component.scss'],
  providers: [
    {
      provide: DifferentialDiagnosisPresetService,
      useClass: FacialSkullPresetHttpService
    }
  ]
})
export class FacialSkullComponent extends SlideBaseComponent<FacialSkullUiModel> {
  subscriptions: Subscription[] = [];
  findingHandler: DynamicComponentHandler<FacialSkullFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;
  facialSkullAreFindingsEnum = FacialSkullAreFindingsEnum;
  facialSkullFindingTypeEnum = FacialSkullFindingTypeEnum;

  descriptionTypes = [
    FacialSkullFindingTypeEnum.SkullBase,
    FacialSkullFindingTypeEnum.TemporalBone,
    FacialSkullFindingTypeEnum.Orbita,
    FacialSkullFindingTypeEnum.ParanasalSinuses,
    FacialSkullFindingTypeEnum.OralCavity,
    FacialSkullFindingTypeEnum.SalivaryGlands,
    FacialSkullFindingTypeEnum.Skull
  ];

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    private facialSkullHelperService: FacialSkullHelperService
  ) {
    super(navService, slideRequestService, changeDetectionService, FacialSkullUiModel, commonServices, FacialSkullValidationModel);

    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, FacialSkullFindingUiModel);
    this.initFindingColumnConfig();

    this.registerCallbacks();
    this.registerConnections();
  }

  private registerCallbacks(): void {
    this.registerGetCallback((modelOut: FacialSkullUiModel) => {
      this.findingHandler.reinitializeCollection(modelOut.findings);
    });

    this.registerSaveCallback((modelOut: FacialSkullUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(modelOut.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  private registerConnections(): void {
    this.registerConnectionCallback(3, TechnologyUiModel, (technologyModel: TechnologyUiModel) => {
      this.facialSkullHelperService.isDWI.next(
        technologyModel.sequences.some(sequence => sequence.weightingType === WeightingTypeEnum.DWI)
      );
      this.facialSkullHelperService.isCMYes.next(technologyModel.cmReinforcedType === SimpleAnswerEnum.Yes);
    });
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('headMRT.facialSkull.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = out;
      }),
      this.translate.stream('headMRT.facialSkull.addNewFinding.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      }),
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      })
    );
  }

  private initFindingColumnConfig(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.itemCount = 4;
    this.findingDropdownConfig.autoConfigFindingRRId = 'hea_m_110106';
  }

  isFindingType(type: FacialSkullFindingTypeEnum): boolean {
    return this.findingHandler.currentItem.findingType === type;
  }
}
