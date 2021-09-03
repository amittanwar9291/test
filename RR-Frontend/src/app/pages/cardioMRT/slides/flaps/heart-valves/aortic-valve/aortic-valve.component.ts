import { Component, Input } from '@angular/core';
import { NgForm, ControlContainer } from '@angular/forms';
import { HeartValvesFindingUiModel } from '@models/cardioMRT/ui/flaps/heart-valves-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { VariantType } from '@enums/cardioMRT/flaps';

@Component({
  selector: 'rr-aortic-valve',
  templateUrl: './aortic-valve.component.html',
  styleUrls: ['../../flaps.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AorticValveComponent {
  @Input() model: HeartValvesFindingUiModel;
  @Input() stenosisTypeList: DropdownModel[];
  @Input() insufficiencyTypeList: DropdownModel[];
  @Input() classificationTypeList: DropdownModel[];
  @Input() classificationPhenotypeList: DropdownModel[];
  @Input() dropdownTranslationBits: DropdownModel[];

  variantType: typeof VariantType;

  constructor() {
    this.variantType = VariantType;
  }

  getCustomLabel(key, dropdownList) {
    return this.dropdownTranslationBits[dropdownList][key];
  }
}
