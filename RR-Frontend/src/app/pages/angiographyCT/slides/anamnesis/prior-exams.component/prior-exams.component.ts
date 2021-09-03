import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { AnamnesisUiModel } from '@models/angiographyCT/ui/anamnesis/anamnesis-ui.model';
import { MonthYearModel } from '@models/shared/month-year/month-year.model';

@Component({
  selector: 'rr-prior-exams',
  templateUrl: './prior-exams.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class PriorExamsComponent {
  @Input() model: AnamnesisUiModel;

  clearMonthYearInput(monthYearModel: string): void {
    this.model[monthYearModel] = new MonthYearModel();
  }
}
