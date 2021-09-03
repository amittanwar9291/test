import { Component, Input } from '@angular/core';
import { NgForm, ControlContainer } from '@angular/forms';

@Component({
  selector: 'rr-disc-sector-select',
  templateUrl: './disc-sector-select.component.html',
  styleUrls: ['./disc-sector-select.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DiscSectorSelectComponent {
  @Input() finding;

  sectorTranstationKeyMapper = {
    1: 'Median',
    2: 'Paramedian',
    3: 'Mediolateral',
    4: 'Foraminal',
    5: 'Extraforaminal',
    6: 'Paramedian',
    7: 'Mediolateral',
    8: 'Foraminal',
    9: 'Extraforaminal'
  };

  isActiveSector() {
    return this.finding.findingDetails.findIndex(el => !el.isDeleted) > -1;
  }
}
