import { Component, Input } from '@angular/core';
import { FootBigTendonsModel } from '@models/feetMRT/ui/localizers/foot-big-tendons.model';

@Component({
  selector: 'rr-foot-big-tendons-simple',
  templateUrl: './foot-big-tendons-simple.component.html',
  styleUrls: ['./foot-big-tendons-simple.component.scss']
})
export class FootBigTendonsSimpleComponent {
  @Input() model: FootBigTendonsModel;
  @Input() side: 'right' | 'left';
  @Input() height: number;
  constructor() {
    this.side = this.side ? this.side : 'left';
  }
}
