import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { Component } from '@angular/core';
import { AbdomenUiModel } from '@models/angiographyCT/ui/abdomen/abdomen-ui.model';
import { NavigationService } from '@services/shared/navigation/navigation.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { AbdomenFindingTypeEnum } from '@enums/angiographyCT/abdomen/abdomen-finding-type.enum';
import { AreFindingsEnum } from '@enums/angiographyCT';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { AbdomenFindingUiModel } from '@models/angiographyCT/ui/abdomen/abdomen-finding-ui.model';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { nameof } from 'ts-simple-nameof';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { AbdomenValidationModel } from '@models/angiographyCT/ui/abdomen/abdomen-validation.model';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { TechnologyUiModel } from '@models/angiographyCT/ui/technology/technology-ui.model';

@Component({
  selector: 'rr-abdomen',
  templateUrl: './abdomen.component.html',
  styleUrls: ['./abdomen.component.scss']
})
export class AbdomenComponent extends SlideBaseComponent<AbdomenUiModel> {
  areFindings = AreFindingsEnum;
  findingType = AbdomenFindingTypeEnum;
  findingHandler: DynamicComponentHandler<AbdomenFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;
  activeTabIndex = 0;
  isCMReinforced: boolean;
  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, AbdomenUiModel, commonServices, AbdomenValidationModel);
    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, AbdomenFindingUiModel);
    this.initDynamicComponentConfig();
    this.registerCallbacks();
    this.registerConnections();
  }
  private registerCallbacks() {
    this.registerGetCallback((modelOut: AbdomenUiModel) => {
      this.findingHandler.reinitializeCollection(modelOut.findings);
    });

    this.registerSaveCallback((modelOut: AbdomenUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(modelOut.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }
  private registerConnections(): void {
    this.registerConnectionCallback(3, TechnologyUiModel, (technologyModel: TechnologyUiModel) => {
      this.isCMReinforced = technologyModel.cmReinforcedType === SimpleAnswerEnum.Yes;
    });
  }
  isDropdownDisabled(): boolean {
    return this.model.areFindings !== this.areFindings.True;
  }
  initDynamicComponentConfig(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.findingType = nameof<AbdomenFindingUiModel>(m => m.findingType);
    this.findingDropdownConfig.findingColumnIds.findingRRId = 'ang_c_080106';
    this.findingDropdownConfig.findingColumnIds.buttonRRId = 'ang_c_080107';
    this.findingDropdownConfig.itemCount = 9;
  }
  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('angiographyCT.abdomen.placeholder').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      })
    );
    this.subscriptions.push(
      this.translate.stream('angiographyCT.abdomen.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = out;
      })
    );
    this.subscriptions.push(
      this.translate.stream('angiographyCT.abdomen.addNewFinding.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      })
    );
    this.subscriptions.push(
      this.translate.stream('angiographyCT.abdomen.dropdownLabelTranslationsBits').subscribe((out: any) => {
        this.findingDropdownConfig.translationBits = out;
      })
    );
  }
  customLabelCalculator(index: number, handler: DynamicComponentHandler<AbdomenFindingUiModel>, translationBits): string {
    let base = '';
    const noneToNull = (element: string) => (element === 'None' ? null : element);
    const currentFinding = handler.collection[index];
    if (currentFinding.findingType !== AbdomenFindingTypeEnum.None && translationBits.findingTypes) {
      base = translationBits.findingTypes[currentFinding.findingType];
      if (currentFinding.findingType === AbdomenFindingTypeEnum.RenalArtery) {
        const sideSelected = currentFinding.sideType;
        const anatomicVariantsOrPathologySelected = currentFinding.anatomicVariantsOrPathologyType;

        if (noneToNull(sideSelected) && !noneToNull(anatomicVariantsOrPathologySelected)) {
          base = base + ' ' + translationBits[sideSelected].full;
        }
        if (!noneToNull(sideSelected) && noneToNull(anatomicVariantsOrPathologySelected)) {
          base = base.substring(0, 9) + '., ' + translationBits.anatomicVariantsOrPathologyTypes[anatomicVariantsOrPathologySelected];
        }
        if (noneToNull(sideSelected) && noneToNull(anatomicVariantsOrPathologySelected)) {
          base =
            base.substring(0, 9) +
            '. ' +
            translationBits[sideSelected].short +
            '., ' +
            translationBits.anatomicVariantsOrPathologyTypes[anatomicVariantsOrPathologySelected];
        }
      }
      if (currentFinding.findingType === AbdomenFindingTypeEnum.RenalVein) {
        const sideSelected = currentFinding.sideType;
        if (noneToNull(sideSelected)) {
          base = base + ' ' + translationBits[sideSelected].full;
        }
      }
      if (currentFinding.findingType === AbdomenFindingTypeEnum.MesentericVessels) {
        const anatomicVariantsOrPathologySelected = currentFinding.anatomicVariantsOrPathologyType;
        if (noneToNull(anatomicVariantsOrPathologySelected)) {
          base = base.substring(0, 12) + '., ' + translationBits.anatomicVariantsOrPathologyTypes[anatomicVariantsOrPathologySelected];
        }
      }
    }
    return base;
  }
}
