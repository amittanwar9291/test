import { Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { SacroiliacJointUiModel } from '@models/spineCT';
import { SacroiliacJointFindingUiModel } from '@models/spineCT/ui/sacroiliac-joint/sacroiliac-joint-finding-ui.model';

import { NavigationService } from '@services/shared';

import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { SacroiliacJointFindingTypeEnum } from '@enums/spineCT/sacroiliac-joint/sacroiliac-joint-finding-type.enum';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { SacroiliacJointValidationModel } from '@models/spineCT/ui/sacroiliac-joint/sacroiliac-joint-validation.model';

@Component({
  selector: 'rr-sacroiliac-joint',
  templateUrl: './sacroiliac-joint.component.html',
  styleUrls: ['./sacroiliac-joint.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SacroiliacJointComponent extends SlideBaseComponent<SacroiliacJointUiModel> {
  findingHandler: DynamicComponentHandler<SacroiliacJointFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;
  degenerationDifferentialDiagnosisDropdown: DropdownModel[];
  inflammationDifferentialDiagnosisDropdown: DropdownModel[];

  sacroiliacJointFindingTypeEnum = SacroiliacJointFindingTypeEnum;
  areFindingsEnum = AreFindingsEnum;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, SacroiliacJointUiModel, commonServices, SacroiliacJointValidationModel);

    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, SacroiliacJointFindingUiModel);
    this.registerCallbacks();
    this.findingsConfiguration();
  }

  private registerCallbacks() {
    this.registerGetCallback((model: SacroiliacJointUiModel) => {
      this.findingHandler.reinitializeCollection(model.findings);
    });

    this.registerSaveCallback((model: SacroiliacJointUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(model.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  findingsConfiguration() {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.itemCount = 9;
    this.findingDropdownConfig.findingColumnIds.findingRRId = 'spi_c_090106';
    this.findingDropdownConfig.findingColumnIds.buttonRRId = 'spi_c_090107';
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('spineCT.sacroiliacJoint.findingTypes.options').subscribe(out => {
        this.findingDropdownConfig.dropdownValues = out;
      }),
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      }),
      this.translate.stream('spineCT.sacroiliacJoint.addNewFindings.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      }),
      this.translate
        .stream('spineCT.sacroiliacJoint.degenerationDifferentialDiagnosisOptions.options')
        .subscribe((out: DropdownModel[]) => {
          this.degenerationDifferentialDiagnosisDropdown = out;
        }),
      this.translate
        .stream('spineCT.sacroiliacJoint.inflammationDifferentialDiagnosisOptions.options')
        .subscribe((out: DropdownModel[]) => {
          this.inflammationDifferentialDiagnosisDropdown = out;
        })
    );
  }

  differentialDiagnosisDropdown(): DropdownModel[] {
    if (this.findingHandler.currentItem.findingType === this.sacroiliacJointFindingTypeEnum.Degeneration) {
      return this.degenerationDifferentialDiagnosisDropdown;
    } else {
      return this.inflammationDifferentialDiagnosisDropdown;
    }
  }
}
