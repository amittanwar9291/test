import { Component, Input, OnDestroy } from '@angular/core';
import { MyelonFindingUiModel } from '@models/spineCT';
import { ControlContainer, NgForm } from '@angular/forms';
import { SpineCTMyelonHelperService } from '../spine-ct-myelon-helper.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'rr-mass',
  templateUrl: './mass.component.html',
  styleUrls: ['./mass.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MyelonMassComponent implements OnDestroy {
  @Input() model: MyelonFindingUiModel;
  activeTabIndex: number;
  activeTabIndexSub: Subscription;

  constructor(private spineCTMyelonHelperService: SpineCTMyelonHelperService) {
    this.activeTabIndexSub = spineCTMyelonHelperService.activeTabIndex.subscribe(v => {
      this.activeTabIndex = v;
    });
  }

  ngOnDestroy() {
    this.activeTabIndexSub.unsubscribe();
  }

  onTabChange(event: number) {
    this.spineCTMyelonHelperService.activeTabIndex.next(event);
  }
}
