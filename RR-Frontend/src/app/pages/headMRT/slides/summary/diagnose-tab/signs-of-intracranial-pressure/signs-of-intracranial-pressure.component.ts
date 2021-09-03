import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SummaryFindingUiModel } from '@models/headMRT/ui/summary/summary-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { SideTypeEnum } from '@enums/headMRT/common/side-type.enum';
import { WedgingTypeEnum } from '@enums/headMRT/summary/signs-of-intracranial-pressure';
import { nameof } from 'ts-simple-nameof';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';

@Component({
  selector: 'rr-signs-of-intracranial-pressure',
  templateUrl: './signs-of-intracranial-pressure.component.html',
  styleUrls: ['./signs-of-intracranial-pressure.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SignsOfIntracranialPressureComponent implements OnInit, OnDestroy {
  constructor(private translateService: TranslateService, private validationHelperService: ValidationHelperService) {}
  @Input() model: SummaryFindingUiModel;

  herniationOptions: DropdownModel[];
  subscriptions: Subscription[] = [];
  sideType = SideTypeEnum;
  wedgingType = WedgingTypeEnum;

  ngOnInit() {
    this.initTranslations();
  }

  resetIsMidlineShift() {
    this.model.sideType = SideTypeEnum.None;
    this.model.midlineShiftInMm = null;
    this.closeError();
  }

  closeError() {
    this.validationHelperService.removeError(nameof<SummaryFindingUiModel>(m => m.sideType));
  }

  private initTranslations(): void {
    this.subscriptions.push(
      this.translateService.stream('headMRT.summary.W068.options').subscribe(out => {
        this.herniationOptions = Object.values(out);
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subs => {
      subs.unsubscribe();
    });
  }
}
