import { IDicomDataDto } from '../interfaces/dtos/dicom-data-dto.interface';
import { DicomValue } from './dicom-value.model';

export class DicomData {
  vr: string;
  value: any[];

  get isValid(): boolean {
    return true;
  }

  get hasValue(): boolean {
    return this.value.length && (this.isDicomValue(this.value[0]) ? this.value[0].Alphabetic : this.value[0]);
  }

  constructor() {
    this.vr = '';
    this.value = [];
  }

  static create(dto: IDicomDataDto): DicomData {
    const data = new DicomData();
    data.vr = dto.vr || '';
    data.value = dto.Value || [];

    return data;
  }

  private isDicomValue(obj: any): obj is DicomValue {
    return typeof obj === 'object' && 'Alphabetic' in obj;
  }
}
