import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { A0ClassificationASubtypeEnum } from '@enums/spineCT/bones/fracture/a0Classification-a-subtype.enum';
import { A0ClassificationBSubtypeEnum } from '@enums/spineCT/bones/fracture/a0Classification-b-subtype.enum';
import { A0ClassificationTypeEnum } from '@enums/spineCT/bones/fracture/a0Classification-type.enum';
import { BonesDiagnosisTypeEnum } from '@enums/spineCT/bones/bones-diagnosis-type.enum';
import { FractureTypeEnum } from '@enums/spineCT/bones/fracture/fracture-type.enum';
import { GenantClassificationGradeTypeEnum } from '@enums/spineCT/bones/fracture/genant-classification-grade-type.enum';
import { GenantFractureTypeEnum } from '@enums/spineCT/bones/fracture/genant-fracture-type.enum';
import { NoFutherDefinedType } from '@enums/spineCT/bones/fracture/no-futher-defined-type.enum';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { BonesFindingUiModel } from '@models/spineCT/ui/bones/bones-finding-ui.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rr-fracture-other',
  templateUrl: './fracture-other.component.html',
  styleUrls: ['./fracture-other.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class FractureOtherComponent implements OnInit, OnDestroy {
  @Input() model: BonesFindingUiModel;
  @Input() currentSelected: string;

  w018Values: DropdownModel[];
  w019Values: DropdownModel[];
  subscriptions: Subscription[] = [];

  fractureTypeEnum = FractureTypeEnum;
  noFutherDefinedTypeEnum = NoFutherDefinedType;
  bonesDiagnosisTypeEnum = BonesDiagnosisTypeEnum;
  a0ClassificationTypeEnum = A0ClassificationTypeEnum;
  a0ClassificationASubtypeEnum = A0ClassificationASubtypeEnum;
  a0ClassificationBSubtypeEnum = A0ClassificationBSubtypeEnum;
  genantClassificationGradeTypeEnum = GenantClassificationGradeTypeEnum;
  genantFractureTypeEnum = GenantFractureTypeEnum;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.initTranslations();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(t => t.unsubscribe());
  }

  private initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('spineCT.bones.W018.options').subscribe((out: DropdownModel[]) => {
        this.w018Values = out;
      }),
      this.translate.stream('spineCT.bones.W019.options').subscribe((out: DropdownModel[]) => {
        this.w019Values = out;
      })
    );
  }

  resetDiagnosisCheckboxes() {
    this.model.isSchmorlNode = false;
    this.model.isSubordinate = false;
  }
}
