import { Component } from '@angular/core';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { AnamnesisUiModel } from '@models/feetMRT/ui/anamnesis/anamnesis-ui.model';
import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { AnamnesisIndicationFindingUiModel } from '@models/feetMRT/ui/anamnesis/anamnesis-indication-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { AnamnesisIndicationFindingTypeEnum } from '@enums/feetMRT/anamnesis/anamnesis-indication-finding-type.enum';
import { LesionTypeEnum } from '@enums/feetMRT/anamnesis/lesion-type.enum';
import { MonthYearModel } from '@models/shared/month-year/month-year.model';

@Component({
  selector: 'rr-feet-mrt-anamnesis',
  templateUrl: './anamnesis.component.html',
  styleUrls: ['./anamnesis.component.scss']
})
export class AnamnesisComponent extends SlideBaseComponent<AnamnesisUiModel> {
  findingHandler: DynamicComponentHandler<AnamnesisIndicationFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;
  anamnesisIndicationFindingType: typeof AnamnesisIndicationFindingTypeEnum;
  lesionType: typeof LesionTypeEnum;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, AnamnesisUiModel, commonServices);

    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, AnamnesisIndicationFindingUiModel);
    this.initializeDynamicDropdownConfig();

    this.registerCallback();

    this.anamnesisIndicationFindingType = AnamnesisIndicationFindingTypeEnum;
    this.lesionType = LesionTypeEnum;
  }

  private initializeDynamicDropdownConfig(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.itemCount = 8;
    this.findingDropdownConfig.findingColumnIds.buttonRRId = 'anc_m_020106';
    this.findingDropdownConfig.findingColumnIds.findingRRId = 'anc_m_020105';
  }

  private registerCallback(): void {
    this.registerGetCallback((model: AnamnesisUiModel) => {
      this.findingHandler.reinitializeCollection(model.findings);
    });

    this.registerSaveCallback((model: AnamnesisUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(model.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('feetMRT.anamnesis.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.keys(out).map(e => out[e]);
      }),
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      }),
      this.translate.stream('feetMRT.anamnesis.addIndication.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      })
    );
  }

  resetDate(dateModel: string) {
    this.model[dateModel] = new MonthYearModel();
  }
}
