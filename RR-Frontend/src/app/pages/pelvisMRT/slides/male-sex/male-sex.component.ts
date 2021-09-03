import { Component } from '@angular/core';
import { MaleSexUiModel } from '@models/pelvisMRT/ui/male-sex/male-sex-ui.model';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';

import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { MaleSexFindingUiModel } from '@models/pelvisMRT/ui/male-sex/male-sex-finding-ui.model';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { MaleSexValidationModel } from '@models/pelvisMRT/ui/male-sex/male-sex-validation.model';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { TechnologyUiModel } from '@models/pelvisMRT/ui/technology/technology-ui.model';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { MaleGenderFindingType } from '@enums/pelvisMRT/male-sex/male-sex-finding-types.enum';

@Component({
  selector: 'rr-male-sex',
  templateUrl: './male-sex.component.html',
  styleUrls: ['./male-sex.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MaleSexComponent extends SlideBaseComponent<MaleSexUiModel> {
  findingHandler: DynamicComponentHandler<MaleSexFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;

  penisDifferentialDiagnosisType: DropdownModel[];
  scrotumDifferentialDiagnosisType: DropdownModel[];
  seminalVesiclesMassDifferentialDiagnosisType: DropdownModel[];
  penisInfektionDifferentialDiagnosisType: DropdownModel[];

  technologyModel: TechnologyUiModel;
  areFindings: typeof AreFindingsEnum;
  maleGenderFindingType = MaleGenderFindingType;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, MaleSexUiModel, commonServices, MaleSexValidationModel);
    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, MaleSexFindingUiModel);
    this.technologyModel = new TechnologyUiModel();
    this.registerConnections();

    this.registerCallbacks();
    this.findingsConfiguration();
    this.areFindings = AreFindingsEnum;
  }

  private registerConnections() {
    this.registerConnectionCallback(3, TechnologyUiModel, (technologyModel: TechnologyUiModel) => {
      this.technologyModel = technologyModel ? technologyModel : new TechnologyUiModel();
    });
  }

  private registerCallbacks() {
    this.registerGetCallback((model: MaleSexUiModel) => {
      this.findingHandler.reinitializeCollection(model.findings);
    });

    this.registerSaveCallback((model: MaleSexUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(model.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  isDynamicPartDisabled(): boolean {
    return this.model.areFindings !== this.areFindings.Yes;
  }

  findingsConfiguration() {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.itemCount = 4;
    this.findingDropdownConfig.autoConfigFindingRRId = 'pel_m_050106';
  }

  descriptionChange(): void {
    this.findingHandler.currentItem.scrotumMassSignalT1wSliderType = 0;
    this.findingHandler.currentItem.scrotumMassSignalT2wSliderType = 0;
    this.findingHandler.currentItem.signalT1wSliderType = 0;
    this.findingHandler.currentItem.signalT2wSliderType = 0;
    this.findingHandler.currentItem.seminalVesiclesMassSignalT2wSliderType = 0;
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('pelvisMRT.maleGender.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.keys(out).map(e => out[e]);
      }),
      this.translate.stream('pelvisMRT.maleGender.addNewFindings.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      }),
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      }),
      this.translate.stream('pelvisMRT.maleGender.penisDifferentialDiagnosisType.options').subscribe((out: DropdownModel[]) => {
        this.penisDifferentialDiagnosisType = Object.keys(out).map(e => out[e]);
      }),
      this.translate.stream('pelvisMRT.maleGender.scrotumDifferentialDiagnosisType.options').subscribe((out: DropdownModel[]) => {
        this.scrotumDifferentialDiagnosisType = Object.keys(out).map(e => out[e]);
      }),
      this.translate
        .stream('pelvisMRT.maleGender.seminalVesiclesMassDifferentialDiagnosisType.options')
        .subscribe((out: DropdownModel[]) => {
          this.seminalVesiclesMassDifferentialDiagnosisType = Object.keys(out).map(e => out[e]);
        }),
      this.translate.stream('pelvisMRT.maleGender.penisInfektionDifferentialDiagnosisType.options').subscribe((out: DropdownModel[]) => {
        this.penisInfektionDifferentialDiagnosisType = Object.keys(out).map(e => out[e]);
      })
    );
  }
}
