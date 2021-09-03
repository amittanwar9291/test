import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CoronaryArteriesFindingUiModel } from '@models/angiographyCT/ui/coronary-arteries/coronary-arteries-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { CADRADSScoreTypeEnum } from '@enums/angiographyCT/coronary-arteries/stenosis-occlusion/cadrads-score-type.enum';

@Component({
  selector: 'rr-stenosis-occlusion',
  templateUrl: './stenosis-occlusion.component.html',
  styleUrls: ['./stenosis-occlusion.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class StenosisOcclusionComponent implements OnInit, OnDestroy {
  @Input() model: CoronaryArteriesFindingUiModel;
  subscriptions: Subscription[] = [];
  w014: DropdownModel[];
  w015: DropdownModel[];
  cADRADSScoreTypeEnum = CADRADSScoreTypeEnum;

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.initTranslations();
  }

  private initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('angiographyCT.coronaryArteries.w014.options').subscribe((out: DropdownModel[]) => (this.w014 = out)),
      this.translate.stream('angiographyCT.coronaryArteries.w015.options').subscribe((out: DropdownModel[]) => (this.w015 = out))
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
