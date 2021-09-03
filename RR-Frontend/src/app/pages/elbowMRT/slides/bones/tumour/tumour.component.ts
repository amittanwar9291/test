import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

import { BonesFindingUiModel } from '@models/elbowMRT/ui/bones/bones-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

@Component({
  selector: 'rr-tumour',
  templateUrl: './tumour.component.html',
  styleUrls: ['./tumour.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class TumourComponent implements OnInit, OnDestroy {
  @Input() model: BonesFindingUiModel;
  differentialDiagnosisArray: DropdownModel[];

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
      this.translate.stream('bones.differentialDiagnosisList').subscribe((out: DropdownModel[]) => {
        this.differentialDiagnosisArray = Object.keys(out).map(e => out[e]);
      })
    );
  }
}
