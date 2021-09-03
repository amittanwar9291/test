import { Component, Input } from '@angular/core';
import { GastrointestinalTractFindingUiModel } from '@models/abdomenMRT/ui/gastrointestinal-tract/gastrointestinal-tract-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-hernia',
  templateUrl: './hernia.component.html',
  styleUrls: ['./hernia.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class HerniaComponent {
  @Input() model: GastrointestinalTractFindingUiModel;
  localizationValidation = [
    nameof<GastrointestinalTractFindingUiModel>(m => m.extensionHerniaSacInMm),
    nameof<GastrointestinalTractFindingUiModel>(m => m.extensionHernialOrificeInMm),
    nameof<GastrointestinalTractFindingUiModel>(m => m.sideType)
  ];
}
