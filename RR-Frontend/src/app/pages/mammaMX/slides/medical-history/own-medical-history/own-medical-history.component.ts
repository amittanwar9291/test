import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { FamilyPersonUi } from '@models/mammaMX/ui/medical-history/family-person-ui.model';

import { MenopauseType } from '@enums/shared/mamma/anamnesis-medical-history';
import { OwnFamilyAnamnesisType } from '@enums/mammaMX/medical-history/own-family-anamnesis-type.enum';

@Component({
  selector: 'rr-own-medical-history',
  templateUrl: './own-medical-history.component.html',
  styleUrls: ['./own-medical-history.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class OwnMedicalHistoryComponent {
  @Input() model: FamilyPersonUi;
  @Input() selectedAnamnesis: string;

  menopauseType = MenopauseType;
  ownFamilyAnamnesisType = OwnFamilyAnamnesisType;
}
