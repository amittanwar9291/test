import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SideTypeEnum } from '@enums/spineCT/bones/side-type-enum';
import { GehweilerTypeEnum } from '@enums/spineCT/bones/fracture/c1/gehweiler-type.enum';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { BonesFindingUiModel } from '@models/spineCT/ui/bones/bones-finding-ui.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { NoFutherDefinedType } from '@enums/spineCT/bones/fracture/no-futher-defined-type.enum';

@Component({
  selector: 'rr-fracture-c1',
  templateUrl: './fracture-c1.component.html',
  styleUrls: ['../fracture.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class FractureC1Component implements OnInit, OnDestroy {
  @Input() model: BonesFindingUiModel;

  w016Values: DropdownModel[];
  subscriptions: Subscription[] = [];

  gehweilerTypeEnum = GehweilerTypeEnum;
  sideTypeEnum = SideTypeEnum;
  noFutherDefinedType = NoFutherDefinedType;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.initTranslations();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(t => t.unsubscribe());
  }

  private initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('spineCT.bones.W016.options').subscribe((out: DropdownModel[]) => {
        this.w016Values = out;
      })
    );
  }
}
