import { Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { MammographyFindingUiModel } from '@models/mammaMX/ui/mammography-finding/mammography-finding-ui.model';
import { MammographyFindingFindingUiModel } from '@models/mammaMX/ui/mammography-finding/mammography-finding-finding-ui.model';
import { MammographyFindingValidationModel } from '@models/mammaMX/ui/mammography-finding/mammography-finding-validation.model';

import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { MammographyFindingType } from '@enums/mammaMX/mammography-finding/';

import { values } from 'lodash';
import { DifferentialDiagnosisPresetService } from '@abstractions/abstract-classes/differential-diagnosis-preset-service';

import { MammographyFindingPresetsHttpService } from '@services/mammaMX/http/mammography-finding/mammography-finding-presets-http.service';

@Component({
  selector: 'rr-mammography-finding',
  templateUrl: './mammography-finding.component.html',
  styleUrls: ['./mammography-finding.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
  providers: [
    {
      provide: DifferentialDiagnosisPresetService,
      useClass: MammographyFindingPresetsHttpService
    }
  ]
})
export class MammographyFindingComponent extends SlideBaseComponent<MammographyFindingUiModel> {
  findingHandler: DynamicComponentHandler<MammographyFindingFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;

  massKnownDiagnosisOptions: DropdownModel[];
  massDifferentialDiagnosisOptions: DropdownModel[];
  calcificationInTheLesionOptions: DropdownModel[];
  calcificationFormOptions: DropdownModel[];
  architecturalDistorsionDiagnosis1Options: DropdownModel[];
  architecturalDistorsionDiagnosis2Options: DropdownModel[];
  asymmetricDiagnosisOptions: DropdownModel[];
  skinLesionDiagnosis1Options: DropdownModel[];
  skinLesionDiagnosis2Options: DropdownModel[];
  solitaryMammaryDuctDilatationDiagnosis1Options: DropdownModel[];
  solitaryMammaryDuctDilatationDiagnosis2Options: DropdownModel[];

  areFindings: typeof AreFindingsEnum;
  findingType: typeof MammographyFindingType;

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
      MammographyFindingUiModel,
      commonServices,
      MammographyFindingValidationModel
    );
    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, MammographyFindingFindingUiModel);

    this.areFindings = AreFindingsEnum;
    this.findingType = MammographyFindingType;

    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.autoConfigFindingRRId = 'mam_mx_050106';
    this.findingDropdownConfig.itemCount = 5;

    this.registerCallbacks();
  }

  private registerCallbacks() {
    this.registerGetCallback((modelOut: MammographyFindingUiModel) => {
      this.findingHandler.reinitializeCollection(modelOut.findings);
    });

    this.registerSaveCallback((modelOut: MammographyFindingUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(modelOut.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      }),
      this.translate.stream('mammaMX.mammographyFinding.addNewFinding.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      }),
      this.translate.stream('mammaMX.mammographyFinding.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = values(out);
      }),
      this.translate.stream('mammaMX.mammographyFinding.massKnownDiagnosisOptions.options').subscribe((out: DropdownModel[]) => {
        this.massKnownDiagnosisOptions = values(out);
      }),
      this.translate.stream('mammaMX.mammographyFinding.massDifferentialDiagnosisOptions.options').subscribe((out: DropdownModel[]) => {
        this.massDifferentialDiagnosisOptions = values(out);
      }),
      this.translate.stream('mammaMX.mammographyFinding.calcificationInTheLesionOptions.options').subscribe((out: DropdownModel[]) => {
        this.calcificationInTheLesionOptions = values(out);
      }),
      this.translate.stream('mammaMX.mammographyFinding.calcificationFormOptions.options').subscribe((out: DropdownModel[]) => {
        this.calcificationFormOptions = values(out);
      }),
      this.translate
        .stream('mammaMX.mammographyFinding.architecturalDistorsionDiagnosis1Options.options')
        .subscribe((out: DropdownModel[]) => {
          this.architecturalDistorsionDiagnosis1Options = values(out);
        }),
      this.translate
        .stream('mammaMX.mammographyFinding.architecturalDistorsionDiagnosis2Options.options')
        .subscribe((out: DropdownModel[]) => {
          this.architecturalDistorsionDiagnosis2Options = values(out);
        }),
      this.translate.stream('mammaMX.mammographyFinding.asymmetricDiagnosisOptions.options').subscribe((out: DropdownModel[]) => {
        this.asymmetricDiagnosisOptions = values(out);
      }),
      this.translate.stream('mammaMX.mammographyFinding.skinLesionDiagnosis1Options.options').subscribe((out: DropdownModel[]) => {
        this.skinLesionDiagnosis1Options = values(out);
      }),
      this.translate.stream('mammaMX.mammographyFinding.skinLesionDiagnosis2Options.options').subscribe((out: DropdownModel[]) => {
        this.skinLesionDiagnosis2Options = values(out);
      }),
      this.translate
        .stream('mammaMX.mammographyFinding.solitaryMammaryDuctDilatationDiagnosis1Options.options')
        .subscribe((out: DropdownModel[]) => {
          this.solitaryMammaryDuctDilatationDiagnosis1Options = values(out);
        }),
      this.translate
        .stream('mammaMX.mammographyFinding.solitaryMammaryDuctDilatationDiagnosis2Options.options')
        .subscribe((out: DropdownModel[]) => {
          this.solitaryMammaryDuctDilatationDiagnosis2Options = values(out);
        })
    );
  }
}
