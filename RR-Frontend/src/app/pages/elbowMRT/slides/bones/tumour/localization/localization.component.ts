import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { HistologyConfirmedTypeEnum } from '@enums/elbowMRT/bones';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { BonesFindingUiModel } from '@models/elbowMRT/ui/bones/bones-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rr-localization',
  templateUrl: './localization.component.html',
  styleUrls: ['./localization.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class LocalizationComponent implements OnInit, OnDestroy {
  @Input() model: BonesFindingUiModel;

  descriptionTypeEnum = DescriptionTypeEnum;
  histologyConfirmedTypeEnum = HistologyConfirmedTypeEnum;

  subscriptions: Subscription[] = [];
  ddlW015: DropdownModel[];

  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    this.initTranslations();
  }

  private initTranslations() {
    this.subscriptions.push(
      this.translateService.stream('elbowMRT.bones.W015.options').subscribe((out: DropdownModel[]) => {
        this.ddlW015 = Object.keys(out).map(e => out[e]);
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subs => {
      subs.unsubscribe();
    });
  }

  clearDDLCheckboxes() {
    this.model.isSuspectedDiagnosis = false;
    this.clearSubordinateCheckbox();
  }

  clearSubordinateCheckbox() {
    this.model.isSubordinated = false;
  }

  clearSecondandThirdPlane() {
    if (this.model.extensionSizeInMm === null) {
      this.model.extensionSecondPlaneInMm = null;
      this.clearThirdPlane();
    }
  }

  clearThirdPlane() {
    if (this.model.extensionSecondPlaneInMm === null) {
      this.model.extensionThirdPlaneInMm = null;
    }
  }
}
