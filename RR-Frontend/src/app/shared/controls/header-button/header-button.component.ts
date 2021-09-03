import { Component, Input } from '@angular/core';

import { UserButtonCommunicationService } from '@services/shared/user/user-button-communication.service';

@Component({
  selector: 'rr-header-button',
  templateUrl: './header-button.component.html',
  styleUrls: ['./header-button.component.scss']
})
export class HeaderButtonComponent {
  @Input() name: string;
  @Input() isAdditional: boolean;
  @Input() isDouble: boolean;
  @Input() set buttonFunction(fun: () => void) {
    this.buttonFunc = fun;
  }

  private buttonFunc: any = () => {};

  constructor(private buttonCommService: UserButtonCommunicationService) {}

  invokeButtonFunction() {
    this.buttonCommService.announceClick(this.isAdditional);
    this.buttonFunc();
  }
}
