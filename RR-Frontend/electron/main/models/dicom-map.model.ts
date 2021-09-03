import { IDicomMapDto } from '../interfaces/dtos/dicom-map-dto.interface';
import { DicomMapEntry } from './dicom-map-entry.model';

export class DicomMap {
  module: string;
  patient: DicomMapEntry[];
  study: DicomMapEntry[];
  series: DicomMapEntry[];

  get isValid(): boolean {
    return !!this.module;
  }

  constructor() {
    this.module = '';
    this.patient = [];
    this.study = [];
    this.series = [];
  }

  static create(dto: IDicomMapDto): DicomMap {
    const map = new DicomMap();
    map.module = dto.Module || '';

    return map;
  }
}
