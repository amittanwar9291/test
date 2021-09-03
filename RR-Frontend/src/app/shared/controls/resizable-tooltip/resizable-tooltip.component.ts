import { Component, Input } from '@angular/core';

@Component({
  selector: 'rr-resizable-tooltip',
  templateUrl: './resizable-tooltip.component.html',
  styleUrls: ['./resizable-tooltip.component.scss']
})
export class ResizableTooltipComponent {
  @Input() tooltipText: string;

  positionLeftPx: string;
  positionTopPx: string;

  @Input() set positionLeft(left: number) {
    this.positionLeftPx = left + 'px';
  }

  @Input() set positionTop(top: number) {
    this.positionTopPx = top + 'px';
  }
}
