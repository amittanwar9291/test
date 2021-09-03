import { Component, EventEmitter, Input, Output } from '@angular/core';

import { NgModelAccessorBase, MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';

import { IFindingDescriptionType } from '@interfaces/controls/finding-description-type.interface';
import { DifferentialDiagnosisDropdownService } from '@services/shared/differential-diagnosis-dropdown/differential-diagnosis-dropdown.service';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';

@Component({
  selector: 'rr-description-type',
  templateUrl: './description-type.component.html',
  styleUrls: ['./description-type.component.scss'],
  providers: [MakeProvider(DescriptionTypeComponent)]
})
export class DescriptionTypeComponent extends NgModelAccessorBase<string> {
  @Input() disabled: boolean;
  @Input() descriptionType: IFindingDescriptionType;
  @Input() descriptionLabelClass = '';
  @Input() iDescribeLabelRRId = 'none';
  @Input() iKnowLabelRRId = 'none';
  @Input() iDescribeRadioRRId = 'none';
  @Input() iKnowRadioRRId = 'none';
  @Output() descriptionTypeChanged: EventEmitter<DescriptionTypeEnum> = new EventEmitter();

  descriptionTypeEnum = DescriptionTypeEnum;

  constructor(private differentialDiagnosisDropdownService: DifferentialDiagnosisDropdownService) {
    super();
  }

  setValue(val: DescriptionTypeEnum) {
    const previousVal = this.ngValue;
    this.ngValue = val;
    this.writeValue(this.ngValue);
    if (previousVal !== val) {
      this.descriptionTypeChanged.emit(val);
      this.differentialDiagnosisDropdownService.descritionType.next(val);
      this.differentialDiagnosisDropdownService.clear();
    }
  }
}
