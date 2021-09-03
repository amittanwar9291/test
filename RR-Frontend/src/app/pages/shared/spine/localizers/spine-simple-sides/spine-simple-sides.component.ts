import { Component, Input } from '@angular/core';
import { SpineDirectionalLocation } from '@models/shared/spine/localizers/spine-directional-location.model';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';

@Component({
  selector: 'rr-spine-simple-sides',
  templateUrl: './spine-simple-sides.component.html',
  styleUrls: ['./spine-simple-sides.component.scss']
})
export class SpineSimpleSidesComponent {
  @Input() discLocalization: boolean;
  @Input() spineDirectionalLocation: SpineDirectionalLocation;
  @Input() spineLocalizerPermittedSelection: SpineLocation;

  constructor() {
    this.spineDirectionalLocation = this.spineDirectionalLocation || new SpineDirectionalLocation();
  }

  isSpinePartChecked(spinePart: string): boolean {
    return this.spineDirectionalLocation[spinePart].left || this.spineDirectionalLocation[spinePart].right;
  }

  isSpinePartSideChecked(vertebraPart: string, discPart: string, side: string): boolean {
    return this.spineDirectionalLocation[vertebraPart][side] || (discPart ? this.spineDirectionalLocation[discPart][side] : false);
  }

  shouldBeDisabled(name: string) {
    const elementName = ['osCoccygis', 'osSacrum'].includes(name) || name.includes('d') ? name : name + 'd';
    if (!this.spineLocalizerPermittedSelection) {
      return false;
    } else if (this.discLocalization) {
      return !this.spineLocalizerPermittedSelection[elementName];
    } else {
      return !this.spineLocalizerPermittedSelection[name];
    }
  }
}
