import { Component, OnInit } from '@angular/core';
import { GlobalMappings } from '@mappings/global-mappings';

import { AppConfig } from './app.config';
import { BootstrapService } from '@services/shared/bootstrap/bootstrap.service';

@Component({
  selector: 'rr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private bootstrapService: BootstrapService) {}

  async ngOnInit() {
    GlobalMappings.register();
    console.log('RR version: ' + AppConfig.settings.version);
    this.bootstrapService.configurePlatform();
  }
}
