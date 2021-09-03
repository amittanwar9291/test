import { Component, Input, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { LiverHomogeneityTypeEnum } from '@enums/abdomenMRT/liver';
import { LiverFindingUiModel } from '@models/abdomenMRT/ui/liver/liver-finding-ui.model';
import { Subscription } from 'rxjs';
import { LiverHelperService } from './../../liver-helper.service';

@Component({
  selector: 'rr-characterization-one',
  templateUrl: './characterization-one.component.html',
  styleUrls: ['../../liver.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationOneComponent implements OnDestroy {
  @Input() model: LiverFindingUiModel;

  isDWIInAnySequence: boolean;
  technologyContrastMediumType: string;
  subscriptions: Subscription[] = [];

  qualityOfEnhancement = LiverHomogeneityTypeEnum;

  constructor(private liverHelperService: LiverHelperService) {
    this.subscriptions.push(this.liverHelperService.isDWIInAnySequence.subscribe(v => (this.isDWIInAnySequence = v)));
    this.subscriptions.push(this.liverHelperService.technologyContrastMediumType.subscribe(v => (this.technologyContrastMediumType = v)));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  get isGadotericAcid(): boolean {
    return this.technologyContrastMediumType === 'GadotericAcid';
  }

  get isGadotericAcidOrGadobenicAcid(): boolean {
    return this.isGadotericAcid || this.technologyContrastMediumType === 'GadobenicAcid';
  }
}
