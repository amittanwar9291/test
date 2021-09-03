import { Component } from '@angular/core';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { SummaryUiModel } from '@models/mammaMX/ui/summary/summary-ui.model';
import { CorrelationUiModel } from '@models/shared/page-correlation/ui/correlation-ui.model';
import { MammographyParenchymaAnatomyUiModel } from '@models/mammaMX/ui/mammography-parenchyma-anatomy/mammography-parenchyma-anatomy-ui.model';
import { FindingCorrelationOptionModel } from '@models/shared/page-correlation/ui/finding-correlation-option.model';

import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';

import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

import { ParenchymaDensityBreastCompositionType } from '@enums/mammaMX/mammography-parenchyma-anatomy';
import { ProcedureFindingType, BiopsyLocalizationType, BiopsyModalityType, CourseOfDiseaseType } from '@enums/mammaMX/summary';

import { values } from 'lodash';
import { Guid } from '@models/shared/guid/guid';

import { MammographyFindingUiModel } from '@models/mammaMX/ui/mammography-finding/mammography-finding-ui.model';
import { UltrasoundFindingUiModel } from '@models/mammaMX/ui/ultrasound-finding/ultrasound-finding-ui.model';
import { SummaryFindingCorrelationOptionUiModel } from '@models/shared/page-correlation/ui/summary-finding-correlation-option-ui.model';

@Component({
  selector: 'rr-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent extends SlideBaseComponent<SummaryUiModel> {
  findingRelationsHandler: DynamicComponentHandler<CorrelationUiModel>;

  procedureFindingOptions: DropdownModel[];
  ultrasoundDateOptions: DropdownModel[];
  ultrasoundStrategyOptions: DropdownModel[];
  procedureFindingTranslationBits: DropdownModel[];
  mammographyDateOptions: DropdownModel[];
  mammographyStrategyOptions: DropdownModel[];
  page5AllFindings: DropdownModel[];
  page7AllFindings: DropdownModel[];
  noCorrelationTranslation: FindingCorrelationOptionModel[];
  incomingCorrelationFindings = new SummaryFindingCorrelationOptionUiModel();

  courseOfDiseaseType: typeof CourseOfDiseaseType;
  procedureFindingType: typeof ProcedureFindingType;
  biopsyLocalizationType: typeof BiopsyLocalizationType;
  biopsyModalityType: typeof BiopsyModalityType;

  shouldTriggerSave = false;

  areFindingsType = AreFindingsEnum;
  areMammographyFindings: boolean;
  areUltrasoundFindings: boolean;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, SummaryUiModel, commonServices);

    this.findingRelationsHandler = new DynamicComponentHandler(this.logger, this.model.findingRelations, CorrelationUiModel, true);

    this.courseOfDiseaseType = CourseOfDiseaseType;
    this.procedureFindingType = ProcedureFindingType;
    this.biopsyLocalizationType = BiopsyLocalizationType;
    this.biopsyModalityType = BiopsyModalityType;

    this.registerCallbacks();
    this.registerPageConnections();
  }

  private registerCallbacks() {
    this.registerGetCallback((modelOut: SummaryUiModel) => {
      if (Guid.isEmpty(modelOut.id)) {
        this.shouldTriggerSave = true;
      }
      this.findingRelationsHandler.reinitializeCollection(modelOut.findingRelations);
    });

    this.registerSaveCallback((outModel: SummaryUiModel) => {
      this.findingRelationsHandler.collectionPostSaveCleanup(outModel.findingRelations);
    });

    this.registerPreSaveCallback(() => {
      this.findingRelationsHandler.collectionPreSaveCleanup();
    });
  }

  private registerPageConnections(): void {
    this.registerConnectionCallback(4, MammographyParenchymaAnatomyUiModel, (model: MammographyParenchymaAnatomyUiModel) => {
      this.model.parenchymaDensityRight = this.returnParenchymaDensityFirstLetter(model.rightParenchymaDensityBreastCompositionType);
      this.model.parenchymaDensityLeft = this.returnParenchymaDensityFirstLetter(model.leftParenchymaDensityBreastCompositionType);
    });

    this.registerConnectionCallback(5, MammographyFindingUiModel, (model: MammographyFindingUiModel) => {
      this.areMammographyFindings = model.areFindings === this.areFindingsType.Yes;
      this.incomingCorrelationFindings.leftFindings = model.findings.map(item => {
        return {
          findingType: item.findingType,
          number: item.number,
          id: item.id,
          value: null,
          label: null
        };
      });
    });

    this.registerConnectionCallback(7, UltrasoundFindingUiModel, (model: UltrasoundFindingUiModel) => {
      this.areUltrasoundFindings = model.areFindings === this.areFindingsType.Yes;
      this.incomingCorrelationFindings.rightFindings = model.findings.map(item => {
        return {
          findingType: item.findingType,
          number: item.number,
          id: item.id,
          value: null,
          label: null
        };
      });
    });
  }

  returnParenchymaDensityFirstLetter(value: ParenchymaDensityBreastCompositionType): string {
    switch (value) {
      case ParenchymaDensityBreastCompositionType.EntirelyFatty:
        return 'a';
      case ParenchymaDensityBreastCompositionType.ScatteredAreasOfFibroglandularDensity:
        return 'b';
      case ParenchymaDensityBreastCompositionType.HeterogeneouslyDense:
        return 'c';
      case ParenchymaDensityBreastCompositionType.ExtremelyDense:
        return 'd';
      default:
        return '-';
    }
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('mammaMX.summary.procedureFindingTranslationBits').subscribe((out: DropdownModel[]) => {
        this.procedureFindingTranslationBits = out;
      }),
      this.translate.stream('mammaMX.summary.procedureFindingOptions.options').subscribe((out: DropdownModel[]) => {
        this.procedureFindingOptions = values(out);
      }),
      this.translate.stream('mammaMX.summary.ultrasoundDateOptions.options').subscribe((out: DropdownModel[]) => {
        this.ultrasoundDateOptions = values(out);
      }),
      this.translate.stream('mammaMX.summary.ultrasoundStrategyOptions.options').subscribe((out: DropdownModel[]) => {
        this.ultrasoundStrategyOptions = values(out);
      }),
      this.translate.stream('mammaMX.summary.mammographyDateOptions.options').subscribe((out: DropdownModel[]) => {
        this.mammographyDateOptions = values(out);
      }),
      this.translate.stream('mammaMX.summary.mammographyStrategyOptions.options').subscribe((out: DropdownModel[]) => {
        this.mammographyStrategyOptions = values(out);
      }),
      this.translate.stream('mammaMX.mammographyFinding.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.page5AllFindings = values(out);
      }),
      this.translate.stream('mammaMX.ultrasoundFinding.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.page7AllFindings = values(out);
      }),
      this.translate.stream('mammaMX.summary.noSonographicCorrelation').subscribe((out: DropdownModel[]) => {
        this.noCorrelationTranslation = values(out);
      })
    );
  }

  resetProcedureColumn(): void {
    this.model.biopsyLocalizationType = BiopsyLocalizationType.None;
    this.model.biopsyModalityType = BiopsyModalityType.None;
    this.model.isStereotactic = false;
    this.model.isVacuumPunchBiopsy = false;

    this.model.isUltrasound = false;
    this.model.ultrasoundDate = 'None';
    this.model.ultrasoundStrategy = 'None';
    this.model.isMammography = false;
    this.model.mammographyDate = 'None';
    this.model.mammographyStrategy = 'None';
    this.model.isMRI = false;
    this.model.mriDate = 'None';
  }

  clearUltrasoundStrategy(): void {
    this.model.ultrasoundStrategy = 'None';
  }

  clearMammographyStrategy(): void {
    this.model.mammographyStrategy = 'None';
  }

  getCustomLabel(key: number): DropdownModel {
    return this.procedureFindingTranslationBits[key];
  }
}
