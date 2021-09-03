import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FemaleSexFindingUiModel } from '@models/pelvisMRT/ui/female-sex/female-sex-finding-ui.model';
import { Subscription } from 'rxjs';
import { FemaleSexHelperService } from '../female-sex-helper.service';

@Component({
  selector: 'rr-endometriosis',
  templateUrl: './endometriosis.component.html',
  styleUrls: ['./endometriosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class EndometriosisComponent implements OnInit, OnDestroy {
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
