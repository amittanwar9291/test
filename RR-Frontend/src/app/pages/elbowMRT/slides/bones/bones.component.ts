import { DifferentialDiagnosisPresetService } from '@abstractions/abstract-classes/differential-diagnosis-preset-service';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { BonesFindingTypeEnum } from '@enums/elbowMRT/bones';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { BonesFindingUiModel } from '@models/elbowMRT/ui/bones/bones-finding-ui.model';
import { BonesUiModel } from '@models/elbowMRT/ui/bones/bones-ui.model';
import { BonesValidationModel } from '@models/elbowMRT/ui/bones/bones-validation.model';
import { LocalizationUiModel } from '@models/elbowMRT/ui/localization/localization-ui.model';
import { TechnologyUiModel } from '@models/elbowMRT/ui/technology/technology-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { NavigationService } from '@services/shared';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { BonesPresetsHttpService } from '@services/elbowMRT/http/bones/bones-presets-http.service';
import { BonesHelperService } from './bones-helper.service';

@Component({
  selector: 'rr-elbow-mrt-bones',
  templateUrl: './bones.component.html',
  styleUrls: ['./bones.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
  providers: [
    {
      provide: DifferentialDiagnosisPresetService,
      useClass: BonesPresetsHttpService
    }
  ]
})
export class BonesComponent extends SlideBaseComponent<BonesUiModel> {
  fractureOptions: DropdownModel[];
  findingHandler: DynamicComponentHandler<BonesFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;

  descriptionTypes: string[];

  areFindingsEnum = AreFindingsEnum;
  bonesFindingTypeEnum = BonesFindingTypeEnum;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    private bonesHelperService: BonesHelperService
  ) {
    super(navService, slideRequestService, changeDetectionService, BonesUiModel, commonServices, BonesValidationModel);

    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, BonesFindingUiModel);
    this.initializeDynamicDropdownConfig();

    this.registerCallback();
    this.registerConnection();

    this.descriptionTypes = [this.bonesFindingTypeEnum.Mass];
  }

  private registerCallback() {
    this.registerSaveCallback((modelOut: BonesUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(modelOut.findings);
    });

    this.registerGetCallback((modelOut: BonesUiModel) => {
      this.findingHandler.reinitializeCollection(modelOut.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  private registerConnection() {
    this.registerConnectionCallback(1, LocalizationUiModel, (localizationUiModel: LocalizationUiModel) => {
      this.bonesHelperService.isLessThan18YearsOld.next(localizationUiModel.patientInformation.age < 18);
    });

    this.registerConnectionCallback(3, TechnologyUiModel, (technologyModel: TechnologyUiModel) => {
      this.bonesHelperService.isCMYes.next(technologyModel.cmReinforcedType === SimpleAnswerEnum.Yes);
    });
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('elbowMRT.bones.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.keys(out).map(e => out[e]);
      })
    );

    this.subscriptions.push(
      this.translate.stream('elbowMRT.bones.placeholder').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      })
    );

    this.subscriptions.push(
      this.translate
        .stream('elbowMRT.bones.translationBits')
        .subscribe((out: any) => Object.assign(this.findingDropdownConfig.translationBits, out))
    );

    this.subscriptions.push(
      this.translate.stream('elbowMRT.bones.addNewFindings.value').subscribe((out: string) => {
        if (this.findingDropdownConfig) {
          this.findingDropdownConfig.buttonText = out;
        }
      })
    );

    this.subscriptions.push(
      this.translate.stream('bones.fractureOptions').subscribe((out: DropdownModel[]) => {
        this.fractureOptions = Object.keys(out).map(e => out[e]);
      })
    );
  }

  initializeDynamicDropdownConfig() {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.itemCount = 5;
    this.findingDropdownConfig.autoConfigFindingRRId = 'elb_m_040106';
  }

  isFindingWithTabs(): boolean {
    return this.findingHandler.currentItem.findingType === BonesFindingTypeEnum.Mass;
  }

  isDynamicPartDisabled(): boolean {
    return this.model.areFindings !== 'True';
  }

  isCurrentItem(item: BonesFindingTypeEnum): boolean {
    return this.findingHandler.currentItem.findingType === item;
  }
}
