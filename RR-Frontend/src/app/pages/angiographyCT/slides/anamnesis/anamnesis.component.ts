import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { Component } from '@angular/core';
import { NavigationService } from '@services/shared/navigation/navigation.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ControlContainer, NgForm } from '@angular/forms';
import { AnamnesisUiModel } from '@models/angiographyCT/ui/anamnesis/anamnesis-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { IndicationFindingUiModel } from '@models/angiographyCT/ui/anamnesis/indication-finding-ui.model';
import { PriorInterventionsFindingUiModel } from '@models/angiographyCT/ui/anamnesis/prior-interventions-finding-ui.model';
import { nameof } from 'ts-simple-nameof';
import { AnamnesisValidationModel } from '@models/angiographyCT/ui/anamnesis/anamnesis-validation.model';

@Component({
  selector: 'rr-anamnesis',
  templateUrl: './anamnesis.component.html',
  styleUrls: ['./anamnesis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AnamnesisComponent extends SlideBaseComponent<AnamnesisUiModel> {
  indicationFindingHandler: DynamicComponentHandler<IndicationFindingUiModel>;
  priorIntervestionFindingHandler: DynamicComponentHandler<PriorInterventionsFindingUiModel>;
  indicationFindingDropdownConfig: FindingColumnConfig;
  priorIntervestionFindingDropdownConfig: FindingColumnConfig;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, AnamnesisUiModel, commonServices, AnamnesisValidationModel);
    this.indicationFindingHandler = new DynamicComponentHandler<IndicationFindingUiModel>(
      this.logger,
      this.model.indicationFindings,
      IndicationFindingUiModel
    );
    this.priorIntervestionFindingHandler = new DynamicComponentHandler<PriorInterventionsFindingUiModel>(
      this.logger,
      this.model.priorInterventionsFindings,
      PriorInterventionsFindingUiModel
    );
    this.initializeDynamicDropdownConfig();
    this.registerCallbacks();
  }

  private registerCallbacks() {
    this.registerGetCallback((outModel: AnamnesisUiModel) => {
      this.indicationFindingHandler.reinitializeCollection(outModel.indicationFindings);
      this.priorIntervestionFindingHandler.reinitializeCollection(outModel.priorInterventionsFindings);
    });
    this.registerSaveCallback((outModel: AnamnesisUiModel) => {
      this.indicationFindingHandler.collectionPostSaveCleanup(outModel.indicationFindings);
      this.priorIntervestionFindingHandler.collectionPostSaveCleanup(outModel.priorInterventionsFindings);
    });
    this.registerPreSaveCallback(() => {
      this.indicationFindingHandler.collectionPreSaveCleanup();
      this.priorIntervestionFindingHandler.collectionPreSaveCleanup();
    });
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.indicationFindingDropdownConfig.placeholder = out;
        this.priorIntervestionFindingDropdownConfig.placeholder = out;
      })
    );
    this.subscriptions.push(
      this.translate.stream('angiographyCT.anamnesis.findingTypes1.options').subscribe((out: DropdownModel[]) => {
        this.indicationFindingDropdownConfig.dropdownValues = out;
      }),
      this.translate.stream('angiographyCT.anamnesis.findingTypes2.options').subscribe((out: DropdownModel[]) => {
        this.priorIntervestionFindingDropdownConfig.dropdownValues = out;
      })
    );
    this.subscriptions.push(
      this.translate.stream('angiographyCT.anamnesis.addAnamnesis.value').subscribe((out: string) => {
        this.indicationFindingDropdownConfig.buttonText = out;
      }),
      this.translate.stream('angiographyCT.anamnesis.addIntervention.value').subscribe((out: string) => {
        this.priorIntervestionFindingDropdownConfig.buttonText = out;
      })
    );
  }

  private initializeDynamicDropdownConfig(): void {
    this.indicationFindingDropdownConfig = new FindingColumnConfig();
    this.indicationFindingDropdownConfig.findingType = nameof<IndicationFindingUiModel>(m => m.indicationFindingType);
    this.indicationFindingDropdownConfig.findingColumnIds.findingRRId = 'ang_c_020105';
    this.indicationFindingDropdownConfig.findingColumnIds.buttonRRId = 'ang_c_020106';
    this.indicationFindingDropdownConfig.itemCount = 8;

    this.priorIntervestionFindingDropdownConfig = new FindingColumnConfig();
    this.priorIntervestionFindingDropdownConfig.findingType = nameof<PriorInterventionsFindingUiModel>(
      m => m.priorInterventionsFindingType
    );
    this.priorIntervestionFindingDropdownConfig.findingColumnIds.findingRRId = 'ang_c_020109';
    this.priorIntervestionFindingDropdownConfig.findingColumnIds.buttonRRId = 'ang_c_020110';
    this.priorIntervestionFindingDropdownConfig.itemCount = 8;
  }
}
