import { Component, Input } from '@angular/core';

@Component({
  selector: 'rr-localizer-description-frame',
  templateUrl: './localizer-description-frame.component.html',
  styleUrls: ['./localizer-description-frame.component.scss']
})
export class LocalizerDescriptionFrameComponent {
  @Input() hasFrame = false;
  @Input() rrid: string;
  @Input() localizationDescription: string;
}
