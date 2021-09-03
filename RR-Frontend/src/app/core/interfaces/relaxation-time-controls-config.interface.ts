import { ReferencePictureRRIds } from '@models/shared/reference-picture/reference-picture-rr-ids.model';

export interface IRelaxationTimeControlsConfig {
  evaluationRRID: string;
  referencePictureRRID: string;
  qualitativeRRID: string;
  quantitativelyRRID: string;
  pathologyDistributionRRID: string;
  diffuseRRID: string;
  focalRRID: string;
  severityRRID: string;
  severityDDLRRID: string;
  valueMyocardiumRRID: string;
  inputValueMyocardiumRRID: string;
  labelInputValueMyocardiumRRID: string;
  referenceValueMyocardiumRRID: string;
  inputReferenceValueMyocardiumRRID: string;
  labelInputReferenceValueMyocardiumRRID: string;
  valueBloodRRID?: string;
  inputValueBloodRRID?: string;
  labelInputValueBloodRRID?: string;
  localizationAHASegmentRRID: string;
  lvTotalRRID: string;
  inputEcvValueRRID?: string;
  labelInputEcvValueRRID?: string;

  areValueMyocardiumNumberInputsMandatory?: boolean;

  referencePictureObjectRRID: ReferencePictureRRIds;
}
