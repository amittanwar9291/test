import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserButtonCommunicationService {
  private button1ClickedSource = new Subject<void>();
  public button1Clicked$ = this.button1ClickedSource.asObservable();

  private button2ClickedSource = new Subject<void>();
  public button2Clicked$ = this.button2ClickedSource.asObservable();

  constructor() {}

  announceClick(additionalButton?: boolean) {
    if (!additionalButton) {
      this.button1ClickedSource.next();
    } else {
      this.button2ClickedSource.next();
    }
  }
}
