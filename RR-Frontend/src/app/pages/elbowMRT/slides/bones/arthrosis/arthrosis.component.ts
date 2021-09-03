import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BonesFindingUiModel } from '@models/elbowMRT/ui/bones/bones-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rr-arthrosis',
  templateUrl: './arthrosis.component.html',
  styleUrls: ['./arthrosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ArthrosisComponent implements OnInit, OnDestroy {
  @Input() model: BonesFindingUiModel;

  subscriptions: Subscription[] = [];
  ddlW014: DropdownModel[];

  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    this.initTranslations();
  }

  private initTranslations() {
    this.subscriptions.push(
      this.translateService.stream('elbowMRT.bones.W014.options').subscribe((out: DropdownModel[]) => {
        this.ddlW014 = Object.keys(out).map(e => out[e]);
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subs => {
      subs.unsubscribe();
    });
  }
}
