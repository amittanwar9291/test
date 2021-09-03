import { Component, Input } from '@angular/core';

@Component({
  selector: 'rr-csp-nav-card',
  templateUrl: './csp-nav-card.component.html',
  styleUrls: ['./csp-nav-card.component.scss']
})
export class CspNavCardComponent {
  @Input() text: string;
  @Input() isActive = false;
}
