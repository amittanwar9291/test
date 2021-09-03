import { Component } from '@angular/core';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { AbdomenUiModel } from '@models/angiographyMRT/ui/abdomen/abdomen-ui.model';
import { NavigationService } from '@services/shared';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { AbdomenFindingUiModel } from '@models/angiographyMRT/ui/abdomen/abdomen-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { AbdomenValidationModel } from '@models/angiographyMRT/ui/abdomen/abdomen-validation.model';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { FindingType } from '@enums/angiographyMRT/abdomen/finding-type.enum';

@Component({
  selector: 'rr-abdomen',
  templateUrl: './abdomen.component.html',
  styleUrls: ['./abdomen.component.scss']
})
export class AbdomenComponent extends SlideBaseComponent<AbdomenUiModel> {
  findingHandler: DynamicComponentHandler<AbdomenFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, AbdomenUiModel, commonServices, AbdomenValidationModel);

    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, AbdomenFindingUiModel);
    this.initDynamicComponentConfig();
    this.registerCallback();
  }

  private registerCallback() {
    this.registerSaveCallback((modelOut: AbdomenUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(modelOut.findings);
    });

    this.registerGetCallback((modelOut: AbdomenUiModel) => {
      this.findingHandler.reinitializeCollection(modelOut.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('angiographyMRT.abdomen.placeholder').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      })
    );

    this.subscriptions.push(
      this.translate.stream('angiographyMRT.abdomen.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.keys(out).map(e => out[e]);
      })
    );

    this.subscriptions.push(
      this.translate.stream('angiographyMRT.abdomen.addingNewFinding.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      })
    );
    this.subscriptions.push(
      this.translate.stream('angiographyMRT.abdomen.dropdownLabelTranslationsBits').subscribe((out: any) => {
        this.findingDropdownConfig.translationBits = out;
      })
    );
  }

  initDynamicComponentConfig(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.findingType = 'findingType';
    this.findingDropdownConfig.findingColumnIds.findingRRId = 'ang_m_070106';
    this.findingDropdownConfig.findingColumnIds.buttonRRId = 'ang_m_070107';
    this.findingDropdownConfig.itemCount = 9;
  }

  isDropdownDisabled(): boolean {
    return this.model.areFindings !== 'True';
  }

  isFindingType(type: string): boolean {
    return this.findingHandler.currentItem.findingType === type;
  }

  customLabelCalculator(index: number, handler: DynamicComponentHandler<AbdomenFindingUiModel>, translationBits): string {
    let base = '';
    const noneToNull = (element: string) => (element === 'None' ? null : element);
    const currentFinding = handler.collection[index];
    if (currentFinding.findingType !== FindingType.None && translationBits.findingTypes) {
      base = translationBits.findingTypes[currentFinding.findingType];
      if (currentFinding.findingType === FindingType.RenalArtery) {
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
      if (currentFinding.findingType === FindingType.RenalVein) {
        const sideSelected = currentFinding.sideType;
        if (noneToNull(sideSelected)) {
          base = base + ' ' + translationBits[sideSelected].full;
        }
      }
      if (currentFinding.findingType === FindingType.MesentericVessels) {
        const anatomicVariantsOrPathologySelected = currentFinding.anatomicVariantsOrPathologyType;
        if (noneToNull(anatomicVariantsOrPathologySelected)) {
          base = base.substring(0, 12) + '., ' + translationBits.anatomicVariantsOrPathologyTypes[anatomicVariantsOrPathologySelected];
        }
      }
    }
    return base;
  }
}
