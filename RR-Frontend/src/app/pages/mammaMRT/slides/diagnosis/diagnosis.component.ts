import { Component } from '@angular/core';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { DiagnosisFindingTypeEnum } from '@enums/mammaMRT/diagnosis/diagnosis-finding-type.enum';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';

import { DiagnosisUiModel } from '@models/mammaMRT/ui/diagnosis/diagnosis-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { DiagnosisFindingUiModel } from '@models/mammaMRT/ui/diagnosis/diagnosis-finding-ui.model';
import { DiagnosisDescriptionGroupedUiModel } from '@models/mammaMRT/ui/diagnosis/diagnosis-description-grouped-ui.model';
import { DiagnosisValidationModel } from '@models/mammaMRT/ui/diagnosis/diagnosis-validation.model';
import { TechnologyUiModel } from '@models/mammaMRT/ui/technology/technology-ui.model';

import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';

import { NavigationService } from '@services/shared/navigation/navigation.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';

@Component({
  selector: 'rr-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.scss']
})
export class DiagnosisComponent extends SlideBaseComponent<DiagnosisUiModel> {
  dynamicConfig: FindingColumnConfig;
  findingHandler: DynamicComponentHandler<DiagnosisFindingUiModel>;
  findingTypes: DropdownModel[];
  enhancementsList: DropdownModel[];

  cmEnchancementApplied = SimpleAnswerEnum.Yes;

  differentialDiagnosisOptions: DiagnosisDescriptionGroupedUiModel[];
  differentialDiagnosisRestrictedOptions: DiagnosisDescriptionGroupedUiModel[];

  descriptionType: typeof DescriptionTypeEnum;
  findingType: typeof DiagnosisFindingTypeEnum;
  areFindingsType: typeof AreFindingsEnum;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, DiagnosisUiModel, commonServices, DiagnosisValidationModel);
    this.prepareConfiguration();
    this.findingHandler = new DynamicComponentHandler<DiagnosisFindingUiModel>(this.logger, this.model.findings, DiagnosisFindingUiModel);

    this.registerCallbacks();

    this.descriptionType = DescriptionTypeEnum;
    this.findingType = DiagnosisFindingTypeEnum;
    this.areFindingsType = AreFindingsEnum;

    this.registerConnectionCallback(3, TechnologyUiModel, (modelTechnology: TechnologyUiModel) => {
      this.cmEnchancementApplied = modelTechnology.cmReinforcedType;
      this.removeDisabledFindings();
    });
  }

  private registerCallbacks() {
    this.registerGetCallback((modelOut: DiagnosisUiModel) => {
      this.findingHandler.reinitializeCollection(modelOut.findings);
    });

    this.registerSaveCallback((modelOut: DiagnosisUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(modelOut.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  private removeDisabledFindings(): void {
    if (this.cmEnchancementApplied !== SimpleAnswerEnum.Yes) {
      const isNonSpatialEnhancement = (val: DropdownModel): boolean => val.value === DiagnosisFindingTypeEnum.NonSpatialEnhancement;
      const indexOfNonSpatialEnhancement = this.dynamicConfig.dropdownValues.findIndex(isNonSpatialEnhancement);

      if (indexOfNonSpatialEnhancement !== -1) {
        this.dynamicConfig.dropdownValues.splice(indexOfNonSpatialEnhancement, 1);
      }
    }
  }

  getCustomLabel(
    index: number,
    findingHandler: DynamicComponentHandler<DiagnosisFindingUiModel>,
    translationBits,
    findingTypes: DropdownModel[]
  ): string {
    const finding = findingHandler.collection[index];
    const diagnosisModel = finding.descriptionType === DescriptionTypeEnum.IKnow ? finding.diagnosisType : finding.additionalDiagnosis1Type;

    if (finding.findingType === DiagnosisFindingTypeEnum.FocalPoint) {
      const originalLabel = findingTypes.find(item => item.value === finding.findingType)?.label;
      if (originalLabel && diagnosisModel !== 'None') {
        return originalLabel + ' / ' + translationBits[diagnosisModel];
      }
    }
    return;
  }

  private prepareConfiguration(): void {
    this.dynamicConfig = new FindingColumnConfig();
    this.dynamicConfig.itemCount = 5;
    const columnIds = this.dynamicConfig.findingColumnIds;
    columnIds.findingRRId = 'mam_m_060106';
    columnIds.iDescribeLabelRRId = 'mam_m_060107';
    columnIds.iKnowLabelRRId = 'mam_m_060108';
    columnIds.iDescribeRadioRRId = 'mam_m_060109';
    columnIds.iKnowRadioRRId = 'mam_m_0601010';
    columnIds.buttonRRId = 'mam_m_060111';
    this.dynamicConfig.descriptionLabelClass = 'm-t-15';
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('mammaMRT.diagnosis.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.dynamicConfig.dropdownValues = Object.values(out);
        this.removeDisabledFindings();
      }),
      this.translate.stream('mammaMRT.diagnosis.enhancements.options').subscribe((out: DropdownModel[]) => {
        this.enhancementsList = Object.keys(out).map(e => out[e]);
      }),
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.dynamicConfig.placeholder = out;
      }),
      this.translate.stream('mammaMRT.diagnosis.addNewFinding.value').subscribe((out: string) => {
        this.dynamicConfig.buttonText = out;
      }),
      this.translate
        .stream('mammaMRT.diagnosis.differentialDiagnosisOptions.options')
        .subscribe((out: DiagnosisDescriptionGroupedUiModel[]) => {
          this.differentialDiagnosisOptions = out;
          this.dynamicConfig.translationBits = this.createTranslationBits();
        }),
      this.translate
        .stream('mammaMRT.diagnosis.differentialDiagnosisRestrictedOptions.options')
        .subscribe((out: DiagnosisDescriptionGroupedUiModel[]) => {
          this.differentialDiagnosisRestrictedOptions = out;
        })
    );
  }

  private createTranslationBits() {
    const translationBits = {};
    this.differentialDiagnosisOptions.forEach(item => {
      item.items.forEach(el => {
        translationBits[el.value] = el.label;
      });
    });
    return translationBits;
  }
}
