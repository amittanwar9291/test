import { Component, EventEmitter, Output } from '@angular/core';
import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';
import { FootThreeSidesViewModel } from '@models/feetMRT/ui/localizers/foot-three-sides-view.model';

@Component({
  selector: 'rr-feet-three-sides-view-complex',
  templateUrl: './foot-three-sides-view-complex.component.html',
  styleUrls: ['./foot-three-sides-view-complex.component.scss'],
  providers: [MakeProvider(FootThreeSidesViewComplexComponent)]
})
export class FootThreeSidesViewComplexComponent extends LocalizerBase<FootThreeSidesViewModel> {
  @Output() closed = new EventEmitter();
  constructor() {
    super(FootThreeSidesViewModel);
  }

  close() {
    this.closed.emit();
  }

  getTextClass(element: string): string {
    return this.isElementSelected(element) ? 'text-selected' : this.isElementHovered(element) ? 'text-hovered' : '';
  }

  getElementClass(element: string): string {
    return this.isElementSelected(element) ? 'selected' : this.isElementHovered(element) ? 'hovered' : '';
  }
}
