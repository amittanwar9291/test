import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

class StandardClassificationDropdowns {
  tStageType: DropdownModel[];
  nStageType: DropdownModel[];
}

class CervicalLNsInCupSyndromeClassificationDropdownsDropdowns {
  nStageHPVMinus: DropdownModel[];
  nStageHPVPlus: DropdownModel[];
}

export class TNMClassificationDropdownsModel {
  nasopharyngealCarcinoma = new StandardClassificationDropdowns();
  oropharyngealCarcinoma = new StandardClassificationDropdowns();
  oropharyngealCarcinomaHpv = new StandardClassificationDropdowns();
  hypopharyngealCarcinoma = new StandardClassificationDropdowns();
  laryngealCarcinoma = new StandardClassificationDropdowns();
  majorSalivaryGlands = new StandardClassificationDropdowns();
  lipsOralCavityMinorSalivaryGlands = new StandardClassificationDropdowns();
  thyroidCarcinoma = new StandardClassificationDropdowns();
  cervicalLNsInCupSyndrome = new CervicalLNsInCupSyndromeClassificationDropdownsDropdowns();
  commonMStageType = [new DropdownModel()];
}
