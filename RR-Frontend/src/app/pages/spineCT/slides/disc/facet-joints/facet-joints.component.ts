import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DiscFindingUiModel } from '@models/spineCT';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { DiscHelperService, SpineCTLargeLocalizerConfig } from '../disc-helper.service';
import { TranslateService } from '@ngx-translate/core';
import { SpineCtHelperService } from '@services/spineCT/spine-ct-helper.service';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { Subscription } from 'rxjs/internal/Subscription';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { compact } from 'lodash';
import { GradeTypeEnum } from '@enums/spineCT/disc/grade-type.enum';
import { nameof } from 'ts-simple-nameof';
import { PathriaClassificationTypeEnum } from '@enums/spineCT/disc/pathria-classification-type.enum';
import { ForaminalStenosisTypeEnum } from '@enums/spineCT/disc/foraminal-stenosis-type.enum';
import { ProtrusionExtrusionMigrationHelperService } from '../protrusion-extrusion-migration/protrusion-extrusion-migration-helper.service';

@Component({
  selector: 'rr-facet-joints',
  templateUrl: './facet-joints.component.html',
  styleUrls: ['./facet-joints.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class FacetJointsComponent implements OnInit, OnDestroy {
  @Input() model: DiscFindingUiModel;

  translateSubscription: Subscription;
  largeLocalizerOpenedSubscription: Subscription;
  spineLocalizerPermittedSelectionSubscription: Subscription;
  spineLocalizerPermittedSelection: SpineLocation;

  w027DropdownOptions: DropdownModel[];

  pathriaClassificationTypeEnum = PathriaClassificationTypeEnum;
  foraminalStenosisTypeEnum = ForaminalStenosisTypeEnum;

  constructor(
    public helperService: ProtrusionExtrusionMigrationHelperService,
    private discHelperService: DiscHelperService,
    private translate: TranslateService,
    private spineCtHelperService: SpineCtHelperService,
    private validationHelperService: ValidationHelperService,
    private enumMapper: EnumMapper
  ) {}

  ngOnInit(): void {
    this.largeLocalizerOpenedSubscription = this.discHelperService.largeLocalizerOpenedConfig.subscribe(() => this.onLocalizerClose());
    this.spineLocalizerPermittedSelectionSubscription = this.spineCtHelperService.spineLocalizerPermittedSelection.subscribe(
      v => (this.spineLocalizerPermittedSelection = v)
    );
    this.translateSubscription = this.translate.stream('spineCT.disc.W027Dropdown.options').subscribe((out: DropdownModel[]) => {
      this.w027DropdownOptions = out;
    });
  }

  ngOnDestroy(): void {
    this.largeLocalizerOpenedSubscription.unsubscribe();
    this.spineLocalizerPermittedSelectionSubscription.unsubscribe();
    this.translateSubscription.unsubscribe();
  }

  getGradeTypeExcludedOptions(): string[] {
    return this.helperService.isL1dtoL5dSelectedOnLocalizerSelected(this.model) ? [] : [GradeTypeEnum.Relative, GradeTypeEnum.Absolute];
  }

  openLocalizer(): void {
    this.discHelperService.largeLocalizerOpenedConfig.next(
      new SpineCTLargeLocalizerConfig(
        SpineLocationLogicTypeEnum.DiscEachIntervertebre,
        'spineCT.disc.pleaseSelectTheDiscOfTheCorrespondingSegmentMultipleChoice.value'
      )
    );
  }

  onLocalizerClose(): void {
    const isAnySelectionOnLocalizer = this.enumMapper.mapToString(this.model.spineLocation) !== 'None';
    if (isAnySelectionOnLocalizer) {
      this.validationHelperService.removeError(nameof<DiscFindingUiModel>(m => m.spineLocation));
    }
    if (!this.isC1dtoC7dSelected()) {
      this.model.isUncovertebralArthrosis = false;
      this.clearUncovertebralArthrosisDetails();
    }
    if (!this.isSingleSelectOnLocalizer()) {
      this.clearFacetJointArthrosisDetails(true);
      this.clearUncovertebralArthrosisDetails();
      this.clearSpondylolysisDetails();
      this.clearLuxationDetails();
    }

    const isForbiddenGradeType = [GradeTypeEnum.Relative, GradeTypeEnum.Absolute].includes(this.model.gradeType);
    if (!this.helperService.isL1dtoL5dSelectedOnLocalizerSelected(this.model) && isForbiddenGradeType) {
      this.model.gradeType = GradeTypeEnum.None;
    }
  }

  isSingleSelectOnLocalizer(): boolean {
    return compact(Object.values(this.model.spineLocation)).length === 3;
  }

  isC1dtoC7dSelected(): boolean {
    return (
      this.model.spineLocation.c1d ||
      this.model.spineLocation.c2d ||
      this.model.spineLocation.c3d ||
      this.model.spineLocation.c4d ||
      this.model.spineLocation.c5d ||
      this.model.spineLocation.c6d ||
      this.model.spineLocation.c7d
    );
  }

  clearFacetJointArthrosisDetails(forceClear?: boolean): void {
    if (!this.model.isOsteoarthritis || forceClear) {
      this.model.isFacetJointArthrosisRight = false;
      this.model.isFacetJointArthrosisLeft = false;
      this.validationHelperService.removeError(nameof<DiscFindingUiModel>(m => m.isFacetJointArthrosisRight));
      this.validationHelperService.removeError(nameof<DiscFindingUiModel>(m => m.isFacetJointArthrosisLeft));
      this.clearPathology1TabWithoutSide();
    }
  }

  clearOtherFacetJointArthrosisFields(): void {
    if (this.model.isFacetJointArthrosisRight && this.model.isFacetJointArthrosisLeft) {
      this.clearPathology1TabWithoutSide();
    }
  }

  clearPathology1TabWithoutSide(): void {
    this.model.pathriaClassificationType = PathriaClassificationTypeEnum.None;
    this.model.isHypertrophy = false;
    this.model.isCyst = false;
    this.model.isMultiple = false;
    this.model.maxDiameterInMm = null;
    this.model.isSpinalCanalStenosis = false;
    this.model.gradeType = GradeTypeEnum.None;
    this.model.sagittalDiameterInMm = null;
    this.model.transverseDiameterSpinalCanalWidthInMm = null;
    this.model.isFacetJointArthrosisForaminalStenosis = false;
    this.model.facetJointArthrosisForaminalStenosisType = ForaminalStenosisTypeEnum.None;
    this.model.isForaminalStenosisRight = false;
    this.model.isForaminalStenosisLeft = false;
  }

  clearUncovertebralArthrosisDetails(): void {
    this.model.isUncovertebralArthrosisForaminalStenosis = false;
    this.model.uncovertebralArthrosisForaminalStenosisType = ForaminalStenosisTypeEnum.None;
    this.model.isUncovertebralArthrosisRight = false;
    this.model.isUncovertebralArthrosisLeft = false;
  }

  clearSpondylolysisDetails(): void {
    this.model.isSpondylolysisRight = false;
    this.model.isSpondylolysisLeft = false;
    this.validationHelperService.removeError(nameof<DiscFindingUiModel>(m => m.isSpondylolysisRight));
    this.validationHelperService.removeError(nameof<DiscFindingUiModel>(m => m.isSpondylolysisLeft));
  }

  clearLuxationDetails(): void {
    this.model.isLuxationRight = false;
    this.model.isLuxationLeft = false;
    this.validationHelperService.removeError(nameof<DiscFindingUiModel>(m => m.isLuxationRight));
    this.validationHelperService.removeError(nameof<DiscFindingUiModel>(m => m.isLuxationLeft));
  }
}
