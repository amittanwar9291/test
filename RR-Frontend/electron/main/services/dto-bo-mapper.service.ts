import { IDicomMapDto } from '../interfaces/dtos/dicom-map-dto.interface';
import { DicomMap } from '../models/dicom-map.model';
import { ImportLogData } from '../models/import-log-data.model';
import { IDicomMapEntryDto } from '../interfaces/dtos/dicom-map-entry-dto.interface';
import { DicomMapEntry } from '../models/dicom-map-entry.model';
import { ErrorMessage } from '../enums/error-message.enum';
import { IModuleSelectionDataDto } from '../interfaces/dtos/module-selection-data-dto.interface';
import { ModuleSelectionData } from '../models/module-selection-data.model';
import { IDicomParserResultDto } from '../interfaces/dtos/dicom-parser-result-dto.interface';
import { DicomParserResult } from '../models/dicom-parser-result.model';
import { RetrieveLevel } from '../enums/retrieve-level.enum';
import { IStudySelectionDataDto } from '../interfaces/dtos/study-selection-data-dto.interface';
import { StudySelectionData } from '../models/study-selection-data.model';
import { DicomQueryMode } from '../enums/dicom-query-mode.enum';

// import scoped
export class DtoBoMapper {
  constructor(private logData: ImportLogData) {}

  mapStudySelectionData(dto: IStudySelectionDataDto): StudySelectionData {
    const bo = StudySelectionData.create(dto);
    this.logData.selectedStudy = bo;

    return bo;
  }

  mapModuleSelectionData(dto: IModuleSelectionDataDto): ModuleSelectionData {
    this.logData.moduleName = dto.moduleName;
    const bo = ModuleSelectionData.create(dto);
    bo.dicomMap = this.mapDicomMapDto(dto.dicomMap);

    return bo;
  }

  mapDicomParserResult(dto: IDicomParserResultDto, retrieveLevel: RetrieveLevel, dicomQueryMode: DicomQueryMode): DicomParserResult {
    const bo = DicomParserResult.create(dto);
    if (!bo.isValid) {
      throw new Error(ErrorMessage.INVALID_DICOM_PARSER_RESULT);
    }

    switch (dicomQueryMode) {
      case DicomQueryMode.OnlyPatient:
        this.logData.studiesOfPatientParserResultDto = dto;
        this.logData.studiesOfPatientParserResult = bo;
        break;
      case DicomQueryMode.OnlyStudy:
      case DicomQueryMode.PatientAndStudy:
        switch (retrieveLevel) {
          case RetrieveLevel.Patient:
            this.logData.patientParserResultDto = dto;
            this.logData.patientParserResult = bo;
            break;
          case RetrieveLevel.Study:
            this.logData.studyParserResultDto = dto;
            this.logData.studyParserResult = bo;
            break;
          case RetrieveLevel.Series:
            this.logData.seriesParserResultDto = dto;
            this.logData.seriesParserResult = bo;
            break;
        }
        break;
      case DicomQueryMode.CMove:
        this.logData.cmoveParserResultDto = dto;
        this.logData.cmoveParserResult = bo;
        break;
    }

    return bo;
  }

  private mapDicomMapDto(dto: IDicomMapDto): DicomMap {
    this.logData.dicomMapDto = dto;
    const bo = DicomMap.create(dto);
    bo.patient = this.mapDicomMapEntryDtos(dto.Patient, RetrieveLevel.Patient);
    bo.study = this.mapDicomMapEntryDtos(dto.Study, RetrieveLevel.Study);
    bo.series = this.mapDicomMapEntryDtos(dto.Series, RetrieveLevel.Series);
    if (!bo.isValid) {
      throw new Error(ErrorMessage.INVALID_DICOM_MAP);
    }

    this.logData.dicomMap = bo;

    return bo;
  }

  private mapDicomMapEntryDtos(dtos: IDicomMapEntryDto[], retrieveLevel: RetrieveLevel): DicomMapEntry[] {
    const bos = dtos.map(d => DicomMapEntry.create(d, retrieveLevel));
    const valids = bos.filter(b => b.isValid);
    const invalids = bos.filter(b => !b.isValid);
    invalids.forEach(invalid => this.logData.warnings.push(`Invalid dicom map entry | ${JSON.stringify(invalid)}`));

    return valids;
  }
}
