import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NavigationService } from '@services/shared';

@Directive({
  selector: '[rrRouteDirective]'
})
export class ReportRouteDirective {
  @Input() routeDirective: string;
  constructor(private el: ElementRef, private navigation: NavigationService) {}

  @HostListener('click', ['$event.target']) onClick($event) {
    if ($event.getAttribute('href')) {
      const goRoute = $event.getAttribute('href');
      this.navigation.setPageWithoutSaving(goRoute);
    }
  }
}
