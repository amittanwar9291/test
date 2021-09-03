import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RegionTypeEnum } from '@enums/shared/head/cortex/common';
import { DifferentialDiagnosisTypeEnum } from '@enums/headCT/cortex/differential-diagnosis-type.enum';

@Injectable({
  providedIn: 'root'
})
export class CortexHelperService {
  largeLocalizerOpen = new BehaviorSubject<boolean>(null);
  excludedValueFromRegionDropdown = new BehaviorSubject<Array<RegionTypeEnum>>(null);
  requiredForWHODropdown = [
    DifferentialDiagnosisTypeEnum.Glioma,
    DifferentialDiagnosisTypeEnum.Astrocytoma,
    DifferentialDiagnosisTypeEnum.Ependymoma,
    DifferentialDiagnosisTypeEnum.Oligodendroglioma,
    DifferentialDiagnosisTypeEnum.Medulloblastoma,
    DifferentialDiagnosisTypeEnum.Glioblastoma,
    DifferentialDiagnosisTypeEnum.Meningioma,
    DifferentialDiagnosisTypeEnum.EmbryonalTumor,
    DifferentialDiagnosisTypeEnum.DNET,
    DifferentialDiagnosisTypeEnum.PNET
  ];
}
