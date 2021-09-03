import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SoftTissuesFindingUiModel } from '@models/spineCT';
import { AppConfig } from '../../../../../app.config';
import { AffectedVesselOrUreterTypeEnum } from '@enums/spineCT/soft-tissues/vessels-ureter/affected-vessel-or-ureter-type.enum';
import { PathologyTypeEnum } from '@enums/spineCT/soft-tissues/vessels-ureter/pathology-type.enum';
import { compact, omit } from 'lodash';
import { ReferencePictureUiModel } from '@models/shared/reference-picture/reference-picture-ui.model';
import { SoftTissuesHelperService } from '../soft-tissues-helper.service';
import { findingBaseProperties } from '@models/shared/finding/finding-omitted-properties.const';
import { nameof } from 'ts-simple-nameof';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';

@Component({
  selector: 'rr-vessels-ureter',
  templateUrl: './vessels-ureter.component.html',
  styleUrls: ['./vessels-ureter.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class VesselsUreterComponent {
  @Input() model: SoftTissuesFindingUiModel;

  affectedVesselOrUreterTypeEnum = AffectedVesselOrUreterTypeEnum;
  pathologyTypeEnum = PathologyTypeEnum;

  constructor(private softTissuesHelperService: SoftTissuesHelperService, private validationHelperService: ValidationHelperService) {}

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.spineCT.softTissues.fileUpload;
  }

  clearModel(): void {
    const omittedProperties = [
      ...findingBaseProperties,
      nameof<SoftTissuesFindingUiModel>(p => p.affectedVesselOrUreterType),
      nameof<SoftTissuesFindingUiModel>(p => p.referencePicture)
    ];
    Object.assign(this.model, omit(new SoftTissuesFindingUiModel(), omittedProperties));
    this.checkAndClearImage(true);
    this.removeErrors();
  }

  isReferencePictureActive(): boolean {
    const condition1 =
      [
        AffectedVesselOrUreterTypeEnum.VertebralArtery,
        AffectedVesselOrUreterTypeEnum.CommonIliacArtery,
        AffectedVesselOrUreterTypeEnum.ExternalIliacArtery,
        AffectedVesselOrUreterTypeEnum.Ureter
      ].includes(this.model.affectedVesselOrUreterType) &&
      compact([this.model.isAffectedVesselOrUreterRight, this.model.isAffectedVesselOrUreterLeft]).length === 1;
    const condition2 = [
      AffectedVesselOrUreterTypeEnum.ThoracicAorta,
      AffectedVesselOrUreterTypeEnum.AbdominalAorta,
      AffectedVesselOrUreterTypeEnum.VenaCava
    ].includes(this.model.affectedVesselOrUreterType);

    return condition1 || condition2;
  }

  checkAndClearImage(forceRemove?: boolean): void {
    if (this.isReferencePictureActive() && !forceRemove) {
      return;
    }
    if (this.model.referencePicture.imageFileId) {
      this.softTissuesHelperService.clearImage(this.model.referencePicture.imageFileId).then(() => {
        this.model.referencePicture = new ReferencePictureUiModel();
      });
    } else {
      this.model.referencePicture = new ReferencePictureUiModel();
    }
  }

  removeErrors(): void {
    const erroredFields = [
      nameof<SoftTissuesFindingUiModel>(m => m.isAffectedVesselOrUreterRight),
      nameof<SoftTissuesFindingUiModel>(m => m.isAffectedVesselOrUreterLeft),
      nameof<SoftTissuesFindingUiModel>(m => m.rightPathologyType),
      nameof<SoftTissuesFindingUiModel>(m => m.leftPathologyType),
      nameof<SoftTissuesFindingUiModel>(m => m.pathologyType)
    ];
    erroredFields.forEach(item => this.validationHelperService.removeError(item));
  }
}
