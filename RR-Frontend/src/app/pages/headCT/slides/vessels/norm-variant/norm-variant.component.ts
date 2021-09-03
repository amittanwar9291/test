import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { VesselsFindingUiModel } from '@models/headCT/ui/vessels/vessels-finding-ui.model';
import { AppConfig } from '../../../../../app.config';
import { nameof } from 'ts-simple-nameof';
import { compact } from 'lodash';
import { ReferencePictureRRIds } from '@models/shared/reference-picture/reference-picture-rr-ids.model';
import { HeadCTPicturesTypeEnum } from '@enums/headCT/vessels/headCT-pictures-type.enum';
import { VesselsHelperService } from '../vessels-helper.service';

@Component({
  selector: 'rr-norm-variant',
  templateUrl: './norm-variant.component.html',
  styleUrls: ['./norm-variant.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class NormVariantComponent {
  @Input() model: VesselsFindingUiModel;
  fileUploadUrl = AppConfig.settings.servicesUrls.headCT.vessels.fileUpload;

  headCTPicturesTypeEnum = HeadCTPicturesTypeEnum;

  checkboxes = [
    nameof<VesselsFindingUiModel>(m => m.isRightP1HypoplasiaOrFTPConfiguration),
    nameof<VesselsFindingUiModel>(m => m.isRightP1Aplasia),
    nameof<VesselsFindingUiModel>(m => m.isRightP1SplittingOrDuplication),
    nameof<VesselsFindingUiModel>(m => m.isRightA1Hypoplasia),
    nameof<VesselsFindingUiModel>(m => m.isRightA1Aplasia),
    nameof<VesselsFindingUiModel>(m => m.isRightA1SplittingOrDuplication),
    nameof<VesselsFindingUiModel>(m => m.isRightAcomPHypoplasia),
    nameof<VesselsFindingUiModel>(m => m.isRightAcomPAplasia),
    nameof<VesselsFindingUiModel>(m => m.isRightPICAEndingAV),
    nameof<VesselsFindingUiModel>(m => m.isRightAVHypoplasia),
    nameof<VesselsFindingUiModel>(m => m.isRightAVAplasia),
    nameof<VesselsFindingUiModel>(m => m.isRightTripleACA),
    nameof<VesselsFindingUiModel>(m => m.isRightAcomAHypoplasia),
    nameof<VesselsFindingUiModel>(m => m.isRightAcomAAplasia),
    nameof<VesselsFindingUiModel>(m => m.isRightAcomASplittingOrDuplication),
    nameof<VesselsFindingUiModel>(m => m.isLeftP1HypoplasiaOrFTPConfiguration),
    nameof<VesselsFindingUiModel>(m => m.isLeftP1Aplasia),
    nameof<VesselsFindingUiModel>(m => m.isLeftP1SplittingOrDuplication),
    nameof<VesselsFindingUiModel>(m => m.isLeftA1Hypoplasia),
    nameof<VesselsFindingUiModel>(m => m.isLeftA1Aplasia),
    nameof<VesselsFindingUiModel>(m => m.isLeftA1SplittingOrDuplication),
    nameof<VesselsFindingUiModel>(m => m.isLeftAcomPHypoplasia),
    nameof<VesselsFindingUiModel>(m => m.isLeftAcomPAplasia),
    nameof<VesselsFindingUiModel>(m => m.isLeftPICAEndingAV),
    nameof<VesselsFindingUiModel>(m => m.isLeftAVHypoplasia),
    nameof<VesselsFindingUiModel>(m => m.isLeftAVAplasia),
    nameof<VesselsFindingUiModel>(m => m.isLeftTripleACA),
    nameof<VesselsFindingUiModel>(m => m.isLeftAcomAHypoplasia),
    nameof<VesselsFindingUiModel>(m => m.isLeftAcomAAplasia),
    nameof<VesselsFindingUiModel>(m => m.isLeftAcomASplittingOrDuplication)
  ];

  checkboxesValidation = this.checkboxes.join(' ');
  referencePictureElementsRrIds = new ReferencePictureRRIds(
    'uni_04_001',
    'uni_04_002',
    'uni_04_003',
    'uni_04_004',
    'uni_04_005',
    'uni_04_006',
    'uni_04_007'
  );

  constructor(private vesselsHelperService: VesselsHelperService) {}

  isSingleSelectionOnChenboxes(): boolean {
    return compact(this.checkboxes.map(item => this.model[item])).length === 1;
  }

  checkAndRemovePicture(): void {
    if (!this.isSingleSelectionOnChenboxes()) {
      this.vesselsHelperService.clearImage(this.model, HeadCTPicturesTypeEnum.ImageFile);
    }
  }
}
