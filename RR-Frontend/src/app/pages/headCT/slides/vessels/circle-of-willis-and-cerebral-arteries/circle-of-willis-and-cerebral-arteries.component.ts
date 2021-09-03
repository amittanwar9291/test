import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { VesselsFindingUiModel } from '@models/headCT/ui/vessels/vessels-finding-ui.model';
import { PathologyTypeEnum } from '@enums/headCT/vessels/pathology-type.enum';
import { HeadCTVesselsLocalizersTypeEnum } from '@enums/headCT/vessels/headCT-vessels-localizers-type.enum';
import { VesselsHelperService } from '../vessels-helper.service';
import { findingBaseProperties } from '@models/shared/finding/finding-omitted-properties.const';
import { nameof } from 'ts-simple-nameof';
import { omit } from 'lodash';
import { AppConfig } from '../../../../../app.config';
import { ReferencePictureRRIds } from '@models/shared/reference-picture/reference-picture-rr-ids.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { ShapeTypeEnum } from '@enums/headCT/vessels/shape-type.enum';
import { OrientationAneurysmTypeEnum } from '@enums/headCT/vessels/orientation-aneurysm-type.enum';
import { HeadCTPicturesTypeEnum } from '@enums/headCT/vessels/headCT-pictures-type.enum';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { SubarachnoidHemorrhageTypeEnum } from '@enums/headCT/vessels/subarachnoid-hemorrhage-type.enum';
import { SubarachnoidHemorrhageLocalizationTypeEnum } from '@enums/headCT/vessels/subarachnoid-hemorrhage-localization-type.enum';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

@Component({
  selector: 'rr-circle-of-willis-and-cerebral-arteries',
  templateUrl: './circle-of-willis-and-cerebral-arteries.component.html',
  styleUrls: ['./circle-of-willis-and-cerebral-arteries.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CircleOfWillisAndCerebralArteriesComponent implements OnInit {
  @Input() model: VesselsFindingUiModel;

  fileUploadUrl = AppConfig.settings.servicesUrls.headCT.vessels.fileUpload;
  isCMYes: boolean;
  w014: DropdownModel[];
  subscriptions: Subscription[] = [];

  headCTVesselsLocalizersTypeEnum = HeadCTVesselsLocalizersTypeEnum;
  headCTPicturesTypeEnum = HeadCTPicturesTypeEnum;
  pathologyTypeEnum = PathologyTypeEnum;
  shapeTypeEnum = ShapeTypeEnum;
  orientationAneurysmTypeEnum = OrientationAneurysmTypeEnum;
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
    private vesselsHelperService: VesselsHelperService,
    private validationHelperService: ValidationHelperService
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(this.vesselsHelperService.isCMYes.subscribe(v => (this.isCMYes = v)));
    this.translate.stream('headCT.vessels.w014.options').subscribe((out: DropdownModel[]) => (this.w014 = out));
  }

  openLargeLocalizer(localizerType: HeadCTVesselsLocalizersTypeEnum) {
    this.vesselsHelperService.openLocalizer.next(localizerType);
  }

  clearModel(): void {
    const omittedProperties = [
      ...findingBaseProperties,
      nameof<VesselsFindingUiModel>(p => p.affectedSegmentsOrVesselsLocation),
      nameof<VesselsFindingUiModel>(p => p.pathologyType)
    ];
    Object.assign(this.model, omit(new VesselsFindingUiModel(), omittedProperties));
    this.validationHelperService.removeError(nameof<VesselsFindingUiModel>(p => p.severityType));
    this.validationHelperService.removeError(nameof<VesselsFindingUiModel>(p => p.degreeOfStenosisCalculatedInNASCETInPercentage));
    this.validationHelperService.removeError(nameof<VesselsFindingUiModel>(p => p.extensionAneurysmInMm));
    this.vesselsHelperService.clearImage(this.model, HeadCTPicturesTypeEnum.ImageFile);
  }

  isPathologyType(value: PathologyTypeEnum): boolean {
    return this.model.pathologyType === value;
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
}
