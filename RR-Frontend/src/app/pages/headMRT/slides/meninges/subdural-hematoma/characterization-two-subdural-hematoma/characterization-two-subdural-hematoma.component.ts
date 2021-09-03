import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { CharacterizationHematomaTypeEnum, SideTypeEnum } from '@enums/headMRT/meninges';
import { MeningesFindingUiModel } from '@models/headMRT/ui/meninges/meninges-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rr-characterization-two-subdural-hematoma',
  templateUrl: './characterization-two-subdural-hematoma.component.html',
  styleUrls: ['./characterization-two-subdural-hematoma.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationTwoSubduralHematomaComponent implements OnInit, OnDestroy {
  @Input() model: MeningesFindingUiModel;
  @Input() isContrastEnhanced: boolean[];

  sideType = SideTypeEnum;
  characterizationHematomaType = CharacterizationHematomaTypeEnum;

  subscriptions: Subscription[] = [];
  regionTypeOptions: DropdownModel[];

  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    this.initTranslations();
  }

  private initTranslations() {
    this.subscriptions.push(
      this.translateService.stream('headMRT.meninges.W068').subscribe((out: DropdownModel[]) => {
        this.regionTypeOptions = Object.keys(out).map(e => out[e]);
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subs => {
      subs.unsubscribe();
    });
  }
}
