import { Component } from '@angular/core';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { NavigationService } from '@services/shared';
import { SoftTissueUiModel } from '@models/elbowMRT/ui/soft-tissue/soft-tissue-ui.model';
import { SoftTissueFindingUiModel } from '@models/elbowMRT/ui/soft-tissue/soft-tissue-finding-ui.model';
import { SoftTissueValidation } from '@models/elbowMRT/ui/soft-tissue/soft-tissue-validation.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TechnologyUiModel } from '@models/elbowMRT/ui/technology/technology-ui.model';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { SoftTissueFindingType } from '@enums/elbowMRT/soft-tissue/';
import { values } from 'lodash';
import { ControlContainer, NgForm } from '@angular/forms';
import { SoftTissuePresetsHttpService } from '@services/elbowMRT/http/soft-tissue/soft-tissue-presets-http.service';
import { DifferentialDiagnosisPresetService } from '@abstractions/abstract-classes/differential-diagnosis-preset-service';

@Component({
  selector: 'rr-soft-tissue',
  templateUrl: './soft-tissue.component.html',
  styleUrls: ['./soft-tissue.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
  providers: [
    {
      provide: DifferentialDiagnosisPresetService,
      useClass: SoftTissuePresetsHttpService
    }
  ]
})
export class SoftTissueComponent extends SlideBaseComponent<SoftTissueUiModel> {
  findingHandler: DynamicComponentHandler<SoftTissueFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;
  isTechnologyCMReinforcedChecked: boolean;

  differentialDiagnosis1Options: DropdownModel[];
  differentialDiagnosis2Options: DropdownModel[];

  areFindings: typeof AreFindingsEnum;
  findingType: typeof SoftTissueFindingType;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, SoftTissueUiModel, commonServices, SoftTissueValidation);

    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, SoftTissueFindingUiModel);

    this.areFindings = AreFindingsEnum;
    this.findingType = SoftTissueFindingType;

    this.initializeDynamicDropdownConfig();

    this.registerCallback();
    this.registerConnection();
  }

  private registerConnection(): void {
    this.registerConnectionCallback(3, TechnologyUiModel, (technologyModel: TechnologyUiModel) => {
      this.isTechnologyCMReinforcedChecked = technologyModel ? technologyModel.cmReinforcedType === SimpleAnswerEnum.Yes : false;
    });
  }

  private registerCallback() {
    this.registerSaveCallback((modelOut: SoftTissueUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(modelOut.findings);
    });

    this.registerGetCallback((modelOut: SoftTissueUiModel) => {
      this.findingHandler.reinitializeCollection(modelOut.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  private initializeDynamicDropdownConfig(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.itemCount = 5;
    this.findingDropdownConfig.autoConfigFindingRRId = 'elb_m_070106';
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('elbowMRT.softTissue.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = values(out);
      }),
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      }),
      this.translate.stream('elbowMRT.softTissue.addNewFinding.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      }),
      this.translate.stream('elbowMRT.softTissue.differentialDiagnosisList1.options').subscribe((out: string) => {
        this.differentialDiagnosis1Options = values(out);
      }),
      this.translate.stream('elbowMRT.softTissue.differentialDiagnosisList2.options').subscribe((out: string) => {
        this.differentialDiagnosis2Options = values(out);
      })
    );
  }
}
