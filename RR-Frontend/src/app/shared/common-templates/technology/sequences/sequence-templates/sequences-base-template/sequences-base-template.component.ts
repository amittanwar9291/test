import { Component, Input } from '@angular/core';

@Component({
  selector: 'rr-sequences-base-template',
  templateUrl: './sequences-base-template.component.html',
  styleUrls: ['./sequences-base-template.component.scss']
})
export class SequencesBaseTemplateComponent {
  @Input() itemIndex: number;
  @Input() disabled: boolean;
  @Input() customTitle: string;

  constructor() {}
}
