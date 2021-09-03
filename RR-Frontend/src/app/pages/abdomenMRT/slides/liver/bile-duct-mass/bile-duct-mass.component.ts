import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { LiverFindingUiModel } from '@models/abdomenMRT/ui/liver/liver-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { ClassificationCorletteTypeEnum } from '@enums/abdomenMRT/liver';

@Component({
  selector: 'rr-bile-duct-mass',
  templateUrl: './bile-duct-mass.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class BileDuctMassComponent {
  @Input() model: LiverFindingUiModel;
  @Input() bileDuctMassDDOptions: DropdownModel[];
  @Output() emitLocalizer = new EventEmitter();

  openLocalizer(): void {
    this.emitLocalizer.emit();
  }

  resetButtons(): ClassificationCorletteTypeEnum {
    return (this.model.classificationCorletteType = ClassificationCorletteTypeEnum.None);
  }
}
