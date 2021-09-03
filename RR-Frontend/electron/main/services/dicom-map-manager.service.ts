import { DicomMap } from '../models/dicom-map.model';
import { DicomMapEntry } from '../models/dicom-map-entry.model';
import { DicomMapLevelData } from '../models/dicom-map-level-data.model';
import { nameof } from 'ts-simple-nameof';
import { groupBy } from 'lodash';
import { ErrorMessage } from '../enums/error-message.enum';

// import scoped
export class DicomMapManager {
  private dicomMapInternal: DicomMap;
  private patientLevelDataInternal: DicomMapLevelData;
  private studyLevelDataInternal: DicomMapLevelData;
  private seriesLevelDataInternal: DicomMapLevelData;

  get dicomMap(): DicomMap {
    if (!this.dicomMapInternal) {
      throw new Error(ErrorMessage.DICOM_MAP_NOT_AVAILABLE);
    }

    return this.dicomMapInternal;
  }

  set dicomMap(dicomMap: DicomMap) {
    this.dicomMapInternal = dicomMap;
  }

  get patientLevelData(): DicomMapLevelData {
    if (!this.patientLevelDataInternal) {
      this.patientLevelDataInternal = this.getMapLevelData(this.dicomMapInternal.patient);
    }

    return this.patientLevelDataInternal;
  }

  get studyLevelData(): DicomMapLevelData {
    if (!this.studyLevelDataInternal) {
      this.studyLevelDataInternal = this.getMapLevelData(this.dicomMapInternal.study);
    }

    return this.studyLevelDataInternal;
  }

  get seriesLevelData(): DicomMapLevelData {
    if (!this.seriesLevelDataInternal) {
      this.seriesLevelDataInternal = this.getMapLevelData(this.dicomMapInternal.series);
    }

    return this.seriesLevelDataInternal;
  }

  private getMapLevelData(mapEntries: DicomMapEntry[]): DicomMapLevelData {
    const entryGroups = groupBy(
      mapEntries,
      nameof<DicomMapEntry>(e => e.dicomTag)
    );

    return {
      entryGroups,
      keywordOrHexCodeSet: new Set<string>(Object.keys(entryGroups))
    };
  }
}
