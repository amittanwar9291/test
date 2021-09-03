import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { MeningesFindingUiModel } from '@models/headCT/ui/meninges/meninges-finding-ui.model';
import { AppConfig } from '../../../../../app.config';
import { ReferencePictureRRIds } from '@models/shared/reference-picture/reference-picture-rr-ids.model';

@Component({
  selector: 'rr-epidural-hematoma',
  templateUrl: './epidural-hematoma.component.html',
  styleUrls: ['./epidural-hematoma.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class EpiduralHematomaComponent {
  @Input() model: MeningesFindingUiModel;
  fileUploadUrl = AppConfig.settings.servicesUrls.headCT.meninges.fileUpload;

  referencePictureElementsRrIds = new ReferencePictureRRIds(
    'uni_05_001',
    'uni_05_002',
    'uni_05_003',
    'uni_05_004',
    'uni_05_005',
    'uni_05_006',
    'uni_05_007'
  );

  onSizeInMmChange() {
    if (!this.model.sizeInMm) {
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
