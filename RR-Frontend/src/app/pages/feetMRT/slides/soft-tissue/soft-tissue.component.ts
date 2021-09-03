import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { Component } from '@angular/core';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { FindingTypeEnum } from '@enums/feetMRT/soft-tissue/finding-type.enum';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { ComplexLocalizersTypes } from '@models/feetMRT/ui/bones/bones.enum';
import { LocalizationUiModel } from '@models/feetMRT/ui/localization/localization-ui.model';
import { SoftTissueFindingUiModel } from '@models/feetMRT/ui/soft-tissue/soft-tissue-finding-ui.model';
import { SoftTissueUiModel } from '@models/feetMRT/ui/soft-tissue/soft-tissue-ui.model';
import { SoftTissueValidationModel } from '@models/feetMRT/ui/soft-tissue/soft-tissue-validation.model';
import { TechnologyUiModel } from '@models/feetMRT/ui/technology/technology-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { NavigationService } from '@services/shared';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ComplexLocalizerData } from '../bones/bones-helper.service';
import { SoftTissueHelperService } from './soft-tissue-helper.service';
import { IFootBigTendonsInfoIcons } from '@models/feetMRT/ui/localizers/foot-big-tendons-info-icons.interface';
import { SoftTissuePresetHttpService } from '@services/feetMRT/http/soft-tissue/soft-tissue-preset-http.service';
import { DifferentialDiagnosisPresetService } from '@abstractions/abstract-classes/differential-diagnosis-preset-service';

@Component({
  selector: 'rr-soft-tissue',
  templateUrl: './soft-tissue.component.html',
  styleUrls: ['./soft-tissue.component.scss'],
  providers: [
    {
      provide: DifferentialDiagnosisPresetService,
      useClass: SoftTissuePresetHttpService
    }
  ]
})
export class SoftTissueComponent extends SlideBaseComponent<SoftTissueUiModel> {
  findingHandler: DynamicComponentHandler<SoftTissueFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;

  side: 'right' | 'left';
  readonly complexLocalizersTypes = ComplexLocalizersTypes;
  largeLocalizerOpenType: ComplexLocalizerData;

  areFindingsEnum: typeof AreFindingsEnum;
  findingType: typeof FindingTypeEnum;

  footBigTendonsLocalizerInfoIcons: IFootBigTendonsInfoIcons = {
    tendonOfThePosteriorTibialisMuscle: 'anc_m_06_14',
    tendonOfMFlexorDigitorumLongus: 'anc_m_06_14',
    tendonOfMFlexorHallucisLongus: 'anc_m_06_14',
    tendonOfTheAnteriorTibialisMuscle: 'anc_m_06_15'
  };

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    private enumMapper: EnumMapper,
    private softTissueHelperService: SoftTissueHelperService
  ) {
    super(navService, slideRequestService, changeDetectionService, SoftTissueUiModel, commonServices, SoftTissueValidationModel);

    this.findingType = FindingTypeEnum;
    this.areFindingsEnum = AreFindingsEnum;

    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, SoftTissueFindingUiModel);
    this.initializeDynamicDropdownConfig();

    this.subscriptions.push(
      this.softTissueHelperService.largeLocalizerOpen.subscribe((type: ComplexLocalizerData) => (this.largeLocalizerOpenType = type))
    );

    this.registerCallback();
    this.registerConnection();
  }

  private registerCallback() {
    this.registerSaveCallback((modelOut: SoftTissueUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(modelOut.findings);
    });

    this.registerGetCallback((modelOut: SoftTissueUiModel) => {
      this.findingHandler.reinitializeCollection(modelOut.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  private registerConnection() {
    this.registerConnectionCallback(1, LocalizationUiModel, (localizationModel: LocalizationUiModel) => {
      this.side = this.enumMapper.mapToString(localizationModel.localization).toLowerCase() as 'right' | 'left';
      this.softTissueHelperService.localizationSide.next(this.enumMapper.mapToString(localizationModel.localization).toLowerCase());
    });
    this.registerConnectionCallback(3, TechnologyUiModel, (technologyUiModel: TechnologyUiModel) => {
      this.softTissueHelperService.isCMYes.next(technologyUiModel.cmReinforcedType === 'Yes');
      this.softTissueHelperService.isContrastMediumType.next(technologyUiModel.contrastMediumType !== 'None');
    });
  }

  initializeDynamicDropdownConfig() {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.itemCount = 4;
    this.findingDropdownConfig.findingType = 'findingType';
    const columnIds = this.findingDropdownConfig.findingColumnIds;
    columnIds.findingRRId = 'anc_m_060106';
    columnIds.iDescribeLabelRRId = 'anc_m_060118';
    columnIds.iKnowLabelRRId = 'anc_m_060119';
    columnIds.iDescribeRadioRRId = 'anc_m_060120';
    columnIds.iKnowRadioRRId = 'anc_m_060121';
    columnIds.buttonRRId = 'anc_m_060107';
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('feetMRT.softTissue.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.keys(out).map(e => out[e]);
      })
    );

    this.subscriptions.push(
      this.translate.stream('feetMRT.softTissue.placeholder').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      })
    );

    this.subscriptions.push(
      this.translate.stream('feetMRT.softTissue.addNewFindings.value').subscribe((out: string) => {
        if (this.findingDropdownConfig) {
          this.findingDropdownConfig.buttonText = out;
        }
      })
    );
  }

  onLargeLocalizerClose() {
    this.softTissueHelperService.largeLocalizerOpen.next(null);
  }

  complexLocalizerShouldBeOpen(type: ComplexLocalizersTypes): boolean {
    return type === this.largeLocalizerOpenType?.type;
  }

  isDynamicPartDisabled(): boolean {
    return this.model.areFindings !== this.areFindingsEnum.Yes;
  }

  isCurrentItem(item: string): boolean {
    return this.findingHandler.currentItem.findingType === item;
  }

  isViewWithTabs(): boolean {
    return [
      FindingTypeEnum.DiseaseOfTheSynoviaFocalMass,
      FindingTypeEnum.SoftTissueTumor,
      FindingTypeEnum.MuscleLesion,
      FindingTypeEnum.CharcotFoot
    ].includes(this.findingHandler.currentItem.findingType);
  }

  clearSliders() {
    this.findingHandler.currentItem.signalT1w = 0;
    this.findingHandler.currentItem.signalT2w = 0;
  }
}
