import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { AnamnesisUiModel } from '@models/pelvisMRT/ui/anamnesis/anamnesis-ui.model';
import { TherapieContinueTypeEnum } from '@enums/pelvisMRT/anamnesis/therapie-continue-type.enum';
import { ParityTypeEnum } from '@enums/pelvisMRT/anamnesis/parity-type.enum';
import { WeightChangeTypeEnum } from '@enums/pelvisMRT/anamnesis/weight-change-type.enum';
import { MonthYearModel } from '@models/shared/month-year/month-year.model';
import { GenderTypeEnum } from '@enums/shared/gender-type.enum';

@Component({
  selector: 'rr-anamnesis-clinic',
  templateUrl: './anamnesis-clinic.component.html',
  styleUrls: ['./anamnesis-clinic.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AnamnesisClinicComponent {
  @Input() model: AnamnesisUiModel;
  @Input() gender: GenderTypeEnum;

  therapieContinueType: typeof TherapieContinueTypeEnum;
  parityType: typeof ParityTypeEnum;
  weightChangeType: typeof WeightChangeTypeEnum;
  genderType: typeof GenderTypeEnum;

  constructor() {
    this.initializeEnums();
  }

  private initializeEnums() {
    this.therapieContinueType = TherapieContinueTypeEnum;
    this.parityType = ParityTypeEnum;
    this.weightChangeType = WeightChangeTypeEnum;
    this.genderType = GenderTypeEnum;
  }

  clearHormoneAblativeDate() {
    this.model.hormoneAblativeDate = new MonthYearModel();
  }

  clearRadiotherapyDate() {
    this.model.radiotherapyData = new MonthYearModel();
  }

  clearTherapieDates() {
    this.clearHormoneAblativeDate();
    this.clearRadiotherapyDate();
  }

  clearPsaDate() {
    if (!this.model.psaLevel) {
      this.model.psaLevelTestData = new MonthYearModel();
    }
  }

  clearNeoadjuvantTherapyDate() {
    this.model.neoadjuvantTherapyDate = new MonthYearModel();
  }
}
