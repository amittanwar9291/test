import { DicomTagKeyPair } from './dicom-tag-key.model';

export class KnownDicomTagKeys {
  static patientID = new DicomTagKeyPair('PatientID', '0010:0020');
  static patientName = new DicomTagKeyPair('PatientName', '0010:0010');
  static patientSex = new DicomTagKeyPair('PatientSex', '0010:0040');
  static patientBirthDate = new DicomTagKeyPair('PatientBirthDate', '0010:0030');
  static accessionNumber = new DicomTagKeyPair('AccessionNumber', '0008:0050');
  static studyInstanceUID = new DicomTagKeyPair('StudyInstanceUID', '0020:000D');
  static studyDescription = new DicomTagKeyPair('StudyDescription', '0008:1030');
  static studyDate = new DicomTagKeyPair('StudyDate', '0008:0020');
  static seriesInstanceUID = new DicomTagKeyPair('SeriesInstanceUID', '0020:000E');
  static seriesDescription = new DicomTagKeyPair('SeriesDescription', '0008:103E');
}
