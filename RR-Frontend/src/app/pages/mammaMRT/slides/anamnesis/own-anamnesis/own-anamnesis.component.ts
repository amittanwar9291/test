import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { FamilyPersonUi } from '@models/mammaMRT/ui/anamnesis/family-person-ui.model';

import { MenopauseType, OwnFamilyAnamnesisType } from '@enums/shared/mamma/anamnesis-medical-history';

@Component({
  selector: 'rr-own-anamnesis',
  templateUrl: './own-anamnesis.component.html',
  styleUrls: ['./own-anamnesis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class OwnAnamnesisComponent {
  @Input() model: FamilyPersonUi;
  @Input() selectedAnamnesis: string;

  menopauseType = MenopauseType;
  ownFamilyAnamnesisType = OwnFamilyAnamnesisType;

  constructor() {}
}
