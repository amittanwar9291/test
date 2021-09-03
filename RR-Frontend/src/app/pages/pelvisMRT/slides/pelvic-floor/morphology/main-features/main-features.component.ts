import { Component, Input, OnDestroy } from '@angular/core';
import { PelvicFloorFindingUiModel } from '@models/pelvisMRT/ui/pelvic-floor/pelvic-floor-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { LesionTypeEnum } from '@enums/pelvisMRT/pelvic-floor/lesion-type.enum';
import { Subscription } from 'rxjs';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'rr-pelvic-floor-morph-main-features',
  templateUrl: './main-features.component.html',
  styleUrls: ['./main-features.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MainFeaturesComponent implements OnDestroy {
  @Input() model: PelvicFloorFindingUiModel;
  sslLesionType: DropdownModel[];
  lesionType = LesionTypeEnum;

  translateSub: Subscription;

  constructor(private translate: TranslateService) {
    this.translateSub = translate.stream('pelvisMRT.pelvicFloor.lesionOfTheExternal.options').subscribe(out => {
      this.sslLesionType = Object.values(out);
    });
  }

  ngOnDestroy() {
    this.translateSub.unsubscribe();
  }
}
