import { Component, Input } from '@angular/core';

@Component({
  selector: 'rr-bottom-header',
  templateUrl: './bottom-header.component.html',
  styleUrls: ['./bottom-header.component.scss']
})
export class BottomHeaderComponent {
  @Input() header: string;
}
