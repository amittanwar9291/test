import { Injectable } from '@angular/core';
import { SignalRService } from '@services/shared/signalr/signalr.service';
import { HubConnection } from '@microsoft/signalr';
import { AppConfig } from '../../../../app.config';
import { ReportListExternalCommunicationService } from '@services/shared/report-list/report-list-external-communication.service';
import { UpdateListEntryData } from '@models/shared/report-list/update-list-entry-data.model';

@Injectable({
  providedIn: 'root'
})
export class ReportListSignalRService {
  private connection: HubConnection;
  private connectionOpenedOrPending = false;

  constructor(private signalRService: SignalRService, private externalCommunicationService: ReportListExternalCommunicationService) {}

  initialize() {
    this.signalRService.initializeConnection(this.connection, this.initializeConnection.bind(this));
  }

  close() {
    this.connection?.stop();
  }

  private initializeConnection() {
    if (this.connectionOpenedOrPending) {
      return;
    }

    this.openConnection();
    this.connectionOpenedOrPending = true;
  }

  private openConnection() {
    const baseUrl = AppConfig.settings.baseUrl;
    const signalRHubUrl = AppConfig.settings.reportListSignalRHub;
    const url = `${baseUrl}/${signalRHubUrl}`;

    this.connection = this.signalRService.createConnection(url);
    this.connection.start().catch(_ => (this.connectionOpenedOrPending = false));

    this.registerOnDisconnect();
    this.initListener();
  }

  private initListener() {
    this.connection.on('UpdateReport', (reportId, status, isLocked) => {
      const updateData = new UpdateListEntryData(reportId, status, isLocked);
      this.externalCommunicationService.emitUpdateReport(updateData);
    });
  }

  private registerOnDisconnect() {
    this.connection.onclose(() => (this.connectionOpenedOrPending = false));
  }
}
