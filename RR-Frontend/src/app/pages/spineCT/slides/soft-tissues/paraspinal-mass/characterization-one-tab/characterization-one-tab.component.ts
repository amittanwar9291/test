import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DiscFindingUiModel, SoftTissuesFindingUiModel } from '@models/spineCT';
import { Subscription } from 'rxjs/internal/Subscription';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { nameof } from 'ts-simple-nameof';
import { SoftTissuesHelperService, SpineCTSoftTissuesLargeLocalizerConfig } from '../../soft-tissues-helper.service';
import { SpineCtHelperService } from '@services/spineCT/spine-ct-helper.service';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { TranslateService } from '@ngx-translate/core';
import { compact } from 'lodash';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { SoftTissuesDiagnosisTypeEnum } from '@enums/spineCT/soft-tissues/paraspinal-mass/soft-tissues-diagnosis-type.enum';
import { HistologicallyProvenTypeEnum } from '@enums/spineCT/soft-tissues/paraspinal-mass/histologically-proven-type.enum';
import { MarginTypeEnum } from '@enums/spineCT/soft-tissues/paraspinal-mass/margin-type.enum';
import { HomogeneityTypeEnum } from '@enums/spineCT/soft-tissues/paraspinal-mass/homogeneity-type.enum';
import { ShapeTypeEnum } from '@enums/spineCT/soft-tissues/paraspinal-mass/shape-type.enum';
import { DensityTypeEnum } from '@enums/spineCT/soft-tissues/paraspinal-mass/density-type.enum';
import { CharacterizationTypeEnum } from '@enums/spineCT/soft-tissues/characterization-type.enum';
import { AppConfig } from '../../../../../../app.config';
import { ReferencePictureUiModel } from '@models/shared/reference-picture/reference-picture-ui.model';

@Component({
  selector: 'rr-characterization-one-tab',
  templateUrl: './characterization-one-tab.component.html',
  styleUrls: ['./characterization-one-tab.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationOneTabComponent implements OnInit, OnDestroy {
  @Input() model: SoftTissuesFindingUiModel;

  subscriptions: Subscription[] = [];
  spineLocalizerPermittedSelection: SpineLocation;

  w030DifferentialDiagnose1: DropdownGroupedModel[];

  descriptionTypeEnum = DescriptionTypeEnum;
  softTissuesDiagnosisTypeEnum = SoftTissuesDiagnosisTypeEnum;
  histologicallyProvenTypeEnum = HistologicallyProvenTypeEnum;
  characterizationTypeEnum = CharacterizationTypeEnum;
  marginTypeEnum = MarginTypeEnum;
  homogeneityTypeEnum = HomogeneityTypeEnum;
  shapeTypeEnum = ShapeTypeEnum;
  densityTypeEnum = DensityTypeEnum;

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.spineCT.softTissues.fileUpload;
  }

  constructor(
    private softTissuesHelperService: SoftTissuesHelperService,
    private spineCtHelperService: SpineCtHelperService,
    private validationHelperService: ValidationHelperService,
    private enumMapper: EnumMapper,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.softTissuesHelperService.largeLocalizerOpenedConfig.subscribe(() => {
        if (this.enumMapper.mapToString(this.model.spineLocation) !== 'None') {
          this.validationHelperService.removeError(nameof<DiscFindingUiModel>(m => m.spineLocation));
        }
        this.clearReferencePicture();
      })
    );
    this.subscriptions.push(
      this.spineCtHelperService.spineLocalizerPermittedSelection.subscribe(v => (this.spineLocalizerPermittedSelection = v))
    );
    this.subscriptions.push(
      this.translate
        .stream('spineCT.softTissues.w030DifferentialDiagnose1.options')
        .subscribe((out: DropdownGroupedModel[]) => (this.w030DifferentialDiagnose1 = out))
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  isSingleSelectOnLocalizer(): boolean {
    return compact(Object.values(this.model.spineLocation)).length === 1;
  }

  clearReferencePicture(): void {
    if (this.isSingleSelectOnLocalizer()) {
      return;
    }
    if (this.model.referencePicture.imageFileId) {
      this.softTissuesHelperService.clearImage(this.model.referencePicture.imageFileId).then(() => {
        this.model.referencePicture = new ReferencePictureUiModel();
      });
    } else {
      this.model.referencePicture = new ReferencePictureUiModel();
    }
  }

  openSpineLocalizer(): void {
    this.softTissuesHelperService.largeLocalizerOpenedConfig.next(
      new SpineCTSoftTissuesLargeLocalizerConfig('standard', this.model.spineLocation)
    );
  }

  onDifferentialDiagnosis01Change(): void {
    this.model.isHistologicallyProven = false;
    this.model.histologicallyProvenType = HistologicallyProvenTypeEnum.None;
    this.model.isSuspicionOf = false;
    this.model.isSubordinate = false;
  }

  onMaxDiameterInMmChange(): void {
    if (!this.model.maxDiameterInMm) {
      this.model.secondPlaneInMm = null;
      this.model.thirdPlaneInMm = null;
    }
  }

  onSecondPlaneInMmChange(): void {
    if (!this.model.secondPlaneInMm) {
      this.model.thirdPlaneInMm = null;
    }
  }
}
