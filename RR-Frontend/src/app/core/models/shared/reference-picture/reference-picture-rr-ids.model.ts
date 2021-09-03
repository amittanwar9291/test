export class ReferencePictureRRIds {
  headerId: string;
  serialNoLabelId: string;
  serialNoInputId: string;
  pictureNoLabelId: string;
  pictureNoInputId: string;
  importLabelId: string;
  importInputId: string;
  constructor(
    headerId: string,
    serialNoLabelId: string,
    serialNoInputId: string,
    pictureNoLabelId: string,
    pictureNoInputId: string,
    importLabelId: string,
    importInputId: string
  ) {
    this.headerId = headerId;
    this.serialNoLabelId = serialNoLabelId;
    this.serialNoInputId = serialNoInputId;
    this.pictureNoLabelId = pictureNoLabelId;
    this.pictureNoInputId = pictureNoInputId;
    this.importLabelId = importLabelId;
    this.importInputId = importInputId;
  }
}

export enum ReferencePictureElementsEnum {
  headerId = 'headerId',
  serialNoLabelId = 'serialNoLabelId',
  serialNoInputId = 'serialNoInputId',
  pictureNoLabelId = 'pictureNoLabelId',
  pictureNoInputId = 'pictureNoInputId',
  importLabelId = 'importLabelId',
  importInputId = 'importInputId'
}
