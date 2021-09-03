import { Component, Input, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { AortaFindingUiModel } from '@models/angiographyMRT/ui/aorta/aorta-finding-ui.model';
import { AortaHelperService } from '../aorta-helper.service';
import { PathologyTypeEnum } from '@enums/angiographyMRT/aorta/pathology-type.enum';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { StanfordClassificationTypeEnum } from '@enums/angiographyMRT/aorta/stanford-classification-type.enum';
import { BeginTypeEnum } from '@enums/angiographyMRT/aorta/begin-type.enum';

@Component({
  selector: 'rr-acute-aortic-syndrome',
  templateUrl: './acute-aortic-syndrome.component.html',
  styleUrls: ['./acute-aortic-syndrome.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AcuteAorticSyndromeComponent implements OnDestroy {
  @Input() model: AortaFindingUiModel;
  subscriptions: Subscription[] = [];

  pathologyTypeEnum = PathologyTypeEnum;
  stanfordClassificationTypeEnum = StanfordClassificationTypeEnum;
  beginTypeEnum = BeginTypeEnum;
  svenssonClassificationDropdownValues: DropdownModel[];

  aorticDissectionContentToReset =
    'IntramuralAorticHematomaCont1 IntramuralAorticHematomaCont2 PenetratingArterioscleroticAorticUlcerCont1 PenetratingArterioscleroticAorticUlcerCont2';

  intramuralAorticHematomaContentToReset =
    'AorticDissectionCont1 AorticDissectionCont2 PenetratingArterioscleroticAorticUlcerCont1 PenetratingArterioscleroticAorticUlcerCont2 ThrombosisFalseLumenContainer';

  penetratingArterioscleroticAorticUlcerContentToReset =
    'IntramuralAorticHematomaCont1 IntramuralAorticHematomaCont2 AorticDissectionCont1 AorticDissectionCont2 ThrombosisFalseLumenContainer';

  constructor(private translate: TranslateService, private aortaHelperService: AortaHelperService) {
    this.initTranslations();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(t => t.unsubscribe());
  }

  openLargeLocalizer(isReentry: boolean): void {
    this.aortaHelperService.isLargeLocalizerOpened.next({
      isLocalizationReentry: isReentry,
      isSingleChoice: true
    });
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('angiographyMRT.aorta.svenssonClassificationDropdown.options').subscribe((out: DropdownModel[]) => {
        this.svenssonClassificationDropdownValues = Object.keys(out).map(e => out[e]);
      })
    );
  }
}
