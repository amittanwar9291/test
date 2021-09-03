import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FocalSignalVoidTypeEnum } from '@enums/thoraxMRT/mediastinum';
import { MediastinumFindingUiModel } from '@models/thoraxMRT/ui/mediastinum/mediastinum-finding-ui.model';
import { MediastinumHelperService } from '../mediastinum-helper.service';

@Component({
  selector: 'rr-cardio-heart',
  templateUrl: './cardio-heart.component.html',
  styleUrls: ['./cardio-heart.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CardioHeartComponent {
  @Input() model: MediastinumFindingUiModel;

  focalSignalVoidsTypeEnum = FocalSignalVoidTypeEnum;

  isCMYes = false;

  constructor(private mediastinumHelperService: MediastinumHelperService) {
    this.mediastinumHelperService.isCMYes.subscribe(value => {
      this.isCMYes = value;
    });
  }
}
