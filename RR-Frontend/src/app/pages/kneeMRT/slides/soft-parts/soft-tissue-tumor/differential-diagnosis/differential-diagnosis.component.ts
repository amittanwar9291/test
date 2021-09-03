import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { SoftPartsFindingUiModel } from '@models/kneeMRT/ui/soft-parts/soft-parts-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { SoftPartsDiagnosisTypeEnum } from '@enums/kneeMRT/soft-parts/soft-parts-diagnosis-type.enum';

@Component({
  selector: 'rr-differential-diagnosis',
  templateUrl: './differential-diagnosis.component.html',
  styleUrls: ['./differential-diagnosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DifferentialDiagnosisComponent implements OnInit, OnDestroy {
  @Input() model: SoftPartsFindingUiModel;
  differentialDiagnosisArray: DropdownModel[];
  differentialDiagnosisArray2: DropdownModel[];

  translationSubscriptions: Subscription[] = [];

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.initTranslations();
  }

  ngOnDestroy(): void {
    this.translationSubscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }

  private initTranslations() {
    this.translationSubscriptions.push(
      this.translate.stream('kneeMRT.softParts.differentialDiagnosisListW017.options').subscribe((out: DropdownModel[]) => {
        this.differentialDiagnosisArray = Object.keys(out).map(e => out[e]);
      })
    );

    this.translationSubscriptions.push(
      this.translate.stream('kneeMRT.softParts.differentialDiagnosisListW018.options').subscribe((out: DropdownModel[]) => {
        this.differentialDiagnosisArray2 = Object.keys(out).map(e => out[e]);
      })
    );
  }

  clearIsSecondary() {
    this.model.isSecondary = false;
  }
}
