import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { AreFindingsEnum, PeritonealCavityFindingTypeEnum } from '@enums/abdomenMRT/peritoneal-cavity';
import { GenderTypeEnum } from '@enums/shared/gender-type.enum';
import { ExaminationRegionUiModel } from '@models/abdomenMRT/ui/examination-region/examination-region-ui.model';
import { PeritonealCavityFindingUiModel } from '@models/abdomenMRT/ui/peritoneal-cavity/peritoneal-cavity-finding-ui.model';
import { PeritonealCavityUiModel } from '@models/abdomenMRT/ui/peritoneal-cavity/peritoneal-cavity-ui.model';
import { PeritonealCavityValidationModel } from '@models/abdomenMRT/ui/peritoneal-cavity/peritoneal-cavity-validation.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { NavigationService } from '@services/shared';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { values } from 'lodash';
import { TechnologyUiModel } from '@models/abdomenMRT/ui/technology/technology-ui.model';
import { WeightingTypeEnum } from '@enums/shared/technology';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';

@Component({
  selector: 'rr-peritoneal-cavity',
  templateUrl: './peritoneal-cavity.component.html',
  styleUrls: ['./peritoneal-cavity.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class PeritonealCavityComponent extends SlideBaseComponent<PeritonealCavityUiModel> {
  findingHandler: DynamicComponentHandler<PeritonealCavityFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;

  isMale: boolean;
  isFemale: boolean;
  isDWI: boolean;
  isContrastEnhanced: boolean;

  ddW047: DropdownGroupedModel[];
  ddW048: DropdownGroupedModel[];
  ddW049: DropdownGroupedModel[];
  ddW050: DropdownGroupedModel[];
  ddW051: DropdownModel[];

  areFindings: typeof AreFindingsEnum;
  findingType: typeof PeritonealCavityFindingTypeEnum;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(
      navService,
      slideRequestService,
      changeDetectionService,
      PeritonealCavityUiModel,
      commonServices,
      PeritonealCavityValidationModel
    );

    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, PeritonealCavityFindingUiModel);

    this.initFindingColumnConfig();
    this.registerCallbacks();
    this.registerConnections();

    this.areFindings = AreFindingsEnum;
    this.findingType = PeritonealCavityFindingTypeEnum;
  }

  private registerCallbacks(): void {
    this.registerGetCallback((modelOut: PeritonealCavityUiModel) => {
      this.findingHandler.reinitializeCollection(modelOut.findings);
    });

    this.registerSaveCallback((modelOut: PeritonealCavityUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(modelOut.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  isFindingWithTabs(): boolean {
    return [
      PeritonealCavityFindingTypeEnum.Ascites,
      PeritonealCavityFindingTypeEnum.RetroperitonealMass,
      PeritonealCavityFindingTypeEnum.HemorrhageHematoma,
      PeritonealCavityFindingTypeEnum.PeritonealMass
    ].includes(this.findingHandler.currentItem.findingType);
  }

  private registerConnections(): void {
    this.registerConnectionCallback(1, ExaminationRegionUiModel, (examinationModel: ExaminationRegionUiModel) => {
      this.isMale = examinationModel.patientInformation.gender === GenderTypeEnum.Male;
      this.isFemale = examinationModel.patientInformation.gender === GenderTypeEnum.Female;
    });
    this.registerConnectionCallback(3, TechnologyUiModel, (technologyModel: TechnologyUiModel) => {
      this.isDWI = technologyModel.sequences.some(model => model.weightingType === WeightingTypeEnum.DWI);
      this.isContrastEnhanced = technologyModel.cmReinforcedType === SimpleAnswerEnum.Yes;
    });
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('abdomenMRT.peritonealCavity.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.values(out);
      }),
      this.translate.stream('abdomenMRT.peritonealCavity.addNewFinding.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      }),
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      }),
      this.translate.stream('abdomenMRT.peritonealCavity.W051.options').subscribe((out: string) => {
        this.ddW051 = values(out);
      }),
      this.translate.stream('abdomenMRT.peritonealCavity.W047.options').subscribe((out: DropdownGroupedModel[]) => {
        this.ddW047 = Object.values(out);
      }),
      this.translate.stream('abdomenMRT.peritonealCavity.W048.options').subscribe((out: DropdownGroupedModel[]) => {
        this.ddW048 = Object.values(out);
      }),
      this.translate.stream('abdomenMRT.peritonealCavity.W049.options').subscribe((out: DropdownGroupedModel[]) => {
        this.ddW049 = Object.values(out);
      }),
      this.translate.stream('abdomenMRT.peritonealCavity.W050.options').subscribe((out: DropdownGroupedModel[]) => {
        this.ddW050 = Object.values(out);
      })
    );
  }

  private initFindingColumnConfig(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.itemCount = 8;
    this.findingDropdownConfig.findingColumnIds.findingRRId = 'abd_m_100106';
    this.findingDropdownConfig.findingColumnIds.buttonRRId = 'abd_m_100107';
  }
}
