import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';
import { BonesFindingUiModel } from '@models/handMRT/ui/bones/bones-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { BonesHelperService, ComplexLocalizerData } from '../bones-helper.service';

@Component({
  selector: 'rr-arthritis',
  templateUrl: './arthritis.component.html',
  styleUrls: ['./arthritis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ArthritisComponent implements OnInit, OnDestroy {
  @Input() model: BonesFindingUiModel;
  side: LocationTypeEnum;

  arthritisDifferentialDiagnoseType: DropdownModel[];
  subscriptions: Subscription[] = [];

  constructor(private translateService: TranslateService, private bonesHelperService: BonesHelperService) {}

  ngOnInit() {
    this.subscriptions.push(
      this.bonesHelperService.localizationSide.subscribe(value => {
        this.side = value;
      })
    );
    this.initTranslations();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subs => {
      subs.unsubscribe();
    });
  }

  private initTranslations() {
    this.subscriptions.push(
      this.translateService.stream('handMRT.bones.arthritisDifferentialDiagnoseType').subscribe((out: DropdownModel[]) => {
        this.arthritisDifferentialDiagnoseType = Object.keys(out).map(e => out[e]);
      })
    );
  }

  openLargeLocalizer() {
    this.bonesHelperService.largeLocalizerOpen.next(new ComplexLocalizerData('joints', false));
  }
}
