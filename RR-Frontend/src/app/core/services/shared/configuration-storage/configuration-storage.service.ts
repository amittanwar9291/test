import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationStorageService {
  constructor() {}

  setInstituteId(instituteId: string) {
    if (!instituteId) {
      return;
    }

    localStorage.setItem('RADIOREPORT:INSTITUTE_ID', instituteId);
  }

  getInstituteId(): string {
    return localStorage.getItem('RADIOREPORT:INSTITUTE_ID');
  }

  setInstituteName(instituteName: string) {
    if (!instituteName) {
      return;
    }

    localStorage.setItem('RADIOREPORT:INSTITUTE_NAME', instituteName);
  }

  getInstituteName(): string {
    return localStorage.getItem('RADIOREPORT:INSTITUTE_NAME');
  }

  setIsDeiAllowed(IsDeiAllowed: boolean) {
    if (IsDeiAllowed == null) {
      return;
    }

    localStorage.setItem('RADIOREPORT:IS_DEI_ALLOWED', JSON.stringify(IsDeiAllowed));
  }

  getIsDeiAllowed(): string {
    return localStorage.getItem('RADIOREPORT:IS_DEI_ALLOWED');
  }

  setBaseUrl(baseUrl: string) {
    if (!baseUrl) {
      return;
    }

    localStorage.setItem('RADIOREPORT:BASE_URL', baseUrl);
  }

  getBaseUrl(): string {
    return localStorage.getItem('RADIOREPORT:BASE_URL');
  }

  setIsTrackingEnabled(IsTrackingEnabled: boolean) {
    if (IsTrackingEnabled == null) {
      return;
    }

    localStorage.setItem('RADIOREPORT:IS_TRACKING_ENABLED', JSON.stringify(IsTrackingEnabled));
  }

  getIsTrackingEnabled(): string {
    return localStorage.getItem('RADIOREPORT:IS_TRACKING_ENABLED');
  }

  setIsTracelogEnabled(IsTracelogEnabled: boolean) {
    if (IsTracelogEnabled == null) {
      return;
    }

    localStorage.setItem('RADIOREPORT:IS_TRACELOG_ENABLED', JSON.stringify(IsTracelogEnabled));
  }

  getIsTracelogEnabled(): string {
    return localStorage.getItem('RADIOREPORT:IS_TRACELOG_ENABLED');
  }

  setPacsHost(pacsHost: string) {
    if (!pacsHost) {
      return;
    }

    localStorage.setItem('RADIOREPORT:PACS_HOST', pacsHost);
  }

  getPacsHost(): string {
    return localStorage.getItem('RADIOREPORT:PACS_HOST');
  }

  setPacsPort(pacsPort: string) {
    if (!pacsPort) {
      return;
    }

    localStorage.setItem('RADIOREPORT:PACS_PORT', pacsPort);
  }

  getPacsPort(): string {
    return localStorage.getItem('RADIOREPORT:PACS_PORT');
  }

  setCallingAe(callingAe: string) {
    if (!callingAe) {
      return;
    }

    localStorage.setItem('RADIOREPORT:CALLING_AE', callingAe);
  }

  getCallingAe(): string {
    return localStorage.getItem('RADIOREPORT:CALLING_AE');
  }

  setCalledAe(calledAe: string) {
    if (!calledAe) {
      return;
    }

    localStorage.setItem('RADIOREPORT:CALLED_AE', calledAe);
  }

  getCalledAe(): string {
    return localStorage.getItem('RADIOREPORT:CALLED_AE');
  }

  setInstituteInitialized(instituteInitialized: boolean) {
    localStorage.setItem('RADIOREPORT:INSTITUTE_INITIALIZED', JSON.stringify(instituteInitialized));
  }

  getInstituteInitialized(): string {
    return localStorage.getItem('RADIOREPORT:INSTITUTE_INITIALIZED');
  }
}
