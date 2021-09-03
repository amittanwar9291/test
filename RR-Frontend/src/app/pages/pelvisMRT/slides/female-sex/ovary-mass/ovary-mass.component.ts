import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FemaleSexFindingUiModel } from '@models/pelvisMRT/ui/female-sex/female-sex-finding-ui.model';
import { DifferentialDiagnosisPresetService } from '@abstractions/abstract-classes/differential-diagnosis-preset-service';
import { FemaleSexPresetHttpService } from '@services/pelvisMRT/http/female-sex/female-sex-preset-http.service';
import { Subscription } from 'rxjs';
import { FemaleSexHelperService } from '../female-sex-helper.service';

@Component({
  selector: 'rr-ovary-mass',
  templateUrl: './ovary-mass.component.html',
  styleUrls: ['./ovary-mass.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
  providers: [
    {
      provide: DifferentialDiagnosisPresetService,
      useClass: FemaleSexPresetHttpService
    }
  ]
})
export class OvaryMassComponent implements OnInit, OnDestroy {
  @Input() model: FemaleSexFindingUiModel;
  subscriptions: Subscription[] = [];
  activeTabIndex: number;

  constructor(private femaleSexHelperService: FemaleSexHelperService) {}

  ngOnInit() {
    this.subscriptions.push(this.femaleSexHelperService.activeTabIndex.subscribe(value => (this.activeTabIndex = value)));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  onTabChange(event) {
    this.femaleSexHelperService.activeTabIndex.next(event.index);
  }
}
