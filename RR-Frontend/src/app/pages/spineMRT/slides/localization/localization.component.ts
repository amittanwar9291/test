import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { DetailInterventionTypesEnum } from '@enums/spineMRT/anamnesis/detail-intervention-types.enum';
import { BonesFindingTypeEnum } from '@enums/spineMRT/bones';
import { IntervertebralDiscJointsFindingTypesEnum } from '@enums/spineMRT/intervertebral-disc-joints';
import { ScanAreaTypesEnum } from '@enums/spineMRT/localization/area-of-examination-types.enum';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { SpineDirectionalLocation } from '@models/shared/spine/localizers/spine-directional-location.model';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { AnamnesisUiModel } from '@models/spineMRT/ui/anamnesis/anamnesis-ui.model';
import { BonesFindingUiModel } from '@models/spineMRT/ui/bones/bones-finding-ui.model';
import { BonesUiModel } from '@models/spineMRT/ui/bones/bones-ui.model';
import { ConfigurationUiModel } from '@models/spineMRT/ui/configuration/configuration-ui.model';
import { IntervertebralDiscJointsFindingUiModel } from '@models/spineMRT/ui/intervertebral-disc-joints/intervertebral-disc-joints-finding-ui.model';
import { IntervertebralDiscJointsUiModel } from '@models/spineMRT/ui/intervertebral-disc-joints/intervertebral-disc-joints-ui.model';

import { LocalizationUiModel } from '@models/spineMRT/ui/localization/localization-ui.model';
import { LocalizationValidationModel } from '@models/spineMRT/ui/localization/localization-validation.model';
import { MyelonUIModel } from '@models/spineMRT/ui/myelon/myelon-ui.model';
import { SacroiliacJointUiModel } from '@models/spineMRT/ui/sacroiliac-joint/sacroiliac-joint-ui.model';
import { SoftTissuesFindingUiModel } from '@models/spineMRT/ui/soft-tissues/soft-tissues-finding-ui.model';
import { SoftTissuesUiModel } from '@models/spineMRT/ui/soft-tissues/soft-tissues-ui.model';
import { DiscGeneralLocationModel } from '@models/shared/spine/localizers/disc-general-location.model';

import { NavigationService } from '@services/shared';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { SpineHelperService } from '@services/spineMRT/spine-helper.service';
import { omit } from 'lodash';
import { findingBaseProperties } from '@models/shared/finding/finding-omitted-properties.const';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-spine-mrt-localization',
  templateUrl: './localization.component.html',
  styleUrls: ['./localization.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class LocalizationComponent extends SlideBaseComponent<LocalizationUiModel> {
  isLargeLocalizerOpened: boolean;
  scanAreaTypesEnum = ScanAreaTypesEnum;

  spineLocationLogicTypeEnum = SpineLocationLogicTypeEnum;

  permittedLocalizerSelectionChange = false;
  tempLocalizerSelection: string;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    private spineHelperService: SpineHelperService,
    private enumMapper: EnumMapper
  ) {
    super(navService, slideRequestService, changeDetectionService, LocalizationUiModel, commonServices, LocalizationValidationModel);

    this.isLargeLocalizerOpened = false;
    this.registerGetCallback(() => {
      if (this.navService.getReportData()) {
        this.model.patientInformation.age = this.navService.getReportData().patientAge;
      }
    });
    this.addConection();
  }

  openLargeLocalizer(): void {
    if (this.model.scanAreaType === this.scanAreaTypesEnum.Spine && !this.isLargeLocalizerOpened) {
      this.isLargeLocalizerOpened = true;
    }
    this.tempLocalizerSelection = this.enumMapper.mapToString(this.model.spineLocation);
  }

  onLargeLocalizerClosed() {
    if (this.isLargeLocalizerOpened) {
      this.isLargeLocalizerOpened = false;
      this.validationHelperService.removeError(nameof<LocalizationUiModel>(m => m.spineLocation));
      this.spineHelperService.setAndReturnSpineLocalizerPermittedSelection(this.model);
    }
  }

  clearLocalizerAndSetPermitedSpineLocationForOtherPages() {
    this.model.spineLocation = new SpineLocation();
    this.validationHelperService.removeError(nameof<LocalizationUiModel>(m => m.spineLocation));
    this.spineHelperService.setAndReturnSpineLocalizerPermittedSelection(this.model);
  }

  setPermittedLocalizerSelectionChangeOnLocalizerChange() {
    this.permittedLocalizerSelectionChange = this.tempLocalizerSelection !== this.enumMapper.mapToString(this.model.spineLocation);
  }

  private checkIfLocalizerFieldsAreClicked(fieldsArr: string[]) {
    return Object.keys(this.model.spineLocation).some(item => fieldsArr.includes(item) && this.model.spineLocation[item]);
  }

  markPermittedLocalizerSelectionChange() {
    this.permittedLocalizerSelectionChange = true;
  }

  private addConection() {
    const triggerArr = ['c0', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7'];
    const omittedProperties = ['findingDetails', ...findingBaseProperties];
    this.addPageConnection(
      2,
      AnamnesisUiModel,
      () => {
        return this.permittedLocalizerSelectionChange;
      },
      (model: AnamnesisUiModel) => {
        model.interventions.forEach(item => {
          item.spineLocation = new SpineLocation();
          item.detailInterventionType = DetailInterventionTypesEnum.None;
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
      5,
      IntervertebralDiscJointsUiModel,
      () => {
        return this.permittedLocalizerSelectionChange;
      },
      (model: IntervertebralDiscJointsUiModel) => {
        model.findings.forEach(item => {
          if (
            [
              IntervertebralDiscJointsFindingTypesEnum.Protrusion,
              IntervertebralDiscJointsFindingTypesEnum.Extrusion,
              IntervertebralDiscJointsFindingTypesEnum.Migration,
              IntervertebralDiscJointsFindingTypesEnum.Sequestration,
              IntervertebralDiscJointsFindingTypesEnum.FacetJointArthrosis
            ].includes(item.findingType)
          ) {
            // item.findingDetails.forEach(elem => (elem.isDeleted = true));
            Object.assign(item, omit(new IntervertebralDiscJointsFindingUiModel(), omittedProperties));
          } else {
            item.spineLocation = new SpineLocation();
          }
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
        model.findings.forEach(item => {
          item.spineLocation = new SpineLocation();
          item.spineLocation2 = new SpineLocation();
          item.spineLocation3 = new SpineLocation();
          item.traumaLocation = new DiscGeneralLocationModel();

          if (item.findingType === BonesFindingTypeEnum.Fracture || item.findingType === BonesFindingTypeEnum.BoneMarrowEdema) {
            Object.assign(item, omit(new BonesFindingUiModel(), omittedProperties));
          }
        });
      }
    );

    this.addPageConnection(
      7,
      MyelonUIModel,
      () => {
        return this.permittedLocalizerSelectionChange;
      },
      (model: MyelonUIModel) => {
        model.findings.forEach(item => {
          item.spineLocation = new SpineLocation();
          item.spineLocationBones = new SpineDirectionalLocation();
          item.spineLocationDisks = new SpineDirectionalLocation();
          item.spineLocationNonTarget = new SpineLocation();
        });
      }
    );

    this.addPageConnection(
      8,
      SoftTissuesUiModel,
      () => this.permittedLocalizerSelectionChange || !this.checkIfLocalizerFieldsAreClicked(triggerArr),
      (model: SoftTissuesUiModel) => {
        if (this.permittedLocalizerSelectionChange) {
          model.findings.forEach(item => {
            item.spineLocation1 = new SpineLocation();
            item.spineLocationBones = new SpineDirectionalLocation();
            item.spineLocation2 = new SpineLocation();
            item.spineLocationDisks1 = new SpineDirectionalLocation();
            item.spineLocationDisks2 = new SpineDirectionalLocation();
            item.spineLocationDisks3 = new SpineDirectionalLocation();
          });
        }
        if (!this.checkIfLocalizerFieldsAreClicked(triggerArr)) {
          this.clear8thPage(model);
        }
      }
    );

    this.addPageConnection(
      9,
      SacroiliacJointUiModel,
      () => {
        return this.model.scanAreaType !== this.scanAreaTypesEnum.DedicatedSIJScan;
      },
      (model: SacroiliacJointUiModel) => {
        model.findings.map(finding => {
          finding.isSPARCCScore = false;
          this.spineHelperService.resetSPARCScore(finding);
        });
      }
    );
  }

  private clear8thPage(model: SoftTissuesUiModel) {
    const fistColumnFields = ['c0', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7'];
    const secondColumnFields = [
      'tH1',
      'tH2',
      'tH3',
      'tH4',
      'tH5',
      'tH6',
      'tH7',
      'tH8',
      'tH9',
      'tH10',
      'tH11',
      'tH12',
      'l1',
      'l2',
      'l3',
      'l4',
      'l5'
    ];

    for (const finding of model.findings) {
      if (!this.checkIfLocalizerFieldsAreClicked(fistColumnFields)) {
        this.clear8thPageParavertebralFirstColumn(finding);
      }

      if (!this.checkIfLocalizerFieldsAreClicked(secondColumnFields)) {
        this.clear8thPageParavertebralSecondColumn(finding);
      }
    }
  }

  private clear8thPageParavertebralFirstColumn(finding: SoftTissuesFindingUiModel) {
    finding.isLongissimusCapitisMuscle = false;
    finding.isLevatorScapulaeMuscle = false;
    finding.isSemispinalisColliMuscle = false;
    finding.isSemispinalisCapitisMuscle = false;
    finding.isSpleniusCapitisMuscle = false;
    finding.isTrapeziusMuscle = false;
  }

  private clear8thPageParavertebralSecondColumn(finding: SoftTissuesFindingUiModel) {
    finding.isErectorSpinaeMuscle = false;
    finding.isQuadratusLumborumMuscle = false;
    finding.isPsoasMajorMuscle = false;
    finding.isMultifidusMuscle = false;
  }
}
