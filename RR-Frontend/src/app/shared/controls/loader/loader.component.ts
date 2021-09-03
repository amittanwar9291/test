import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rr-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  @Input() isCompleted: boolean;
  constructor() {}

  ngOnInit() {}
}
