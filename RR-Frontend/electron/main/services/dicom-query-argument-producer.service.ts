import { DicomMapManager } from './dicom-map-manager.service';
import { KnownDicomTagKeys } from '../models/known-dicom-tag-keys.model';
import { CliManager } from './cli-manager.service';
import { ConfigManager } from './config-manager.service';

// import scoped
export class DicomQueryArgumentProducer {
  constructor(private dicomMapManager: DicomMapManager, private cliManager: CliManager, private configManager: ConfigManager) {}

  createStudiesOfPatientQueryArgs(): string[] {
    if (!this.cliManager.dicomQueryParams.patientId) {
      return [];
    }

    const args = this.getFunctionArgs('Study');
    args.push(...this.getQueryFieldsArgs());
    args.push(...this.getPacsServerArgs());
    args.push(
      ...this.getRequestedFieldsArgs(
        KnownDicomTagKeys.accessionNumber.hexCode,
        KnownDicomTagKeys.studyInstanceUID.hexCode,
        KnownDicomTagKeys.studyDescription.hexCode,
        KnownDicomTagKeys.studyDate.hexCode
      )
    );

    return args;
  }

  createPatientQueryArgs(): string[] {
    if (!this.cliManager.dicomQueryParams.patientId || !this.dicomMapManager.dicomMap.patient.length) {
      return [];
    }

    const args = this.getFunctionArgs('Patient');
    args.push(...this.getQueryFieldsArgs());
    args.push(...this.getPacsServerArgs());
    args.push(...this.getRequestedFieldsArgs(...this.dicomMapManager.patientLevelData.keywordOrHexCodeSet));

    return args;
  }

  createStudyQueryArgs(includePatientTags: boolean): string[] {
    if (
      (!this.cliManager.dicomQueryParams.studyInstanceUid && !this.cliManager.dicomQueryParams.accessionNumber) ||
      !this.dicomMapManager.dicomMap.study.length
    ) {
      return [];
    }

    const args = this.getFunctionArgs('Study');
    args.push(...this.getQueryFieldsArgs());
    args.push(...this.getPacsServerArgs());
    const requestedFields = includePatientTags
      ? new Set([...this.dicomMapManager.patientLevelData.keywordOrHexCodeSet, ...this.dicomMapManager.studyLevelData.keywordOrHexCodeSet])
      : this.dicomMapManager.studyLevelData.keywordOrHexCodeSet;
    // adding accession number to requested fields seems to cause some PACS to return empty result
    requestedFields.delete(KnownDicomTagKeys.accessionNumber.hexCode);
    requestedFields.delete(KnownDicomTagKeys.accessionNumber.keyword);
    args.push(...this.getRequestedFieldsArgs(...requestedFields));

    return args;
  }

  createSeriesQueryArgs(): string[] {
    if (!this.cliManager.dicomQueryParams.studyInstanceUid || !this.dicomMapManager.dicomMap.series.length) {
      return [];
    }

    const args = this.getFunctionArgs('Series');
    args.push(...this.getQueryFieldsArgs());
    args.push(...this.getPacsServerArgs());
    args.push(
      ...this.getRequestedFieldsArgs(
        KnownDicomTagKeys.seriesInstanceUID.hexCode,
        ...this.dicomMapManager.seriesLevelData.keywordOrHexCodeSet
      )
    );

    return args;
  }

  createCMoveQueryArgs(): string[] {
    if (!this.cliManager.dicomQueryParams.studyInstanceUid) {
      return [];
    }

    const args = this.getFunctionArgs('Study');
    args.push(...this.getQueryFieldsArgs());
    args.push(...this.getPacsServerArgs());
    const requestedFields = new Set([
      ...this.dicomMapManager.patientLevelData.keywordOrHexCodeSet,
      ...this.dicomMapManager.studyLevelData.keywordOrHexCodeSet,
      ...this.dicomMapManager.seriesLevelData.keywordOrHexCodeSet
    ]);
    // adding accession number to requested fields seems to cause some PACS to return empty result
    requestedFields.delete(KnownDicomTagKeys.accessionNumber.hexCode);
    requestedFields.delete(KnownDicomTagKeys.accessionNumber.keyword);
    args.push(...this.getRequestedFieldsArgs(...requestedFields));

    return args;
  }

  private getFunctionArgs(func: string): string[] {
    return ['-f', func];
  }

  private getQueryFieldsArgs(): string[] {
    const queryParams = this.cliManager.dicomQueryParams;
    const args = ['-q'];
    if (queryParams.patientId) {
      args.push('patientId:' + queryParams.patientId);
    }

    if (queryParams.studyInstanceUid) {
      args.push('studyInstanceUid:' + queryParams.studyInstanceUid);
    }

    if (queryParams.accessionNumber && !queryParams.studyInstanceUid) {
      args.push('accessionNumber:' + queryParams.accessionNumber);
    }

    return args;
  }

  private getRequestedFieldsArgs(...tagIdentifier: string[]): string[] {
    if (!tagIdentifier?.length) {
      return [];
    }

    return ['-r', ...tagIdentifier];
  }

  private getPacsServerArgs(): string[] {
    const config = this.configManager.config;
    const args = [];
    if (config.pacs) {
      if (config.pacs.host) {
        args.push('-h', config.pacs.host);
      }
      if (config.pacs.port) {
        args.push('-p', config.pacs.port.toString());
      }
      if (config.pacs.callingAe) {
        args.push('-a', config.pacs.callingAe);
      }
      if (config.pacs.calledAe) {
        args.push('-c', config.pacs.calledAe);
      }
      if (config.pacs.requestType) {
        args.push('-t', config.pacs.requestType);
      }
      if (config.pacs.scpPort) {
        args.push('-s', config.pacs.scpPort.toString());
      }
    }

    return args;
  }
}
