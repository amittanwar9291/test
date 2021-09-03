import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { CerebrospinalFluidSpaceFindingUiModel } from '@models/headCT/ui/cerebrospinal-fluid-space/cerebrospinal-fluid-space-finding-ui.model';
import { NormVariantVentricleTypeEnum } from '@enums/headCT/cerebrospinal-fluid-space/norm-variant-ventricle-type.enum';
import { AppConfig } from '../../../../../app.config';
import { ReferencePictureRRIds } from '@models/shared/reference-picture/reference-picture-rr-ids.model';

@Component({
  selector: 'rr-norm-variant-ventricle',
  templateUrl: './norm-variant-ventricle.component.html',
  styleUrls: ['./norm-variant-ventricle.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class NormVariantVentricleComponent {
  @Input() model: CerebrospinalFluidSpaceFindingUiModel;
  normVariantVentricleTypeEnum = NormVariantVentricleTypeEnum;
  fileUploadUrl = AppConfig.settings.servicesUrls.headCT.cerebrospinalFluidSpace.fileUpload;
  referencePictureElementsRrIds = new ReferencePictureRRIds(
    'uni_09_001',
    'uni_09_002',
    'uni_09_003',
    'uni_09_004',
    'uni_09_005',
    'uni_09_006',
    'uni_09_007'
  );
}
