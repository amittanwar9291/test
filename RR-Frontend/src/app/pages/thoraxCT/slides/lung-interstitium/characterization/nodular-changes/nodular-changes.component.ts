import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import {
  DistributionSecondaryPulmonaryLobuleTypeEnum,
  LungInterstitiumLocalizationTypeEnum,
  RandomDistributionTypeEnum
} from '@enums/thoraxCT/lung-interstitium';
import { ReferencePictureUiModel } from '@models/shared/reference-picture/reference-picture-ui.model';
import { LungInterstitiumFindingUiModel } from '@models/thoraxCT/ui/lung-interstitium/lung-interstitium-finding-ui.model';
import { AppConfig } from '../../../../../../app.config';
import { MarginTypeEnum } from '@enums/thoraxCT/common/margin-type.enum';
import { ReferencePictureRRIds } from '@models/shared/reference-picture/reference-picture-rr-ids.model';

@Component({
  selector: 'rr-nodular-changes',
  templateUrl: './nodular-changes.component.html',
  styleUrls: ['./nodular-changes.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class NodularChangesComponent {
  @Input() model: LungInterstitiumFindingUiModel;

  distributionSecondaryPulmonaryLobuleTypeEnum = DistributionSecondaryPulmonaryLobuleTypeEnum;
  randomDistributionTypeEnum = RandomDistributionTypeEnum;
  marginTypeEnum = MarginTypeEnum;
  lungInterstitiumLocalizationTypeEnum = LungInterstitiumLocalizationTypeEnum;

  referencePictureElementsRrIds = new ReferencePictureRRIds(
    'uni_06_001',
    'uni_06_002',
    'uni_06_003',
    'uni_06_004',
    'uni_06_005',
    'uni_06_006',
    'uni_06_007'
  );

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.thoraxCT.lungInterstitium.fileUpload;
  }

  clearFileUpload() {
    this.model.referencePicture = new ReferencePictureUiModel();
  }
}
