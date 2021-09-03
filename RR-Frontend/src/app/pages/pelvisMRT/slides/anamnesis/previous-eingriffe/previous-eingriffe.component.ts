import { Component, Input, OnChanges } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { AnamnesisUiModel } from '@models/pelvisMRT/ui/anamnesis/anamnesis-ui.model';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { AnamnesisPreviousOperationFindingUiModel } from '@models/pelvisMRT/ui/anamnesis/anamnesis-previous-operation-finding-ui.model';
import { AnamnesisClinicFindingUiModel } from '@models/pelvisMRT/ui/anamnesis/anamnesis-clinic-finding-ui.model';
import { PreviousOperationTypeEnum } from '@enums/pelvisMRT/anamnesis/previous-operation-type.enum';
import { ClinicTypeEnum } from '@enums/pelvisMRT/anamnesis/clinic-type.enum';
import { SurgicalProcedureTypeEnum } from '@enums/pelvisMRT/anamnesis/surgical-procedure-type.enum';
import { GenderTypeEnum } from '@enums/shared/gender-type.enum';
import { filter } from 'lodash';

@Component({
  selector: 'rr-previous-eingriffe',
  templateUrl: './previous-eingriffe.component.html',
  styleUrls: ['./previous-eingriffe.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class PreviousEingriffeComponent implements OnChanges {
  @Input() model: AnamnesisUiModel;

  @Input() clinicHandler: DynamicComponentHandler<AnamnesisClinicFindingUiModel>;
  @Input() clinicDropdownConfig: FindingColumnConfig;
  @Input() localizationGender: GenderTypeEnum;

  @Input() previousOperationHandler: DynamicComponentHandler<AnamnesisPreviousOperationFindingUiModel>;
  @Input() previousOperationDropdownConfig: FindingColumnConfig;

  previousOperationType: typeof PreviousOperationTypeEnum;
  clinicType: typeof ClinicTypeEnum;
  surgicalProcedureType: typeof SurgicalProcedureTypeEnum;
  localizationGenderType: typeof GenderTypeEnum;

  constructor() {
    this.initializeEnums();
  }

  ngOnChanges() {
    this.getClinicDropdownConfig();
    this.getPreviousOperationDropdownConfig();
  }

  private getClinicDropdownConfig(): void {
    if (this.localizationGender === GenderTypeEnum.Male) {
      this.clinicDropdownConfig.dropdownValues = filter(this.clinicDropdownConfig.dropdownValues, elem => {
        return elem.value !== 'VaginalDischarge';
      });
    }
  }

  private getPreviousOperationDropdownConfig(): void {
    if (this.localizationGender === GenderTypeEnum.Female) {
      this.previousOperationDropdownConfig.dropdownValues = filter(this.previousOperationDropdownConfig.dropdownValues, elem => {
        return elem.value !== 'Prostatectomy' && elem.value !== 'Hemiorchiectomy';
      });
    }
    if (this.localizationGender === GenderTypeEnum.Male) {
      this.previousOperationDropdownConfig.dropdownValues = filter(this.previousOperationDropdownConfig.dropdownValues, elem => {
        return elem.value !== 'Hysterectomy' && elem.value !== 'Conisation' && elem.value !== 'RadicalTrachelectomy';
      });
    }
  }

  private initializeEnums() {
    this.previousOperationType = PreviousOperationTypeEnum;
    this.clinicType = ClinicTypeEnum;
    this.surgicalProcedureType = SurgicalProcedureTypeEnum;
    this.localizationGenderType = GenderTypeEnum;
  }
}
