import { Component, Input } from '@angular/core';
import { FootBigModel } from '@models/feetMRT/ui/localizers/foot-big.model';

@Component({
  selector: 'rr-foot-big-joints-simple',
  templateUrl: './foot-big-joints-simple.component.html',
  styleUrls: ['./foot-big-joints-simple.component.scss']
})
export class FootBigJointsSimpleComponent {
  @Input() model: FootBigModel;
  @Input() side: 'right' | 'left';
  @Input() height: number;
  constructor() {
    this.side = this.side ? this.side : 'left';
  }
}
