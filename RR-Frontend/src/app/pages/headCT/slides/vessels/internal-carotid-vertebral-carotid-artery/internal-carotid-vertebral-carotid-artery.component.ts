import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { VesselsFindingUiModel } from '@models/headCT/ui/vessels/vessels-finding-ui.model';
import { PathologyTypeEnum } from '@enums/headCT/vessels/pathology-type.enum';
import { HeadCTVesselsLocalizersTypeEnum } from '@enums/headCT/vessels/headCT-vessels-localizers-type.enum';
import { VesselsHelperService } from '../vessels-helper.service';
import { SideTypeEnum } from '@enums/shared/side-type.enum';
import { nameof } from 'ts-simple-nameof';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { Subscription } from 'rxjs/internal/Subscription';
import { AppConfig } from '../../../../../app.config';
import { HeadCTPicturesTypeEnum } from '@enums/headCT/vessels/headCT-pictures-type.enum';
import { FormTypeEnum } from '@enums/headCT/vessels/form-type.enum';
import { DifferentialDiagnosisTypeEnum } from '@enums/headCT/vessels/differential-diagnosis-type.enum';
import { ShapeTypeEnum } from '@enums/headCT/vessels/shape-type.enum';
import { SubarachnoidHemorrhageTypeEnum } from '@enums/headCT/vessels/subarachnoid-hemorrhage-type.enum';
import { SubarachnoidHemorrhageLocalizationTypeEnum } from '@enums/headCT/vessels/subarachnoid-hemorrhage-localization-type.enum';
import { ReferencePictureRRIds } from '@models/shared/reference-picture/reference-picture-rr-ids.model';
import { TranslateService } from '@ngx-translate/core';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { findingBaseProperties } from '@models/shared/finding/finding-omitted-properties.const';
import { SeverityTypeEnum } from '@enums/headCT/vessels/severity-type.enum';
import { omit } from 'lodash';
import { VesselsFindingTypeEnum } from '@enums/headCT/vessels/vessels-finding-type.enum';

@Component({
  selector: 'rr-internal-carotid-vertebral-carotid-artery',
  templateUrl: './internal-carotid-vertebral-carotid-artery.component.html',
  styleUrls: ['./internal-carotid-vertebral-carotid-artery.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class InternalCarotidVertebralCarotidArteryComponent implements OnInit, OnDestroy {
  @Input() model: VesselsFindingUiModel;
  w013: DropdownModel[];
  w015: DropdownModel[];
  w018: DropdownModel[];
  subscriptions: Subscription[] = [];
  fileUploadUrl = AppConfig.settings.servicesUrls.headCT.vessels.fileUpload;
  isCMYes: boolean;

  headCTPicturesTypeEnum = HeadCTPicturesTypeEnum;
  sideTypeEnum = SideTypeEnum;
  pathologyTypeEnum = PathologyTypeEnum;
  formTypeEnum = FormTypeEnum;
  differentialDiagnosisTypeEnum = DifferentialDiagnosisTypeEnum;
  shapeTypeEnum = ShapeTypeEnum;
  subarachnoidHemorrhageTypeEnum = SubarachnoidHemorrhageTypeEnum;
  subarachnoidHemorrhageLocalizationTypeEnum = SubarachnoidHemorrhageLocalizationTypeEnum;

  referencePictureElementsRrIds = new ReferencePictureRRIds(
    'uni_04_001',
    'uni_04_002',
    'uni_04_003',
    'uni_04_004',
    'uni_04_005',
    'uni_04_006',
    'uni_04_007'
  );

  constructor(
    private translate: TranslateService,
    private validationHelperService: ValidationHelperService,
    private vesselsHelperService: VesselsHelperService
  ) {}

  isPathologyType(value: PathologyTypeEnum): boolean {
    return this.model.pathologyType === value;
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.translate.stream('headCT.vessels.w013.options').subscribe((out: DropdownModel[]) => (this.w013 = out)),
      this.translate.stream('headCT.vessels.w015.options').subscribe((out: DropdownModel[]) => (this.w015 = out)),
      this.translate.stream('headCT.vessels.w018.options').subscribe((out: DropdownModel[]) => (this.w018 = out)),
      this.vesselsHelperService.isCMYes.subscribe(v => (this.isCMYes = v))
    );
  }

  openLargeLocalizer() {
    this.vesselsHelperService.openLocalizer.next(HeadCTVesselsLocalizersTypeEnum.carotidArtery);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  onPathologyTypeChange() {
    Object.assign(this.model, omit(new VesselsFindingUiModel(), this.getOmittedProperties()));
    this.clearErrorsOnPathologyChange();
  }

  private getOmittedProperties(): string[] {
    if (this.isInternalCarotidArtery()) {
      return [
        ...findingBaseProperties,
        ...[
          nameof<VesselsFindingUiModel>(m => m.sideType),
          nameof<VesselsFindingUiModel>(m => m.internalCarotidArterySegmentsLocations),
          nameof<VesselsFindingUiModel>(m => m.pathologyType),
          nameof<VesselsFindingUiModel>(m => m.referencePicture)
        ]
      ];
    }
    if (this.isVertebralArtery()) {
      return [
        ...findingBaseProperties,
        ...[
          nameof<VesselsFindingUiModel>(m => m.sideType),
          nameof<VesselsFindingUiModel>(m => m.isV1),
          nameof<VesselsFindingUiModel>(m => m.isV2),
          nameof<VesselsFindingUiModel>(m => m.isV3),
          nameof<VesselsFindingUiModel>(m => m.isV4),
          nameof<VesselsFindingUiModel>(m => m.pathologyType),
          nameof<VesselsFindingUiModel>(m => m.referencePicture)
        ]
      ];
    }
  }

  private clearErrorsOnPathologyChange(): void {
    if (this.isInternalCarotidArtery()) {
      this.validationHelperService.removeError(nameof<VesselsFindingUiModel>(m => m.sideType));
      this.validationHelperService.removeError(nameof<VesselsFindingUiModel>(m => m.pathologyType));
    }

    if (this.isVertebralArtery()) {
      this.validationHelperService.removeError(nameof<VesselsFindingUiModel>(m => m.sideType));
      this.validationHelperService.removeError(nameof<VesselsFindingUiModel>(m => m.isV1));
      this.validationHelperService.removeError(nameof<VesselsFindingUiModel>(m => m.pathologyType));
    }
  }

  isHemodynamicallyRelevantDisable(): boolean {
    return [SeverityTypeEnum.None, SeverityTypeEnum.CompleteOcclusion].includes(this.model.severityType);
  }

  checkAndClearHemodynamicallyRelevant(): void {
    if (this.isHemodynamicallyRelevantDisable()) {
      this.model.isHemodynamicallyRelevant = false;
    }
  }

  calculate(): void {
    this.vesselsHelperService.calculateNASCET(this.model);
  }

  onExtensionAneurysmInMmChange() {
    if (!this.model.extensionAneurysmInMm) {
      this.model.secondPlaneInMm = null;
      this.model.thirdPlaneInMm = null;
    }
  }

  onSecondPlaneInMmChange() {
    if (!this.model.secondPlaneInMm) {
      this.model.thirdPlaneInMm = null;
    }
  }

  isInternalCarotidArtery(): boolean {
    return this.model.findingType === VesselsFindingTypeEnum.InternalCarotidArtery;
  }

  isVertebralArtery(): boolean {
    return this.model.findingType === VesselsFindingTypeEnum.VertebralArtery;
  }
}
