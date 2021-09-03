import { Component, Input } from '@angular/core';

@Component({
  selector: 'rr-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() isDisabled: boolean;
  @Input() validationObjects: string | Array<string>;
}
