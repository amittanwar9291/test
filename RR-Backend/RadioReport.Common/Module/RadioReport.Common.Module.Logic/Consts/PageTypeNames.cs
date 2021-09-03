using System.Collections.Generic;

namespace RadioReport.Common.Module.Logic.Consts
{
    /// <summary>
    /// Consts contain all radio report page type names
    /// </summary>
    public static class PageTypeNames
    {
        public static readonly string MammaMrtPatientIndication = "MammaMRT_PatientIndication";
        public static readonly string MammaMrtAnamnesis = "MammaMRT_Anamnesis";
        public static readonly string MammaMrtAnatomy = "MammaMRT_Anatomy";
        public static readonly string MammaMrtAnatomyEnhancement = "MammaMRT_AnatomyEnhancement";
        public static readonly string MammaMrtDiagnosis = "MammaMRT_Diagnosis";
        public static readonly string MammaMrtLymphs = "MammaMRT_Lymphs";
        public static readonly string MammaMrtBones = "MammaMRT_Bones";
        public static readonly string MammaMrtRating = "MammaMRT_Rating";
        public static readonly string MammaMrtTechnology = "MammaMRT_Technology";

        public static readonly string ShoulderMrtLocalization = "ShoulderMRT_Localization";
        public static readonly string ShoulderMrtAnamnesis = "ShoulderMRT_Anamnesis";
        public static readonly string ShoulderMrtTechnology = "ShoulderMRT_Technology";
        public static readonly string ShoulderMrtBones = "ShoulderMRT_Bones";
        public static readonly string ShoulderMrtRotator = "ShoulderMRT_Rotator";
        public static readonly string ShoulderMrtLabrumAndRibbons = "ShoulderMRT_LabrumAndRibbons";
        public static readonly string ShoulderMrtJointAndBursae = "ShoulderMRT_JointAndBursae";
        public static readonly string ShoulderMrtSoftParts = "ShoulderMRT_SoftParts";
        public static readonly string ShoulderMrtSummary = "ShoulderMRT_Summary";

        public static readonly string KneeMrtLocalization = "KneeMRT_Localization";
        public static readonly string KneeMrtAnamnesis = "KneeMRT_Anamnesis";
        public static readonly string KneeMrtTechnology = "KneeMRT_Technology";
        public static readonly string KneeMrtBones = "KneeMRT_Bones";
        public static readonly string KneeMrtRibbons = "KneeMRT_Ribbons";
        public static readonly string KneeMrtOsteoInterface = "KneeMRT_OsteoInterface";
        public static readonly string KneeMrtPatella = "KneeMRT_Patella";
        public static readonly string KneeMrtSoftParts = "KneeMRT_SoftParts";
        public static readonly string KneeMrtSummary = "KneeMRT_Summary";

        public static readonly string SpineMrtLocalization = "SpineMRT_Localization";
        public static readonly string SpineMrtAnamnesis = "SpineMRT_Anamnesis";
        public static readonly string SpineMrtTechnology = "SpineMRT_Technology";
        public static readonly string SpineMrtConfiguration = "SpineMRT_Configuration";
        public static readonly string SpineMrtDisc = "SpineMRT_Disc";
        public static readonly string SpineMrtBones = "SpineMRT_Bones";
        public static readonly string SpineMrtSpinalCanal = "SpineMRT_SpinalCanal";
        public static readonly string SpineMrtSoftTissues = "SpineMRT_SoftTissues";
        public static readonly string SpineMrtSacroiliacJoint = "SpineMRT_SacroiliacJoint";
        public static readonly string SpineMrtSummary = "SpineMRT_Summary";

        public static readonly string CardioMrtAreaOfExamination = "CardioMRT_AreaOfExamination";
        public static readonly string CardioMrtAnamnesis = "CardioMRT_Anamnesis";
        public static readonly string CardioMrtTechnology = "CardioMRT_Technology";
        public static readonly string CardioMrtFlaps = "CardioMRT_Flaps";
        public static readonly string CardioMrtFindingsVentricles = "CardioMRT_FindingsVentricles";
        public static readonly string CardioMrtLeftVentricle = "CardioMRT_LeftVentricle";
        public static readonly string CardioMrtRightVentricle = "CardioMRT_RightVentricle";
        public static readonly string CardioMrtSpatialRequirement = "CardioMRT_SpatialRequirement";
        public static readonly string CardioMrtPericardiumVessels = "CardioMRT_PericardiumVessels";
        public static readonly string CardioMrtSummary = "CardioMRT_Summary";

        public static readonly string ThoraxCtStudyArea = "ThoraxCT_StudyArea";
        public static readonly string ThoraxCtAnamnesis = "ThoraxCT_Anamnesis";
        public static readonly string ThoraxCtTechnology = "ThoraxCT_Technology";
        public static readonly string ThoraxCtMediastinum = "ThoraxCT_Mediastinum";
        public static readonly string ThoraxCtLungParenchyma = "ThoraxCT_LungParenchyma";
        public static readonly string ThoraxCtLungInterstitium = "ThoraxCT_LungInterstitium";
        public static readonly string ThoraxCtSoftParts = "ThoraxCT_SoftParts";
        public static readonly string ThoraxCtBones = "ThoraxCT_Bones";
        public static readonly string ThoraxCtSummary = "ThoraxCT_Summary";

        public static readonly string HipMrtLocalization = "HipMRT_Localization";
        public static readonly string HipMrtAnamnesis = "HipMRT_Anamnesis";
        public static readonly string HipMrtTechnology = "HipMRT_Technology";
        public static readonly string HipMrtBones = "HipMRT_Bones";
        public static readonly string HipMrtCartilageAndLabrum = "HipMRT_CartilageAndLabrum";
        public static readonly string HipMrtCapsuleAndLigaments = "HipMRT_CapsuleAndLigaments";
        public static readonly string HipMrtMusclesAndTendons = "HipMRT_MusclesAndTendons";
        public static readonly string HipMrtSoftTissue = "HipMRT_SoftTissue"; //TODO: validate with other if unify name similar as in other services.
        public static readonly string HipMrtSummary = "HipMRT_Summary";

        public static readonly string SpineCtLocalization = "SpineCT_Localization";
        public static readonly string SpineCtAnamnesis = "SpineCT_Anamnesis";
        public static readonly string SpineCtTechnology = "SpineCT_Technology";
        public static readonly string SpineCtConfiguration = "SpineCT_Configuration";
        public static readonly string SpineCtDisc = "SpineCT_Disc";
        public static readonly string SpineCtBones = "SpineCT_Bones";
        public static readonly string SpineCtMyelonSpinalCanal = "SpineCT_MyelonSpinalCanal";
        public static readonly string SpineCtSoftTissues = "SpineCT_SoftTissues";
        public static readonly string SpineCtSacroiliacJoint = "SpineCT_SacroiliacJoint";
        public static readonly string SpineCtSummary = "SpineCT_Summary";

        public static readonly string AngiographyMrtLocalization = "AngiographyMRT_Localization";
        public static readonly string AngiographyMrtAnamnesis = "AngiographyMRT_Anamnesis";
        public static readonly string AngiographyMrtTechnology = "AngiographyMRT_Technology";
        public static readonly string AngiographyMrtSupraaorticVessels = "AngiographyMRT_SupraaorticVessels";
        public static readonly string AngiographyMrtUpperArteries = "AngiographyMRT_UpperArteries";
        public static readonly string AngiographyMrtAorta = "AngiographyMRT_Aorta";
        public static readonly string AngiographyMrtAbdomen = "AngiographyMRT_Abdomen";
        public static readonly string AngiographyMrtPelvisLegArteries = "AngiographyMRT_PelvisLegArteries";
        public static readonly string AngiographyMrtSummary = "AngiographyMRT_Summary";

        public static readonly string HandMrtLocalization = "HandMRT_Localization";
        public static readonly string HandMrtAnamnesis = "HandMRT_Anamnesis";
        public static readonly string HandMrtTechnology = "HandMRT_Technology";
        public static readonly string HandMrtBones = "HandMRT_Bones";
        public static readonly string HandMrtCapsuleAndRibbons = "HandMRT_CapsuleAndRibbons";
        public static readonly string HandMrtTendinopathy = "HandMRT_Tendinopathy";
        public static readonly string HandMrtNerveCompression = "HandMRT_NerveCompression";
        public static readonly string HandMrtSoftTissue = "HandMRT_SoftTissue";
        public static readonly string HandMrtEvaluation = "HandMRT_Evaluation";

        public static readonly string ElbowMrtLocalization = "ElbowMRT_Localization";
        public static readonly string ElbowMrtAnamnesis = "ElbowMRT_Anamnesis";
        public static readonly string ElbowMrtTechnology = "ElbowMRT_Technology";
        public static readonly string ElbowMrtBones = "ElbowMRT_Bones";
        public static readonly string ElbowMrtCartilage = "ElbowMRT_Cartilage";
        public static readonly string ElbowMrtTendonsAndMuscles = "ElbowMRT_TendonsAndMuscles";
        public static readonly string ElbowMrtSoftTissue = "ElbowMRT_SoftTissue";
        public static readonly string ElbowMrtSummary = "ElbowMRT_Summary";

        public static readonly string PelvisMrtLocalization = "PelvisMRT_Localization";
        public static readonly string PelvisMrtAnamnesis = "PelvisMRT_Anamnesis";
        public static readonly string PelvisMrtTechnology = "PelvisMRT_Technology";
        public static readonly string PelvisMrtProstata = "PelvisMRT_Prostata";
        public static readonly string PelvisMrtMaleGender = "PelvisMRT_MaleGender";
        public static readonly string PelvisMrtFemaleGender = "PelvisMRT_FemaleGender";
        public static readonly string PelvisMrtPelvicFloor = "PelvisMRT_PelvicFloor";
        public static readonly string PelvisMrtRectum = "PelvisMRT_Rectum";
        public static readonly string PelvisMrtBladder = "PelvisMRT_Bladder";
        public static readonly string PelvisMrtBones = "PelvisMRT_Bones";
        public static readonly string PelvisMrtLymphNodes = "PelvisMRT_LymphNodes";
        public static readonly string PelvisMrtSummary = "PelvisMRT_Summary";

        public static readonly string FeetMrtLocalization = "FeetMRT_Localization";
        public static readonly string FeetMrtAnamnesis = "FeetMRT_Anamnesis";
        public static readonly string FeetMrtTechnology = "FeetMRT_Technology";
        public static readonly string FeetMrtBones = "FeetMRT_Bones";
        public static readonly string FeetMrtLigamentsAndTendons = "FeetMRT_LigamentsAndTendons";
        public static readonly string FeetMrtSoftTissue = "FeetMRT_SoftTissue";
        public static readonly string FeetMrtSummary = "FeetMRT_Summary";

        public static readonly string MammaMxPatientIndication = "MammaMX_PatientIndication";
        public static readonly string MammaMxMedicalHistory = "MammaMX_MedicalHistory";
        public static readonly string MammaMxTechnology = "MammaMX_Technology";
        public static readonly string MammaMxMammographyParenchymaAnatomy = "MammaMX_MammographyParenchymaAnatomy";
        public static readonly string MammaMxMammographyFinding = "MammaMX_MammographyFinding";
        public static readonly string MammaMxUltrasoundMammaryGlands = "MammaMX_UltrasoundMammaryGlands";
        public static readonly string MammaMxUltrasoundFinding = "MammaMX_UltrasoundFinding";
        public static readonly string MammaMxLymphNodes = "MammaMX_LymphNodes";
        public static readonly string MammaMxSummary = "MammaMX_Summary";

        public static readonly string AbdomenMrtExaminationRegion = "AbdomenMRT_ExaminationRegion";
        public static readonly string AbdomenMrtAnamnesis = "AbdomenMRT_Anamnesis";
        public static readonly string AbdomenMrtTechnology = "AbdomenMRT_Technology";
        public static readonly string AbdomenMrtLiver = "AbdomenMRT_Liver";
        public static readonly string AbdomenMrtSpleen = "AbdomenMRT_Spleen";
        public static readonly string AbdomenMrtPancreas = "AbdomenMRT_Pancreas";
        public static readonly string AbdomenMrtKidneys = "AbdomenMRT_Kidneys";
        public static readonly string AbdomenMrtAdrenalGlands = "AbdomenMRT_AdrenalGlands";
        public static readonly string AbdomenMrtGastrointestinalTract = "AbdomenMRT_GastrointestinalTract";
        public static readonly string AbdomenMrtPeritonealCavity = "AbdomenMRT_PeritonealCavity";
        public static readonly string AbdomenMrtLymphaticSystem = "AbdomenMRT_LymphaticSystem";
        public static readonly string AbdomenMrtSummary = "AbdomenMRT_Summary";

        public static readonly string NeckMrtExamination = "NeckMRT_Examination";
        public static readonly string NeckMrtIndication = "NeckMRT_Indication";
        public static readonly string NeckMrtTechnology = "NeckMRT_Technology";
        public static readonly string NeckMrtPharynx = "NeckMRT_Pharynx";
        public static readonly string NeckMrtLarynx = "NeckMRT_Larynx";
        public static readonly string NeckMrtSoftTissues = "NeckMRT_SoftTissues";
        public static readonly string NeckMrtThyroid = "NeckMRT_Thyroid";
        public static readonly string NeckMrtLymphNodes = "NeckMRT_LymphNodes";
        public static readonly string NeckMrtBones = "NeckMRT_Bones";
        public static readonly string NeckMrtVessels = "NeckMRT_Vessels";
        public static readonly string NeckMrtSummary = "NeckMRT_Summary";

        public static readonly string ThoraxMrtStudyArea = "ThoraxMRT_StudyArea";
        public static readonly string ThoraxMrtAnamnesis = "ThoraxMRT_Anamnesis";
        public static readonly string ThoraxMrtTechnology = "ThoraxMRT_Technology";
        public static readonly string ThoraxMrtMediastinum = "ThoraxMRT_Mediastinum";
        public static readonly string ThoraxMrtLungParenchyma = "ThoraxMRT_LungParenchyma";
        public static readonly string ThoraxMrtPleura = "ThoraxMRT_Pleura";
        public static readonly string ThoraxMrtBones = "ThoraxMRT_Bones";
        public static readonly string ThoraxMrtSummary = "ThoraxMRT_Summary";

        public static readonly string HeadMrtExamination = "HeadMRT_Examination";
        public static readonly string HeadMrtAnamnesis = "HeadMRT_Anamnesis";
        public static readonly string HeadMrtTechnology = "HeadMRT_Technology";
        public static readonly string HeadMrtVessels = "HeadMRT_Vessels";
        public static readonly string HeadMrtMeninges = "HeadMRT_Meninges";
        public static readonly string HeadMrtCortex = "HeadMRT_Cortex";
        public static readonly string HeadMrtBasalNuclei = "HeadMRT_BasalNuclei";
        public static readonly string HeadMrtBrainstemCranialNerves = "HeadMRT_BrainstemCranialNerves";
        public static readonly string HeadMrtCerebrospinalFluidSpace = "HeadMRT_CerebrospinalFluidSpace";
        public static readonly string HeadMrtSellarRegion = "HeadMRT_SellarRegion";
        public static readonly string HeadMrtFacialSkull = "HeadMRT_FacialSkull";
        public static readonly string HeadMrtSummary = "HeadMRT_Summary";

        public static readonly string AngiographyCtLocalization = "AngiographyCT_Localization";
        public static readonly string AngiographyCtAnamnesis = "AngiographyCT_Anamnesis";
        public static readonly string AngiographyCtTechnology = "AngiographyCT_Technology";
        public static readonly string AngiographyCtCoronaryArteries = "AngiographyCT_CoronaryArteries";
        public static readonly string AngiographyCtSupraaorticVessels = "AngiographyCT_SupraaorticVessels";
        public static readonly string AngiographyCtUpperArteries = "AngiographyCT_UpperArteries";
        public static readonly string AngiographyCtAorta = "AngiographyCT_Aorta";
        public static readonly string AngiographyCtAbdomen = "AngiographyCT_Abdomen";
        public static readonly string AngiographyCtPelvisLegArteries = "AngiographyCT_PelvisLegArteries";
        public static readonly string AngiographyCtSoftTissue = "AngiographyCT_SoftTissue";
        public static readonly string AngiographyCtSummary = "AngiographyCT_Summary";

        public static readonly string HeadCtExamination = "HeadCT_Examination";
        public static readonly string HeadCtAnamnesis = "HeadCT_Anamnesis";
        public static readonly string HeadCtTechnology = "HeadCT_Technology";
        public static readonly string HeadCtVessels = "HeadCT_Vessels";
        public static readonly string HeadCtMeninges = "HeadCT_Meninges";
        public static readonly string HeadCtCortex = "HeadCT_Cortex";
        public static readonly string HeadCtBasalNuclei = "HeadCT_BasalNuclei";
        public static readonly string HeadCtBrainstemCranialNerves = "HeadCT_BrainstemCranialNerves";
        public static readonly string HeadCtCerebrospinalFluidSpace = "HeadCT_CerebrospinalFluidSpace";
        public static readonly string HeadCtSellarRegion = "HeadCT_SellarRegion";
        public static readonly string HeadCtFacialSkull = "HeadCT_FacialSkull";
        public static readonly string HeadCtSummary = "HeadCT_Summary";

        public static readonly string AbdomenCtAreaOfInvestigation = "AbdomenCT_AreaOfInvestigation";
        public static readonly string AbdomenCtMedicalHistory = "AbdomenCT_MedicalHistory";
        public static readonly string AbdomenCtTechnology = "AbdomenCT_Technology";
        public static readonly string AbdomenCtSpleen = "AbdomenCT_Spleen";

        public static readonly string CoreReportResults = "Core_ReportResults";

        public static readonly Dictionary<string, byte> PageNumbersDictionary = new Dictionary<string, byte>
        {
            // MammaMRT
            { MammaMrtPatientIndication, 1 },
            { MammaMrtAnamnesis, 2 },
            { MammaMrtTechnology, 3 },
            { MammaMrtAnatomy, 4 },
            { MammaMrtAnatomyEnhancement, 5 },
            { MammaMrtDiagnosis, 6 },
            { MammaMrtLymphs, 7 },
            { MammaMrtBones, 8 },
            { MammaMrtRating, 9 },

            // KneeMRT
            { KneeMrtLocalization, 1 },
            { KneeMrtAnamnesis, 2 },
            { KneeMrtTechnology, 3 },
            { KneeMrtBones, 4 },
            { KneeMrtRibbons, 5 },
            { KneeMrtOsteoInterface, 6 },
            { KneeMrtPatella, 7 },
            { KneeMrtSoftParts, 8 },
            { KneeMrtSummary, 9 },

            // ShoulderMRT
            { ShoulderMrtLocalization, 1 },
            { ShoulderMrtAnamnesis, 2 },
            { ShoulderMrtTechnology, 3 },
            { ShoulderMrtBones, 4 },
            { ShoulderMrtRotator, 5 },
            { ShoulderMrtLabrumAndRibbons, 6 },
            { ShoulderMrtJointAndBursae, 7 },
            { ShoulderMrtSoftParts, 8 },
            { ShoulderMrtSummary, 9 },

            // AngiographyMRT
            { AngiographyMrtLocalization, 1 },
            { AngiographyMrtAnamnesis, 2 },
            { AngiographyMrtTechnology, 3 },
            { AngiographyMrtSupraaorticVessels, 4 },
            { AngiographyMrtUpperArteries, 5 },
            { AngiographyMrtAorta, 6 },
            { AngiographyMrtAbdomen, 7 },
            { AngiographyMrtPelvisLegArteries, 8 },
            { AngiographyMrtSummary, 9 },

            // CardioMRT
            { CardioMrtAreaOfExamination, 1 },
            { CardioMrtAnamnesis, 2 },
            { CardioMrtTechnology, 3 },
            { CardioMrtFlaps, 4 },
            { CardioMrtFindingsVentricles, 5 },
            { CardioMrtLeftVentricle, 6 },
            { CardioMrtRightVentricle, 7 },
            { CardioMrtSpatialRequirement, 8 },
            { CardioMrtPericardiumVessels, 9 },
            { CardioMrtSummary, 10 },

            // ElbowMRT
            { ElbowMrtLocalization, 1 },
            { ElbowMrtAnamnesis, 2 },
            { ElbowMrtTechnology, 3 },
            { ElbowMrtBones, 4 },
            { ElbowMrtCartilage, 5 },
            { ElbowMrtTendonsAndMuscles, 6 },
            { ElbowMrtSoftTissue, 7 },
            { ElbowMrtSummary, 8 },

            // FeetMRT
            { FeetMrtLocalization, 1 },
            { FeetMrtAnamnesis, 2 },
            { FeetMrtTechnology, 3 },
            { FeetMrtBones, 4 },
            { FeetMrtLigamentsAndTendons, 5 },
            { FeetMrtSoftTissue, 6 },
            { FeetMrtSummary, 7 },

            // HandMRT
            { HandMrtLocalization, 1 },
            { HandMrtAnamnesis, 2 },
            { HandMrtTechnology, 3 },
            { HandMrtBones, 4 },
            { HandMrtCapsuleAndRibbons, 5 },
            { HandMrtTendinopathy, 6 },
            { HandMrtNerveCompression, 7 },
            { HandMrtSoftTissue, 8 },
            { HandMrtEvaluation, 9 },

            // HipMRT
            { HipMrtLocalization, 1 },
            { HipMrtAnamnesis, 2 },
            { HipMrtTechnology, 3 },
            { HipMrtBones, 4 },
            { HipMrtCartilageAndLabrum, 5 },
            { HipMrtCapsuleAndLigaments, 6 },
            { HipMrtMusclesAndTendons, 7 },
            { HipMrtSoftTissue, 8 },
            { HipMrtSummary, 9 },

            // PelvisMRT
            { PelvisMrtLocalization, 1 },
            { PelvisMrtAnamnesis, 2 },
            { PelvisMrtTechnology, 3 },
            { PelvisMrtProstata, 4 },
            { PelvisMrtMaleGender, 5 },
            { PelvisMrtFemaleGender, 6 },
            { PelvisMrtPelvicFloor, 7 },
            { PelvisMrtRectum, 8 },
            { PelvisMrtBladder, 9 },
            { PelvisMrtBones, 10 },
            { PelvisMrtLymphNodes, 11 },
            { PelvisMrtSummary, 12 },

            // SpineCT
            { SpineCtLocalization, 1 },
            { SpineCtAnamnesis, 2 },
            { SpineCtTechnology, 3 },
            { SpineCtConfiguration, 4 },
            { SpineCtDisc, 5 },
            { SpineCtBones, 6 },
            { SpineCtMyelonSpinalCanal, 7 },
            { SpineCtSoftTissues, 8 },
            { SpineCtSacroiliacJoint, 9 },
            { SpineCtSummary, 10 },

            // SpineMRT
            { SpineMrtLocalization, 1 },
            { SpineMrtAnamnesis, 2 },
            { SpineMrtTechnology, 3 },
            { SpineMrtConfiguration, 4 },
            { SpineMrtDisc, 5 },
            { SpineMrtBones, 6 },
            { SpineMrtSpinalCanal, 7 },
            { SpineMrtSoftTissues, 8 },
            { SpineMrtSacroiliacJoint, 9 },
            { SpineMrtSummary, 10 },

            // ThoraxCT
            { ThoraxCtStudyArea, 1 },
            { ThoraxCtAnamnesis, 2 },
            { ThoraxCtTechnology, 3 },
            { ThoraxCtMediastinum, 4 },
            { ThoraxCtLungParenchyma, 5 },
            { ThoraxCtLungInterstitium, 6 },
            { ThoraxCtSoftParts, 7 },
            { ThoraxCtBones, 8 },
            { ThoraxCtSummary, 9 },

            // MammaMX
            { MammaMxPatientIndication, 1 },
            { MammaMxMedicalHistory, 2 },
            { MammaMxTechnology, 3 },
            { MammaMxMammographyParenchymaAnatomy, 4 },
            { MammaMxMammographyFinding, 5 },
            { MammaMxUltrasoundMammaryGlands, 6 },
            { MammaMxUltrasoundFinding, 7 },
            { MammaMxLymphNodes, 8 },
            { MammaMxSummary, 9 },

            // AbdomenMRT
            { AbdomenMrtExaminationRegion, 1 },
            { AbdomenMrtAnamnesis, 2 },
            { AbdomenMrtTechnology, 3 },
            { AbdomenMrtLiver, 4 },
            { AbdomenMrtSpleen, 5 },
            { AbdomenMrtPancreas, 6 },
            { AbdomenMrtKidneys, 7 },
            { AbdomenMrtAdrenalGlands, 8 },
            { AbdomenMrtGastrointestinalTract, 9 },
            { AbdomenMrtPeritonealCavity, 10 },
            { AbdomenMrtLymphaticSystem, 11 },
            { AbdomenMrtSummary, 12 },

            // NeckMRT
            { NeckMrtExamination, 1 },
            { NeckMrtIndication, 2 },
            { NeckMrtTechnology, 3 },
            { NeckMrtPharynx, 4 },
            { NeckMrtLarynx, 5 },
            { NeckMrtSoftTissues, 6 },
            { NeckMrtThyroid, 7 },
            { NeckMrtLymphNodes, 8 },
            { NeckMrtVessels, 9 },
            { NeckMrtBones, 10 },
            { NeckMrtSummary, 11 },

            // ThoraxMRT
            { ThoraxMrtStudyArea, 1 },
            { ThoraxMrtAnamnesis, 2 },
            { ThoraxMrtTechnology, 3 },
            { ThoraxMrtMediastinum, 4 },
            { ThoraxMrtLungParenchyma, 5 },
            { ThoraxMrtPleura, 6 },
            { ThoraxMrtBones, 7 },
            { ThoraxMrtSummary, 8 },

             // HeadMRT
            { HeadMrtExamination, 1 },
            { HeadMrtAnamnesis, 2 },
            { HeadMrtTechnology, 3 },
            { HeadMrtVessels, 4 },
            { HeadMrtMeninges, 5 },
            { HeadMrtCortex, 6 },
            { HeadMrtBasalNuclei, 7 },
            { HeadMrtBrainstemCranialNerves, 8 },
            { HeadMrtCerebrospinalFluidSpace, 9 },
            { HeadMrtSellarRegion, 10 },
            { HeadMrtFacialSkull, 11 },
            { HeadMrtSummary, 12 },

            // AngiographyCT
            { AngiographyCtLocalization, 1 },
            { AngiographyCtAnamnesis, 2 },
            { AngiographyCtTechnology, 3 },
            { AngiographyCtCoronaryArteries, 4 },
            { AngiographyCtSupraaorticVessels, 5 },
            { AngiographyCtUpperArteries, 6 },
            { AngiographyCtAorta, 7 },
            { AngiographyCtAbdomen, 8 },
            { AngiographyCtPelvisLegArteries, 9 },
            { AngiographyCtSoftTissue, 10 },
            { AngiographyCtSummary, 11 },

            // HeadCT
            { HeadCtExamination, 1 },
            { HeadCtAnamnesis, 2 },
            { HeadCtTechnology, 3 },
            { HeadCtVessels, 4 },
            { HeadCtMeninges, 5 },
            { HeadCtCortex, 6 },
            { HeadCtBasalNuclei, 7 },
            { HeadCtBrainstemCranialNerves, 8 },
            { HeadCtCerebrospinalFluidSpace, 9 },
            { HeadCtSellarRegion, 10 },
            { HeadCtFacialSkull, 11 },
            { HeadCtSummary, 12 },
            
            //AbdomenCT
            { AbdomenCtAreaOfInvestigation, 1 },
            { AbdomenCtMedicalHistory, 2 },
            { AbdomenCtTechnology, 3 },
            { AbdomenCtSpleen, 5 }
        };
    }
}