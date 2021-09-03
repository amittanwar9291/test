import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { GastrointestinalTractFindingUiModel } from '@models/abdomenMRT/ui/gastrointestinal-tract/gastrointestinal-tract-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import {
  CddClassificationTypeEnum,
  CharacteristicsTypeEnum,
  HansenAndStockTypeEnum
} from '@enums/abdomenMRT/gastrointestinal-tract/bowel-diverticula';

@Component({
  selector: 'rr-bowel-diverticula-characterization-one',
  templateUrl: './bowel-diverticula-characterization-one.component.html',
  styleUrls: ['./bowel-diverticula-characterization-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class BowelDiverticulaCharacterizationOneComponent implements OnInit, OnDestroy {
  @Input() model: GastrointestinalTractFindingUiModel;
  hansenAndStockType = HansenAndStockTypeEnum;
  cddClassificationType = CddClassificationTypeEnum;
  subscriptions: Subscription[] = [];
  hansenAndStockOptions: DropdownModel[];
  cddClassificationOptions: DropdownModel[];
  characteristicsType = CharacteristicsTypeEnum;

  constructor(private translateService: TranslateService) {}
  ngOnInit() {
    this.initTranslations();
  }
  private initTranslations(): void {
    this.subscriptions.push(
      this.translateService.stream('abdomenMRT.gastrointestinal.W042hansenAndStock').subscribe((out: DropdownModel[]) => {
        this.hansenAndStockOptions = out;
      })
    ),
      this.subscriptions.push(
        this.translateService.stream('abdomenMRT.gastrointestinal.w043cDDClassification').subscribe((out: DropdownModel[]) => {
          this.cddClassificationOptions = out;
        })
      );
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
