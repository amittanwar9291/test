import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { BasalNucleiFindingUiModel } from '@models/headCT/ui/basal-nuclei/basal-nuclei-finding-ui.model';
import { BasalNucleiDiagnosisTypeEnum } from '@enums/headCT/basal-nuclei/basal-nuclei-diagnosis-type.enum';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rr-pathology',
  templateUrl: './pathology.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class PathologyComponent implements OnInit, OnDestroy {
  @Input() model: BasalNucleiFindingUiModel;

  differentialDiagnosisOptions: DropdownModel[];
  subscriptions: Subscription[] = [];

  differentialDiagnosisType = BasalNucleiDiagnosisTypeEnum;

  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    this.initTranslations();
  }

  private initTranslations(): void {
    this.subscriptions.push(
      this.translateService.stream('headCT.basalNuclei.differentialDiagnosis01').subscribe((out: DropdownModel[]) => {
        this.differentialDiagnosisOptions = Object.values(out);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
