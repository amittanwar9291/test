import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { MedicalHistoryApiModel } from '@models/abdomenCT/api/medical-history/medical-history-api.model';
import { MedicalHistoryUiModel } from '@models/abdomenCT/ui/medical-history/medical-history-ui.model';

@Injectable({
  providedIn: 'root'
})
export class MedicalHistoryMapper implements IMapper<MedicalHistoryApiModel, MedicalHistoryUiModel> {
  constructor() {
    automapper.createMap('MedicalHistory_AbdomenCT_UiModel', 'MedicalHistory_AbdomenCT_ApiModel').convertToType(MedicalHistoryApiModel);
    automapper.createMap('MedicalHistory_AbdomenCT_ApiModel', 'MedicalHistory_AbdomenCT_UiModel').convertToType(MedicalHistoryUiModel);
  }

  mapToAPI(source: MedicalHistoryUiModel, out: MedicalHistoryApiModel): MedicalHistoryApiModel {
    out = automapper.map('MedicalHistory_AbdomenCT_UiModel', 'MedicalHistory_AbdomenCT_ApiModel', source);
    return out;
  }

  mapToUI(source: MedicalHistoryApiModel, out: MedicalHistoryUiModel): MedicalHistoryUiModel {
    out = automapper.map('MedicalHistory_AbdomenCT_ApiModel', 'MedicalHistory_AbdomenCT_UiModel', source);
    return out;
  }
}
