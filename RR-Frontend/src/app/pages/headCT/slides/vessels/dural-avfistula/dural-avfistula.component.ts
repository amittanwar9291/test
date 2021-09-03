import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { VesselsFindingUiModel } from '@models/headCT/ui/vessels/vessels-finding-ui.model';
import { AppConfig } from '../../../../../app.config';
import { ReferencePictureRRIds } from '@models/shared/reference-picture/reference-picture-rr-ids.model';
import { SideTypeEnum } from '@enums/shared/side-type.enum';

@Component({
  selector: 'rr-dural-avfistula',
  templateUrl: './dural-avfistula.component.html',
  styleUrls: ['./dural-avfistula.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DuralAVFistulaComponent {
  @Input() model: VesselsFindingUiModel;
  fileUploadUrl = AppConfig.settings.servicesUrls.headCT.vessels.fileUpload;
  sideTypeEnum = SideTypeEnum;
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
