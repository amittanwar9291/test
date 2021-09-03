import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { AbdomenLocalizationTypeEnum } from '@enums/thoraxCT/soft-parts';
import { DiffuseLesionTypeEnum } from '@enums/thoraxCT/soft-parts/upper-abdomen-liver-gall-bladder';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { SoftPartsFindingUiModel } from '@models/thoraxCT/ui/soft-parts/soft-parts-finding-ui.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rr-liver-gall-bladder',
  templateUrl: './liver-gall-bladder.component.html',
  styleUrls: ['./liver-gall-bladder.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class LiverGallBladderComponent implements OnInit, OnDestroy {
  @Input() model: SoftPartsFindingUiModel;

  abdomenLocalizationTypeEnum = AbdomenLocalizationTypeEnum;
  diffuseLesionTypeEnum = DiffuseLesionTypeEnum;

  subscriptions: Subscription[] = [];
  classificationTypeOptions: DropdownModel[];

  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    this.initTranslations();
  }

  private initTranslations() {
    this.subscriptions.push(
      this.translateService.stream('thoraxCT.softParts.W041.options').subscribe((out: DropdownModel[]) => {
        this.classificationTypeOptions = Object.keys(out).map(e => out[e]);
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subs => {
      subs.unsubscribe();
    });
  }
}
