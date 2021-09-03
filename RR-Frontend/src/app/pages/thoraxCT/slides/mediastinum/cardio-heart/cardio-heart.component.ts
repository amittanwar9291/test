import { Component, Input } from '@angular/core';
import { MediastinumFindingUiModel } from '@models/thoraxCT/ui/mediastinum/mediastinum-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'rr-cardio-heart',
  templateUrl: './cardio-heart.component.html',
  styleUrls: ['./cardio-heart.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CardioHeartComponent {
  @Input() model: MediastinumFindingUiModel;
  @Input() additionalData: any;
}
