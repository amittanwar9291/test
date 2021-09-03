export interface ExpansionInputsGroupModelInterface {
  isMainHeader?: boolean;
  mainHeaderTranslationKey?: string;
  mainHeaderRrId?: string;
  size: {
    mandatory?: boolean;
    modelName: string;
    headerTranslationKey: string;
    headerRrId: string;
    inputRrId: string;
    labelTranslationKey: string;
    labelRrId: string;
    min?: number;
    max?: number;
    placeholder?: string;
  };
  secondPlane: {
    modelName: string;
    headerTranslationKey: string;
    headerRrId: string;
    inputRrId: string;
    labelTranslationKey: string;
    labelRrId: string;
    min?: number;
    max?: number;
    placeholder?: string;
  };
  thirdPlane: {
    modelName: string;
    headerTranslationKey: string;
    headerRrId: string;
    inputRrId: string;
    labelTranslationKey: string;
    labelRrId: string;
    min?: number;
    max?: number;
    placeholder?: string;
  };
}
