import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';
import { MassDetailsDiagnosisTypeEnum, TracheaTypeEnum } from '@enums/thoraxCT/mediastinum';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { MediastinumFindingUiModel } from '@models/thoraxCT/ui/mediastinum/mediastinum-finding-ui.model';
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

  tracheaTypeEnum = TracheaTypeEnum;
  locationTypeEnum = LocationTypeEnum;
  massDetailsDiagnosisTypeEnum = MassDetailsDiagnosisTypeEnum;

  translationSubscriptions: Subscription[] = [];
  heightInRelationOptions: DropdownModel[];

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.initTranslations();
  }

  private initTranslations() {
    this.translationSubscriptions.push(
      this.translate.stream('thoraxCT.mediastinum.heightInRelationOptions.options').subscribe((out: DropdownModel[]) => {
        this.heightInRelationOptions = Object.values(out);
      })
    );
  }

  ngOnDestroy() {
    this.translationSubscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
