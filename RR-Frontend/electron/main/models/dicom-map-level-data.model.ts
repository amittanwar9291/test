import { DicomMapEntry } from './dicom-map-entry.model';

export class DicomMapLevelData {
  entryGroups: { [keywordOrHexCode: string]: DicomMapEntry[] };
  keywordOrHexCodeSet: Set<string>;

  constructor() {
    this.entryGroups = {};
    this.keywordOrHexCodeSet = new Set<string>();
  }
}
