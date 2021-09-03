import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BonesFindingUiModel } from '@models/handMRT/ui/bones/bones-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rr-mass-osteolysis',
  templateUrl: './mass-osteolysis.component.html',
  styleUrls: ['./mass-osteolysis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MassOsteolysisComponent implements OnInit, OnDestroy {
  @Input() model: BonesFindingUiModel;
  subscriptions: Subscription[] = [];
  localizationType: DropdownModel[];
  tumorDifferentialDiagnoseType: DropdownModel[];
  tumorDifferentialDiagnoseType2: DropdownModel[];

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.translate.stream('handMRT.bones.localizationType').subscribe((out: DropdownModel[]) => {
        this.localizationType = Object.keys(out).map(e => out[e]);
      })
    );

    this.subscriptions.push(
      this.translate.stream('handMRT.bones.tumorDifferentialDiagnoseType.options').subscribe((out: DropdownModel[]) => {
        this.tumorDifferentialDiagnoseType = Object.keys(out).map(e => out[e]);
      })
    );

    this.subscriptions.push(
      this.translate.stream('handMRT.bones.tumorDifferentialDiagnoseType2.options').subscribe((out: DropdownModel[]) => {
        this.tumorDifferentialDiagnoseType2 = Object.keys(out).map(e => out[e]);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
