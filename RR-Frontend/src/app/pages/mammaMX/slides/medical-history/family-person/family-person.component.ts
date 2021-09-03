import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { Subscription } from 'rxjs';

import { Dropdown } from 'primeng/dropdown/dropdown';

import { clone, values } from 'lodash';

import { TranslateService } from '@ngx-translate/core';

import { FamilyPersonUi } from '@models/mammaMX/ui/medical-history/family-person-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

@Component({
  selector: 'rr-family-person',
  templateUrl: './family-person.component.html',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class FamilyPersonComponent implements OnInit, OnDestroy {
  @Input() model: FamilyPersonUi;
  @Input() selectedPerson: string;

  subscriptions: Subscription[] = [];
  sides: DropdownModel[];
  olderThan: string;
  youngerThan: string;
  years: DropdownModel[];

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.getYears();
    this.initTranslations();
  }

  center45Value(dropdown: Dropdown): void {
    if (dropdown.selectedOption == null) {
      const list = dropdown.el.nativeElement.getElementsByClassName('ui-dropdown-item');
      const index = Math.floor(list.length / 2 + 4);
      const item = list[index];
      item.scrollIntoView();
    }
  }

  getYears(): void {
    this.years = [];
    this.years.push(new DropdownModel(this.olderThan + ' 80', '81'));
    for (let i = 80; i >= 25; i--) {
      this.years.push(new DropdownModel(i.toString(), i.toString()));
    }
    this.years.push(new DropdownModel(this.youngerThan + ' 25', '24'));
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('shared.youngerThan').subscribe((young: string) => {
        const updatedYearsOptions = clone(this.years);

        this.youngerThan = young;
        updatedYearsOptions.pop();
        updatedYearsOptions.push(new DropdownModel(young, '24'));
        this.years = [...updatedYearsOptions];
      }),

      this.translate.stream('shared.olderThan').subscribe((old: string) => {
        const updatedYearsOptions = clone(this.years);

        this.olderThan = old;
        updatedYearsOptions.shift();
        updatedYearsOptions.unshift(new DropdownModel(old, '81'));
        this.years = [...updatedYearsOptions];
      }),

      this.translate.stream('mammaMX.medicalHistory.sides.options').subscribe((out: DropdownModel[]) => {
        this.sides = values(out);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
