import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { VesselsFindingUiModel } from '@models/headCT/ui/vessels/vessels-finding-ui.model';
import { AppConfig } from '../../../../../../app.config';
import { ReferencePictureRRIds } from '@models/shared/reference-picture/reference-picture-rr-ids.model';
import { CerebralEdemaTypeEnum } from '@enums/headCT/vessels/ischemia/cerebral-edema-type.enum';
import { HeadCTPicturesTypeEnum } from '@enums/headCT/vessels/headCT-pictures-type.enum';

@Component({
  selector: 'rr-ischemic-area-two-tab',
  templateUrl: './ischemic-area-two-tab.component.html',
  styleUrls: ['./ischemic-area-two-tab.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class IschemicAreaTwoTabComponent {
  @Input() model: VesselsFindingUiModel;
  cerebralEdemaTypeEnum = CerebralEdemaTypeEnum;
  fileUploadUrl = AppConfig.settings.servicesUrls.headCT.vessels.fileUpload;
  headCTPicturesTypeEnum = HeadCTPicturesTypeEnum;
  referencePictureElementsRrIds = new ReferencePictureRRIds(
    'uni_04_001',
    'uni_04_002',
    'uni_04_003',
    'uni_04_004',
    'uni_04_005',
    'uni_04_006',
    'uni_04_007'
  );
}
