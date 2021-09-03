import { Directive, HostListener, Input } from '@angular/core';
import { omit } from 'lodash';
import { IModel } from '@interfaces/model.interface';
import { DifferentialDiagnosisPresetService } from '@abstractions/abstract-classes/differential-diagnosis-preset-service.ts';
import { FindingBase } from '@models/shared/finding/finding.base';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { findingBaseProperties } from '@models/shared/finding/finding-omitted-properties.const';

@Directive({
  selector: '[rrDifferentialDiagnosisPreset]'
})
export class DifferentialDiagnosisPresetDirective {
  @Input() diagnosisModel: IModel;
  @Input() diagnosisWithPresets: string[];

  constructor(private diagnosisService: DifferentialDiagnosisPresetService, private validationHelperService: ValidationHelperService) {}

  @HostListener('onChange', ['$event']) onChange($event): void {
    if (this.diagnosisWithPresets && !this.diagnosisWithPresets.includes($event.value)) {
      return;
    }

    this.diagnosisService.get($event.value).subscribe(model => {
      this.updateModelWithoutOmittedProperties(model);
    });
  }

  updateModelWithoutOmittedProperties(newModel: IModel): void {
    const omittedProperties = findingBaseProperties;
    Object.assign(this.diagnosisModel, omit(newModel, omittedProperties));
    this.validationHelperService.removeAllErrorsInFinding((this.diagnosisModel as FindingBase).validationId);
  }
}
