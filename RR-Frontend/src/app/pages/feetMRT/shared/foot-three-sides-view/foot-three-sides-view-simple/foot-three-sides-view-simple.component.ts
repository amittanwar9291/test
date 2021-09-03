import { Component, Input } from '@angular/core';
import { FootThreeSidesViewModel } from '@models/feetMRT/ui/localizers/foot-three-sides-view.model';

@Component({
  selector: 'rr-feet-three-sides-view-simple',
  templateUrl: './foot-three-sides-view-simple.component.html',
  styleUrls: ['./foot-three-sides-view-simple.component.scss']
})
export class FootThreeSidesViewSimpleComponent {
  @Input() model: FootThreeSidesViewModel;
}
