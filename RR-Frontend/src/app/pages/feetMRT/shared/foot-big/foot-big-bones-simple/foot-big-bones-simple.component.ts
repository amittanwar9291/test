import { Component, Input } from '@angular/core';
import { FootBigModel } from '@models/feetMRT/ui/localizers/foot-big.model';

@Component({
  selector: 'rr-foot-big-bones-simple',
  templateUrl: './foot-big-bones-simple.component.html',
  styleUrls: ['./foot-big-bones-simple.component.scss']
})
export class FootBigBonesSimpleComponent {
  @Input() model: FootBigModel;
  @Input() side: 'right' | 'left';
  @Input() noComplex: boolean;
  @Input() noMal: boolean;

  constructor() {}

  isPathSelected(bone: string): string {
    return this.model[bone] ? 'selected' : 'not-selected';
  }

  isCircleSelected(circle: string): string {
    return this.model[circle] ? 'text-circle-selected' : 'text-circle-not-selected';
  }
}
