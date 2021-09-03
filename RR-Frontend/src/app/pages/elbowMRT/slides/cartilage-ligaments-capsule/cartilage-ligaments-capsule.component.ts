import { Component } from '@angular/core';

import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';

import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';

import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

import { CartilageLigamentsCapsuleUiModel } from '@models/elbowMRT/ui/cartilage-ligaments-capsule/cartilage-ligaments-capsule-ui.model';
import { CartilageLigamentsCapsuleFindingUiModel } from '@models/elbowMRT/ui/cartilage-ligaments-capsule/cartilage-ligaments-capsule-finding-ui.model';
import { TechnologyUiModel } from '@models/elbowMRT/ui/technology/technology-ui.model';
import { CartilageLigamentsCapsuleValidationModel } from '@models/elbowMRT/ui/cartilage-ligaments-capsule/cartilage-ligaments-capsule-validation.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { CartilagFindingTypeEnum } from '@enums/elbowMRT/cartilage/common/cartilag-finding-type.enum';

@Component({
  selector: 'rr-cartilage-ligaments-capsule',
  templateUrl: './cartilage-ligaments-capsule.component.html',
  styleUrls: ['./cartilage-ligaments-capsule.component.scss']
})
export class CartilageLigamentsCapsuleComponent extends SlideBaseComponent<CartilageLigamentsCapsuleUiModel> {
  findingHandler: DynamicComponentHandler<CartilageLigamentsCapsuleFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;
  isTechnologyCMReinforcedChecked: boolean;
  cartilagFindingTypeEnum = CartilagFindingTypeEnum;

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
      CartilageLigamentsCapsuleUiModel,
      commonServices,
      CartilageLigamentsCapsuleValidationModel
    );

    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, CartilageLigamentsCapsuleFindingUiModel);
    this.initializeDynamicDropdownConfig();

    this.registerCallback();
    this.registerConnection();
  }

  private registerConnection() {
    this.registerConnectionCallback(3, TechnologyUiModel, (technologyModel: TechnologyUiModel) => {
      this.isTechnologyCMReinforcedChecked = technologyModel ? technologyModel.cmReinforcedType === SimpleAnswerEnum.Yes : false;
    });
  }

  private registerCallback() {
    this.registerSaveCallback((outModel: CartilageLigamentsCapsuleUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(outModel.findings);
    });

    this.registerGetCallback((modelOut: CartilageLigamentsCapsuleUiModel) => {
      this.findingHandler.reinitializeCollection(modelOut.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('elbowMRT.cartilage.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.keys(out).map(e => out[e]);
      })
    );

    this.subscriptions.push(
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      })
    );

    this.subscriptions.push(
      this.translate.stream('elbowMRT.cartilage.addNewFindings.value').subscribe((out: string) => {
        if (this.findingDropdownConfig) {
          this.findingDropdownConfig.buttonText = out;
        }
      })
    );
  }

  initializeDynamicDropdownConfig() {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.itemCount = 8;
    this.findingDropdownConfig.findingColumnIds.findingRRId = 'elb_m_050106';
    this.findingDropdownConfig.findingColumnIds.buttonRRId = 'elb_m_050107';
  }

  isDynamicPartDisabled(): boolean {
    return this.model.areFindings !== AreFindingsEnum.Yes;
  }

  isCurrentItem(item: string): boolean {
    return this.findingHandler.currentItem.findingType === item;
  }
}
