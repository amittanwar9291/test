import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FemaleSexFindingUiModel } from '@models/pelvisMRT/ui/female-sex/female-sex-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { MarginTypeEnum } from '@enums/pelvisMRT/female-sex/margin-type.enum';
import { HomogenityTypeEnum } from '@enums/pelvisMRT/female-sex/homogenity-type.enum';

@Component({
  selector: 'rr-endometriosis-characterization-one',
  templateUrl: './endometriosis-characterization-one.component.html',
  styleUrls: ['./endometriosis-characterization-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class EndometriosisCharacterizationOneComponent implements OnInit, OnDestroy {
  @Input() model: FemaleSexFindingUiModel;
  localizationW067: DropdownModel[];

  marginTypeEnum = MarginTypeEnum;
  homogenityTypeEnum = HomogenityTypeEnum;

  subscriptions: Subscription[] = [];

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subscriptions.push(
      this.translate
        .stream('pelvisMRT.femaleGender.localizationW067.options')
        .subscribe((out: DropdownModel[]) => (this.localizationW067 = out))
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
