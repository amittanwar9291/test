import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

// service is suposed to pass informations from app-level components and services
// to slide-level ones (they can not communicate directly)

@Injectable({
  providedIn: 'root'
})
export class NavigationConnectorService {
  private navToLink$: Subject<string>;

  constructor() {
    this.navToLink$ = new Subject<string>();
  }

  getNavToLinkStream() {
    return this.navToLink$;
  }

  triggerNavToLink(link: string) {
    this.navToLink$.next(link);
  }
}
