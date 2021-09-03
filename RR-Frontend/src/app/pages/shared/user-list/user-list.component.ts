import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { orderBy } from 'lodash';

import { DynamicComponentOutletService } from '@services/shared/dynamic-component/dynamic-component-outlet.service';
import { UserButtonCommunicationService } from '@services/shared/user/user-button-communication.service';
import { UserHttpService } from '@services/shared/user/user-http.service';
import { CustomTranslateService, NavigationService } from '@services/shared';
import { UserListOptionsPanelComponent } from './user-list-options-panel/user-list-options-panel.component';
import { AuthorizedComponent } from '../../../shared/authorized/authorized.component';
import { UserModel } from '@models/shared/user/user.model';

@Component({
  selector: 'rr-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {
  users: UserModel[];
  usersDisplay: UserModel[];
  buttonClick$: Subscription;
  headerTitle$: Subscription;

  sortingMethod = [
    ['desc', 'asc'],
    ['asc', 'desc']
  ];
  sortedClickCounter = 0;
  sortedBy: string;

  readonly tableHeader = [
    { field: 'userName', translateKey: 'users.list.person' },
    { field: 'title', translateKey: 'users.list.title' },
    { field: 'initial', translateKey: 'users.list.initial' },
    { field: 'role', translateKey: 'users.list.userRole' },
    { field: 'externalId', translateKey: 'users.list.id' },
    { field: 'approvalLevel', translateKey: 'users.list.approvalLevel' },
    { field: 'password', translateKey: 'users.list.password' },
    { field: 'position', translateKey: 'users.list.position' },
    { field: 'languageOfProgram', translateKey: 'users.list.languageApp' },
    { field: 'languageDoctorFindings', translateKey: 'users.list.languageDoctor' },
    { field: 'languagePatientFindings', translateKey: 'users.list.languagePatient' },
    { field: 'isActive', translateKey: 'users.list.status' }
  ];

  constructor(
    parent: AuthorizedComponent,
    public translate: TranslateService,
    public customTranslate: CustomTranslateService,
    private navService: NavigationService,
    private router: Router,
    private dynamicComponentService: DynamicComponentOutletService,
    private userCommService: UserButtonCommunicationService,
    public userService: UserHttpService
  ) {
    this.headerTitle$ = this.translate.stream('users.list.userList').subscribe((out: string) => {
      parent.header = out;
    });
  }

  /**
   * Navigate to user profile of user with given id.
   * @param id id UserModel id.
   */
  showUser(id: string) {
    this.router.navigate(['/users', id]);
  }

  /**
   * Switches user status.
   * @param id UserModel id.
   * @param isActive Current user status.
   */
  switchStatus(id: string, isActive: boolean): void {
    // switch status is resolved after click,
    // hence inverse switch types
    const switchType = isActive ? 'Activate' : 'Deactivate';
    this.userService.putStatus(id, switchType).subscribe({
      next: () => (this.users.find(elem => elem.id === id).isActive = isActive),
      error: () => (this.users.find(elem => elem.id === id).isActive = !isActive)
    });
  }

  /**
   * Called after component initialization.
   */
  ngOnInit() {
    const self = this;

    // reaction to button click (navigate to user creation)
    this.buttonClick$ = this.userCommService.button1Clicked$.subscribe(() => {
      this.navService.navigateToLink('/users/new');
    });

    this.loadOptionsPanel();

    // get list of all users
    this.userService.getUsersList().subscribe((out: UserModel[]) => {
      self.users = out;
      self.usersDisplay = self.users;
    });
  }

  /**
   * Called during component destruction.
   */
  ngOnDestroy() {
    this.dynamicComponentService.componentSource.next(null);
    this.buttonClick$.unsubscribe();
    this.headerTitle$.unsubscribe();
  }

  /**
   * Insert a component into bottom header.
   */
  loadOptionsPanel() {
    this.dynamicComponentService.componentSource.next(UserListOptionsPanelComponent);
  }

  /**
   * Sorting table: 1st click - descending, 2nd - ascending, 3th - default.
   */
  sort(sortParam: string) {
    if (sortParam === this.sortedBy) {
      this.sortedClickCounter++;
    } else {
      this.sortedBy = sortParam;
      this.sortedClickCounter = 1;
    }
    if (this.sortedClickCounter < 3) {
      this.usersDisplay = orderBy(this.users, [sortParam], this.sortingMethod[this.sortedClickCounter - 1]);
    } else {
      this.usersDisplay = this.users;
      this.sortedBy = null;
      this.sortedClickCounter = 0;
    }
  }
}
