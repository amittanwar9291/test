import { Component, Input } from '@angular/core';

import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { SpineDirectionalLocation } from '@models/shared/spine/localizers/spine-directional-location.model';
import { SpineSelectionAccessibilityModeEnum } from '@enums/shared/spine/spine-selection-accessibility-mode.enum';
import { SpineComplexEnabledParts } from '@sharedPages/spine/localizers/spine-complex/spine-complex-enabled-parts.const';

@Component({
  selector: 'rr-spine-simple',
  templateUrl: './spine-simple.component.html',
  styleUrls: ['./spine-simple.component.scss']
})
export class SpineSimpleComponent {
  @Input() spineLocation: SpineLocation;
  @Input() spineDirectionalLocation: SpineDirectionalLocation;
  @Input() darkRedDisc = false;
  @Input() spineLocalizerPermittedSelection: SpineLocation;
  @Input() selectionAccessibilityMode: SpineSelectionAccessibilityModeEnum;

  constructor() {
    this.spineLocation = this.spineLocation || new SpineLocation();
    this.spineDirectionalLocation = this.spineDirectionalLocation || new SpineDirectionalLocation();
  }

  isSpinePartChecked(spinePart: string): boolean {
    return this.spineLocation[spinePart] || this.spineDirectionalLocation[spinePart].left || this.spineDirectionalLocation[spinePart].right;
  }

  shouldBeDisabled(spinePart: string): boolean {
    return (
      (this.selectionAccessibilityMode && !SpineComplexEnabledParts[this.selectionAccessibilityMode][spinePart]) ||
      !this.isPermittedToSelect(spinePart)
    );
  }

  isPermittedToSelect(element: string): boolean {
    if (!this.spineLocalizerPermittedSelection) {
      return true;
    } else {
      return this.spineLocalizerPermittedSelection[element];
    }
  }
}
