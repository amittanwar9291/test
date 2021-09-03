import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MeningesFindingUiModel } from '@models/headMRT/ui/meninges/meninges-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'rr-diffuse-changes',
  templateUrl: './diffuse-changes.component.html',
  styleUrls: ['./diffuse-changes.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DiffuseChangesComponent implements OnInit, OnDestroy {
  @Input() model: MeningesFindingUiModel;
  @Input() isDWIInAnySequence: boolean;
  @Input() isContrastEnhanced: boolean;

  subscriptions: Subscription[] = [];
  diffDiagnosisOptions: DropdownModel[];

  constructor(private translate: TranslateService) {
    this.initTranslations();
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  private initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('headMRT.meninges.meningesDiffuseDiagnosisOptions').subscribe((out: DropdownModel[]) => {
        this.diffDiagnosisOptions = Object.keys(out).map(e => out[e]);
      })
    );
  }
}
