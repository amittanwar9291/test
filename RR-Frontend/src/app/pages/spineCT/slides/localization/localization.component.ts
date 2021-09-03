import { Component } from '@angular/core';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';

import {
  AnamnesisUiModel,
  DiscFindingUiModel,
  DiscUiModel,
  LocalizationUiModel,
  ConfigurationUiModel,
  MyelonUiModel,
  SoftTissuesUiModel,
  BonesUiModel,
  BonesFindingUiModel
} from '@models/spineCT';

import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';

import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { SpineCtHelperService } from '@services/spineCT/spine-ct-helper.service';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { LocalizationValidationModel } from '@models/spineCT/ui/localization/localization-validation.model';
import { nameof } from 'ts-simple-nameof';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { findingBaseProperties } from '@models/shared/finding/finding-omitted-properties.const';
import { omit } from 'lodash';
import { DiscFindingTypeEnum } from '@enums/spineCT/disc/disc-finding-type.enum';
import { SpineDirectionalLocation } from '@models/shared/spine/localizers/spine-directional-location.model';
import { SpinalCanalLocation } from '@models/shared/spine/localizers/spinal-canal-location.model';
import { AppConfig } from '../../../../app.config';
import { FileService } from '@services/shared/file-service/file.service';
import { ReferencePictureUiModel } from '@models/shared/reference-picture/reference-picture-ui.model';
import { DetailsInterventionTypeEnum } from '@enums/spineCT/anamnesis/details-intervention-type.enum';
import { PreviousInterventionTypeEnum } from '@enums/spineCT/anamnesis/previous-intervention-type.enum';
import { BonesFindingTypeEnum } from '@enums/spineCT/bones/bones-finding-type.enum';

@Component({
  selector: 'rr-localization',
  templateUrl: './localization.component.html',
  styleUrls: ['./localization.component.scss']
})
export class LocalizationComponent extends SlideBaseComponent<LocalizationUiModel> {
  isLargeLocalizerOpened: boolean;
  spineLocationLogicTypeEnum = SpineLocationLogicTypeEnum;

  permittedLocalizerSelectionChange = false;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    private spineCtHelperService: SpineCtHelperService,
    private enumMapper: EnumMapper,
    private fileService: FileService
  ) {
    super(navService, slideRequestService, changeDetectionService, LocalizationUiModel, commonServices, LocalizationValidationModel);

    this.isLargeLocalizerOpened = false;
    this.registerGetCallback(() => {
      if (this.navService.getReportData()) {
        this.model.patientInformation.age = this.navService.getReportData().patientAge;
      }
    });
    this.addConnection();
  }

  openLargeLocalizer(): void {
    this.isLargeLocalizerOpened = true;
  }

  onLargeLocalizerClosed() {
    if (this.isLargeLocalizerOpened) {
      this.isLargeLocalizerOpened = false;
      this.spineCtHelperService.spineLocalizerPermittedSelection.next(this.model.spineLocation);
      if (this.enumMapper.mapToString(this.model.spineLocation) !== 'None') {
        this.validationHelperService.removeError(nameof<LocalizationUiModel>(m => m.spineLocation));
      }
    }
  }

  setPermittedLocalizerSelectionChangeOnLocalizerChange() {
    this.permittedLocalizerSelectionChange = true;
    this.spineCtHelperService.spineLocalizerPermittedSelection.next(this.model.spineLocation);
  }

  addConnection() {
    // todo add clearing of localizers on other if this page localizer change
    this.addPageConnection(
      2,
      AnamnesisUiModel,
      () => {
        return this.permittedLocalizerSelectionChange;
      },
      (model: AnamnesisUiModel) => {
        model.anamnesisIndications.forEach(item => {
          item.spineLocation = new SpineLocation();
          item.spineLocationBones = new SpineDirectionalLocation();
        });
        model.previousInterventions.forEach(item => {
          item.spineLocation = new SpineLocation();
          item.detailsInterventionType = DetailsInterventionTypeEnum.None;
          if (item.previousInterventionType === PreviousInterventionTypeEnum.Laminectomy) {
            item.isRight = false;
            item.isLeft = false;
          }
        });
      }
    );

    this.addPageConnection(
      4,
      ConfigurationUiModel,
      () => {
        return this.permittedLocalizerSelectionChange;
      },
      (model: ConfigurationUiModel) => {
        model.findings.forEach(item => {
          item.thoracicSpineLocation = new SpineLocation();
          item.lumbarSpineLocation = new SpineLocation();
          item.cervicalSpineLocation = new SpineLocation();
          item.spondylolisthesisLocation = new SpineLocation();
        });
      }
    );

    this.addPageConnection(
      6,
      BonesUiModel,
      () => {
        return this.permittedLocalizerSelectionChange;
      },
      (model: BonesUiModel) => {
        model.findings.forEach((finding: BonesFindingUiModel) => {
          if (finding.findingType === BonesFindingTypeEnum.Fracture) {
            const omittedProperties = [...findingBaseProperties, nameof<BonesFindingUiModel>(p => p.findingType)];
            Object.assign(finding, omit(new BonesFindingUiModel(), omittedProperties));
          }
          finding.spondylodesisSpineLocations = new SpineLocation();
          finding.interventionSpineLocations = new SpineLocation();
          finding.intervertebralDiscReplacementSpineLocations = new SpineLocation();
          finding.vertebraSpineLocations = new SpineLocation();
          finding.spineLocation = new SpineLocation();
        });
      }
    );

    this.addPageConnection(
      7,
      MyelonUiModel,
      () => {
        return this.permittedLocalizerSelectionChange;
      },
      (model: MyelonUiModel) => {
        model.findings.forEach(item => {
          item.spineLocation = new SpineLocation();
          item.localizationTopOrBottomVertebra = new SpineLocation();
          item.spinalCanalLocation = new SpinalCanalLocation();
          item.localizationOfNerveRootDisplacement = new SpineDirectionalLocation();
          item.localizationOfNeuralForaminalWidening = new SpineDirectionalLocation();
          item.differentialDiagnosisAbove1LesionLocations = new SpineLocation();
        });
      }
    );
    this.addPageConnection(
      5,
      DiscUiModel,
      () => {
        return this.permittedLocalizerSelectionChange;
      },
      (model: DiscUiModel) => {
        model.findings.forEach((finding: DiscFindingUiModel) => {
          if (finding.findingType === DiscFindingTypeEnum.BulgingDegeneration) {
            const omittedProperties = findingBaseProperties.concat([
              nameof<DiscFindingUiModel>(m => m.isNarrowingOfTheIntervertebralDisc),
              nameof<DiscFindingUiModel>(m => m.isDiscCalcification),
              nameof<DiscFindingUiModel>(m => m.isBulging),
              nameof<DiscFindingUiModel>(m => m.isVacuumPhenomenon)
            ]);
            Object.assign(finding, omit(new DiscFindingUiModel(), omittedProperties));
          }
          if (finding.findingType === DiscFindingTypeEnum.Protrusion) {
            Object.assign(finding, omit(new DiscFindingUiModel(), findingBaseProperties));
          }
          if (finding.findingType === DiscFindingTypeEnum.Extrusion) {
            Object.assign(finding, omit(new DiscFindingUiModel(), findingBaseProperties));
          }
          if (finding.findingType === DiscFindingTypeEnum.Migration) {
            const omittedProperties = findingBaseProperties.concat([nameof<DiscFindingUiModel>(m => m.directionOfMigrationType)]);
            Object.assign(finding, omit(new DiscFindingUiModel(), omittedProperties));
          }
          if (finding.findingType === DiscFindingTypeEnum.FacetJoints) {
            const omittedProperties = findingBaseProperties.concat([
              nameof<DiscFindingUiModel>(m => m.isOsteoarthritis),
              nameof<DiscFindingUiModel>(m => m.isSpondylolysis),
              nameof<DiscFindingUiModel>(m => m.isLuxation)
            ]);
            Object.assign(finding, omit(new DiscFindingUiModel(), omittedProperties));
          }
          if (finding.findingType === DiscFindingTypeEnum.Spondylodiscitis) {
            finding.spineLocation = new SpineLocation();
            finding.isLocatedAtPsoasMuscle = false;
          }
          if (finding.findingType === DiscFindingTypeEnum.Trauma) {
            finding.spineLocation = new SpineLocation();
          }
          if (finding.findingType === DiscFindingTypeEnum.RheumatoidDiseases) {
            finding.spineLocation = new SpineLocation();
            finding.isArthrosis = false;
            finding.isArthritis = false;
            finding.atlantodentalDistanceInMm = null;
            finding.isAtlantoaxialJointErosions = false;
            finding.isDensErosion = false;
            finding.isDensProtrusion = false;
            finding.referenceChamberlainLineInMm = null;
            finding.isBasilarImpression = false;
            finding.isSubluxation = false;
          }
        });
      }
    );
    this.addPageConnection(
      8,
      SoftTissuesUiModel,
      () => {
        return this.permittedLocalizerSelectionChange;
      },
      (model: SoftTissuesUiModel) => {
        model.findings.forEach(item => {
          item.spineLocationBones = new SpineDirectionalLocation();
          item.spineLocation = new SpineLocation();
          item.moreThanOneLesionSpineLocation = new SpineLocation();

          if (item.referencePicture.imageFileId) {
            const fileUploadUrl = AppConfig.settings.servicesUrls.spineCT.softTissues.fileUpload;
            const route = `${fileUploadUrl}/${this.model.reportId}/${item.referencePicture.imageFileId}`;
            this.fileService.delete(route).then(() => (item.referencePicture = new ReferencePictureUiModel()));
          }
        });
      }
    );
  }
}
