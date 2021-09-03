import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { VesselsFindingUiModel } from '@models/headCT/ui/vessels/vessels-finding-ui.model';
import { PathologyTypeEnum } from '@enums/headCT/vessels/pathology-type.enum';
import { SideTypeEnum } from '@enums/shared/side-type.enum';
import { AppConfig } from '../../../../../app.config';
import { HeadCTPicturesTypeEnum } from '@enums/headCT/vessels/headCT-pictures-type.enum';
import { ReferencePictureRRIds } from '@models/shared/reference-picture/reference-picture-rr-ids.model';
import { TranslateService } from '@ngx-translate/core';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { SeverityTypeEnum } from '@enums/headCT/vessels/severity-type.enum';
import { Subscription } from 'rxjs/internal/Subscription';
import { FormTypeEnum } from '@enums/headCT/vessels/form-type.enum';
import { VesselsHelperService } from '../vessels-helper.service';
import { DifferentialDiagnosisTypeEnum } from '@enums/headCT/vessels/differential-diagnosis-type.enum';

@Component({
  selector: 'rr-common-carotid-artery',
  templateUrl: './common-carotid-artery.component.html',
  styleUrls: ['./common-carotid-artery.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CommonCarotidArteryComponent implements OnInit, OnDestroy {
  @Input() model: VesselsFindingUiModel;
  w013: DropdownModel[];
  subscriptions: Subscription[] = [];
  fileUploadUrl = AppConfig.settings.servicesUrls.headCT.vessels.fileUpload;
  isCMYes: boolean;

  headCTPicturesTypeEnum = HeadCTPicturesTypeEnum;
  sideTypeEnum = SideTypeEnum;
  pathologyTypeEnum = PathologyTypeEnum;
  formTypeEnum = FormTypeEnum;
  differentialDiagnosisTypeEnum = DifferentialDiagnosisTypeEnum;

  referencePictureElementsRrIds = new ReferencePictureRRIds(
    'uni_04_001',
    'uni_04_002',
    'uni_04_003',
    'uni_04_004',
    'uni_04_005',
    'uni_04_006',
    'uni_04_007'
  );

  constructor(private translate: TranslateService, private vesselsHelperService: VesselsHelperService) {}

  isPathologyType(value: PathologyTypeEnum): boolean {
    return this.model.pathologyType === value;
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.translate.stream('headCT.vessels.w013.options').subscribe((out: DropdownModel[]) => (this.w013 = out)),
      this.vesselsHelperService.isCMYes.subscribe(v => (this.isCMYes = v))
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
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
}
