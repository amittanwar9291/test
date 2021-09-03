import { Component } from '@angular/core';

import { AppConfig } from 'app/app.config';

import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { FileService } from '@services/shared/file-service/file.service';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { FlapsUiModel } from '@models/cardioMRT/ui/flaps/flaps-ui.model';
import { HeartValvesFindingUiModel } from '@models/cardioMRT/ui/flaps/heart-valves-finding-ui.model';
import { CongenitalHeartDiseasesFindingUiModel } from '@models/cardioMRT/ui/flaps/congenital-heart-diseases-finding-ui.model';
import { FlapsValidationModel } from '@models/cardioMRT/ui/flaps/flaps-validation.model';
import { TechnologyUiModel } from '@models/cardioMRT/ui/technology/technology-ui.model';
import { MeasurementUiModel } from '@models/cardioMRT/ui/flaps/measurement-ui.model';

import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { LVOTObstructionType } from '@enums/cardioMRT/flaps';
import { FindingBase } from '@models/shared/finding/finding.base';

import { omit } from 'lodash';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-flaps',
  templateUrl: './flaps.component.html',
  styleUrls: ['./flaps.component.scss']
})
export class FlapsComponent extends SlideBaseComponent<FlapsUiModel> {
  heartValveFindingsHandler: DynamicComponentHandler<HeartValvesFindingUiModel>;
  congenitalHeartDiseasesFindingsHandler: DynamicComponentHandler<CongenitalHeartDiseasesFindingUiModel>;
  activeTabIndex = 0;
  measuredValuesDisabled = false;

  lvotObstructionType: typeof LVOTObstructionType;

  areFindings: typeof AreFindingsEnum;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    private fileService: FileService
  ) {
    super(navService, slideRequestService, changeDetectionService, FlapsUiModel, commonServices, FlapsValidationModel);

    this.heartValveFindingsHandler = new DynamicComponentHandler<HeartValvesFindingUiModel>(
      this.logger,
      this.model.heartValves,
      HeartValvesFindingUiModel
    );

    this.congenitalHeartDiseasesFindingsHandler = new DynamicComponentHandler<CongenitalHeartDiseasesFindingUiModel>(
      this.logger,
      this.model.congenitalHeartDiseases,
      CongenitalHeartDiseasesFindingUiModel
    );

    this.registerCallbacks();
    this.registerConnection();

    this.areFindings = AreFindingsEnum;

    this.lvotObstructionType = LVOTObstructionType;
  }

  private registerCallbacks(): void {
    this.registerGetCallback((outModel: FlapsUiModel) => {
      this.heartValveFindingsHandler.reinitializeCollection(outModel.heartValves);
      this.congenitalHeartDiseasesFindingsHandler.reinitializeCollection(outModel.congenitalHeartDiseases);
    });

    this.registerSaveCallback((outModel: FlapsUiModel) => {
      this.heartValveFindingsHandler.collectionPostSaveCleanup(outModel.heartValves);
      this.congenitalHeartDiseasesFindingsHandler.collectionPostSaveCleanup(outModel.congenitalHeartDiseases);
    });

    this.registerPreSaveCallback(() => {
      this.heartValveFindingsHandler.collectionPreSaveCleanup();
      this.congenitalHeartDiseasesFindingsHandler.collectionPreSaveCleanup();
    });
  }

  private registerConnection() {
    this.registerConnectionCallback(3, TechnologyUiModel, (model: TechnologyUiModel) => {
      const isFlowMeasurementSelectedInAnySequenceDropdown = model.sequences.some(
        obj => obj.examinationTechniqueType === 'FlowMeasurement'
      );

      this.measuredValuesDisabled = !isFlowMeasurementSelectedInAnySequenceDropdown;

      if (isFlowMeasurementSelectedInAnySequenceDropdown) {
        this.activeTabIndex = 0;
      } else {
        this.activeTabIndex = 1;
      }
    });
  }

  removeTabHeadersHighlighting() {
    this.heartValveFindingsHandler.collection.forEach((item: FindingBase) =>
      this.validationHelperService.removeAllErrorsInFinding(item.validationId)
    );
    this.congenitalHeartDiseasesFindingsHandler.collection.forEach((item: FindingBase) =>
      this.validationHelperService.removeAllErrorsInFinding(item.validationId)
    );
  }

  resetMeasuredValuesTab(): void {
    this.heartValveFindingsHandler.deleteAllElements();
    this.congenitalHeartDiseasesFindingsHandler.deleteAllElements();

    const measureUploadedImagesIds = this.fileService.getUploadedFileIds([
      this.model.aortaAscendensMeasures.flowCurveImage,
      this.model.aortaAscendensMeasures.pcMeasurementImage,
      this.model.pulmonaryArteryMeasures.flowCurveImage,
      this.model.pulmonaryArteryMeasures.pcMeasurementImage,
      this.model.mitralValveMeasures.flowCurveImage,
      this.model.mitralValveMeasures.pcMeasurementImage
    ]);

    this.fileService.deleteMultiple(measureUploadedImagesIds, AppConfig.settings.servicesUrls.cardioMRT.flaps.fileUpload).finally(() => {
      // aortaAscendensMeasures
      this.model.isAortaAscendens = false;
      this.model.aortaAscendensMeasures = Object.assign(
        this.model.aortaAscendensMeasures,
        omit(
          new MeasurementUiModel(),
          nameof<MeasurementUiModel>(m => m.id)
        )
      );

      // pulmonaryArteryMeasures
      this.model.isPulmonaryArtery = false;
      this.model.pulmonaryArteryMeasures = Object.assign(
        this.model.pulmonaryArteryMeasures,
        omit(
          new MeasurementUiModel(),
          nameof<MeasurementUiModel>(m => m.id)
        )
      );

      // mitralValveMeasures
      this.model.isMitralValve = false;
      this.model.mitralValveMeasures = Object.assign(
        this.model.mitralValveMeasures,
        omit(
          new MeasurementUiModel(),
          nameof<MeasurementUiModel>(m => m.id)
        )
      );

      this.model.isRVOTObstruction = false;
      this.model.isLVOTObstruction = false;
      this.model.lvotObstructionType = LVOTObstructionType.None;
    });
  }
}
