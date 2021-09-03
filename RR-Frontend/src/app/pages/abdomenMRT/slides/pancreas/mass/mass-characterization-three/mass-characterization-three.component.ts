import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { Subscription } from 'rxjs';

import { TranslateService } from '@ngx-translate/core';

import { PancreasFindingUiModel } from '@models/abdomenMRT/ui/pancreas/pancreas-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

import { PancreaticDuctPathologyTypeEnum } from '@enums/abdomenMRT/pancreas/mass/pancreatic-duct-pathology-type.enum';

@Component({
  selector: 'rr-mass-characterization-three',
  templateUrl: './mass-characterization-three.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MassCharacterizationThreeComponent implements OnInit, OnDestroy {
  @Input() model: PancreasFindingUiModel;
  @Input() validationProps: string;

  subscriptions: Subscription[] = [];

  characteristicsOptions1: DropdownModel[];
  characteristicsOptions2: DropdownModel[];

  pancreaticDuctPathologyType = PancreaticDuctPathologyTypeEnum;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.initTranslations();
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('abdomenMRT.pancreas.characteristicsOptions1.options').subscribe((out: DropdownModel[]) => {
        this.characteristicsOptions1 = Object.values(out);
      }),
      this.translate.stream('abdomenMRT.pancreas.characteristicsOptions2.options').subscribe((out: DropdownModel[]) => {
        this.characteristicsOptions2 = Object.values(out);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
