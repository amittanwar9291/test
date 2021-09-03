import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { VesselsFindingUiModel } from '@models/headCT/ui/vessels/vessels-finding-ui.model';
import { GradingTypeEnum } from '@enums/headCT/vessels/perfusion/grading-type.enum';
import { AppConfig } from '../../../../../../app.config';
import { ReferencePictureRRIds } from '@models/shared/reference-picture/reference-picture-rr-ids.model';
import { MismatchTypeEnum } from '@enums/headCT/vessels/perfusion/mismatch-type.enum';
import { HeadCTPicturesTypeEnum } from '@enums/headCT/vessels/headCT-pictures-type.enum';
import { VesselsHelperService } from '../../vessels-helper.service';

@Component({
  selector: 'rr-perfusion-characterization-tab',
  templateUrl: './perfusion-characterization-tab.component.html',
  styleUrls: ['./perfusion-characterization-tab.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class PerfusionCharacterizationTabComponent {
  @Input() model: VesselsFindingUiModel;
  fileUploadUrl = AppConfig.settings.servicesUrls.headCT.vessels.fileUpload;

  referencePicture1ElementsRrIds = new ReferencePictureRRIds(
    'uni_04_001_01',
    'uni_04_002_01',
    'uni_04_003_01',
    'uni_04_004_01',
    'uni_04_005_01',
    'uni_04_006_01',
    'uni_04_007_01'
  );

  referencePicture2ElementsRrIds = new ReferencePictureRRIds(
    'uni_04_001_02',
    'uni_04_002_02',
    'uni_04_003_02',
    'uni_04_004_02',
    'uni_04_005_02',
    'uni_04_006_02',
    'uni_04_007_02'
  );

  gradingTypeEnum = GradingTypeEnum;
  mismatchTypeEnum = MismatchTypeEnum;
  headCTPicturesTypeEnum = HeadCTPicturesTypeEnum;

  constructor(private vesselsHelperService: VesselsHelperService) {}

  checkAndClearPicture(): void {
    if (this.model.mismatchType !== MismatchTypeEnum.Mismatch) {
      this.vesselsHelperService.clearImage(this.model, HeadCTPicturesTypeEnum.Perfusion02ImageFile);
    }
  }
}
