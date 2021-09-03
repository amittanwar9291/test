import { Component, OnDestroy } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import { Subscription } from 'rxjs';

@Component({
  selector: 'rr-user-list-options-panel',
  templateUrl: './user-list-options-panel.component.html',
  styleUrls: ['./user-list-options-panel.component.css']
})
export class UserListOptionsPanelComponent implements OnDestroy {
  newUserButtonName = '';
  buttonNameSubscription$: Subscription;

  constructor(private translate: TranslateService) {
    this.buttonNameSubscription$ = this.translate.stream('users.list.addUser').subscribe((out: string) => {
      this.newUserButtonName = out;
    });
  }

  ngOnDestroy(): void {
    this.buttonNameSubscription$.unsubscribe();
  }
}
