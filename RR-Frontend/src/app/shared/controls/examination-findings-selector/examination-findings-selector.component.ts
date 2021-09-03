import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CustomTranslateService } from '@services/shared';

@Component({
  selector: 'rr-examination-findings-selector',
  templateUrl: './examination-findings-selector.component.html',
  styleUrls: ['./examination-findings-selector.component.scss']
})
export class ExaminationFindingsSelectorComponent {
  @Input() findingsName;
  @Input() findingHandler;
  @Input() dropdownValues;
  @Input() findingsAttr;
  @Input() model;

  @Output() emitCurrentItem = new EventEmitter();
  @Output() emitFindingValue = new EventEmitter();

  constructor(public translate: TranslateService, public customTranslate: CustomTranslateService) {}

  addFinding(event: any): void {
    this.findingHandler.addElement(event);
  }

  removeFinding(index: number): void {
    this.findingHandler.removeElement(index);
    this.emitCurrentItem.emit({ remove: true });
  }

  isButtonActive(): boolean {
    return this.model === this.findingsAttr.radio[0].value || this.findingHandler.getLastItem().findingType === 'None';
  }

  resetFindings(): void {
    if (this.model[this.findingsName] === this.findingsAttr.radio[0].value) {
      this.findingHandler.deleteAllElements();
      this.emitCurrentItem.emit();
    }
  }

  setDisabledAttribute(index: number) {
    this.findingHandler.setActiveElement(index);
    this.findingHandler.currentItem.isDeleted
      ? this.findingHandler.setActiveElement(this.findingHandler.getLastItemIndex())
      : this.findingHandler.setActiveElement(index);
    this.emitCurrentItem.emit();
  }

  updateFinding(value: string) {
    if (this.findingHandler.currentItem.findingType !== value) {
      this.findingHandler.resetCurrentItem();
      this.findingHandler.currentItem.findingType = value;
      this.emitFindingValue.emit(value);
    }
  }
}
