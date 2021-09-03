export enum CenterspecificPreferencesModulesMRIModuleEnum {
  MRIAbdomen = 'MRIAbdomen',
  MRIAngiography = 'MRIAngiography',
  MRIPelvis = 'MRIPelvis',
  MRIElbow = 'MRIElbow',
  MRIHand = 'MRIHand',
  MRIHead = 'MRIHead',
  MRINeck = 'MRINeck',
  MRIHip = 'MRIHip',
  MRICardio = 'MRICardio',
  MRIKnee = 'MRIKnee',
  MRIMamma = 'MRIMamma',
  MRIUAJFoot = 'MRIUAJFoot',
  MRIShoulder = 'MRIShoulder',
  MRIThorax = 'MRIThorax',
  MRISpine = 'MRISpine'
}

export enum CenterspecificPreferencesModulesCTModuleEnum {
  CTAbdomen = 'CTAbdomen',
  CTAngiography = 'CTAngiography',
  CTJoints = 'CTJoints',
  CTNeck = 'CTNeck',
  CTHead = 'CTHead',
  CTThorax = 'CTThorax',
  CTSpine = 'CTSpine'
}

export const CenterspecificPreferencesModulesEnum = {
  None: 'None',
  ...CenterspecificPreferencesModulesMRIModuleEnum,
  ...CenterspecificPreferencesModulesCTModuleEnum,
  MXUSMamma: 'MXUSMamma'
};

export type CenterspecificPreferencesModulesEnum =
  | CenterspecificPreferencesModulesMRIModuleEnum
  | CenterspecificPreferencesModulesCTModuleEnum;
