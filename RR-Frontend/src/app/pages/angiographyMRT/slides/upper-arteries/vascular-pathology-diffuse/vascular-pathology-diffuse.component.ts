import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { UpperArteriesDiagnosisTypeEnum } from '@enums/angiographyMRT/upper-arteries';
import { UpperArteriesFindingUiModel } from '@models/angiographyMRT/ui/upper-arteries/upper-arteries-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rr-vascular-pathology-diffuse',
  templateUrl: './vascular-pathology-diffuse.component.html',
  styleUrls: ['./vascular-pathology-diffuse.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class VascularPathologyDiffuseComponent implements OnInit, OnDestroy {
  @Input() model: UpperArteriesFindingUiModel;
  @Input() isCMYes: boolean;

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
      this.translateService.stream('angiographyMRT.upperArteries.W012.options').subscribe((out: DropdownModel[]) => {
        this.ddlW012 = Object.keys(out).map(e => out[e]);
      })
    );

    this.subscriptions.push(
      this.translateService.stream('angiographyMRT.upperArteries.W013.options').subscribe((out: DropdownModel[]) => {
        this.ddlW013 = Object.keys(out).map(e => out[e]);
      })
    );
  }

  clearDDL2Details() {
    this.model.isSubordinated = false;
  }

  clearDropdownCheckboxes() {
    this.model.isSuspiciousFor = false;
    this.clearDDL2Details();
  }
}
