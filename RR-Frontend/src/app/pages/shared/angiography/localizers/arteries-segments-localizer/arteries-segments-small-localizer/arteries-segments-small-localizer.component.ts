import { Component, Input } from '@angular/core';
import { ArteriesSegmentsLocalizerModel } from '@models/shared/angiography/localizers/arteries-segments-localizer.model';

@Component({
  selector: 'rr-arteries-segments-small-localizer',
  templateUrl: './arteries-segments-small-localizer.component.html',
  styleUrls: ['./arteries-segments-small-localizer.component.scss']
})
export class ArteriesSegmentsSmallLocalizerComponent {
  @Input() model: ArteriesSegmentsLocalizerModel;

  constructor() {
    this.model = this.model || new ArteriesSegmentsLocalizerModel();
  }
}
