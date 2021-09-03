import { Component, Input } from '@angular/core';
import { RibsModel } from '@models/shared/thorax/localizers/ribs.model';

@Component({
  selector: 'rr-ribs-simple',
  templateUrl: './ribs-simple.component.html',
  styleUrls: ['./ribs-simple.component.scss']
})
export class RibsSimpleComponent {
  @Input() model: RibsModel;
}
