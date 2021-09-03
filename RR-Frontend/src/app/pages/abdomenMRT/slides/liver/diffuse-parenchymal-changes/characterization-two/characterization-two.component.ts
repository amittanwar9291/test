import { Component, Input, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { LiverFindingUiModel } from '@models/abdomenMRT/ui/liver/liver-finding-ui.model';
import { AscitesTypeEnum, SignalDropTypeEnum } from '@enums/abdomenMRT/liver';
import { Subscription } from 'rxjs';
import { LiverHelperService } from './../../liver-helper.service';

@Component({
  selector: 'rr-diffuse-characterization-two',
  templateUrl: './characterization-two.component.html',
  styleUrls: ['../../liver.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationTwoComponent implements OnDestroy {
  @Input() model: LiverFindingUiModel;
  isDWIInAnySequence: boolean;
  isDwiSubscription: Subscription;

  signalDropType = SignalDropTypeEnum;
  ascitesType = AscitesTypeEnum;

  constructor(private liverHelperService: LiverHelperService) {
    this.isDwiSubscription = this.liverHelperService.isDWIInAnySequence.subscribe(v => (this.isDWIInAnySequence = v));
  }

  ngOnDestroy(): void {
    this.isDwiSubscription.unsubscribe();
  }
}
