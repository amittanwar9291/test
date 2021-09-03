import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { CortexFindingUiModel } from '@models/headCT/ui/cortex/cortex-finding-ui-model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { RegionTypeEnum } from '@enums/shared/head/cortex/common';

@Component({
  selector: 'rr-focal',
  templateUrl: './focal.component.html',
  styleUrls: ['./focal.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class FocalComponent implements OnInit, OnDestroy {
  @Input() model: CortexFindingUiModel;
  @Input() isExaminationArea;
  @Input() isContrastEnhanced;
  @Input() regionDropDownValues: RegionTypeEnum[];
  constructor(private translateService: TranslateService) {}

  subscriptions: Subscription[] = [];
  differentialDiagnosisOptions01: DropdownGroupedModel[];
  differentialDiagnosisOptions0203: DropdownGroupedModel[];
  classificationWhoOptions: DropdownModel[];
  classificationAdamsOptions: DropdownModel[];

  ngOnInit() {
    this.initTranslations();
  }

  private initTranslations(): void {
    this.subscriptions.push(
      this.translateService.stream('headCT.cortex.cortexDifferentialDiagnose01.options').subscribe((out: DropdownGroupedModel[]) => {
        this.differentialDiagnosisOptions01 = out;
      }),
      this.translateService.stream('headCT.cortex.cortexDifferentialDiagnose0203.options').subscribe((out: DropdownGroupedModel[]) => {
        this.differentialDiagnosisOptions0203 = out;
      }),
      this.translateService.stream('headCT.cortex.classificationWHOW034.options').subscribe((out: DropdownModel[]) => {
        this.classificationWhoOptions = out;
      }),
      this.translateService.stream('headCT.cortex.classificationAdamsW037.options').subscribe((out: DropdownModel[]) => {
        this.classificationAdamsOptions = out;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }
}
