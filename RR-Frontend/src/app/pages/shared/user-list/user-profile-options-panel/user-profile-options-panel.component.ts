import { Component, OnDestroy } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import { Subscription } from 'rxjs';

@Component({
  selector: 'rr-user-profile-options-panel',
  templateUrl: './user-profile-options-panel.component.html',
  styleUrls: ['./user-profile-options-panel.component.scss']
})
export class UserProfileOptionsPanelComponent implements OnDestroy {
  saveButtonName = '';
  buttonNameSubscription$: Subscription;

  constructor(private translate: TranslateService) {
    this.buttonNameSubscription$ = this.translate.stream('users.profile.save').subscribe((out: string) => {
      this.saveButtonName = out;
    });
  }

  ngOnDestroy(): void {
    this.buttonNameSubscription$.unsubscribe();
  }
}
