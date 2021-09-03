import { Component, OnDestroy } from '@angular/core';
import { AuthorizedComponent } from '../../../shared/authorized/authorized.component';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rr-aboutrr',
  templateUrl: './aboutrr.component.html',
  styleUrls: ['./aboutrr.component.scss']
})
export class AboutrrComponent implements OnDestroy {
  headerTitleSubscription: Subscription;
  constructor(parent: AuthorizedComponent, public translate: TranslateService) {
    this.headerTitleSubscription = this.translate.stream('aboutrr.header').subscribe((out: string) => {
      parent.header = out;
    });
  }

  ngOnDestroy() {
    this.headerTitleSubscription.unsubscribe();
  }
}
