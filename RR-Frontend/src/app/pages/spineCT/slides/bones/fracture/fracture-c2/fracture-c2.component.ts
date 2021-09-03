import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { AxisArcTypeEnum } from '@enums/spineCT/bones/fracture/c2/axis-arc-type.enum';
import { BonesDensityTypeEnum } from '@enums/spineCT/bones/fracture/c2/bones-density-type.enum';
import { C1ToC2FractureTypeEnum } from '@enums/spineCT/bones/fracture/c2/c1-to-c2-fracture-type.enum';
import { C2FractureDetailsTypeEnum } from '@enums/spineCT/bones/fracture/c2/c2-fracture-details-type.enum';
import { C2FractureLocalizationTypeEnum } from '@enums/spineCT/bones/fracture/c2/c2-fracture-localization-type.enum';
import { StabilityTypeEnum } from '@enums/spineCT/bones/fracture/c2/stability-type.enum';
import { NoFutherDefinedType } from '@enums/spineCT/bones/fracture/no-futher-defined-type.enum';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { BonesFindingUiModel } from '@models/spineCT/ui/bones/bones-finding-ui.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rr-fracture-c2',
  templateUrl: './fracture-c2.component.html',
  styleUrls: ['../fracture.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class FractureC2Component implements OnInit, OnDestroy {
  @Input() model: BonesFindingUiModel;

  w017Values: DropdownModel[];
  subscriptions: Subscription[] = [];

  c1ToC2FractureTypeEnum = C1ToC2FractureTypeEnum;
  c2FractureLocalizationTypeEnum = C2FractureLocalizationTypeEnum;
  c2FractureDetailsTypeEnum = C2FractureDetailsTypeEnum;
  bonesDensityTypeEnum = BonesDensityTypeEnum;
  axisArcTypeEnum = AxisArcTypeEnum;
  noFutherDefinedTypeEnum = NoFutherDefinedType;
  stabilityTypeEnum = StabilityTypeEnum;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.initTranslations();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(t => t.unsubscribe());
  }

  private initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('spineCT.bones.W017.options').subscribe((out: DropdownModel[]) => {
        this.w017Values = out;
      })
    );
  }
}
