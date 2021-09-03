import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SoftTissuesFindingUiModel } from '@models/spineCT';
import { SoftTissuesHelperService } from '../soft-tissues-helper.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { DifferentialDiagnosisPresetService } from '@abstractions/abstract-classes/differential-diagnosis-preset-service';
import { SoftTissuePresetHttpService } from '@services/spineCT/http/soft-tissues/soft-tissues-preset-http.service';

@Component({
  selector: 'rr-paraspinal-mass',
  templateUrl: './paraspinal-mass.component.html',
  styleUrls: ['./paraspinal-mass.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
  providers: [
    {
      provide: DifferentialDiagnosisPresetService,
      useClass: SoftTissuePresetHttpService
    }
  ]
})
export class ParaspinalMassComponent implements OnInit, OnDestroy {
  @Input() model: SoftTissuesFindingUiModel;
  activeTabIndexSubsrtption: Subscription;
  activeTabIndex: number;

  constructor(private softTissuesHelperService: SoftTissuesHelperService) {}

  ngOnInit(): void {
    this.activeTabIndexSubsrtption = this.softTissuesHelperService.activeTabIndex.subscribe(v => (this.activeTabIndex = v));
  }

  ngOnDestroy() {
    this.activeTabIndexSubsrtption.unsubscribe();
  }

  onTabChange(event: any): void {
    this.softTissuesHelperService.activeTabIndex.next(event.index);
  }
}
