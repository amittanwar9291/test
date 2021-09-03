import { HttpTransportType, HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  initializeConnection(connection: HubConnection, initializeConnection: () => void) {
    if (connection) {
      connection.stop().then(() => {
        initializeConnection();
      });
    } else {
      initializeConnection();
    }
  }

  createConnection(url: string): HubConnection {
    return new HubConnectionBuilder()
      .withUrl(url, {
        skipNegotiation: true,
        transport: HttpTransportType.WebSockets
      })
      .withAutomaticReconnect()
      .build();
  }
}
