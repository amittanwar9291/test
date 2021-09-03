import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { A0ClassificationASubtypeEnum } from '@enums/spineCT/bones/fracture/a0Classification-a-subtype.enum';
import { A0ClassificationBSubtypeEnum } from '@enums/spineCT/bones/fracture/a0Classification-b-subtype.enum';
import { A0ClassificationCSubtypeEnum } from '@enums/spineCT/bones/fracture/a0Classification-c-subtype.enum';
import { A0ClassificationTypeEnum } from '@enums/spineCT/bones/fracture/a0Classification-type.enum';
import { NoFutherDefinedType } from '@enums/spineCT/bones/fracture/no-futher-defined-type.enum';
import { OsSacrumDenisClassificationTypeEnum } from '@enums/spineCT/bones/fracture/os-sacrum-denis-classification-type.enum';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { BonesFindingUiModel } from '@models/spineCT/ui/bones/bones-finding-ui.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rr-fracture-os-sacrum',
  templateUrl: './fracture-os-sacrum.component.html',
  styleUrls: ['../fracture.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class FractureOsSacrumComponent implements OnInit, OnDestroy {
  @Input() model: BonesFindingUiModel;
  @Input() currentSelected: string;

  w020Values: DropdownModel[];
  subscriptions: Subscription[] = [];

  a0ClassificationTypeEnum = A0ClassificationTypeEnum;
  a0ClassificationASubtypeEnum = A0ClassificationASubtypeEnum;
  a0ClassificationBSubtypeEnum = A0ClassificationBSubtypeEnum;
  a0ClassificationCSubtypeEnum = A0ClassificationCSubtypeEnum;
  noFutherDefinedTypeEnum = NoFutherDefinedType;
  osSacrumDenisClassificationTypeEnum = OsSacrumDenisClassificationTypeEnum;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.initTranslations();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(t => t.unsubscribe());
  }

  private initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('spineCT.bones.W020.options').subscribe((out: DropdownModel[]) => {
        this.w020Values = out;
      })
    );
  }
}
