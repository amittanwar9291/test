export class CenterspecificPreferencesColumnConfig {
  preferenceBaseRRId: string;
  itemCount: number;
  mri: {
    columnHeader: string;
    buttonText: string;
    buttonRRID: string;
  };
  ct: {
    columnHeader: string;
    buttonText: string;
    buttonRRID: string;
  };
  paginatorRRId: string;
  defaultPreferenceName: string;

  constructor() {
    this.preferenceBaseRRId = 'none';
    this.itemCount = 6;
    this.mri = {
      columnHeader: 'None',
      buttonText: 'Add finding',
      buttonRRID: 'none'
    };
    this.ct = {
      columnHeader: 'Nnone',
      buttonText: 'Add finding',
      buttonRRID: 'none'
    };
    this.paginatorRRId = 'none';
    this.defaultPreferenceName = 'Set';
  }
}
