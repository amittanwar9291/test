import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';
import { MediastinumDifferentialDiagnosisTypeEnum, TracheaTypeEnum } from '@enums/thoraxMRT/mediastinum';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { MediastinumFindingUiModel } from '@models/thoraxMRT/ui/mediastinum/mediastinum-finding-ui.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rr-trachea',
  templateUrl: './trachea.component.html',
  styleUrls: ['./trachea.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class TracheaComponent implements OnInit, OnDestroy {
  @Input() model: MediastinumFindingUiModel;

  locationTypeEnum = LocationTypeEnum;
  tracheaTypeEnum = TracheaTypeEnum;
  mediastinumDifferentialDiagnosisTypeEnum = MediastinumDifferentialDiagnosisTypeEnum;

  subscriptions: Subscription[] = [];
  ddlW010: DropdownModel[];
  ddlW011: DropdownModel[];

  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    this.initTranslations();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subs => {
      subs.unsubscribe();
    });
  }

  private initTranslations() {
    this.subscriptions.push(
      this.translateService.stream('thoraxMRT.mediastinum.W010.options').subscribe((out: DropdownModel[]) => {
        this.ddlW010 = Object.keys(out).map(e => out[e]);
      })
    );
    this.subscriptions.push(
      this.translateService.stream('thoraxMRT.mediastinum.W011.options').subscribe((out: DropdownModel[]) => {
        this.ddlW011 = Object.keys(out).map(e => out[e]);
      })
    );
  }

  clearIsSuspected() {
    this.model.isSuspected = false;
  }
}
