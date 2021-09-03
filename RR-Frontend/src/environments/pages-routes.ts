import { IDictionary } from '@interfaces/dictionary.interface';
import { PageUrlModel } from '@models/shared/navigation/page-url.model';

export const mammaMRTRoutes: IDictionary<PageUrlModel> = {
  // MammaMRT module
  MammaMRT_PatientIndication: new PageUrlModel('mammaMRT/report/patient-indication', 1), // 'Patient Indication'
  MammaMRT_Anamnesis: new PageUrlModel('mammaMRT/report/anamnesis', 2), // 'Anamnese'
  MammaMRT_Technology: new PageUrlModel('mammaMRT/report/technology', 3), // 'Untersuchungstechnik'
  MammaMRT_Anatomy: new PageUrlModel('mammaMRT/report/anatomy', 4), // 'Anatomie'
  MammaMRT_AnatomyEnhancement: new PageUrlModel('mammaMRT/report/anatomy-enhancement', 5), // 'Anatomie | Enhancement'
  MammaMRT_Diagnosis: new PageUrlModel('mammaMRT/report/diagnosis', 6), // 'Report Befunde'
  MammaMRT_Lymphs: new PageUrlModel('mammaMRT/report/lymph-node', 7), // 'Report Lymphknoten/Schilddrüse'
  MammaMRT_Bones: new PageUrlModel('mammaMRT/report/bone', 8), // 'Report Knochen'
  MammaMRT_Rating: new PageUrlModel('mammaMRT/report/rating', 9), // 'Beurteilung'
  Core_ReportResults: new PageUrlModel('mammaMRT/report/text-report', 10)
};

export const shoulderMRTRoutes: IDictionary<PageUrlModel> = {
  // ShoulderMRT module
  ShoulderMRT_Localization: new PageUrlModel('shoulderMRT/report/localization', 1),
  ShoulderMRT_Anamnesis: new PageUrlModel('shoulderMRT/report/anamnesis', 2),
  ShoulderMRT_Technology: new PageUrlModel('shoulderMRT/report/technology', 3),
  ShoulderMRT_Bones: new PageUrlModel('shoulderMRT/report/bones', 4),
  ShoulderMRT_Rotator: new PageUrlModel('shoulderMRT/report/rotator', 5),
  ShoulderMRT_LabrumAndRibbons: new PageUrlModel('shoulderMRT/report/labrum-and-ribbons', 6),
  ShoulderMRT_JointAndBursae: new PageUrlModel('shoulderMRT/report/joint', 7),
  ShoulderMRT_SoftParts: new PageUrlModel('shoulderMRT/report/soft-parts', 8),
  ShoulderMRT_Summary: new PageUrlModel('shoulderMRT/report/summary', 9),
  Core_ReportResults: new PageUrlModel('shoulderMRT/report/text-report', 10)
};

export const kneeMRTRoutes: IDictionary<PageUrlModel> = {
  // KneeMRT module
  KneeMRT_Localization: new PageUrlModel('kneeMRT/report/localization', 1),
  KneeMRT_Anamnesis: new PageUrlModel('kneeMRT/report/anamnesis', 2),
  KneeMRT_Technology: new PageUrlModel('kneeMRT/report/technology', 3),
  KneeMRT_Bones: new PageUrlModel('kneeMRT/report/bones', 4),
  KneeMRT_Ribbons: new PageUrlModel('kneeMRT/report/ribbons', 5),
  KneeMRT_OsteoInterface: new PageUrlModel('kneeMRT/report/osteochondral-interface', 6),
  KneeMRT_Patella: new PageUrlModel('kneeMRT/report/patella', 7),
  KneeMRT_SoftParts: new PageUrlModel('kneeMRT/report/soft-parts', 8),
  KneeMRT_Summary: new PageUrlModel('kneeMRT/report/summary', 9),
  Core_ReportResults: new PageUrlModel('kneeMRT/report/text-report', 10)
};

export const spineMRTRoutes: IDictionary<PageUrlModel> = {
  // SpineMRT module
  SpineMRT_Localization: new PageUrlModel('spineMRT/report/localization', 1),
  SpineMRT_Anamnesis: new PageUrlModel('spineMRT/report/anamnesis', 2),
  SpineMRT_Technology: new PageUrlModel('spineMRT/report/technology', 3),
  SpineMRT_Configuration: new PageUrlModel('spineMRT/report/configuration', 4),
  SpineMRT_Disc: new PageUrlModel('spineMRT/report/disc', 5),
  SpineMRT_Bones: new PageUrlModel('spineMRT/report/bones', 6),
  SpineMRT_SpinalCanal: new PageUrlModel('spineMRT/report/myelon', 7),
  SpineMRT_SoftTissues: new PageUrlModel('spineMRT/report/soft-tissues', 8),
  SpineMRT_SacroiliacJoint: new PageUrlModel('spineMRT/report/sacroiliac-joint', 9),
  SpineMRT_Summary: new PageUrlModel('spineMRT/report/summary', 10),
  Core_ReportResults: new PageUrlModel('spineMRT/report/text-report', 11)
};

export const cardioMRTRoutes: IDictionary<PageUrlModel> = {
  // CardioMRT module
  CardioMRT_AreaOfExamination: new PageUrlModel('cardioMRT/report/area-of-examination', 1),
  CardioMRT_Anamnesis: new PageUrlModel('cardioMRT/report/anamnesis', 2),
  CardioMRT_Technology: new PageUrlModel('cardioMRT/report/technology', 3),
  CardioMRT_Flaps: new PageUrlModel('cardioMRT/report/flaps', 4),
  CardioMRT_FindingsVentricles: new PageUrlModel('cardioMRT/report/findings-ventricles', 5),
  CardioMRT_LeftVentricle: new PageUrlModel('cardioMRT/report/left-ventricle', 6),
  CardioMRT_RightVentricle: new PageUrlModel('cardioMRT/report/right-ventricle', 7),
  CardioMRT_SpatialRequirement: new PageUrlModel('cardioMRT/report/spatial-requirement', 8),
  CardioMRT_PericardiumVessels: new PageUrlModel('cardioMRT/report/pericardium-vessels', 9),
  CardioMRT_Summary: new PageUrlModel('cardioMRT/report/summary', 10),
  Core_ReportResults: new PageUrlModel('cardioMRT/report/text-report', 11)
};

export const thoraxCTRoutes: IDictionary<PageUrlModel> = {
  // ThoraxCT module
  ThoraxCT_StudyArea: new PageUrlModel('thoraxCT/report/study-area', 1),
  ThoraxCT_Anamnesis: new PageUrlModel('thoraxCT/report/anamnesis', 2),
  ThoraxCT_Technology: new PageUrlModel('thoraxCT/report/technology', 3),
  ThoraxCT_Mediastinum: new PageUrlModel('thoraxCT/report/mediastinum', 4),
  ThoraxCT_LungParenchyma: new PageUrlModel('thoraxCT/report/lung-parenchyma', 5),
  ThoraxCT_LungInterstitium: new PageUrlModel('thoraxCT/report/lung-interstitium', 6),
  ThoraxCT_SoftParts: new PageUrlModel('thoraxCT/report/soft-parts', 7),
  ThoraxCT_Bones: new PageUrlModel('thoraxCT/report/bones', 8),
  ThoraxCT_Summary: new PageUrlModel('thoraxCT/report/summary', 9),
  Core_ReportResults: new PageUrlModel('thoraxCT/report/text-report', 10)
};

export const hipMRTRoutes: IDictionary<PageUrlModel> = {
  // HipMRT module
  HipMRT_Localization: new PageUrlModel('hipMRT/report/localization', 1),
  HipMRT_Anamnesis: new PageUrlModel('hipMRT/report/anamnesis', 2),
  HipMRT_Technology: new PageUrlModel('hipMRT/report/technology', 3),
  HipMRT_Bones: new PageUrlModel('hipMRT/report/bones', 4),
  HipMRT_CartilageAndLabrum: new PageUrlModel('hipMRT/report/cartilage-and-labrum', 5),
  HipMRT_CapsuleAndLigaments: new PageUrlModel('hipMRT/report/capsule-and-ligaments', 6),
  HipMRT_MusclesAndTendons: new PageUrlModel('hipMRT/report/muscles-and-tendons', 7),
  HipMRT_SoftTissue: new PageUrlModel('hipMRT/report/soft-tissue', 8),
  HipMRT_Summary: new PageUrlModel('hipMRT/report/summary', 9),
  Core_ReportResults: new PageUrlModel('hipMRT/report/text-report', 10)
};

export const angiographyMRTRoutes: IDictionary<PageUrlModel> = {
  // AngiographyMRT module
  AngiographyMRT_Localization: new PageUrlModel('angiographyMRT/report/localization', 1),
  AngiographyMRT_Anamnesis: new PageUrlModel('angiographyMRT/report/anamnesis', 2),
  AngiographyMRT_Technology: new PageUrlModel('angiographyMRT/report/technology', 3),
  AngiographyMRT_SupraaorticVessels: new PageUrlModel('angiographyMRT/report/supraaortic-vessels', 4),
  AngiographyMRT_UpperArteries: new PageUrlModel('angiographyMRT/report/upper-arteries', 5),
  AngiographyMRT_Aorta: new PageUrlModel('angiographyMRT/report/aorta', 6),
  AngiographyMRT_Abdomen: new PageUrlModel('angiographyMRT/report/abdomen', 7),
  AngiographyMRT_PelvisLegArteries: new PageUrlModel('angiographyMRT/report/pelvis-leg-arteries', 8),
  AngiographyMRT_Summary: new PageUrlModel('angiographyMRT/report/summary', 9),
  Core_ReportResults: new PageUrlModel('angiographyMRT/report/text-report', 10)
};

export const handMRTRoutes: IDictionary<PageUrlModel> = {
  // HandMRTR module
  HandMRT_Localization: new PageUrlModel('handMRT/report/localization', 1),
  HandMRT_Anamnesis: new PageUrlModel('handMRT/report/anamnesis', 2),
  HandMRT_Technology: new PageUrlModel('handMRT/report/technology', 3),
  HandMRT_Bones: new PageUrlModel('handMRT/report/bones', 4),
  HandMRT_CapsuleAndRibbons: new PageUrlModel('handMRT/report/capsule-and-ribbons', 5),
  HandMRT_Tendinopathy: new PageUrlModel('handMRT/report/tendinopathy', 6),
  HandMRT_NerveCompression: new PageUrlModel('handMRT/report/nerve-compression', 7),
  HandMRT_SoftTissue: new PageUrlModel('handMRT/report/soft-tissue', 8),
  HandMRT_Evaluation: new PageUrlModel('handMRT/report/evaluation', 9),
  Core_ReportResults: new PageUrlModel('handMRT/report/text-report', 10)
};

export const spineCTRoutes: IDictionary<PageUrlModel> = {
  // spineCT module
  SpineCT_Localization: new PageUrlModel('spineCT/report/localization', 1),
  SpineCT_Anamnesis: new PageUrlModel('spineCT/report/anamnesis', 2),
  SpineCT_Technology: new PageUrlModel('spineCT/report/technology', 3),
  SpineCT_Configuration: new PageUrlModel('spineCT/report/configuration', 4),
  SpineCT_Disc: new PageUrlModel('spineCT/report/disc', 5),
  SpineCT_Bones: new PageUrlModel('spineCT/report/bones', 6),
  SpineCT_MyelonSpinalCanal: new PageUrlModel('spineCT/report/myelon', 7),
  SpineCT_SoftTissues: new PageUrlModel('spineCT/report/soft-tissues', 8),
  SpineCT_SacroiliacJoint: new PageUrlModel('spineCT/report/sacroiliac-joint', 9),
  SpineCT_Summary: new PageUrlModel('spineCT/report/summary', 10),
  Core_ReportResults: new PageUrlModel('spineCT/report/text-report', 11)
};

export const elbowMRTRoutes: IDictionary<PageUrlModel> = {
  // ElbowMRT module
  ElbowMRT_Localization: new PageUrlModel('elbowMRT/report/localization', 1),
  ElbowMRT_Anamnesis: new PageUrlModel('elbowMRT/report/anamnesis', 2),
  ElbowMRT_Technology: new PageUrlModel('elbowMRT/report/technology', 3),
  ElbowMRT_Bones: new PageUrlModel('elbowMRT/report/bones', 4),
  ElbowMRT_Cartilage: new PageUrlModel('elbowMRT/report/cartilage-ligaments-capsule', 5),
  ElbowMRT_TendonsAndMuscles: new PageUrlModel('elbowMRT/report/tendons-and-muscles', 6),
  ElbowMRT_SoftTissue: new PageUrlModel('elbowMRT/report/soft-tissue', 7),
  ElbowMRT_Summary: new PageUrlModel('elbowMRT/report/summary', 8),
  Core_ReportResults: new PageUrlModel('elbowMRT/report/text-report', 9)
};

export const pelvisMRTRoutes: IDictionary<PageUrlModel> = {
  // PelvisMRT module
  PelvisMRT_Localization: new PageUrlModel('pelvisMRT/report/localization', 1),
  PelvisMRT_Anamnesis: new PageUrlModel('pelvisMRT/report/anamnesis', 2),
  PelvisMRT_Technology: new PageUrlModel('pelvisMRT/report/technology', 3),
  PelvisMRT_Prostata: new PageUrlModel('pelvisMRT/report/prostate', 4),
  PelvisMRT_MaleGender: new PageUrlModel('pelvisMRT/report/male-sex', 5),
  PelvisMRT_FemaleGender: new PageUrlModel('pelvisMRT/report/female-sex', 6),
  PelvisMRT_PelvicFloor: new PageUrlModel('pelvisMRT/report/pelvic-floor', 7),
  PelvisMRT_Rectum: new PageUrlModel('pelvisMRT/report/rectum', 8),
  PelvisMRT_Bladder: new PageUrlModel('pelvisMRT/report/bladder', 9),
  PelvisMRT_Bones: new PageUrlModel('pelvisMRT/report/bones', 10),
  PelvisMRT_LymphNodes: new PageUrlModel('pelvisMRT/report/lymph-nodes', 11),
  PelvisMRT_Summary: new PageUrlModel('pelvisMRT/report/summary', 12),
  Core_ReportResults: new PageUrlModel('pelvisMRT/report/text-report', 13)
};

export const feetMRTRoutes: IDictionary<PageUrlModel> = {
  // FeetMRT module
  FeetMRT_Localization: new PageUrlModel('feetMRT/report/localization', 1),
  FeetMRT_Anamnesis: new PageUrlModel('feetMRT/report/anamnesis', 2),
  FeetMRT_Technology: new PageUrlModel('feetMRT/report/technology', 3),
  FeetMRT_Bones: new PageUrlModel('feetMRT/report/bones', 4),
  FeetMRT_LigamentsAndTendons: new PageUrlModel('feetMRT/report/ligaments-and-tendons', 5),
  FeetMRT_SoftTissue: new PageUrlModel('feetMRT/report/soft-tissue', 6),
  FeetMRT_Summary: new PageUrlModel('feetMRT/report/summary', 7),
  Core_ReportResults: new PageUrlModel('feetMRT/report/text-report', 8)
};

export const mammaMXRoutes: IDictionary<PageUrlModel> = {
  // MammaMX module
  MammaMX_PatientIndication: new PageUrlModel('mammaMX/report/patient-indication', 1),
  MammaMX_MedicalHistory: new PageUrlModel('mammaMX/report/medical-history', 2),
  MammaMX_Technology: new PageUrlModel('mammaMX/report/technology', 3),
  MammaMX_MammographyParenchymaAnatomy: new PageUrlModel('mammaMX/report/mammography-parenchyma-anatomy', 4),
  MammaMX_MammographyFinding: new PageUrlModel('mammaMX/report/mammography-finding', 5),
  MammaMX_UltrasoundMammaryGlands: new PageUrlModel('mammaMX/report/ultrasound-mammary-glands', 6),
  MammaMX_UltrasoundFinding: new PageUrlModel('mammaMX/report/ultrasound-finding', 7),
  MammaMX_LymphNodes: new PageUrlModel('mammaMX/report/lymph-nodes', 8),
  MammaMX_Summary: new PageUrlModel('mammaMX/report/summary', 9),
  Core_ReportResults: new PageUrlModel('mammaMX/report/text-report', 10)
};

export const abdomenMRTRoutes: IDictionary<PageUrlModel> = {
  // AbdomenMRT module
  AbdomenMRT_ExaminationRegion: new PageUrlModel('abdomenMRT/report/examination-region', 1),
  AbdomenMRT_Anamnesis: new PageUrlModel('abdomenMRT/report/anamnesis', 2),
  AbdomenMRT_Technology: new PageUrlModel('abdomenMRT/report/technology', 3),
  AbdomenMRT_Liver: new PageUrlModel('abdomenMRT/report/liver', 4),
  AbdomenMRT_Spleen: new PageUrlModel('abdomenMRT/report/spleen', 5),
  AbdomenMRT_Pancreas: new PageUrlModel('abdomenMRT/report/pancreas', 6),
  AbdomenMRT_Kidneys: new PageUrlModel('abdomenMRT/report/kidneys', 7),
  AbdomenMRT_AdrenalGlands: new PageUrlModel('abdomenMRT/report/adrenal-glands', 8),
  AbdomenMRT_GastrointestinalTract: new PageUrlModel('abdomenMRT/report/gastrointestinal-tract', 9),
  AbdomenMRT_PeritonealCavity: new PageUrlModel('abdomenMRT/report/peritoneal-cavity', 10),
  AbdomenMRT_LymphaticSystem: new PageUrlModel('abdomenMRT/report/lymphatic-system', 11),
  AbdomenMRT_Summary: new PageUrlModel('abdomenMRT/report/summary', 12),
  Core_ReportResults: new PageUrlModel('abdomenMRT/report/text-report', 13)
};

export const thoraxMRTRoutes: IDictionary<PageUrlModel> = {
  // thoraxMRT module
  ThoraxMRT_StudyArea: new PageUrlModel('thoraxMRT/report/study-area', 1),
  ThoraxMRT_Anamnesis: new PageUrlModel('thoraxMRT/report/anamnesis', 2),
  ThoraxMRT_Technology: new PageUrlModel('thoraxMRT/report/technology', 3),
  ThoraxMRT_Mediastinum: new PageUrlModel('thoraxMRT/report/mediastinum', 4),
  ThoraxMRT_LungParenchyma: new PageUrlModel('thoraxMRT/report/lung-parenchyma', 5),
  ThoraxMRT_Pleura: new PageUrlModel('thoraxMRT/report/pleura', 6),
  ThoraxMRT_Bones: new PageUrlModel('thoraxMRT/report/bones', 7),
  ThoraxMRT_Summary: new PageUrlModel('thoraxMRT/report/summary', 8),
  Core_ReportResults: new PageUrlModel('thoraxMRT/report/text-report', 9)
};

export const neckMRTRoutes: IDictionary<PageUrlModel> = {
  // neckMRT module
  NeckMRT_Examination: new PageUrlModel('neckMRT/report/examination', 1),
  NeckMRT_Indication: new PageUrlModel('neckMRT/report/indication', 2),
  NeckMRT_Technology: new PageUrlModel('neckMRT/report/technology', 3),
  NeckMRT_Pharynx: new PageUrlModel('neckMRT/report/pharynx', 4),
  NeckMRT_Larynx: new PageUrlModel('neckMRT/report/larynx', 5),
  NeckMRT_SoftTissues: new PageUrlModel('neckMRT/report/soft-tissues', 6),
  NeckMRT_Thyroid: new PageUrlModel('neckMRT/report/thyroid', 7),
  NeckMRT_LymphNodes: new PageUrlModel('neckMRT/report/lymph-nodes', 8),
  NeckMRT_Vessels: new PageUrlModel('neckMRT/report/vessels', 9),
  NeckMRT_Bones: new PageUrlModel('neckMRT/report/bones', 10),
  NeckMRT_Summary: new PageUrlModel('neckMRT/report/summary', 11),
  Core_ReportResults: new PageUrlModel('neckMRT/report/text-report', 12)
};

export const headMRTRoutes: IDictionary<PageUrlModel> = {
  // HeadMRT module
  HeadMRT_Examination: new PageUrlModel('headMRT/report/examination', 1),
  HeadMRT_Anamnesis: new PageUrlModel('headMRT/report/anamnesis', 2),
  HeadMRT_Technology: new PageUrlModel('headMRT/report/technology', 3),
  HeadMRT_Vessels: new PageUrlModel('headMRT/report/vessels', 4),
  HeadMRT_Meninges: new PageUrlModel('headMRT/report/meninges', 5),
  HeadMRT_Cortex: new PageUrlModel('headMRT/report/cortex', 6),
  HeadMRT_BasalNuclei: new PageUrlModel('headMRT/report/basal-nuclei', 7),
  HeadMRT_BrainstemCranialNerves: new PageUrlModel('headMRT/report/brainstem-cranial-nerves', 8),
  HeadMRT_CerebrospinalFluidSpace: new PageUrlModel('headMRT/report/cerebrospinal-fluid', 9),
  HeadMRT_SellarRegion: new PageUrlModel('headMRT/report/sellar-region', 10),
  HeadMRT_FacialSkull: new PageUrlModel('headMRT/report/facial-skull', 11),
  HeadMRT_Summary: new PageUrlModel('headMRT/report/summary', 12),
  Core_ReportResults: new PageUrlModel('headMRT/report/text-report', 13)
};

export const angiographyCTRoutes: IDictionary<PageUrlModel> = {
  // AngioCT module
  AngiographyCT_Localization: new PageUrlModel('angiographyCT/report/localization', 1),
  AngiographyCT_Anamnesis: new PageUrlModel('angiographyCT/report/anamnesis', 2),
  AngiographyCT_Technology: new PageUrlModel('angiographyCT/report/technology', 3),
  AngiographyCT_CoronaryArteries: new PageUrlModel('angiographyCT/report/coronary-arteries', 4),
  AngiographyCT_SupraaorticVessels: new PageUrlModel('angiographyCT/report/supraaortic-vessels', 5),
  AngiographyCT_UpperArteries: new PageUrlModel('angiographyCT/report/upper-arteries', 6),
  AngiographyCT_Aorta: new PageUrlModel('angiographyCT/report/aorta', 7),
  AngiographyCT_Abdomen: new PageUrlModel('angiographyCT/report/abdomen', 8),
  AngiographyCT_PelvisLegArteries: new PageUrlModel('angiographyCT/report/pelvis-leg-arteries', 9),
  AngiographyCT_SoftTissue: new PageUrlModel('angiographyCT/report/soft-tisue', 10),
  AngiographyCT_Summary: new PageUrlModel('angiographyCT/report/summary', 11),
  Core_ReportResults: new PageUrlModel('angiographyCT/report/text-report', 12)
};

export const headCTRoutes: IDictionary<PageUrlModel> = {
  // HeadCT module
  HeadCT_Examination: new PageUrlModel('headCT/report/examination', 1),
  HeadCT_Anamnesis: new PageUrlModel('headCT/report/anamnesis', 2),
  HeadCT_Technology: new PageUrlModel('headCT/report/technology', 3),
  HeadCT_Vessels: new PageUrlModel('headCT/report/vessels', 4),
  HeadCT_Meninges: new PageUrlModel('headCT/report/meninges', 5),
  HeadCT_Cortex: new PageUrlModel('headCT/report/cortex', 6),
  HeadCT_BasalNuclei: new PageUrlModel('headCT/report/basal-nuclei', 7),
  HeadCT_BrainstemCranialNerves: new PageUrlModel('headCT/report/brainstem-cranial-nerves', 8),
  HeadCT_CerebrospinalFluidSpace: new PageUrlModel('headCT/report/cerebrospinal-fluid-space', 9),
  HeadCT_SellarRegion: new PageUrlModel('headCT/report/sellar-region', 10),
  HeadCT_FacialSkull: new PageUrlModel('headCT/report/facial-skull', 11),
  HeadCT_Summary: new PageUrlModel('headCT/report/summary', 12),
  Core_ReportResults: new PageUrlModel('headCT/report/text-report', 13)
};

export const abdomenCTRoutes: IDictionary<PageUrlModel> = {
  // AbdomenCT module
  AbdomenCT_AreaOfInvestigation: new PageUrlModel('abdomenCT/report/area-of-investigation', 1),
  AbdomenCT_MedicalHistory: new PageUrlModel('abdomenCT/report/medical-history', 2),
  AbdomenCT_Technology: new PageUrlModel('abdomenCT/report/technology', 3),
  Core_ReportResults: new PageUrlModel('abdomenCT/report/text-report', 4)
};

export const moduleRoutesDictionaries: IDictionary<IDictionary<PageUrlModel>> = {
  MammaMRT: mammaMRTRoutes,
  ShoulderMRT: shoulderMRTRoutes,
  KneeMRT: kneeMRTRoutes,
  SpineMRT: spineMRTRoutes,
  CardioMRT: cardioMRTRoutes,
  ThoraxCT: thoraxCTRoutes,
  HipMRT: hipMRTRoutes,
  AngiographyMRT: angiographyMRTRoutes,
  HandMRT: handMRTRoutes,
  SpineCT: spineCTRoutes,
  ElbowMRT: elbowMRTRoutes,
  PelvisMRT: pelvisMRTRoutes,
  FeetMRT: feetMRTRoutes,
  MammaMX: mammaMXRoutes,
  AbdomenMRT: abdomenMRTRoutes,
  ThoraxMRT: thoraxMRTRoutes,
  NeckMRT: neckMRTRoutes,
  HeadMRT: headMRTRoutes,
  AngiographyCT: angiographyCTRoutes,
  HeadCT: headCTRoutes,
  AbdomenCT: abdomenCTRoutes
};
