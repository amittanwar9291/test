import { Component, Input } from '@angular/core';

@Component({
  selector: 'rr-score-result',
  templateUrl: './score-result.component.html',
  styleUrls: ['./score-result.component.scss']
})
export class ScoreResultComponent {
  @Input() score: number;
  @Input() digitsInfo = '1.0-0';
  @Input() limit = 100;
  @Input() equalEdge = false;
  @Input() resultRrId: string;
  @Input() measureRrId: string;

  get isFloat(): boolean {
    const digitsAfterTheDecimalPoint = this.digitsInfo.split('.')[1];

    if (!digitsAfterTheDecimalPoint) {
      return false;
    }

    const [min, max] = digitsAfterTheDecimalPoint.split('-');
    const minVal = Number(min);
    const maxVal = Number(max);

    return !!minVal && !!maxVal;
  }

  @Input() set disabled(val: boolean) {
    if (val) {
      this.score = null;
    }
  }
}
