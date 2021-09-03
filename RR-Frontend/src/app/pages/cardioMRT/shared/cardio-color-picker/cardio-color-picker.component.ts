import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'rr-cardio-color-picker',
  templateUrl: './cardio-color-picker.component.html',
  styleUrls: ['./cardio-color-picker.component.scss']
})
export class CardioColorPickerComponent {
  @Input() sectionTypes;
  @Output() sectionSelected = new EventEmitter();
  activeSectionType: string;

  selectSectionType(sectionTypeName: string) {
    this.sectionSelected.emit(sectionTypeName);
    this.activeSectionType = sectionTypeName;
  }
}
