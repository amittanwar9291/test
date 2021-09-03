import { Component } from '@angular/core';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { MeningesUiModel } from '@models/headCT/ui/meninges/meninges-ui-model';
import { ControlContainer, NgForm } from '@angular/forms';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { MeningesFindingTypeEnum } from '@enums/headCT/meninges/meninges-finding-type.enum';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { MeningesFindingUiModel } from '@models/headCT/ui/meninges/meninges-finding-ui.model';
import { TechnologyUiModel } from '@models/headCT/ui/technology/technology-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { nameof } from 'ts-simple-nameof';
import { MeningesHelperService } from './meninges-helper.service';
import { MeningesValidationModel } from '@models/headCT/ui/meninges/meninges-validation.model';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';

@Component({
  selector: 'rr-meninges',
  templateUrl: './meninges.component.html',
  styleUrls: ['./meninges.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MeningesComponent extends SlideBaseComponent<MeningesUiModel> {
  areFindingsEnum = AreFindingsEnum;
  meningesFindingTypeEnum = MeningesFindingTypeEnum;

  findingHandler: DynamicComponentHandler<MeningesFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    private meningesHelperService: MeningesHelperService
  ) {
    super(navService, slideRequestService, changeDetectionService, MeningesUiModel, commonServices, MeningesValidationModel);

    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, MeningesFindingUiModel);
    this.initDynamicComponentConfig();
    this.registerCallbacks();
    this.registerConnection();
  }

  private registerCallbacks(): void {
    this.registerGetCallback((modelOut: MeningesUiModel) => {
      this.findingHandler.reinitializeCollection(modelOut.findings);
    });

    this.registerSaveCallback((modelOut: MeningesUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(modelOut.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  private registerConnection(): void {
    this.registerConnectionCallback(3, TechnologyUiModel, (technologyModel: TechnologyUiModel) => {
      this.meningesHelperService.isCMYes.next(technologyModel.cmReinforcedType === SimpleAnswerEnum.Yes);
    });
  }

  isDropdownDisabled(): boolean {
    return this.model.areFindings !== this.areFindingsEnum.Yes;
  }

  isFindingType(type: MeningesFindingTypeEnum): boolean {
    return this.findingHandler.currentItem.findingType === type;
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => (this.findingDropdownConfig.placeholder = out)),
      this.translate
        .stream('headCT.meninges.findingTypes.options')
        .subscribe((out: DropdownModel[]) => (this.findingDropdownConfig.dropdownValues = out)),
      this.translate.stream('headCT.meninges.addNewFinding.value').subscribe((out: string) => (this.findingDropdownConfig.buttonText = out))
    );
  }

  initDynamicComponentConfig(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.findingType = nameof<MeningesFindingUiModel>(m => m.findingType);
    this.findingDropdownConfig.autoConfigFindingRRId = 'hea_c_050106';
    this.findingDropdownConfig.itemCount = 5;
  }
}
