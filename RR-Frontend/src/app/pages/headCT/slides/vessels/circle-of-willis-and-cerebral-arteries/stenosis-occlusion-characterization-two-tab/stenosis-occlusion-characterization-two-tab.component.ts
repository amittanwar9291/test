import { Component, Input, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { VesselsFindingUiModel } from '@models/headCT/ui/vessels/vessels-finding-ui.model';
import { Subscription } from 'rxjs/internal/Subscription';
import { VesselsHelperService } from '../../vessels-helper.service';
import { AppConfig } from '../../../../../../app.config';
import { ReferencePictureRRIds } from '@models/shared/reference-picture/reference-picture-rr-ids.model';
import { HeadCTPicturesTypeEnum } from '@enums/headCT/vessels/headCT-pictures-type.enum';

@Component({
  selector: 'rr-stenosis-occlusion-characterization-two-tab',
  templateUrl: './stenosis-occlusion-characterization-two-tab.component.html',
  styleUrls: ['./stenosis-occlusion-characterization-two-tab.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class StenosisOcclusionCharacterizationTwoTabComponent implements OnDestroy {
  @Input() model: VesselsFindingUiModel;
  fileUploadUrl = AppConfig.settings.servicesUrls.headCT.vessels.fileUpload;
  isCMYes: boolean;
  isCMYesSubscription: Subscription;

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

  constructor(private vesselsHelperService: VesselsHelperService) {
    this.isCMYesSubscription = vesselsHelperService.isCMYes.subscribe(value => (this.isCMYes = value));
  }

  ngOnDestroy(): void {
    this.isCMYesSubscription.unsubscribe();
  }
}
