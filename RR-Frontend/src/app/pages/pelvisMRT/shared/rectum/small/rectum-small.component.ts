import { Component, OnInit, Input } from '@angular/core';
import { Rectum } from '@models/pelvisMRT/ui/localizers/rectum';

@Component({
  selector: 'rr-rectum-small',
  templateUrl: './rectum-small.component.html',
  styleUrls: ['./rectum-small.component.scss']
})
export class RectumSmallComponent {
  @Input() rectum: Rectum;

  constructor() {
    this.rectum = this.rectum || new Rectum();
  }

  isElementChecked(localization: string): boolean {
    return this.rectum[localization];
  }
}
