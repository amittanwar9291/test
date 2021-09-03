import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { VesselsFindingUiModel } from '@models/headCT/ui/vessels/vessels-finding-ui.model';
import { AppConfig } from '../../../../../app.config';
import { ReferencePictureRRIds } from '@models/shared/reference-picture/reference-picture-rr-ids.model';
import { WithoutAVShuntTypeEnum } from '@enums/headCT/vessels/vascular-malformation/without-avshunt-type.enum';
import { WithAVShuntTypeEnum } from '@enums/headCT/vessels/vascular-malformation/with-avshunt-type.enum';
import { HeadCTPicturesTypeEnum } from '@enums/headCT/vessels/headCT-pictures-type.enum';

@Component({
  selector: 'rr-vascular-malformation',
  templateUrl: './vascular-malformation.component.html',
  styleUrls: ['./vascular-malformation.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class VascularMalformationComponent {
  @Input() model: VesselsFindingUiModel;

  fileUploadUrl = AppConfig.settings.servicesUrls.headCT.vessels.fileUpload;

  withoutAVShuntTypeEnum = WithoutAVShuntTypeEnum;
  withAVShuntTypeEnum = WithAVShuntTypeEnum;
  headCTPicturesTypeEnum = HeadCTPicturesTypeEnum;

  referencePictureElementsRrIds = new ReferencePictureRRIds(
    'uni_04_001_01',
    'uni_04_002_01',
    'uni_04_003_01',
    'uni_04_004_01',
    'uni_04_005_01',
    'uni_04_006_01',
    'uni_04_007_01'
  );
}
