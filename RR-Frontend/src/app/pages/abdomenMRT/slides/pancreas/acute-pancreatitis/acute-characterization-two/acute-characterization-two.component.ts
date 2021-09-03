import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { PancreasFindingUiModel } from '@models/abdomenMRT/ui/pancreas/pancreas-finding-ui.model';

@Component({
  selector: 'rr-acute-characterization-two',
  templateUrl: './acute-characterization-two.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AcuteCharacterizationTwoComponent implements OnInit {
  @Input() model: PancreasFindingUiModel;

  constructor() {}

  ngOnInit(): void {}
}
