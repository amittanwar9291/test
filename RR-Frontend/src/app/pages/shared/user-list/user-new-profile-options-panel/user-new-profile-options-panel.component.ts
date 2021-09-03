import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'rr-user-new-profile-options-panel',
  templateUrl: './user-new-profile-options-panel.component.html',
  styleUrls: ['./user-new-profile-options-panel.component.scss']
})
export class UserNewProfileOptionsPanelComponent implements OnDestroy {
  saveButtonName = '';
  saveButtonNameSubscription$: Subscription;
  abortButtonName = '';
  abortButtonNameSubscription$: Subscription;

  constructor(private translate: TranslateService) {
    this.saveButtonNameSubscription$ = this.translate.stream('users.profile.save').subscribe((out: string) => {
      this.saveButtonName = out;
    });
    this.abortButtonNameSubscription$ = this.translate.stream('users.profile.abort').subscribe((out: string) => {
      this.abortButtonName = out;
    });
  }

  ngOnDestroy(): void {
    this.saveButtonNameSubscription$.unsubscribe();
    this.abortButtonNameSubscription$.unsubscribe();
  }
}
