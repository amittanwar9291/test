import { Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { NavigationService } from '@services/shared/navigation/navigation.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { AnamnesisUI } from '@models/shoulderMRT/ui/anamnesis/anamnesis-ui.model';
import { MonthYearModel } from '@models/shared/month-year/month-year.model';
import { AnamnesisValidation } from '@models/shoulderMRT/ui/anamnesis/anamnesis-validation';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { AnamnesisDetailsType, EndoprosthesisType, FrequencyType, InstabilityType, TherapyType } from '@enums/shoulderMRT/anamnesis';

@Component({
  selector: 'rr-anamnesis',
  templateUrl: './anamnesis.component.html',
  styleUrls: ['./anamnesis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AnamnesisComponent extends SlideBaseComponent<AnamnesisUI> {
  frequencyType = FrequencyType;
  anamnesisDetailsType = AnamnesisDetailsType;
  therapyType = TherapyType;
  instabilityType = InstabilityType;
  endoprosthesisType = EndoprosthesisType;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, AnamnesisUI, commonServices, AnamnesisValidation);
  }

  /* Clearing section */
  clearFractureCalendar() {
    this.model.dateOfFracture = new MonthYearModel();
  }

  clearLuxationCalendar() {
    this.model.dateOfLuxation = new MonthYearModel();
  }
}
