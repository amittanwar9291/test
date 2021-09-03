import { Component, OnInit, HostListener, Host } from '@angular/core';
import { AuthorizedComponent } from '../../authorized/authorized.component';
import { ResizableBaseComponent } from '@abstractions/resizable-base/resizable-base';

@Component({
  selector: 'rr-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent extends ResizableBaseComponent {
  constructor(parent: AuthorizedComponent) {
    super();
    parent.header = '';
  }
}
