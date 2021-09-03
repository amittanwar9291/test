import { BasalNucleiDiagnosisTypeEnum } from '@enums/headMRT/basal-nuclei';

const CommonDiagnoses = [
  BasalNucleiDiagnosisTypeEnum.AcuteHypertensiveEncephalopathyPres,
  BasalNucleiDiagnosisTypeEnum.Cadasil,
  BasalNucleiDiagnosisTypeEnum.SusacSyndrome,
  BasalNucleiDiagnosisTypeEnum.MoyaMoya,
  BasalNucleiDiagnosisTypeEnum.Encephalitis,
  BasalNucleiDiagnosisTypeEnum.FahrSDisease,
  BasalNucleiDiagnosisTypeEnum.MorbusWilson,
  BasalNucleiDiagnosisTypeEnum.Metastasis,
  BasalNucleiDiagnosisTypeEnum.ParenchymalHemorrhage,
  BasalNucleiDiagnosisTypeEnum.PostRadiogenic,
  BasalNucleiDiagnosisTypeEnum.BenignLesionNotFurtherSpecified,
  BasalNucleiDiagnosisTypeEnum.MalignantLesionNotFurtherSpecified,
  BasalNucleiDiagnosisTypeEnum.DignityUnclear
];

export const DiffusionRestrictionDiagnoses = [
  ...CommonDiagnoses,
  BasalNucleiDiagnosisTypeEnum.AcuteStroke,
  BasalNucleiDiagnosisTypeEnum.Ischemia,
  BasalNucleiDiagnosisTypeEnum.DeepVenousThrombosis,
  BasalNucleiDiagnosisTypeEnum.CreutzfeldJakobDisease,
  BasalNucleiDiagnosisTypeEnum.DiabeticKetoacidosis,
  BasalNucleiDiagnosisTypeEnum.UremicEncephalopathy,
  BasalNucleiDiagnosisTypeEnum.ToxicEncephalopathy,
  BasalNucleiDiagnosisTypeEnum.Hypoxia,
  BasalNucleiDiagnosisTypeEnum.WernickeEncephalopathy,
  BasalNucleiDiagnosisTypeEnum.StatusEpilepticus,
  BasalNucleiDiagnosisTypeEnum.Hypoglycemia,
  BasalNucleiDiagnosisTypeEnum.OsmoticDemyelinationSyndrome
];

export const T1wSignalEnhancementDiagnoses = [
  ...CommonDiagnoses,
  BasalNucleiDiagnosisTypeEnum.Hemorrhage,
  BasalNucleiDiagnosisTypeEnum.HemorrhagicNecrosis,
  BasalNucleiDiagnosisTypeEnum.BasalGangliaCalcification,
  BasalNucleiDiagnosisTypeEnum.HepaticEncephalopathy,
  BasalNucleiDiagnosisTypeEnum.Hypothyroidism,
  BasalNucleiDiagnosisTypeEnum.Hyperparathyroidism,
  BasalNucleiDiagnosisTypeEnum.MethanolIntoxication,
  BasalNucleiDiagnosisTypeEnum.GadoliniumDeposit,
  BasalNucleiDiagnosisTypeEnum.ManganeseDeposit,
  BasalNucleiDiagnosisTypeEnum.AfterChemotherapy,
  BasalNucleiDiagnosisTypeEnum.Hypoglycemia
];

export const T2wSignalEnhancementDiagnoses = [
  ...CommonDiagnoses,
  BasalNucleiDiagnosisTypeEnum.HypotensiveCerebralInfarction,
  BasalNucleiDiagnosisTypeEnum.EnlargedPerivascularSpaces,
  BasalNucleiDiagnosisTypeEnum.HuntingtonSChorea,
  BasalNucleiDiagnosisTypeEnum.Vasculitis,
  BasalNucleiDiagnosisTypeEnum.BehcetSDisease,
  BasalNucleiDiagnosisTypeEnum.Adem,
  BasalNucleiDiagnosisTypeEnum.Sle,
  BasalNucleiDiagnosisTypeEnum.CarbonMonoxideIntoxication,
  BasalNucleiDiagnosisTypeEnum.MelasSyndrome,
  BasalNucleiDiagnosisTypeEnum.DiffuseAstrocytoma,
  BasalNucleiDiagnosisTypeEnum.Glioma,
  BasalNucleiDiagnosisTypeEnum.OsmoticDemyelinationSyndrome
];
