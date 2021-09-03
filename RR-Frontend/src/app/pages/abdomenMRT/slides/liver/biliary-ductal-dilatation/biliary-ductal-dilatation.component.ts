import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { LiverFindingUiModel } from '@models/abdomenMRT/ui/liver/liver-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

@Component({
  selector: 'rr-biliary-ductal-dilatation',
  templateUrl: './biliary-ductal-dilatation.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class BiliaryDuctalDilatationComponent {
  @Input() model: LiverFindingUiModel;
  @Input() biliaryDuctalDilatationDDOptions: DropdownModel[];
  @Output() emitLocalizer = new EventEmitter();
  @Output() emitLocalizer2 = new EventEmitter();

  openLocalizer(): void {
    this.emitLocalizer.emit();
  }
  openLocalizer2(): void {
    this.emitLocalizer2.emit();
  }
}
