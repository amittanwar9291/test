import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { UpperArteriesDiagnosisTypeEnum } from '@enums/angiographyCT/upper-arteries';
import { UpperArteriesFindingUiModel } from '@models/angiographyCT/ui/upper-arteries/upper-arteries-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rr-diffuse-vascular-pathology',
  templateUrl: './diffuse-vascular-pathology.component.html',
  styleUrls: ['./diffuse-vascular-pathology.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DiffuseVascularPathologyComponent implements OnInit, OnDestroy {
  @Input() model: UpperArteriesFindingUiModel;

  upperArteriesDiagnosisTypeEnum = UpperArteriesDiagnosisTypeEnum;

  subscriptions: Subscription[] = [];
  ddlW012: DropdownModel[];
  ddlW013: DropdownModel[];

  checkboxesValidationGroup =
    'isBrachiocephalicTrunk isRightSubclavianArtery isRightAxillarArtery isRightBrachialArtery isRightUlnarArtery isRightRadialArtery isRightDeepPalmarArch isRightSuperficialPalmarArch isRightPalmarDigitalArteries isLeftSubclavianArtery isLeftAxillarArtery isLeftBrachialArtery isLeftUlnarArtery isLeftRadialArtery isLeftDeepPalmarArch isLeftSuperficialPalmarArch isLeftPalmarDigitalArteries';

  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    this.initTranslations();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  private initTranslations() {
    this.subscriptions.push(
      this.translateService.stream('angiographyCT.upperArteries.W012.options').subscribe((out: DropdownModel[]) => {
        this.ddlW012 = out;
      })
    );

    this.subscriptions.push(
      this.translateService.stream('angiographyCT.upperArteries.W013.options').subscribe((out: DropdownModel[]) => {
        this.ddlW013 = out;
      })
    );
  }

  clearDDL2Details() {
    this.model.isSubordinated = false;
  }

  clearDropdownCheckboxes() {
    this.model.isSuspiciousOf = false;
    this.clearDDL2Details();
  }
}
